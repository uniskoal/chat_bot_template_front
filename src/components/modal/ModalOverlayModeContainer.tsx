import { decideWidthAndHeight, flexAlignCenter, flexJustifyCenter } from "@/styles/CommonStyles"
import { useRef, useState } from "react"
import { styled } from "styled-components"
import ModalContent from "./ModalContent"
import { useRecoilState } from "recoil"
import { modalState } from "@/store/commonStore"

const ModalOverlayMode = styled.div`
    ${ flexAlignCenter };
    ${ flexJustifyCenter };
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 100;
`

const ModalContentContainer = styled.div`
    ${ decideWidthAndHeight('100%' , '') };
    max-width: 40rem;
`

const ModalOverlayModeContainer = () => {
    /** 모달을 구성하는 요소들의 정보 */
    const [ modalInfo , setModalInfo ] = useRecoilState(modalState);
    /** 모달 전체 요소 */
    const modalContainer = useRef<HTMLDivElement | null>(null);
    /** 요소 드래그 상태인지 확인 */
    const [isDragging, setIsDragging] = useState(false);
    /** 드래그에 따라 실시간으로 추척할 위치 값 */
    const [position, setPosition] = useState({ x: 0, y: 0 });
    /** 모달을 드래그 하기 전 최초 위치 */
    const [initialMousePosition, setInitialMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setInitialMousePosition({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isDragging) {
            const newX = e.clientX - initialMousePosition.x;
            const newY = e.clientY - initialMousePosition.y;
            setPosition({ x: newX, y: newY });
        }
    };
    
    const handleMouseUp = () => {
        setIsDragging(false);
    };

    /** 모달 닫기 */
    const closeModal = () => {
        setModalInfo(prev => ({ ...prev , isOpen: false }))
    }

    /** 모달 외부 영역을 클릭했을 시 모달 닫기 */
    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
        if (modalContainer.current && !modalContainer.current.contains(e.target as HTMLDivElement)) {
            closeModal();
        }
    };
    
    return (
        <ModalOverlayMode onClick={handleClickOutside}>
            <ModalContentContainer ref={modalContainer} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>
                <ModalContent dragEvent={handleMouseDown}/>
            </ModalContentContainer>
        </ModalOverlayMode>
    )
}

export default ModalOverlayModeContainer