import ModalFreeModeContainer from "@/components/modal/ModalFreeModeContainer"
import ModalOverlayModeContainer from "@/components/modal/ModalOverlayModeContainer"
import { modalState } from "@/store/commonStore"
import { useRecoilState } from "recoil"

const useModal = () => {
    /** 모달을 구성하는 요소들의 정보 */
    const [ modalInfo , setModalInfo ] = useRecoilState(modalState);

    /** 기본적인 형태의 모달 열기 [오버레이 O] / 추후에 문자열 값 받는 거 까지 추가 예정 / 24/06/02 기준 쓸 데가 없음 */
    const openGuideModal = (description: string) => {
        setModalInfo(prev => ({ ...prev , description , isOpen: true }));
    }

    /** 모달의 기본 구조를 렌더링 */
    const createModal = () => {

        /** 상태에 따라 모달을 렌더링 할지 말지 여부를 결정 */
        if(!modalInfo.isOpen) return null;

        return <ModalOverlayModeContainer/>
    }

    return {
        createModal,
        openGuideModal,
    }
}

export default useModal;