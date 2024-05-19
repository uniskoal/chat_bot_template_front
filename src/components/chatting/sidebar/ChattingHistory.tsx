import { decideWidthAndHeight, flexColumnDirection } from "@/styles/CommonStyles"
import ChattingHistoryItem from "./ChattingHistoryItem"
import { styled } from "styled-components"

const NewChattingListContainer = styled.div`
    ${ flexColumnDirection };
    gap: 0.5rem;
    padding-bottom: 0.5rem;
    line-height: 1.25rem;
    font-size: 0.875rem;
`

const NewChattingList = styled.div`
    position: relative;
    margin-top: 1.75rem;
    opacity: 1;
    height: auto;

    div h3 {
        ${ decideWidthAndHeight('' , '2.25rem')};
        color: #b4b4b4;
        font-weight: 700;
        font-size: 0.85rem;
        line-height: 1rem;
        padding: 0.75rem 0.5rem 0.5rem 0.5rem;
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    ol li {
        ${ decideWidthAndHeight('' , 'auto')};
        position: relative;
        opacity: 1;
        z-index: 15;
    }
`

const ChattingHistory = () => {
    return (
        <NewChattingListContainer>
            <NewChattingList>
                <div>
                    <h3>Today</h3>
                </div>
                <ol>
                    <ChattingHistoryItem/>
                    {/* <ChattingHistoryItem/>
                    <ChattingHistoryItem/>
                    <ChattingHistoryItem/>
                    <ChattingHistoryItem/> */}
                </ol>
            </NewChattingList>
        </NewChattingListContainer>
    )
}

export default ChattingHistory