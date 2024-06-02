import { decideWidthAndHeight } from "@/styles/CommonStyles"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { styled } from "styled-components"
import ModalContent from "./ModalContent"
import { useRecoilState } from "recoil"
import { modalState } from "@/store/commonStore"

const ModalFreeMode = styled.div`
    ${ decideWidthAndHeight('100%' , '') };
    max-width: 40rem;
    position: fixed;
    z-index: 100; 

    & > div {
        border-width: 1px;
        border-color: ${ props => props.theme.menuBoxBorderColor };
        box-shadow: 4px 4px ${ props => props.theme.menuBoxBorderShadowSpread } ${ props => props.theme.menuBoxBorderShadowColor };
        transition: transform 0.3s ease;
    }
`

const ModalFreeModeContainer = () => {
    /** 모달을 구성하는 요소들의 정보 */
    const [ modalInfo , setModalInfo ] = useRecoilState(modalState);
    /** 모달 전체 요소 */
    const modalContainer = useRef<HTMLDivElement | null>(null);
    /** 요소 드래그 상태인지 확인 */
    const [isDragging, setIsDragging] = useState(false);
    /** 드래그에 따라 실시간으로 추척할 위치 값 */
    const [position, setPosition] = useState({ x: 0 , y: 0 });
    /** 모달을 드래그 하기 전 최초 위치 */
    const [initialMousePosition, setInitialMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setInitialMousePosition({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        
        const newX = e.clientX - initialMousePosition.x;
        const newY = e.clientY - initialMousePosition.y;
        setPosition({ x: newX, y: newY });
    };
    
    const handleMouseUp = () => {
        setIsDragging(false);
    };

    /** 모달 닫기 */
    const closeModal = () => {
        setModalInfo(prev => ({ ...prev , isOpen: false }))
    }

    /** 렌더링 이후 모달을 정가운데에 위치 시킴 */
    useLayoutEffect(() => {
        if(modalContainer.current) {
            setPosition({
                x: (window.innerWidth - modalContainer.current.offsetWidth) / 2,
                y: (window.innerHeight - modalContainer.current.offsetHeight) / 2
            });
        }
    }, []);

    useEffect(() => {
        /** 모달 외부 영역을 클릭했을 시 모달 닫기 */
        const handleClickOutside = (e: MouseEvent) => {
            if (modalContainer.current && !modalContainer.current.contains(e.target as HTMLDivElement)) {
                closeModal();
            }
        };

        if (modalInfo.isOpen) 
            document.addEventListener('mousedown', handleClickOutside);
        else
            document.removeEventListener('mousedown', handleClickOutside);
      
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    } , [modalInfo.isOpen , modalInfo.overlay])

    return (
        <ModalFreeMode ref={modalContainer} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} style={{ top: position.y, left: position.x }}>
            <ModalContent dragEvent={handleMouseDown}/>
        </ModalFreeMode>
    )
}

export default ModalFreeModeContainer

// onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} style={{ transform: `translate(${position.x}px, ${position.y}px)` }}