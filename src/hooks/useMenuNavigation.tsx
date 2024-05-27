import { useNavigate } from "react-router-dom";

/** 메뉴에 따른 네비게이션 기능 제공 */
const useMenuNavigation = () => {
    const navigate = useNavigate();

    /** 메인 화면으로 이동 */
    const navigateMain = () => {
        navigate('/main');
    }
    
    /** 챗봇 화면으로 이동 */
    const navigateChatBotMenu = () => {
        navigate('/chat');
    }

    /** 로그인 화면으로 이동 */
    const navigateLogin = () => {
        navigate('/login');
    }

    return {
        navigateMain,
        navigateChatBotMenu,
        navigateLogin
    }
}

export default useMenuNavigation;