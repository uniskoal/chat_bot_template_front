import App from "@/App";
import ChattingAiContainer from "@/view/chatting/ChattingAiContainer";
import MainView from "@/view/main/MainView";
import { Navigate, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true, element: <Navigate to="/main" replace />,
            },
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