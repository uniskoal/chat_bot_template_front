import React from "react";
import ReactDOM  from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import GlobalStyle from "./styles/GlobalStyle";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        <GlobalStyle/>
        <RecoilRoot>
            <RouterProvider router={router}/>
        </RecoilRoot>
    </React.StrictMode>
)