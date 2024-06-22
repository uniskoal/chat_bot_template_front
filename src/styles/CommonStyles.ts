import styled, { css } from "styled-components";

/** 
 * @description width , height 값을 인수로 받아서 설정하는 함수 
 * @param width 너비 값을 입력합니다. 값을 설정하고 싶지 않으면 빈 문자열을 입력해 주세요
 * @param height 높이 값을 입력합니다. 값을 설정하고 싶지 않으면 빈 문자열을 입력해 주세요
 * */
export const decideWidthAndHeight = (width: string  , height: string) => {
    return { width , height };
} 

/** 
 * @description font-size , lineHeight 값을 인수로 받아서 설정하는 함수
 * @param fontSize 폰트 사이즈 값을 입력합니다. 값을 설정하고 싶지 않으면 빈 문자열을 입력해 주세요
 * @param lineHeight 폰트 세로간격 값을 입력합니다. 값을 설정하고 싶지 않으면 빈 문자열을 입력해 주세요
 * */
export const textBase = (fontSize: string , lineHeight: string) => {
    return { fontSize , lineHeight }
}

/**
 * @description flex 디자인 적용시에 column 형태로 적용되는 부분이 많아 공용 스타일로 분리
 */
export const flexColumnDirection = css`
    display: flex;
    flex-direction: column;
`

/**
 * @description flex 디자인 적용시에 align-item 속성을 center로 적용하는 경우가 많아 공용 스타일로 분리
 */
export const flexAlignCenter = css`
    display: flex;
    align-items: center; 
`

/**
 * @description flex 디자인 적용시에 justify-content 속성을 center로 적용하는 경우가 많아 공용 스타일로 분리
 */
export const flexJustifyCenter = css`
    display: flex;
    justify-content: center; 
`

/**
 * @description flex 디자인 적용시에 justify-content 속성을 end로 적용하는 경우
 */
export const flexJustifyEnd = css`
    display: flex;
    justify-content: end; 
`

/**
 * @description flex 디자인 적용시에 justify-content 속성을 space-between로 적용하는 경우
 */
export const flexJustifyBetween = css`
    display: flex;
    justify-content: space-between;
`

/**
 * @description 스크롤에 영향을 받지 않는 영역을 만드는 부분이 몇 있어 공용 스타일로 분리
 */
export const stickyPositionStyle = css`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
`

/**
 * @description absolute 포지션을 잡는 부분이 많아 공용 스타일로 정의
 */
export const absolutePositionStyle = css`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
`

/**
 * @description svg 이미지 공용 스타일
 */
export const SvgIcon = styled.svg`
    ${ decideWidthAndHeight('18px' , '18px')};
    border: none;
    flex-shrink: 0;
    strokeWidth: 1.5;
`

/**
 * @description 원래는 유저 프로필 이미지 용이었으나 24/05/18 이후로 유저 아이콘으로 변경
 */
export const ProfileImg = styled.div`
    ${ flexAlignCenter };
    justify-content: center;
    overflow: hidden;
    border-radius: 9999px;
    flex-shrink: 0;
`
