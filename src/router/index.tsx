import App from "@/App";
import ChattingAiContainer from "@/view/chatting/ChattingAiContainer";
import QnAMainAiContent from "@/view/QnA/QnAMainAiContent";
import LoginView from "@/view/main/LoginView";
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
                element: <MainView/>
            },
            {
                path: '/login',
                element: <LoginView/>
            },
            {
                path: '/chat',
                element: <ChattingAiContainer/>
            },
            {
                path: '/QnA',
                element: <QnAMainAiContent/>
            },
            {
                path: '/FileSearch',
                element: <></>
            }
        ]
    },
])

export default router