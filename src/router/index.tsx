import App from "@/App";
import ChattingAiContainer from "@/view/chatting/ChattingAiContainer";
import QnAMainContent from "@/view/QnA/QnAMainContent";
// import FileSearchAiContent from "@/view/FileSearch/FileSearchAiContent";
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
                element: <QnAMainContent/>
            }
            // {
            //     path: '/FileSearch',
            //     element: <FileSearchViewMain/>
            // }
        ]
    },
])

export default router