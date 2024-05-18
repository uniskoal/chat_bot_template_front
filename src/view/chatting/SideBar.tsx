import ChattingHistoryContainer from "@/components/chatting/sidebar/ChattingHistoryContainer"
import UserSetting from "@/components/chatting/sidebar/UserSetting"
import { decideWidthAndHeight, flexColumnDirection } from "@/styles/CommonStyles"
import { sideBarState } from "@/store/commonStore";
import { useRecoilState } from "recoil"
import styled from "styled-components"

const Aside = styled.aside`
    ${ decideWidthAndHeight('300px', '100%') }
    overflow-x: hidden;
    background-color: ${props => props.theme.sidebarBackgroundColor};
    flex-shrink: 0;
    transition: width 0.35s ease , visibility 0.35s ease;
`

const Nav = styled.nav`
    ${ decideWidthAndHeight('100%', '100%') }
    ${ flexColumnDirection }
    padding-bottom: 0.875rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
`

const SideBar = () => {
    /** 사이드바 영역 제어 */
    const [ isShownSideBar ] = useRecoilState(sideBarState);

    return (
        <Aside style={ { width: (isShownSideBar) ? '300px' : '0px' , visibility: (isShownSideBar) ? 'visible' : 'hidden' }}>
            <Nav>
                <ChattingHistoryContainer/>
                {/* 2024/05/18 현재 사용하지 않음 */}
                {/* <UserSetting/> */}
            </Nav>
        </Aside>
    )
}

export default SideBar

