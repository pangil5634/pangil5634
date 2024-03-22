import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import MyPage from "./Pages/MyPage/MyPage";
import Header from "./Components/Header/Header";

function Routers() {
    return (
        <Routes>
            <Route element = {<Header/>}>
                <Route path="/" index="index" element={<HomePage />}/>
                <Route path="/mypage" element={<MyPage />} />
            </Route>
        </Routes>
    );
}

export default Routers;