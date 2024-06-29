import SideBar from "./SideBar";
import ChattingContent from "./ChattingContent";
import ChattingContentErrorBoundary from "./errorFallback/ChattingContentErrorBoundary";

const ChattingAiContainer = (): JSX.Element => {

    return (
        <>
            <SideBar/>
            <ChattingContent/>
        </>
    )
}

export default ChattingAiContainer;