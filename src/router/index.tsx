import App from "@/App";
import ChattingAiContainer from "@/view/chatting/ChattingAiContainer";
import MainView from "@/view/main/MainView";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/main',
                element: <MainView/>,
            },
            {
                path: '/chat',
                element: <ChattingAiContainer/>,
            }
        ]
    },
    
])

export default router