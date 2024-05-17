import SideBarSlider from "@/components/chatting/sidebar/SideBarSlider"
import { themeState } from "@/store/commonStore"
import { SvgIcon, decideWidthAndHeight, flexAlignCenter, flexColumnDirection, flexJustifyCenter, textBase } from "@/styles/CommonStyles"
import { useRecoilState } from "recoil"
import styled from "styled-components"

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

const ChattingMainHeaderOptionsContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    padding-right: 0.25rem;
`

const ChattingMainHeaderOptionButton = styled.button`
    ${ decideWidthAndHeight('2.25rem' , '2.25rem') };
    ${ flexAlignCenter};
    position: relative;
    padding: 0.25rem 0.5rem;
    justify-content: center;
    border-radius: 0.5rem;
    white-space: nowrap;
    border-width: 1px;
    border-color: ${ props => props.theme.iconBorderColor };

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

    & > svg {
        ${ decideWidthAndHeight('66.667%' , '66.667%') };
        color: ${ props => props.theme.fontColor};
    }
`

const MainQuestion = styled.div`
    ${ textBase('1.5rem' , '2rem') }
    margin-bottom: 1.25rem;
    font-weight: 600;
    color: ${ props => props.theme.fontColor};
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
    /** 라이트/다크 모드 제어용 상태 */
    const [ theme , setTheme ] = useRecoilState(themeState);

    /** 라이트/다크 모드 상태 변경 실행 */
    const changeTheme = () => {
        setTheme(prev => !prev);
    }

    return (
        <ChattingMainContentContainer>
            <div>
                <SideBarSlider/>
                <ChattingMainContent>
                    {/* 결과 목록 */}
                    <div>
                        <div>
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
                                <ChattingMainHeaderOptionsContainer>
                                    <ChattingMainHeaderOptionButton>
                                        <div>
                                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd"/>
                                            </svg>
                                        </div>
                                    </ChattingMainHeaderOptionButton>
                                    <ChattingMainHeaderOptionButton onClick={changeTheme}>
                                        <div>
                                            { theme ? 
                                                <svg  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z" clipRule="evenodd"/>
                                                </svg>
                                                :
                                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z" clip-rule="evenodd"/>
                                                </svg>
                                            }
                                        </div>
                                    </ChattingMainHeaderOptionButton>
                                </ChattingMainHeaderOptionsContainer>
                            </ChattingMainHeaderContainer>
                            
                            <MainIconContainer>
                                {/* 메인 아이콘 */}
                                <div>
                                    <div>
                                        <MainIcon>
                                            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" role="img"><text x="-9999" y="-9999">ChatGPT</text><path d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z" fill="currentColor"></path></svg>
                                        </MainIcon>
                                    </div>
                                </div>
                                {/* 소개 문구 */}
                                <MainQuestion>
                                    오늘은 무엇을 도와드릴까요?
                                </MainQuestion>
                            </MainIconContainer>
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