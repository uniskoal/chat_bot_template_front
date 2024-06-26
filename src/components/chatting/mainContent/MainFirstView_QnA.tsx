import { decideWidthAndHeight, flexAlignCenter, flexColumnDirection, flexJustifyCenter, textBase } from "@/styles/CommonStyles"
import { styled } from "styled-components"
import chatSinSungIcon from "@/assets/images/shinsungIcon.png"

const MainIconContainer = styled.div`
    ${decideWidthAndHeight('', 'auto')};
    ${flexAlignCenter};
    ${flexJustifyCenter};
    ${flexColumnDirection};
    color: #0d0d0d;
    margin-top: 1rem;

    & > div:first-child {
        position: relative;
    }

    & > div > div {
        ${decideWidthAndHeight('3rem', '3rem')};
        margin-top: 0.75rem;
    }
`

const MainIcon = styled.div`
    ${decideWidthAndHeight('', '100%')};
    ${flexAlignCenter};
    ${flexJustifyCenter};
    background-color: ${props => props.theme.mainViewBackgroundColor};
    color: #0d0d0d;
    position: relative;
    border-radius: 9999px;

    & > img {
        ${decideWidthAndHeight('', '66.667%')};
        color: ${props => props.theme.fontColor};
    }
`

const MainQuestion = styled.div`
    ${textBase('1.5rem', '2rem')};
    margin-bottom: 25rem;
    font-weight: 600;
    color: ${props => props.theme.fontColor};
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
                자주 묻는 질문을 보여줍니다.
            </MainQuestion>
        </MainIconContainer>
    )
}

export default MainFirstView