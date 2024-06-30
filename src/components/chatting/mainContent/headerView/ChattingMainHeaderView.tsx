import useChangeTheme from "@/hooks/useChangeTheme"
import useMenuNavigation from "@/hooks/useMenuNavigation"
import { SvgIcon, decideWidthAndHeight, flexAlignCenter } from "@/styles/CommonStyles"
import { HeaderOptionButton, HeaderOptionsContainer } from "@/styles/componentStyles/headerButtonStyles"
import { styled } from "styled-components"

const ChattingMainHeaderContainer = styled.div`
    ${ decideWidthAndHeight('' , '3.5rem') };
    ${ flexAlignCenter }
    position: sticky;
    top: 0;
    z-index: 10;
    margin-bottom: 0.375rem;
    justify-content: space-between;
    font-weight: 600;
    padding: 0.5rem;
    background-color: ${ props => props.theme.mainViewBackgroundColor };
`

const ChattingModalChangePopup = styled.div`
    ${ flexAlignCenter };
    gap: 0.5rem;
`

const ChattingModalChangeButton = styled.div`
    ${ flexAlignCenter };
    cursor: pointer;
    font-weight: 900;
    font-size: 1.125rem;
    line-height: 1.75rem;
    padding: 0.5rem 0.75rem;
    gap: 0.35rem;
    border-radius: 0.75rem;
    color: #9b9b9b;

    &:hover {
        background-color: ${ props => props.theme.sidebarBackgroundColor }
    }
`

const ChattingMainHeaderView = () => {
    /** 라이트/다크 모드 제어용 상태 */
    const { theme , changeTheme } = useChangeTheme();
    /** 메뉴 이동 */
    const { navigateMain } = useMenuNavigation();
     
    return (
        <>
        {/* 최상단 버튼 모음 [모델 변경 / 메인 이동 / 다크 모드] */}
        <ChattingMainHeaderContainer>
            <ChattingModalChangePopup>
                <ChattingModalChangeButton 
                    typeof="button"
                    aria-haspopup="menu" 
                    aria-expanded="false"
                >
                    <div style={ { paddingBottom: '0.1rem' }}>
                        GPT
                        <span> 1.0</span>
                    </div>
                    <SvgIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414" clipRule="evenodd"></path></SvgIcon>
                </ChattingModalChangeButton>
            </ChattingModalChangePopup>
            <HeaderOptionsContainer>
                <HeaderOptionButton>
                    <div>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M17 10v1.126c.367.095.714.24 1.032.428l.796-.797 1.415 1.415-.797.796c.188.318.333.665.428 1.032H21v2h-1.126c-.095.367-.24.714-.428 1.032l.797.796-1.415 1.415-.796-.797a3.979 3.979 0 0 1-1.032.428V20h-2v-1.126a3.977 3.977 0 0 1-1.032-.428l-.796.797-1.415-1.415.797-.796A3.975 3.975 0 0 1 12.126 16H11v-2h1.126c.095-.367.24-.714.428-1.032l-.797-.796 1.415-1.415.796.797A3.977 3.977 0 0 1 15 11.126V10h2Zm.406 3.578.016.016c.354.358.574.85.578 1.392v.028a2 2 0 0 1-3.409 1.406l-.01-.012a2 2 0 0 1 2.826-2.83ZM5 8a4 4 0 1 1 7.938.703 7.029 7.029 0 0 0-3.235 3.235A4 4 0 0 1 5 8Zm4.29 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h6.101A6.979 6.979 0 0 1 9 15c0-.695.101-1.366.29-2Z" clipRule="evenodd"/>
                    </svg>
                    </div>
                </HeaderOptionButton>
                <HeaderOptionButton onClick={navigateMain}>
                    <div>
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd"/>
                        </svg>
                    </div>
                </HeaderOptionButton>
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
        </ChattingMainHeaderContainer>
    </>
    )
}

export default ChattingMainHeaderView;