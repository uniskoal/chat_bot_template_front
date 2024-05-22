import useChangeTheme from "@/hooks/useChangeTheme";
import { decideWidthAndHeight, flexAlignCenter, flexColumnDirection, flexJustifyCenter, flexJustifyEnd } from "@/styles/CommonStyles";
import { HeaderOptionButton, HeaderOptionsContainer } from "@/styles/componentStyles/headerButtonStyles";
import { styled } from "styled-components";
import mainIcon from "@/assets/images/main/shunsungMain.png";

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
const MenuButton = styled.button`
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
`

const MenuTitle = styled.div`
    ${ decideWidthAndHeight('100%' , '')};
    text-align: left;
    font-family: 'Custom Gothic';
    font-size: 22px;
    padding-left: 0.25rem;
`
const MenuDescription = styled.p`
    ${ decideWidthAndHeight('100%' , '')};
    text-align: left;
    font-family: 'Custom Gothic';
    font-size: 15px;
    padding-left: 0.25rem;
    color: ${ props => props.theme.menuBoxDescriptionColor };
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
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48">
                                <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
                                    <path d="M226 425 c-4 -10 -19 -15 -49 -15 -24 0 -48 -5 -55 -12 -7 -7 -12
                                    -40 -12 -80 0 -84 6 -88 134 -88 116 0 126 7 126 86 0 79 -11 94 -66 94 -30 0
                                    -46 5 -50 15 -4 8 -10 15 -14 15 -4 0 -10 -7 -14 -15z m114 -105 l0 -60 -100
                                    0 -100 0 0 60 0 60 100 0 100 0 0 -60z"/>
                                    <path d="M174 335 c-4 -9 -2 -21 4 -27 15 -15 44 -1 40 19 -4 23 -36 29 -44 8z"/>
                                    <path d="M264 335 c-4 -9 -2 -21 4 -27 15 -15 44 -1 40 19 -4 23 -36 29 -44 8z"/>
                                    <path d="M92 188 c-6 -6 -12 -24 -12 -38 0 -88 147 -140 250 -87 56 28 78 64
                                    64 104 l-9 28 -140 3 c-101 2 -144 -1 -153 -10z m278 -38 c0 -30 -42 -68 -85
                                    -76 -84 -15 -167 18 -173 69 l-3 27 130 0 c125 0 131 -1 131 -20z"/>
                                </g>
                            </svg>
                            <MenuTitle>챗봇</MenuTitle>
                            <MenuDescription>기업 내부 정보를<br/> 빠르게 검색할 수 있는 AI 채팅입니다</MenuDescription>
                        </MenuButton>
                        <MenuButton>
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 50 50" style={{ marginLeft: '0.3rem'}}>
                                <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" fill="currentColor">
                                    <path d="M7 434 c-4 -4 -7 -90 -7 -191 l0 -183 136 0 c87 0 133 4 129 10 -4 6
                                    -57 10 -126 10 l-119 0 0 110 0 110 210 0 210 0 0 -39 c0 -22 5 -43 10 -46 7
                                    -4 10 31 8 107 l-3 113 -221 3 c-121 1 -223 -1 -227 -4z m433 -64 l0 -50 -210
                                    0 -210 0 0 50 0 50 210 0 210 0 0 -50z"/>
                                    <path d="M170 370 l0 -30 120 0 120 0 0 30 0 30 -120 0 -120 0 0 -30z m220 0
                                    c0 -6 -40 -10 -100 -10 -60 0 -100 4 -100 10 0 6 40 10 100 10 60 0 100 -4
                                    100 -10z"/>
                                    <path d="M44 379 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16
                                    -11z"/>
                                    <path d="M104 379 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16
                                    -11z"/>
                                    <path d="M321 216 c-28 -16 -50 -52 -51 -84 -1 -72 80 -124 142 -91 16 9 24 7
                                    44 -12 31 -29 44 -16 15 15 -19 20 -21 28 -12 44 44 83 -54 174 -138 128z
                                    m104 -31 c50 -49 15 -135 -55 -135 -41 0 -80 39 -80 80 0 41 39 80 80 80 19 0
                                    40 -9 55 -25z"/>
                                </g>
                            </svg>
                            <MenuTitle>Q&A</MenuTitle>
                            <MenuDescription>키워드를 입력하시면<br/>해당 키워드와 연관된 답변을 출력해줍니다.</MenuDescription>
                        </MenuButton>
                        <MenuButton>
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 50 50">
                                <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
                                    <path d="M210 456 c0 -24 -26 -60 -39 -54 -62 33 -61 33 -84 10 -21 -21 -21
                                    -23 -4 -51 9 -16 17 -31 17 -34 0 -15 -34 -37 -56 -37 -23 0 -25 -3 -22 -37 3
                                    -32 7 -38 34 -45 40 -10 48 -30 26 -68 -16 -28 -16 -30 5 -52 22 -22 24 -22
                                    52 -5 16 9 31 17 34 17 15 0 37 -34 37 -56 0 -23 3 -25 37 -22 32 3 38 7 45
                                    34 10 40 32 49 69 27 28 -17 30 -17 52 5 21 22 21 24 5 52 -22 38 -14 58 26
                                    68 27 7 31 13 34 45 3 34 1 37 -22 37 -22 0 -56 22 -56 37 0 3 8 18 17 34 17
                                    28 17 30 -5 52 -22 21 -24 21 -52 5 -38 -22 -58 -14 -68 26 -7 27 -13 31 -45
                                    34 -34 3 -37 1 -37 -22z m65 -28 c13 -43 55 -60 85 -33 16 14 22 15 35 5 13
                                    -11 13 -15 -2 -41 -22 -38 -6 -74 36 -84 42 -9 41 -38 -1 -50 -43 -13 -60 -55
                                    -33 -85 14 -16 15 -22 5 -35 -11 -13 -15 -13 -41 2 -38 23 -77 6 -85 -37 -9
                                    -41 -40 -41 -49 1 -10 42 -46 58 -84 36 -26 -15 -30 -15 -41 -2 -10 13 -9 19
                                    5 35 27 30 10 72 -33 85 -42 12 -43 41 -1 50 42 10 58 46 36 84 -15 26 -15 30
                                    -2 41 13 10 19 9 35 -5 30 -27 71 -10 84 33 12 42 39 42 51 0z"/>
                                    <path d="M195 305 c-33 -32 -33 -78 0 -110 32 -33 78 -33 110 0 50 49 15 135
                                    -55 135 -19 0 -40 -9 -55 -25z m95 -15 c11 -11 20 -29 20 -40 0 -26 -34 -60
                                    -60 -60 -26 0 -60 34 -60 60 0 11 9 29 20 40 11 11 29 20 40 20 11 0 29 -9 40
                                    -20z"/>
                                </g>
                            </svg>
                            <MenuTitle>준비 중...</MenuTitle>
                            <MenuDescription>새로운 기능을<br/>준비 중에 있습니다</MenuDescription>
                        </MenuButton>
                    </MainMenuListContainer>
                </section>
            </MainContentContainer>
        </MainViewContainer>
    )
}

export default MainView;