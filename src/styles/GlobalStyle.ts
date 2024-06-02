import { createGlobalStyle } from "styled-components";
import NEXONGothicWOFF from "@/assets/fonts/NEXON_Lv2_Gothic.woff";

const GlobalStyle = createGlobalStyle`
/* reset.css */

* {
    box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center, button ,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    border: 0 solid #e3e3e3;
    vertical-align: baseline;
    box-sizing: border-box;
    border-collapse: collapse;
}
/* HTML5 display-role reset for older browsers */

html,body,article {
    font-size: 16px;
    width: 100%;
    height: 100%;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}

svg {
    display: block;
}

textarea {
    appearance: none;
    border-color: #9b9b9b;
    border-radius: 0;
    border-width: 1px;
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 0.5rem 0.75rem;
    background-color: #fff;
}

input {
    border-radius: 0;
    border: none;
    background: 0 0;
    appearance: none;
    outline: 0;
    text-decoration: none;
    cursor: pointer;
}

textarea {
    resize: vertical;
}

textarea , button {
    font-feature-settings: inherit;
    color: inherit;
    font-family: inherit;
    font-variation-settings: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0;
}

textarea:focus {
    outline: none;
}

button {
    background-image: none;
    text-transform: none;
    cursor: pointer;
    text-transform: none;
    font-feature-settings: inherit;
    font-family: inherit;
    font-size: 100%;
    font-variation-settings: inherit;
    font-weight: inherit;
    background-color: transparent;
    letter-spacing: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0;
}

a {
    color: inherit;
    text-decoration: inherit;
}

/** 폰트 **/

@font-face {
    font-family: 'Custom Gothic';
    src: local('Custom Gothic'), url(${NEXONGothicWOFF}) format('woff');
    font-weight: normal;
    font-style: normal;
}

/**
    하드리셋 CSS

    CSS는 크롬 , 엣지 , 사파리와 같은 브라우저 별 마다 기본 내장 스타일이 다르다
    그렇기에 초기에 모든 내장 스타일을 지워버리냐 모든 브라우저에 합의점을 찾아서 적당히 최적화를 할 것이냐
    둘 중에 하나로 나뉘지만, 지금 우리 둘의 상황으로 봤을 때 합의점을 찾는 방식으로 진행했다간 추후에 다른 브라우저에서
    새로운 내장 스타일을 업데이트하면 이를 계속 추적하여 관리해줘야 한다.
    그러기에 모든 CSS를 브라우저 상관없이 리셋해서 사용하는 방식을 채택했다.

    이 파일은 어느 브라우저든 상관없이 내장 스타일을 전부 리셋시키는 파일이다. 
*/ 
`

export default GlobalStyle