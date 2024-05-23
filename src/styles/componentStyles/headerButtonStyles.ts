import { styled } from "styled-components";
import { decideWidthAndHeight, flexAlignCenter } from "../CommonStyles";

/** 헤더에 포함된 기능 버튼들을 포함하는 컨테이너 스타일 */
export const HeaderOptionsContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    padding-top: 0.25rem;
    padding-right: 0.25rem;
`

export const HeaderOptionButton = styled.button`
    ${ decideWidthAndHeight('2.25rem' , '2.25rem') };
    ${ flexAlignCenter};
    position: relative;
    padding: 0.25rem 0.5rem;
    justify-content: center;
    border-radius: 0.5rem;
    white-space: nowrap;
    border-width: 1px;
    border-color: ${ props => props.theme.iconBorderColor };

    & > div:first-child {
        ${ decideWidthAndHeight('100%' , '') }
        ${ flexAlignCenter };
        justify-content: center;
        gap: 0.5rem;
    }

    & > div > svg {
        color: ${ props => props.theme.fontColor }
    }
`