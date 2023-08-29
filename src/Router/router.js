import Main from "../Layout/Main";
import AboutPage from "../Pages/AboutPage/About";
import ContactPage from "../Pages/ContactPage/ContactPage";
import HomePage from "../Pages/HomePage/HomePage";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path : "/", element: <Main/>, children: [
            {
                path : '/', element: <HomePage/>
            },
            {
                path : '/about', element: <AboutPage/>
            },
            {
                path: '/contact', element: <ContactPage/>
            }
        ]
    }
])

export default router