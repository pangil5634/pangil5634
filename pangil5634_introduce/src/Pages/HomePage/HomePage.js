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

const ContainerHomePage = styled(ContainerBase)`
    background-color: ${({ theme }) => theme.colors.black_100};

    height : 1000px;

    border-top: 1px solid white;

    padding : 0px 300px;
`;

export default HomePage;