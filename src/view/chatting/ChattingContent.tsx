import ChattingMainHeaderView from "@/components/chatting/mainContent/ChattingMainHeaderView"
import SideBarSlider from "@/components/chatting/sidebar/SideBarSlider"
import { ProfileImg, SvgIcon, decideWidthAndHeight, flexAlignCenter, flexColumnDirection, flexJustifyCenter, textBase } from "@/styles/CommonStyles"
import styled from "styled-components"
import profileImg from "$images/profileImg.jpg"

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

const ChattingContentContainer = styled.div`
    ${ decideWidthAndHeight('100%' , '') }

    & > div:first-child {
        ${ textBase('1rem' , '1.5rem') };
        padding: 0.5rem 1.25rem;
    }

    & > div > div {
        ${ textBase('1rem' , '1.5rem') };
        display: flex;
        margin-left: auto;
        margin-right: auto;
        gap: 0.75rem;
        max-width: 48rem;
    }
`

const ChattingContentUserIconContainer = styled.div`
    ${ flexAlignCenter };
    ${ flexColumnDirection };
    position: relative;
    flex-shrink: 0;
`

const ChattingContentUserIcon = styled(ProfileImg)`
    ${ decideWidthAndHeight('1.5rem' , '1.5rem') };
    position: relative;
`

const ChattingQuestionContainer = styled.div`
    ${ decideWidthAndHeight('100%' , '') };
    ${ flexColumnDirection };
    position: relative;
    min-width: 0;
`

const ChattingUserName = styled.div`
    user-select: none;
    font-weight: 600;
    margin-bottom: 0.25rem;
`

const ChattingQuestion = styled.div`
    ${ flexColumnDirection };
    max-width: 100%;

    & > div {
        ${ flexColumnDirection};
        overflow-x: auto;
        word-wrap: break-word;
        white-space: pre-wrap;
        min-height: 20px;
        gap: 0.75rem;
    }
`

const ChattingQuestionContent = styled.div`
    position: relative;
    max-width: 95%;
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
    ${ decideWidthAndHeight('100%' , '') };
    padding: 0.875rem 3rem 0.875rem 1.5rem;
    background-color: transparent;
    border-width: 0;
    resize: none;
    max-height: 25dvh;
    margin: 0;

    &::placeholder {
        color: rgba(180,180,180,1);
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
    return (
        <ChattingMainContentContainer>
            <div>
                <SideBarSlider/>
                <ChattingMainContent>
                    {/* 결과 목록 */}
                    <div>
                        <div>
                            {/* 헤더 [옵션 및 GPT 모델 변경] */}
                            <ChattingMainHeaderView/>
                            <ChattingContentContainer>
                                <div>
                                    <div>
                                        <ChattingContentUserIconContainer>
                                            <div>
                                                <ChattingContentUserIcon>
                                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                                    </svg>
                                                </ChattingContentUserIcon>
                                            </div>
                                        </ChattingContentUserIconContainer>
                                        <ChattingQuestionContainer>
                                            <ChattingUserName>사용자</ChattingUserName>
                                            <ChattingQuestion>
                                                <div>
                                                    <ChattingQuestionContent>스위칭 허브는 네트워크에서 데이터 전송을 관리하는 장치로, 여러 컴퓨터 또는 네트워크 장치 간에 데이터를 전송하는 역할을 합니다. 이러한 허브는 OSI (Open Systems Interconnection) 모델의 데이터 링크 계층에서 동작합니다. <br/><br/>스위칭 허브는 네트워크에 연결된 각각의 장치에 대한 링크를 갖고 있으며, 데이터가 특정한 포트로 들어오면 그 포트를 통해 목적지로 데이터를 전송합니다. 이때, 스위칭 허브는 목적지 장치의 주소를 확인하여 해당 장치로만 데이터를 전송합니다. 따라서 다른 포트로는 데이터가 전송되지 않아 네트워크 대역폭을 효율적으로 관리할 수 있습니다.</ChattingQuestionContent>
                                                </div>
                                            </ChattingQuestion>
                                        </ChattingQuestionContainer>
                                    </div>
                                </div>
                            </ChattingContentContainer>
                            {/* <MainFirstView/> */}
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
                                                    tabIndex={0}
                                                    data-id="root"
                                                    dir="auto"
                                                    rows={1}
                                                    placeholder="질문을 입력해 주세요"
                                                    style={ { height: '52px' , overflowY: 'hidden' }}
                                                ></ChattingTextArea>
                                                <ChattingSubmitButton disabled>
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