import { ProfileImg, decideWidthAndHeight, flexAlignCenter, flexColumnDirection, flexJustifyBetween, textBase } from "@/styles/CommonStyles"
import { styled } from "styled-components"
import { ChattingContentUserType } from "@/constants/enum"
import chatSinSungIcon from "@/assets/images/shinsungIcon.png"
import { ChattingContentComponentPropsType } from "@/types/components/ChattingContentComponentType"
import { useEffect, useState } from "react"
import useModal from "@/hooks/modal/useModal"

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

const ChattingReference = styled.div`
    padding: 0.5rem;
    border-width: 1px;
    border-color: ${ props => props.theme.menuBoxBorderColor };
    border-radius: 0.25rem;
    margin-top: 0.75rem;
    box-shadow: 4px 4px ${ props => props.theme.menuBoxBorderShadowSpread } ${ props => props.theme.menuBoxBorderShadowColor };

    & > div:first-child {
        ${ flexJustifyBetween }
        padding: 0.5rem;
    }

    svg {
        transition: transform 0.1s ease;
    }
`

const ChattingReferenceList = styled.div`
    overflow: hidden;

    & > div {
        ${ flexJustifyBetween }
        padding: 0.5rem;
    }

    & > div:frist-child {
        padding: 0 0.5rem;
    }
`

{/* <button type="button" onClick={openGuideModal}>모달 열기[오버레이 O]</button> */}

const ChattingContentComponent = ({ props } : { props : ChattingContentComponentPropsType}) => {
    /** 참고 문서 내용 토글용 상태 */
    const [ toggleState , setToggleState ] = useState(false);
    /** 모달 제어 */
    const { openGuideModal } = useModal();

    const toggle = () => {
        setToggleState(prev => !prev);
    }

    return (
        <ChattingContentContainer>
            <div>
                <div>
                    <ChattingContentUserIconContainer>
                        <div>
                            <ChattingContentUserIcon>
                                { props.userType === ChattingContentUserType.USER ? 
                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                    </svg>
                                : 
                                    <img 
                                        src={chatSinSungIcon}
                                        width="24px"
                                        height="19px"
                                    />
                                }
                            </ChattingContentUserIcon>
                        </div>
                    </ChattingContentUserIconContainer>
                    <ChattingQuestionContainer>
                        <ChattingUserName>{props.userType}</ChattingUserName>
                        <ChattingQuestion>
                            <div>
                                <ChattingQuestionContent dangerouslySetInnerHTML={{ __html: props.description }}></ChattingQuestionContent>
                            </div>
                        </ChattingQuestion>
                        { props.referenceDocInfo 
                        ?
                            <ChattingReference>
                                <div>
                                    <span>참고 문서 확인 [{props.referenceDocInfo.file_name}]</span>
                                    <button onClick={toggle}>
                                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" style={{ transform: toggleState ? 'rotate(-180deg)' : 'rotate(0deg)'}}>
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
                                        </svg>
                                    </button>
                                </div>
                                <ChattingReferenceList style={{ maxHeight: toggleState ? '100%' : '0' }}>
                                    { 
                                        props.referenceDocInfo.meta_data.map((props , index) => 
                                            <div key={index}>
                                                <span>페이지 번호: {props.page}</span>
                                                <button type="button" onClick={() => openGuideModal(props.context)}>내용 확인</button>
                                            </div>
                                        )
                                    }
                                </ChattingReferenceList>
                            </ChattingReference> 
                        :
                            null
                        }
                    </ChattingQuestionContainer>
                </div>
            </div>
        </ChattingContentContainer>
    )
}

export default ChattingContentComponent