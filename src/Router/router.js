import Portraits from "../Components/Portraits/Portraits";
import SingleFeaturedComponent from "../Components/SingleFeaturedComponent/SingleFeaturedComponent";
import Main from "../Layout/Main";
import AboutPage from "../Pages/AboutPage/About";
import ContactPage from "../Pages/ContactPage/ContactPage";
import CouplePage from "../Pages/CouplePage/CouplePage";
import FeaturedPage from "../Pages/FeaturedPage/FeaturedPage";
import HomePage from "../Pages/HomePage/HomePage";
import MomentPage from "../Pages/MomentPage/MomentPage";

import PortraitsPage from "../Pages/PortraitsPage/PortraitsPage";
import latestData from "../data/latestData";

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
            },
            {
                path : "/featured", element : <FeaturedPage/>
            },
            {
                path : "/featured/:id",
                loader: ({params}) => {
                    const featured = latestData?.find((ld) => ld?.id === parseInt(params?.id))
                    return featured
                },
                element : <SingleFeaturedComponent/>
            },
            {
                path : "/portrait", 
                element : <PortraitsPage/>
            },
            {
                path : "/couple",
                element : <CouplePage/>
            },
            {
                path : "/moment",
                element : <MomentPage/>
            }
        ]
    }
])

export default router