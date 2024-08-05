import { createRoot} from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App.jsx";


const rootMain = createRoot(document.getElementById("body"));

rootMain.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
