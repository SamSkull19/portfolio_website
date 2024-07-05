import { createBrowserRouter } from "react-router-dom";
import Home from "./HomePage/Home";
import App from "./App";
import "./index.css";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Resume from "./Resume/Resume";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/aboutMe",
                element: <AboutMe></AboutMe>
            },
            {
                path: "/projects",
                element: <Projects></Projects>
            },

            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/resume",
                element: <Resume></Resume>
            },
        ]
    },


]);

export default router;