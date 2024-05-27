import useChangeTheme from "@/hooks/useChangeTheme";
import { decideWidthAndHeight, flexAlignCenter, flexColumnDirection, flexJustifyCenter, flexJustifyEnd, textBase } from "@/styles/CommonStyles";
import { HeaderOptionButton, HeaderOptionsContainer } from "@/styles/componentStyles/headerButtonStyles";
import { styled } from "styled-components";
import mainIcon from "@/assets/images/main/shunsungMain.png";
import chatbot from "@/assets/images/main/main_chatbot_icon.svg";
import searchDocument from "@/assets/images/main/searchDocument.svg";
import qna from "@/assets/images/main/qna.svg";
import useMenuNavigation from "@/hooks/useMenuNavigation";

const MainViewContainer = styled.div`
    ${ decideWidthAndHeight('100%' , '100%') };
    ${ flexColumnDirection };
    background-color: ${ props => props.theme.mainViewBackgroundColor }
`

const MainHeaderContainer = styled.div`
    ${ decideWidthAndHeight('' , '3.5rem')};
    ${ flexJustifyEnd };
    padding: 0.5rem;
`
const MainContentContainer = styled.div`
    ${ decideWidthAndHeight('' , '80%')};
    ${ flexColumnDirection };
    ${ flexAlignCenter };
    justify-content: space-evenly;

    & > img {
        width: 250px;
        object-fit: contain;
    }
`
const MainMenuListContainer = styled.div`
    ${ flexJustifyCenter };
    min-height: 14rem;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 2rem;
    margin-left: 0.75rem;
    margin-right: 0.75rem;
`
const MenuButton = styled.button<{ svg: any , marginLeft?: boolean}>`
    ${ flexColumnDirection };
    gap: 1rem;
    width: 22rem;
    padding: 1.25rem;
    border-width: 1px;
    border-color: ${ props => props.theme.menuBoxBorderColor };
    border-top: 1rem solid #004EA2;
    border-radius: 0.75rem;
    box-shadow: 4px 4px ${ props => props.theme.menuBoxBorderShadowSpread } ${ props => props.theme.menuBoxBorderShadowColor };
    transition: transform 0.3s ease;

    &:hover {
        transform: translate(-2px , -10px);
    }

    & > img {
        margin-left: ${ props => props.marginLeft ? '0.3rem' : '' };
        width: 40px;
        height: 40px;
        background: url(${props => props.svg}) no-repeat center;
        -webkit-mask: url(${props => props.svg}) no-repeat center;
        mask: url(${props => props.svg}) no-repeat center;
        filter: ${ props => props.theme.menuBoxIconColor };
    }
`
// ${props => props.theme.fontColor}
const MenuTitle = styled.div`
    ${ decideWidthAndHeight('100%' , '')};
    text-align: left;
    font-family: 'Custom Gothic';
    font-size: 22px;
    padding-left: 0.25rem;
`
const MenuDescription = styled.p`
    ${ decideWidthAndHeight('100%' , '')};
    ${ textBase('15px' , '1.25rem') };
    text-align: left;
    font-family: 'Custom Gothic';
    padding-left: 0.25rem;
    color: ${ props => props.theme.menuBoxDescriptionColor };
`

const MainView = () => {
    /** 라이트/다크 모드 제어용 상태 */
    const { theme , changeTheme } = useChangeTheme();
    /** 메뉴 이동 */
    const { navigateChatBotMenu , navigateLogin } = useMenuNavigation();
    
    return (
        <MainViewContainer>
            {/* 헤더 영역 [사용자 로그인 / 다크 테마] */}
            <MainHeaderContainer>
                <HeaderOptionsContainer>
                    <HeaderOptionButton onClick={navigateLogin}>
                        <div title="로그인">
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd"/>
                            </svg>
                        </div>
                    </HeaderOptionButton>
                    <HeaderOptionButton onClick={changeTheme}>
                        <div title="테마 변경">
                            { theme ? 
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z" clipRule="evenodd"/>
                                </svg>
                                :
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z" clipRule="evenodd"/>
                                </svg>
                            }
                        </div>
                    </HeaderOptionButton>
                </HeaderOptionsContainer>
            </MainHeaderContainer>
            {/* 콘텐츠 영역 */}
            <MainContentContainer>
                <img src={mainIcon}/>
                {/* 메뉴 */}
                <section>
                    <MainMenuListContainer>
                        <MenuButton onClick={navigateChatBotMenu} svg={chatbot}>
                            <img/>
                            <MenuTitle>챗봇</MenuTitle>
                            <MenuDescription>기업 내부 정보를<br/> 빠르게 알려주는 챗봇입니다</MenuDescription>
                        </MenuButton>
                        <MenuButton svg={qna} marginLeft>
                            <img/>
                            <MenuTitle>Q&A</MenuTitle>
                            <MenuDescription>키워드를 입력하시면<br/>해당 키워드와 연관된 질문과 답변을 출력해줍니다.</MenuDescription>
                        </MenuButton>
                        <MenuButton svg={searchDocument} marginLeft>
                            <img/>
                            <MenuTitle>문서 검색</MenuTitle>
                            <MenuDescription>찾고자 하는 키워드 및 내용을 입력해주시면<br/>해당 내용에 적합한 문서를 찾아줍니다.</MenuDescription>
                        </MenuButton>
                    </MainMenuListContainer>
                </section>
            </MainContentContainer>
        </MainViewContainer>
    )
}

export default MainView;