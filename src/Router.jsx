import { createBrowserRouter } from "react-router-dom";
import Home from "./HomePage/Home";
import App from "./App";
import "./index.css";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";

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
                path: "/skills",
                element: <Skills></Skills>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
        ]
    },


]);

export default router;