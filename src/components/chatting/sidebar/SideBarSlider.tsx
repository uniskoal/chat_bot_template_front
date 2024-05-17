import { sideBarState } from "@/store/commonStore";
import { decideWidthAndHeight, flexAlignCenter, flexColumnDirection } from "@/styles/CommonStyles"
import { useRecoilState } from "recoil";
import styled from "styled-components"


const SideBarSliderContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 0;
    z-index: 40;

    & > button > span > div:first-child {
        ${ decideWidthAndHeight('2rem' , '72px') };
        ${ flexAlignCenter };
        justify-content: center;
    }
`

const SliderIconTop = styled.div`
    ${ decideWidthAndHeight('0.25rem' , '0.75rem') };
    background: ${ props => props.theme.sidebarControlColor };
    border-radius: 9999px;
    transform: translateY(0.15rem) rotate(0deg) translateZ(0px);
`

const SliderIconBottom = styled(SliderIconTop)`
    transform: translateY(-0.15rem) rotate(0deg) translateZ(0px);
`;

const SliderIconContainer = styled.div`
    ${ decideWidthAndHeight('1.5rem', '1.5rem')};
    ${ flexColumnDirection };
    ${ flexAlignCenter };
    transition: transform 0.35s ease , rotate 0.35s ease;

    &:hover ${SliderIconTop} {
        background: ${ props => props.theme.sidebarControlHover };
        transition-duration: 0.5s;
        transform: translateY(0.15rem) rotate(25deg) translateZ(0px);
    }

    &:hover ${SliderIconBottom} {
        background: ${ props => props.theme.sidebarControlHover };
        transition-duration: 0.5s;
        transform: translateY(-0.15rem) rotate(-25deg) translateZ(0px);
    }
`

const SideBarSlider = () => {
    /** 사이드바 영역 제어 */
    const [ isShownSideBar , setIsShownSideBar ] = useRecoilState(sideBarState);

    /** 사이드바 애니메이션 실행 */
    const animateSideBar = () => {
        setIsShownSideBar(prev => !prev);
    }
    
    return (
        <SideBarSliderContainer>
            <button>
                <span>
                    <div>
                        <SliderIconContainer 
                            style={ { transform: `translateX(${isShownSideBar ? '300px' : '0px' }) translateY(-50%) rotate(${isShownSideBar ? '0deg' : '180deg'}) translateZ(0px)`}}
                            onClick={animateSideBar}
                        >
                            <SliderIconTop/>
                            <SliderIconBottom/>
                        </SliderIconContainer>
                    </div>
                </span>
            </button>
        </SideBarSliderContainer>
    )
}

export default SideBarSlider