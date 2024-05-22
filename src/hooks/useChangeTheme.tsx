import { themeState } from "@/store/commonStore";
import { useRecoilState } from "recoil";

const useChangeTheme = () => {
    /** 라이트/다크 모드 제어용 상태 */
    const [ theme , setTheme ] = useRecoilState(themeState);

    /** 라이트/다크 모드 상태 변경 실행 */
    const changeTheme = () => {
        setTheme(prev => !prev);
    }

    return {
        theme,
        changeTheme
    }
}

export default useChangeTheme;