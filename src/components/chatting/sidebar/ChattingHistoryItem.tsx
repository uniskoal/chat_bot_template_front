import { SvgIcon, absolutePositionStyle, decideWidthAndHeight, flexAlignCenter } from "@/styles/CommonStyles"
import styled from "styled-components"


const ChattingSideMenuButtonContainer = styled.div`
    ${ absolutePositionStyle };
    ${ decideWidthAndHeight('2rem' , '') };
    background: linear-gradient(270deg , ${ props => props.theme.sidebarBackgroundColor } 5% , rgba(255,255,255,0));
`
const ChattingSideMenuButtons = styled.div`
    ${ absolutePositionStyle };
    display: none;
    padding-right: 0.5rem;
    gap: 0.375rem;
    align-items: center;
`
const ChattingSideMenuButton = styled.button`
    ${ flexAlignCenter };
    color: ${ props => props.theme.sidebarMenuButtonColor };
    justify-content: center;
`

const ChattingTitleContainer = styled.div`
    position: relative;
    border-radius: 0.5rem;

    a {
        ${ flexAlignCenter }
        gap: 0.5rem;
        padding: 0.5rem;
    }

    &:hover {
        background-color: ${ props => props.theme.sidebarBackgroundColorHover }
    }

    &:hover ${ChattingSideMenuButtonContainer} {
        ${ decideWidthAndHeight('4rem' , '') };
        background: linear-gradient(270deg , ${ props => props.theme.sidebarBackgroundColorHover } 35% , rgba(255,255,255,0));
    }

    &:hover ${ChattingSideMenuButtons} {
        display: flex;
    }
`
const ChattingTitle = styled.div`
    position: relative;
    flex-grow: 1;
    overflow: hidden;
    white-space: nowrap;
`


const ChattingHistoryItem = () => {
    return (
        <li>
            <ChattingTitleContainer>
                <a href="/">
                    <ChattingTitle>
                        채팅 목록[구현 준비 중]
                        <ChattingSideMenuButtonContainer></ChattingSideMenuButtonContainer>
                    </ChattingTitle>
                </a>
                <ChattingSideMenuButtons>
                    <ChattingSideMenuButton>
                        <span>
                            <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z" fill="currentColor"></path></SvgIcon>
                        </span>
                    </ChattingSideMenuButton>
                </ChattingSideMenuButtons>
            </ChattingTitleContainer>
        </li>
    )
}

export default ChattingHistoryItem