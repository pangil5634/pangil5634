import styled from "styled-components";
import { ContainerBase } from "../../Components/Layout/ContainerBase";

function HobbyPage() {
    return (
        <ContainerHobbyPage>
            <h1>HobbyPage</h1>
        </ContainerHobbyPage>
    );
}

const ContainerHobbyPage = styled(ContainerBase)`
    height : 1000px;
    padding : 0px 300px;
`;

export default HobbyPage;