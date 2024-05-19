import chatSinSungIcon from "$images/shinsungIcon.png"
import styled from "styled-components"
import { decideWidthAndHeight, flexAlignCenter, flexColumnDirection, stickyPositionStyle } from "@/styles/CommonStyles";
import ChattingHistory from "./ChattingHistory";


const ChattingListContainer = styled.div`
    -webkit-mask-image: linear-gradient(to top, transparent, black), linear-gradient(to left, transparent 17px, black 17px);
    -webkit-mask-size: 100% 20000px;
    -webkit-mask-position: left bottom;
    mask-image: linear-gradient(to top, transparent, black),linear-gradient(to left, transparent 17px, black 17px);
    mask-size: 100% 20000px;
    mask-position: left bottom;
    transition: mask-position 0.3s, -webkit-mask-position 0.3s;
    flex: 1 1 0%;
    padding-right: 0.8rem;
    overflow-y: auto;
    margin-right: -0.5rem;

    &:hover {
        -webkit-mask-position: left top;
        mask--position: left top;
    }

    &::-webkit-scrollbar {
        ${ decideWidthAndHeight('8px' , '') };
        margin-left: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${ props => props.theme.sidebarColor };
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background-color: ${ props => props.theme.sidebarBackgroundColor };
    }
`;

const NewChattingContainer = styled.div`
    ${ stickyPositionStyle };
    padding-top: 0.875rem;
    background-color: ${ props => props.theme.sidebarBackgroundColor };
    z-index: 20;
`

const NewChattingButton = styled.a`
    ${ flexAlignCenter };
    ${ decideWidthAndHeight('','2.5rem') };
    font-weight: 500;
    padding: 0 0.5rem 0 0.6rem;
    background-color: ${ props => props.theme.sidebarBackgroundColor };
    border-radius : 0.5rem;
    gap : 0.8rem;

    &:hover {
        background-color : ${ props => props.theme.sidebarBackgroundColorHover };
    }
`

const ChattingBotIcon = styled.div`
    ${ decideWidthAndHeight('1.75rem','1.75rem') };
    ${ flexAlignCenter };
    flex-shrink: 0;

    img {
        border-radius: 50%;
    }
`
const ChattingBotMessage = styled.div`
    align-items: center;
    font-weight: 600;
`

const ChattingHistoryContainer = () => {
    return (
        <ChattingListContainer>
            {/* 새로운 채팅 열기 */}
            <NewChattingContainer>
                <div>
                    <NewChattingButton href="/">
                        <ChattingBotIcon>
                            <img 
                                src={chatSinSungIcon}
                                width="26px"
                                height="21px"
                            />
                        </ChattingBotIcon>
                        <ChattingBotMessage>
                            새 채팅
                        </ChattingBotMessage>
                    </NewChattingButton>
                </div>
            </NewChattingContainer>
            {/* --------------- */}
            {/* 채팅 내역 목록 */}
            <ChattingHistory/>
            {/* --------------- */}
        </ChattingListContainer>
    )
}

export default ChattingHistoryContainer