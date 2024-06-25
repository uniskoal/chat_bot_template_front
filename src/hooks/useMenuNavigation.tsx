import { useNavigate } from "react-router-dom";

/** 메뉴에 따른 네비게이션 기능 제공 */
const useMenuNavigation = () => {
    const navigate = useNavigate();

    /** 메인 화면으로 이동 */
    const navigateMain = () => {
        navigate('/main');
    }

    /** 로그인 화면으로 이동 */
    const navigateLogin = () => {
        navigate('/login');
    }
    
    /** 챗봇 화면으로 이동 */
    const navigateChatBotMenu = () => {
        navigate('/chat');
    }

    /** Q&A 화면으로 이동 */
    const navigateQnA = () => {
        navigate('/QnA');
    }

    /** 로그인 화면으로 이동 */
    const navigateFileSearch = () => {
        navigate('/FileSearch');
    }

    return {
        navigateLogin,
        navigateMain,
        navigateChatBotMenu,
        navigateQnA,
        navigateFileSearch
    }
}

export default useMenuNavigation;