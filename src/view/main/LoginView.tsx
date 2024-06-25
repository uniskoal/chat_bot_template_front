import { decideWidthAndHeight, flexColumnDirection, flexJustifyEnd, textBase } from "@/styles/CommonStyles";
import companyName from "@/assets/images/main/shunsungMain.png";
import styled from "styled-components";
import { HeaderOptionButton, HeaderOptionsContainer } from "@/styles/componentStyles/headerButtonStyles";
import useChangeTheme from "@/hooks/useChangeTheme";
import useMenuNavigation from "@/hooks/useMenuNavigation";

const Container = styled.div`
    ${ decideWidthAndHeight('100%' , '') };
    ${ flexColumnDirection };
    background-color: ${ props => props.theme.mainViewBackgroundColor }
`

const LoginViewContainer = styled.div`
    ${ decideWidthAndHeight('30rem' , '') };
    ${ flexColumnDirection };
    margin: 0 auto;
    font-family: 'Custom Gothic';

    & > img {
        ${ decideWidthAndHeight('250px' , '') };
        margin-top: 5.75rem;
        margin-left: auto;
        margin-right: auto;
        object-fit: contain;
    }
`

const LoginHeaderContainer = styled.div`
    ${ decideWidthAndHeight('' , '3.5rem')};
    ${ flexJustifyEnd };
    padding: 0.5rem;
`

const LoginFormContainer = styled.div`
    margin-top: 3.5rem;
    border-width: 1px;
    border-color: ${ props => props.theme.menuBoxBorderColor };
    border-radius: 0.75rem;
    box-shadow: 2px 2px ${ props => props.theme.menuBoxBorderShadowSpread } ${ props => props.theme.menuBoxBorderShadowColor };

    & > div {
        padding: 1.8rem 2rem;
        font-size: 17px;
        text-align: center;
    }
`

const LoginForm = styled.form`
    padding: 0 2rem 1.5rem 2rem;
`

const LoginInputContainer = styled.div`
    ${ decideWidthAndHeight('100%' , '') };
    display: table;
    box-shadow: 0px 3px ${ props => props.theme.menuBoxBorderShadowSpread } ${ props => props.theme.menuBoxBorderShadowColor };
`
const LoginInput = styled.div<{ top?: boolean }>`
    display: table-row;
    border-width: 1px;
    border-radius: ${ props => props.top ? '0.5rem 0.5rem 0 0' : '0 0 0.5rem 0.5rem' };
    border-color: ${ props => props.theme.menuBoxBorderColor };

    & > div {
        display: flex;
        align-items: end;
        padding: 1rem 1rem;
    }

    & > div > svg {
        margin-right: 0.75rem;
    }

    & > div > input {
        ${ decideWidthAndHeight('100%' , '')};
        ${ textBase('1rem' , '1rem') };
        color: ${ props => props.theme.fontColor };
    }
`

const LoginButtonContainer = styled.div`
    margin-top: 3rem;

    & > button {
        ${ decideWidthAndHeight('100%' , '') };
        background-color: #004EA2;
        border-radius: 0.25rem;
        padding: 1.1rem 0 1.1rem;
        color: #fff;
    }

    & > button > span {
        ${ textBase('1.2rem' , '24px') };
    }
`

const LoginView = () => {
    /** 라이트/다크 모드 제어용 상태 */
    const { theme , changeTheme } = useChangeTheme();
    /** 메뉴 이동 */
    const { navigateMain } = useMenuNavigation();
    
    return (
        <Container>
            {/* 헤더 영역 [사용자 로그인 / 다크 테마] */}
            <LoginHeaderContainer>
                <HeaderOptionsContainer>
                    <HeaderOptionButton onClick={navigateMain}>
                        <div title="메뉴로 이동">
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd"/>
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
            </LoginHeaderContainer>
            {/* 로그인 영역 */}
            <LoginViewContainer>
                <img src={companyName}/>
                <LoginFormContainer>
                    <div>로그인</div>
                    <LoginForm>
                        {/* 입력 폼 */}
                        <LoginInputContainer>
                            <LoginInput top>
                                <div>
                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd"/>
                                    </svg>
                                    <input
                                        type="text"
                                        maxLength={20}
                                        placeholder="이름"
                                        title="이름"
                                        name="login_id"
                                    ></input>
                                </div>
                            </LoginInput>
                            <LoginInput>
                                <div>
                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" clipRule="evenodd"/>
                                    </svg>
                                    <input
                                        type="password"
                                        maxLength={20}
                                        placeholder="사번"
                                        title="사번"
                                        name="login_password"
                                    ></input>
                                    <span></span>
                                </div>
                            </LoginInput>
                        </LoginInputContainer>
                        {/* 로그인 버튼 */}
                        <LoginButtonContainer>
                            <button type="submit">
                                <span>로그인</span>
                            </button>
                        </LoginButtonContainer>
                    </LoginForm>
                </LoginFormContainer>
            </LoginViewContainer>  
        </Container>  
    )
}

export default LoginView;