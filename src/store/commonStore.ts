import { ModalStateType } from "@/types/store/commonStore";
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

/** 모달을 열 떄의 필요한 상태 모음 */
export const modalState = atom<ModalStateType>({
    key: 'modal',
    default: {
        isOpen: false,
        title: '안내',
        description: '이 헌법은 1988년 2월 25일부터 시행한다. 다만, 이 헌법을 시행하기 위하여 필요한 법률의 제정·개정과 이 헌법에 의한 대통령 및 국회의원의 선거 기타 이 헌법시행에 관한 준비는 이 헌법시행 전에 할 수 있다.',
        buttons: [
            { buttonText: '닫기' , active: null }
        ],
    }
})