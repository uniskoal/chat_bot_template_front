import useChangeTheme from "@/hooks/useChangeTheme";
import { decideWidthAndHeight, flexAlignCenter, flexColumnDirection, flexJustifyCenter, flexJustifyEnd } from "@/styles/CommonStyles";
import { HeaderOptionButton, HeaderOptionsContainer } from "@/styles/componentStyles/headerButtonStyles";
import { styled } from "styled-components";
import mainIcon from "@/assets/images/shunsungMain.png";

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
    min-height: 16rem;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 2rem;
    margin-left: 0.75rem;
    margin-right: 0.75rem;
`
const MenuButton = styled.button`
    ${ flexColumnDirection };
    gap: 1rem;
    width: 22rem;
    padding: 0.5rem 0.75rem 1rem 0.75rem;
    border-width: 1px;
    border-top: 1rem solid #004EA2;
    border-radius: 0.75rem;
    box-shadow: 4px 4px 8px rgba(0,0,0,0.05);
    transition: transform 0.3s ease;

    &:hover {
        transform: translate(-2px , -10px);
    }

    & > svg {
        margin: auto;
    }

    & > div {
        ${ decideWidthAndHeight('100%' , '')};
        font-size: 24px;
        font-weight: bold;
        padding-bottom: 3rem;
    }
`

const MainView = () => {
    /** 라이트/다크 모드 제어용 상태 */
    const { theme , changeTheme } = useChangeTheme();
    
    return (
        <MainViewContainer>
            {/* 헤더 영역 [사용자 로그인 / 다크 테마] */}
            <MainHeaderContainer>
                <HeaderOptionsContainer>
                    <HeaderOptionButton onClick={changeTheme}>
                        <div>
                            { theme ? 
                                <svg  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
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
                        <MenuButton>
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z" clip-rule="evenodd"/>
                                <path fill-rule="evenodd" d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z" clip-rule="evenodd"/>
                            </svg>
                            <div>챗봇</div>
                        </MenuButton>
                        <MenuButton>
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Z" clip-rule="evenodd"/>
                        </svg>
                        <div>문서</div>
                        </MenuButton>
                        <MenuButton>
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z" clip-rule="evenodd"/>
                                <path fill-rule="evenodd" d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z" clip-rule="evenodd"/>
                            </svg>
                            <div>준비 중...</div>
                        </MenuButton>
                    </MainMenuListContainer>
                </section>
            </MainContentContainer>
        </MainViewContainer>
    )
}

export default MainView;