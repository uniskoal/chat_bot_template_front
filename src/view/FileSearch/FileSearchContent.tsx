import FileSearchViewMain from "@/components/chatting/mainContent/FileSearchView";
import { decideWidthAndHeight, flexAlignCenter, flexColumnDirection, flexJustifyCenter, textBase } from "@/styles/CommonStyles";
import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { keyDownEnter } from "@/helper/keyDownEventList";
import { SearchContentComponentPropsType } from "@/types/components/SearchContentComponentType";
import { requestSearchResponse } from "@/api/apis/SearchApis";
import { SearchContentUserType } from "@/constants/enum";
import MainFirstView from "@/components/chatting/mainContent/MainFirstView_FileSearch";

const SearchMainContentContainer = styled.main`
    ${decideWidthAndHeight('100%', '100%')};
    ${flexColumnDirection};
    background-color: ${props => props.theme.mainViewBackgroundColor};
    position: relative;
    overflow: hidden;

    & > div:first-child {
        flex: 1 1 0%;
        ${decideWidthAndHeight('100%', '100%')};
        position: relative;
        overflow: auto;
    }
`

const SearchMainContent = styled.div`
    ${decideWidthAndHeight('', '100%')};
    ${flexColumnDirection};

    & > div:first-child {
        flex: 1 1 0%;
        overflow: hidden;
    }

    & > div:first-child > div {
        ${decideWidthAndHeight('', '100%')};
        position: relative;
    }
`

const SearchFormContainer = styled.div`
    ${decideWidthAndHeight('calc(100% - 0.5rem)', '')};
    border-color: transparent;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    position: absolute;
    top: 3.125rem; // 3.125rem = 50px
    left: 0;
    right: 0;
`

const SearchFormPadding = styled.div`
    ${textBase('1rem', '1.5rem')};
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    margin: auto;
`

const SearchFormMargin = styled.div`
    ${textBase('1rem', '1.5rem')};
    display: flex;
    max-width: 54rem;
    gap: 0.75rem;
    margin-left: auto;
    margin-right: auto;
`

const SearchInputContainer = styled.div`
    ${decideWidthAndHeight('', '100%')};
    ${flexColumnDirection};
    flex: 1 1 0%;
    max-width: 100%;
    position: relative;

    & > div:first-child {
        ${decideWidthAndHeight('100%', '')};
        ${flexAlignCenter};
    }

    & > div:first-child > div {
        ${decideWidthAndHeight('100%', '')};
        ${flexColumnDirection};
        position: relative;
        flex-grow: 1;
        background-color: ${props => props.theme.chattingBackgroundColor};
        border-radius: 1rem;
        overflow: hidden;
    }
`

const SearchTextArea = styled.textarea`
    ${decideWidthAndHeight('100%', '52px')};
    padding: 0.875rem 3rem 0.875rem 1.5rem;
    background-color: transparent;
    border-width: 0;
    resize: none;
    max-height: 25dvh;
    margin: 0;
    overflow-y: hidden;

    &::placeholder {
        color: rgba(180, 180, 180, 1);
    }

    &::-webkit-scrollbar {
        ${decideWidthAndHeight('8px', '')};
        margin-left: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.sidebarColor};
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background-color: ${props => props.theme.chattingBackgroundColor};
    }
`

const SearchSubmitButton = styled.button`
    position: absolute;
    right: 0.75rem;
    bottom: 0.75rem;
    border-radius: 0.5rem;
    background-color: ${props => props.theme.submitButtonBackgroundColor};
    padding: 0.125rem;
    transition-duration: 0.15s;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &:disabled {
        opacity: 1;
        cursor: default;
        background-color: ${props => props.theme.submitButtonDisabledBackgroundColor};
    }

    &:disabled > span > svg {
        color: ${props => props.theme.mainViewBackgroundColor};
    }

    & > span > svg {
        color: ${props => props.theme.submitButtonIconColor};
    }
`

const SearchMainScroll = styled.div`
    ${ decideWidthAndHeight('100%' , '100%') };
    padding-bottom: 2.25rem;

    &::-webkit-scrollbar {
        ${ decideWidthAndHeight('8px' , '') };
        margin-left: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${ props => props.theme.sidebarColor };
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background-color: ${ props => props.theme.mainViewBackgroundColor };
    }
`

const FileSearchContent = () => {
    /** 질문 내용을 담을 변수 */
    const [SearchContent, setSearchContent] = useState('');
    /** 질문 입력 창 높이 조절을 위한 요소 추출 */
    const SearchForm = useRef<HTMLTextAreaElement | null>(null);
    /** Observer 객체를 담는 변수 */
    let textArea: React.MutableRefObject<Element | HTMLTextAreaElement | null> = useRef(null);
    /** QnA 내용을 담을 배열 */
    const [chatList, setSearchList] = useState<SearchContentComponentPropsType[]>([]);

    /** 채팅창 입력 시 높이값 조정 */
    const resizeHeightChattingForm = (target: EventTarget & HTMLTextAreaElement) => {
        target.style.height = 'auto';
        target.style.height = target.scrollHeight + 'px';
    };
    
    /** 입력값을 질문 변수에 연결 -> QnA에서도 필요한 기능*/
    const handleQuestionContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setSearchContent(event.target.value);

        /** QnA 창 높이 조절 실행 */
        resizeHeightChattingForm(event.target);
    };

    /** 사용자가 입력한 질문을 배열에 저장하고 내용값 초기화 */
    const saveUserSearchContent = (props: SearchContentComponentPropsType) => {
        setSearchList(chatList => [...chatList, props]);
    };

    /** 채팅 보내기
     * @keyword 임시적으로 채팅을 보냈을 때, 사용자 유형과 내용을 배열에 담아 보여주는 정도로만 구현
    */
    const submitQuestion = async () => {
        /** 키워드 및 문장 저장 */
        saveUserSearchContent({ userType: SearchContentUserType.USER, keyword: SearchContent });
        /** 키워드, 문장 초기화 */
        setSearchContent('');
        /** 입력한 키워드 및 문장 백엔드로 요청 */
        const response = await requestSearchResponse({ id: '1', keyword: SearchContent });
        /** 응답 답변 저장 */
        saveUserSearchContent({ userType: SearchContentUserType.SBERT, keyword: response.keyword });
    };

    return(
        <SearchMainContentContainer>
            <SearchMainContent>
                <FileSearchViewMain/>
                    <div>
                        <div>
                        <SearchMainScroll style={ { overflowY: (chatList.length > 0) ? 'scroll' : 'hidden'}}>
                                {/* QnA 내용 및 메인 화면 */}
                                {/* { chatList.length > 0 
                                ? 
                                    // chatList.map((props , index) => <QnAContentComponent key={index} props={props}/>)
                                */
                                   <MainFirstView/>
                                }
                        </SearchMainScroll>
                        </div>
                    </div>
                <SearchFormContainer>
                    <SearchFormPadding>
                        <SearchFormMargin>
                            <SearchInputContainer>
                                <div>
                                    <div>
                                    <SearchTextArea
                                            id="prompt-textarea"
                                            ref={SearchForm}
                                            tabIndex={0}
                                            data-id="root"
                                            dir="auto"
                                            rows={1}
                                            placeholder="파일에 들어가는 문장 및 키워드를 입력해 주세요."
                                            value={SearchContent}
                                            onChange={handleQuestionContent}
                                            onKeyDown={event => keyDownEnter(event, submitQuestion)}
                                        ></SearchTextArea>
                                        <SearchSubmitButton
                                            type="button"
                                            disabled={!SearchContent}
                                            onClick={submitQuestion}
                                        >
                                            <span>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </span>
                                        </SearchSubmitButton>
                                    </div>
                                </div>
                            </SearchInputContainer>
                        </SearchFormMargin>
                    </SearchFormPadding>
                </SearchFormContainer>
            </SearchMainContent>
        </SearchMainContentContainer>
    )
}

export default FileSearchContent;