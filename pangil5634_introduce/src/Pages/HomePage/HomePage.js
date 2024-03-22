import styled from "styled-components";
import { ContainerBase } from "../../Components/Layout/ContainerBase";

function HomePage() {
    return (
        <ContainerHomePage>
            <h1>HomePage</h1>
        </ContainerHomePage>
    )
}

const ContainerHomePage = styled(ContainerBase)`
`;

export default HomePage;