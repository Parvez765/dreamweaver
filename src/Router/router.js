import Main from "../Layout/Main";
import HomePage from "../Pages/HomePage/HomePage";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path : "/", element: <Main/>, children: [
            {
                path : '/', element: <HomePage/>
            }
        ]
    }
])

export default router