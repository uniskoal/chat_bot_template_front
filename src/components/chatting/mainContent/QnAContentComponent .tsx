import { decideWidthAndHeight, flexColumnDirection, flexJustifyBetween, textBase } from "@/styles/CommonStyles"
import { styled } from "styled-components"
import { QnAContentComponentPropsType } from "@/types/components/QnAContentComponentType"
import { useState } from "react"

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
        max-width: 54rem;
    }
`

const ChattingQuestionContainer = styled.div`
    ${ decideWidthAndHeight('100%' , '') };
    ${ flexColumnDirection };
    position: relative;
    min-width: 0;
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

const QnAContentComponent = ({ props } : { props : QnAContentComponentPropsType }) => {
    /** 참고 문서 내용 토글용 상태 */
    const [ toggleState , setToggleState ] = useState(false);

    const toggle = () => {
        setToggleState(prev => !prev)
    }

    return (
        <ChattingContentContainer>
            <div>
                <div>
                    <ChattingQuestionContainer>
                        <ChattingReference>
                            <div>
                                <span>{props.key_word}</span>
                                <button onClick={toggle}>
                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" style={{ transform: toggleState ? 'rotate(-180deg)' : 'rotate(0deg)'}}>
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
                                    </svg>
                                </button>
                            </div>
                            <ChattingReferenceList style={{ maxHeight: toggleState ? '100%' : '0' }}>
                                { 
                                    <div>
                                        <span>{ props.answer }</span> 
                                    </div>
                                }
                            </ChattingReferenceList>
                        </ChattingReference> 
                    </ChattingQuestionContainer>
                </div>
            </div>
        </ChattingContentContainer>
    )
}

export default QnAContentComponent;