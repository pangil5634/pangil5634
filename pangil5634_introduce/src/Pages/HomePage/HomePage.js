import styled from "styled-components";
import { ContainerBase } from "../../Components/Layout/ContainerBase";
import IntroArea from "./Components/IntroArea";

function HomePage() {
    return (
        <ContainerHomePage>
            {/* <h1>HomePage</h1> */}
            {/* <h3>Content</h3> */}
            <IntroArea/>
        </ContainerHomePage>
    )
}

const ContainerHomePage = styled.div`
    height : 1000px;
`;

export default HomePage;