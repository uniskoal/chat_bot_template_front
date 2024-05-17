import { atom } from "recoil";

/** 라이트/다크모드 제어용 상태 */
export const themeState = atom({
    key: 'theme',
    default: true
})

/** 사이드바 영역 존재 여부 확인 */
export const sideBarState = atom({
    key: 'sideBar',
    default: true
});