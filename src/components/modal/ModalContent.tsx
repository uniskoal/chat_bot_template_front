import { modalState } from "@/store/commonStore"
import { decideWidthAndHeight, flexJustifyEnd, textBase } from "@/styles/CommonStyles"
import { useRecoilState } from "recoil"
import { styled } from "styled-components"

const ModalHeaderContainer = styled.div`
    padding: 1rem;
    background-color: #004EA2;

    & > span {
        font-size: 1.15rem;
        color: #fff;
    }
`

const ModalDescriptionContainer = styled.div`
    min-height: 5rem;
    max-height: 18rem;
    padding: 1.5rem;
    background-color: ${ props => props.theme.mainViewBackgroundColor };
    word-wrap: break-word;
    overflow-y: auto;
    color: ${ props => props.theme.fontColor };

    & > span {
        ${ textBase('1rem', '1.4rem')};
    }

    &::-webkit-scrollbar {
        ${ decideWidthAndHeight('8px' , '') };
        margin-left: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${ props => props.theme.sidebarColor };
        border-radius: 10px;
    }
`
const ModalButtonsContainer = styled.div`
    ${ flexJustifyEnd };
    gap: 0.75rem;
    padding: 1rem;
    background-color: ${ props => props.theme.mainViewBackgroundColor };
    border-top: 1px solid rgba(0,0,0,0.1);

    & > button {
        padding: 0.5rem 1rem;
        border-width: 1px;
        border-color: ${ props => props.theme.menuBoxBorderColor };
        border-radius: 0.25rem;
        box-shadow: 4px 4px ${ props => props.theme.menuBoxBorderShadowSpread } ${ props => props.theme.menuBoxBorderShadowColor };
        transition: transform 0.3s ease;
        color: ${ props => props.theme.fontColor };
    }
`

const ModalContent = (props: { dragEvent: (e: React.MouseEvent<HTMLDivElement>) => void }) => {
    /** 모달을 구성하는 요소들의 정보 */
    const [ modalInfo , setModalInfo ] = useRecoilState(modalState);

    /** 모달 닫기 */
    const closeModal = () => {
        setModalInfo(prev => ({ ...prev , isOpen: false }))
    }
    
    return (
        <>
            {/* 머릿부분 */}
            <ModalHeaderContainer onMouseDown={props.dragEvent}>
                <span>{modalInfo.title}</span>
            </ModalHeaderContainer>
            {/* 본문 */}
            <ModalDescriptionContainer>
                <span>
                    { modalInfo.description}
                </span>
            </ModalDescriptionContainer>
            {/* 하단 */}
            <ModalButtonsContainer>
                { modalInfo.buttons.map((item , index) => 
                    <button type="button" key={index} onClick={item.active ? item.active : closeModal}>{item.buttonText}</button>
                )}
            </ModalButtonsContainer>
        </>
    )
}

export default ModalContent