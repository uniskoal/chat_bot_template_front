import ChattingAiContainer from "@/ChattingAiContainer";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: '/',
        element: <ChattingAiContainer/>,
    },
])

export default router