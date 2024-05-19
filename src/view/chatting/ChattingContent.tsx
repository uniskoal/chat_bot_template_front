import ChattingMainHeaderView from "@/components/chatting/mainContent/ChattingMainHeaderView"
import SideBarSlider from "@/components/chatting/sidebar/SideBarSlider"
import { decideWidthAndHeight, flexAlignCenter, flexColumnDirection, flexJustifyCenter, textBase } from "@/styles/CommonStyles"
import styled from "styled-components"
import React, { useEffect, useRef, useState } from "react"
import MainFirstView from "@/components/chatting/mainContent/MainFirstView"
import axios from '@/api/axiosHandler';
import ChattingContentComponent from "@/components/chatting/mainContent/ChattingContentComponent"
import { ChattingContentComponentPropsType } from "@/types/components/chattingContentComponent"
import { ChattingContentUserType } from "@/constants/enum";
import { keyDownEnter } from "@/helper/keyDownEventList"

const ChattingMainContentContainer = styled.main`
    ${ decideWidthAndHeight('100%' ,'100%') };
    ${ flexColumnDirection };
    background-color: ${ props => props.theme.mainViewBackgroundColor };
    position: relative;
    overflow: hidden;

    & > div:first-child {
        flex: 1 1 0%;
        ${ decideWidthAndHeight('100%' , '100%') }
        position: relative;
        overflow: auto;
    }
`

const ChattingMainContent = styled.div`
    ${ decideWidthAndHeight('' , '100%') };
    ${ flexColumnDirection };

    & > div:first-child {
        flex: 1 1 0%;
        overflow: hidden;
    };

    & > div:first-child > div {
        ${ decideWidthAndHeight('' , '100%') }
        position: relative;
    };
`

const ChattingMainScroll = styled.div`
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

const ChattingFormContainer = styled.div`
    ${ decideWidthAndHeight('calc(100% - 0.5rem)' ,'') };
    border-color: transparent;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
`

const ChattingFormPadding = styled.div`
    ${ textBase('1rem' , '1.5rem') };
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    margin: auto;
`

const ChattingFormMargin = styled.div`
    ${ textBase('1rem' , '1.5rem') };
    display: flex;
    max-width: 54rem;
    gap: 0.75rem;
    margin-left: auto;
    margin-right: auto;
`

const ChattingInputFileButton = styled.button`
    ${ decideWidthAndHeight('2.25rem' , '2.25rem') };
    ${ flexAlignCenter }
    ${ flexJustifyCenter }
    position: relative;
    top: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
    white-space: nowrap;
    border-width: 1px;
    border-color: ${ props => props.theme.iconBorderColor };
    z-index: 60;

    & > div:first-child {
        ${ decideWidthAndHeight('100%' , '') }
        ${ flexAlignCenter };
        justify-content: center;
        gap: 0.5rem;
    }

    & > div > svg {
        color: ${ props => props.theme.fontColor }
    }
`

const ChattingInputContainer = styled.div`
    ${ decideWidthAndHeight('' , '100%') }
    ${ flexColumnDirection };
    flex: 1 1 0%;
    max-width: 100%;
    position: relative;

    & > div:first-child {
        ${ decideWidthAndHeight('100%' , '') };
        ${ flexAlignCenter };
    }

    & > div:first-child > div {
        ${ decideWidthAndHeight('100%' , '') };
        ${ flexColumnDirection };
        position: relative;
        flex-grow: 1;
        background-color: ${ props => props.theme.chattingBackgroundColor };
        border-radius: 1rem;
        overflow: hidden;
    }
`

const ChattingTextArea = styled.textarea`
    ${ decideWidthAndHeight('100%' , '52px') };
    padding: 0.875rem 3rem 0.875rem 1.5rem;
    background-color: transparent;
    border-width: 0;
    resize: none;
    max-height: 25dvh;
    margin: 0;
    overflow-y: hidden;

    &::placeholder {
        color: rgba(180,180,180,1);
    }

    &::-webkit-scrollbar {
        ${ decideWidthAndHeight('8px' , '') };
        margin-left: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${ props => props.theme.sidebarColor };
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background-color: ${ props => props.theme.chattingBackgroundColor };
    }
`

const ChattingSubmitButton = styled.button`
    position: absolute;
    right: 0.75rem;
    bottom:0.75rem;
    border-radius: 0.5rem;
    background-color: ${props => props.theme.submitButtonBackgroundColor};
    padding: 0.125rem;
    transition-duration: .15s;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(.4,0,.2,1);

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

const ChattingCautionaryText = styled.div`
    ${ textBase('0.75rem' , '1rem') };
    padding: 0.5rem 60px 0.5rem 60px;
    text-align: center;
    color: #9b9b9b;
    position: relative;
`

const ChattingContent = () => {
    /** 질문 내용을 담을 변수 */
    const [ questionContent , setQuestionContent ] = useState('');
    /** 질문 입력 창 높이 조절을 위한 요소 추출 */
    const questionForm = useRef<HTMLTextAreaElement | null>(null);
    /** Observer 객체를 담는 변수 */
    let textArea: React.MutableRefObject<Element | HTMLTextAreaElement | null> = useRef(null);
    /** 채팅 내용을 담을 배열 */
    const [chatList , setChatList] = useState<React.ReactElement<ChattingContentComponentPropsType>[]>([]); 

    /** 채팅창 입력 시 높이값 조정 */
    const resizeHeightChattingForm = (target: EventTarget & HTMLTextAreaElement) => {
        target.style.height = 'auto';
        target.style.height = target.scrollHeight + 'px';
    }
    
    /** 입력값을 질문 변수에 연결 */
    const handleQuestionContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setQuestionContent(event.target.value);

        /** 채팅창 높이 조절 실행 */
        resizeHeightChattingForm(event.target);
    }

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

    /** 사용자가 입력한 질문을 배열에 저장하고 내용값 초기화 */
    const saveUserChatContent = (props: ChattingContentComponentPropsType) => {
        setChatList(chatList => [...chatList , ChattingContentComponent({ userType: props.userType , description: props.description })]);
    }

    /** 채팅 보내기
     * @description 임시적으로 채팅을 보냈을 때, 사용자 유형과 내용을 배열에 담아 보여주는 정도로만 구현
    */
    const submitQuestion = async () => {
        /** 질문 저장 */
        saveUserChatContent({ userType: ChattingContentUserType.USER , description: questionContent})
        /** 입력한 질문 GPT 에게 요청 / 파라미터/응답 값은 임시로 정해놨음 */
        const response: { data: { description: string } } = await axios.post('/Item' , { id: '1' , description: questionContent });
        /** 응답받은 답변 저장 */
        saveUserChatContent({ userType: ChattingContentUserType.GPT , description: response.data.description})
        
        /** 질문 내용 초기화 */
        setQuestionContent('');
    }

    /** 채팅 높이가 최대 영역에 달했을 때 스크롤 바가 생기도록 이벤트 설정 */
    useEffect(() => {
        if(!questionForm.current) return;

        textAreaObserver.observe(questionForm.current);

        return () => {
            if(questionForm.current)
                textAreaObserver.unobserve(questionForm.current)
            
            textAreaObserver.disconnect();
        }
    }, []); 

    useEffect(() => {
        console.log(chatList.length);
    }, [chatList])

    return (
        <ChattingMainContentContainer>
            <div>
                <SideBarSlider/>
                <ChattingMainContent>
                    {/* 결과 목록 */}
                    <div>
                        <div>
                            <ChattingMainScroll style={ { overflowY: (chatList.length > 0) ? 'scroll' : 'hidden'}}> 
                                {/* 헤더 [옵션 및 GPT 모델 변경] */}
                                <ChattingMainHeaderView/>
                                {/* 채팅 내용 및 메인 화면 */}
                                { chatList.length > 0 
                                ? 
                                    chatList.map((component , index) => <div key={index}>{component}</div>)
                                :
                                   <MainFirstView/>
                                }
                            </ChattingMainScroll>
                        </div>
                    </div>
                    {/* 채팅창  */}
                    <ChattingFormContainer>
                        <ChattingFormPadding>
                            <ChattingFormMargin>
                                {/* 파일 올리는 버튼 */}
                                <div>
                                    <ChattingInputFileButton>
                                        <div>
                                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v6.41A7.5 7.5 0 1 0 10.5 22H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z" clipRule="evenodd"/>
                                                <path fillRule="evenodd" d="M9 16a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm6-3a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1a1 1 0 0 1 1-1Z" clipRule="evenodd"/>
                                            </svg>
                                        </div>
                                    </ChattingInputFileButton>
                                </div>
                                <form style={ { width: '100%' }}>
                                    <ChattingInputContainer>
                                        <div>
                                            <div>
                                                <ChattingTextArea
                                                    id="prompt-textarea"
                                                    ref={questionForm}
                                                    tabIndex={0}
                                                    data-id="root"
                                                    dir="auto"
                                                    rows={1}
                                                    placeholder="질문을 입력해 주세요"
                                                    value={questionContent}
                                                    onChange={handleQuestionContent}
                                                    onKeyDown={event => keyDownEnter(event , submitQuestion)}
                                                ></ChattingTextArea>
                                                <ChattingSubmitButton
                                                    type="button"
                                                    disabled={!questionContent}
                                                    onClick={submitQuestion}
                                                >
                                                    <span>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                    </span>
                                                </ChattingSubmitButton>
                                            </div>
                                        </div>
                                    </ChattingInputContainer>
                                </form>
                                {/* 영역 맞춤 용 버튼이라 사용 X */}
                                <div>
                                    <ChattingInputFileButton style={{ visibility: 'hidden' }}>
                                        <div >
                                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd"/>
                                            </svg>
                                        </div>
                                    </ChattingInputFileButton>
                                </div>
                            </ChattingFormMargin>
                        </ChattingFormPadding>
                    </ChattingFormContainer>
                    {/* 하단 GPT 설명 */}
                    <ChattingCautionaryText>
                        <span>GPT can make mistakes. Consider checking important information.</span>
                    </ChattingCautionaryText>
                </ChattingMainContent>
            </div>
        </ChattingMainContentContainer>
    )
}

export default ChattingContent