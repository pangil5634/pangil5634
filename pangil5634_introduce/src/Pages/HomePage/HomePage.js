import styled from "styled-components";
import { ContainerBase } from "../../Components/Layout/ContainerBase";

function HomePage() {
    return (
        <ContainerHomePage>
            <h1>HomePage</h1>
            <h3>Content</h3>
        </ContainerHomePage>
    )
}

const ContainerHomePage = styled.div`
    height : 1000px;
`;

export default HomePage;