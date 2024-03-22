import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import HobbyPage from "./Pages/HobbyPage/HobbyPage";
import Header from "./Components/Header/Header";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";

function Routers() {
    return (
        <Routes>
            <Route element = {<Header/>}>
                <Route path="/" index="index" element={<HomePage />}/>
                <Route path="/hobby" element={<HobbyPage />} />
                <Route path="/project" element={<ProjectPage />} />
            </Route>
        </Routes>
    );
}

export default Routers;