import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import MyPage from "./Pages/MyPage/MyPage";

function Routers() {
    return (
        <Routes>
            <Route path="/" index="index" element={<HomePage />}/>
            <Route path="/mypage" element={<MyPage/>}/>
        </Routes>
    );
}

export default Routers;