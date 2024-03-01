import { Link } from "react-router-dom";
import styled from "styled-components";
import { ContainerBase } from "../../Components/Layout/ContainerBase";
import HomePageContent1 from "./Container/ContainerHomePageContent1";
import HomePageContent2 from "./Container/ContainerHomePageContent2";

function HomePage() {
    return (
        <ContainerHomePage>
            <HomePageContent1/>
            <HomePageContent2/>
            {/* <Link to = "/mypage"><button>마이페이지</button></Link> */}
        </ContainerHomePage>
    )
}

const ContainerHomePage = styled(ContainerBase)`
    color : ${({ theme }) => theme.colors.lemon_100 || 'skyblue'};
`;

export default HomePage;