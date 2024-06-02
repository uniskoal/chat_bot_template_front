import { Outlet } from "react-router-dom";
import { ThemeProvider, styled } from "styled-components";
import { decideWidthAndHeight } from "./styles/CommonStyles";
import { useRecoilState } from "recoil";
import { themeState } from "./store/commonStore";
import ThemeStyles from "./styles/ThemeStyles";
import useModal from "./hooks/modal/useModal";

const Container = styled.div`
    ${ decideWidthAndHeight('100%' , '100%') }
    overflow: hidden;
    display: flex;
    position: relative;
    color: ${ props => props.theme.fontColor};
    font-family: 'Custom Gothic';
`
const App = () => {
    /** 라이트/다크 모드 제어용 상태 */
    const [ theme ] = useRecoilState(themeState);
    /** 모달 */
    const { createModal } = useModal();
    
    return (
        <>
            <ThemeProvider theme={theme ? ThemeStyles.lightTheme : ThemeStyles.darkTheme}>
                <Container>
                    <Outlet/>
                </Container>
                { createModal() }
            </ThemeProvider>
        </>
    )
}

export default App;