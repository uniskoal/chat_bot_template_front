import { decideWidthAndHeight } from "@/styles/CommonStyles";
import ThemeStyles from "@/styles/ThemeStyles";
import styled, { ThemeProvider } from "styled-components";
import SideBar from "./view/chatting/SideBar";
import ChattingContent from "./view/chatting/ChattingContent";
import { useRecoilState } from "recoil";
import { themeState } from "./store/commonStore";

const Container = styled.div`
    ${ decideWidthAndHeight('100%' , '100%') }
    overflow: hidden;
    display: flex;
    position: relative;
    color: ${ props => props.theme.fontColor}
`

const ChattingAiContainer = (): JSX.Element => {
    /** 라이트/다크 모드 제어용 상태 */
    const [ theme ] = useRecoilState(themeState);


    return (
        <>
            <ThemeProvider theme={theme ? ThemeStyles.lightTheme : ThemeStyles.darkTheme}>
                <Container>
                    <SideBar/>
                    <ChattingContent/>
                </Container>
            </ThemeProvider>
        </>
    )
}

export default ChattingAiContainer;