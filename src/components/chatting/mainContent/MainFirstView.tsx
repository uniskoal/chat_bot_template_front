import { decideWidthAndHeight, flexAlignCenter, flexColumnDirection, flexJustifyCenter, textBase } from "@/styles/CommonStyles"
import { styled } from "styled-components"
import chatSinSungIcon from "@/assets/images/shinsungIcon.png"

const MainIconContainer = styled.div`
    ${ decideWidthAndHeight('' , '100%') };
    ${ flexAlignCenter };
    ${ flexJustifyCenter} ;
    ${ flexColumnDirection };
    color: #0d0d0d;

    & > div:first-child {
        position: relative;
    }

    & > div > div {
        ${ decideWidthAndHeight('3rem' , '3rem')};
        margin-bottom: 0.75rem;
    }
`

const MainIcon = styled.div`
    ${ decideWidthAndHeight('' , '100%') };
    ${ flexAlignCenter };
    ${ flexJustifyCenter };
    background-color: ${ props => props.theme.mainViewBackgroundColor }
    color: #0d0d0d;
    position: relative;
    border-radius: 9999px;

    & > img {
        ${ decideWidthAndHeight('' , '66.667%') };
        color: ${ props => props.theme.fontColor};
    }
`

const MainQuestion = styled.div`
    ${ textBase('1.5rem' , '2rem') }
    margin-bottom: 1.25rem;
    font-weight: 600;
    color: ${ props => props.theme.fontColor};
`

const MainFirstView = () => {
    return (
        <MainIconContainer>
            {/* 메인 아이콘 */}
            <div>
                <div>
                    <MainIcon>
                        <img 
                            src={chatSinSungIcon}
                            width="41px"
                            height="32px"
                        />
                    </MainIcon>
                </div>
            </div>
            {/* 소개 문구 */}
            <MainQuestion>
                오늘은 무엇을 도와드릴까요?
            </MainQuestion>
        </MainIconContainer>
    )
}

export default MainFirstView