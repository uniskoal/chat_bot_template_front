import { decideWidthAndHeight, flexAlignCenter, flexColumnDirection, textBase } from "@/styles/CommonStyles";
import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { QnAContentComponentPropsType } from "@/types/components/QnAContentComponentType";
import { requestQnAResponse } from "@/api/apis/QnAApis";
import QnAMainHeaderView from "@/components/chatting/mainContent/headerView/QnAMainHeaderView";
import { keyDownEnter } from "@/helper/keyDownEventList";
import QnAContentComponent from "@/components/chatting/mainContent/QnAContentComponent ";
import MainFirstView from "@/components/chatting/mainContent/MainFirstView";

const QnAMainContentContainer = styled.main`
    ${decideWidthAndHeight('100%', '100%')};
    ${flexColumnDirection};
    background-color: ${props => props.theme.mainViewBackgroundColor};
    position: relative;
    overflow: hidden;
`

const QnAMain = styled.div`
    ${decideWidthAndHeight('100%', '100%')};
    ${ flexColumnDirection };
    position: relative;
    overflow: auto;
`

const QnAFormContainer = styled.div`
    ${ decideWidthAndHeight('calc(100% - 0.5rem)' ,'') };
    border-color: transparent;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
`

const QnAFormPadding = styled.div`
    ${textBase('1rem', '1.5rem')};
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    margin: auto;
`

const QnAingFormMargin = styled.div`
    ${textBase('1rem', '1.5rem')};
    display: flex;
    max-width: 54rem;
    gap: 0.75rem;
    margin-left: auto;
    margin-right: auto;
`

const QnATextArea = styled.textarea`
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

const QnAInputContainer = styled.div`
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

const QnASubmitButton = styled.button`
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

const QnAResultContainer = styled.div`
    flex: 1 1 0%;
    overflow: hidden;

    & > div:first-child {
        ${ decideWidthAndHeight('' , '100%') }
        position: relative;
    }
`

const QnAMainScroll = styled.div`
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

const ChattingCautionaryText = styled.div`
    ${ textBase('0.75rem' , '1rem') };
    padding: 0.5rem 60px 0.5rem 60px;
    text-align: center;
    color: #9b9b9b;
    position: relative;
`

const QnAMainContent = () => {
    /** 질문 내용을 담을 변수 */
    const [QnAContent, setQnAContent] = useState('');
    /** 질문 입력 창 높이 조절을 위한 요소 추출 */
    const QnAForm = useRef<HTMLTextAreaElement | null>(null);
    /** Observer 객체를 담는 변수 */
    let textArea: React.MutableRefObject<Element | HTMLTextAreaElement | null> = useRef(null);
    /** QnA 내용을 담을 배열 */
    const [answerList, setAnswerList] = useState<QnAContentComponentPropsType[]>([]);

    /** 채팅창 입력 시 높이값 조정 */
    const resizeHeightChattingForm = (target: EventTarget & HTMLTextAreaElement) => {
        target.style.height = 'auto';
        target.style.height = target.scrollHeight + 'px';
    };

    /** 입력값을 질문 변수에 연결 -> QnA에서도 필요한 기능*/
    const handleQuestionContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setQnAContent(event.target.value);

        /** QnA 창 높이 조절 실행 */
        resizeHeightChattingForm(event.target);
    };

    /** 높이가 최대 영역에 달성하여 더 이상 늘어날 수 없을 때에는 스크롤을 보여준다 */
    const textAreaObserver = new ResizeObserver(entries => {
        /** 최대 영역까지 넓혀졌는지 검사 */
        if(entries.length > 0) {
            textArea.current = entries[0].target;
            if(textArea.current instanceof HTMLTextAreaElement) {
                if(textArea.current.clientHeight < textArea.current.scrollHeight)
                    setTimeout(() => { (textArea.current as HTMLTextAreaElement).style.overflowY = 'scroll'; } , 100) 
                else
                    setTimeout(() => { (textArea.current as HTMLTextAreaElement).style.overflowY = 'hidden'; } , 100) 
            }
        }
    });

    /** 채팅 보내기
     * @keyword 임시적으로 채팅을 보냈을 때, 사용자 유형과 내용을 배열에 담아 보여주는 정도로만 구현
    */
    const submitQuestion = async () => {
        try {
            /** 키워드, 문장 초기화 */
            setQnAContent('');
            /** 입력한 키워드 및 문장 백엔드로 요청 */
            const response = await requestQnAResponse({ id: '1', key_word: QnAContent, number: '1' });
            /** 응답 답변 저장 */
            setAnswerList(response.answer_list)
        }
        catch(error: unknown) {
            // 예외 처리 추가 예정
        }
    };

    /** 채팅 높이가 최대 영역에 달했을 때 스크롤 바가 생기도록 이벤트 설정 */
    useEffect(() => {
        if(!QnAForm.current) return;

        textAreaObserver.observe(QnAForm.current);

        return () => {
            if(QnAForm.current)
                textAreaObserver.unobserve(QnAForm.current)
            
            textAreaObserver.disconnect();
        }
    }, []); 

    return (
        <QnAMainContentContainer>
            <QnAMainHeaderView/>
            <QnAMain>
                <QnAFormContainer>
                    <QnAFormPadding>
                        <QnAingFormMargin>
                            <QnAInputContainer>
                                <div>
                                    <div>
                                        <QnATextArea
                                             id="prompt-textarea"
                                             ref={QnAForm}
                                             tabIndex={0}
                                             data-id="root"
                                             dir="auto"
                                             rows={1}
                                             placeholder="키워드 및 질문을 입력해 주세요."
                                             value={QnAContent}
                                             onChange={handleQuestionContent}
                                             onKeyDown={event => keyDownEnter(event, submitQuestion)}
                                        ></QnATextArea>
                                        <QnASubmitButton
                                             type="button"
                                             disabled={!QnAContent}
                                             onClick={submitQuestion}
                                        >
                                             <span>
                                                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                     <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                 </svg>
                                             </span>
                                        </QnASubmitButton>
                                    </div>
                                </div>
                            </QnAInputContainer>
                        </QnAingFormMargin>
                    </QnAFormPadding>
                </QnAFormContainer>
                <QnAResultContainer>
                    <div>
                        <QnAMainScroll style={ { overflowY: (answerList.length > 0) ? 'scroll' : 'hidden'}}>
                                {/* QnA 내용 및 메인 화면 */}
                                { answerList.length > 0 
                                ? 
                                    answerList.map((props , index) => <QnAContentComponent key={index} props={props}/>)
                                :
                                <MainFirstView/>
                                }
                        </QnAMainScroll>
                    </div>
                </QnAResultContainer>
                <ChattingCautionaryText>
                    <span>SHINSUNG_GPT can make mistakes. Consider checking important information.</span>
                </ChattingCautionaryText>
            </QnAMain>
        </QnAMainContentContainer>
    );
};

export default QnAMainContent;
