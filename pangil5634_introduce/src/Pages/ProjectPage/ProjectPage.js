import styled from "styled-components";
import { ContainerBase } from "../../Components/Layout/ContainerBase";

function ProjectPage() {
    return (
        <ContainerProjectPage>
            <h1>ProjectPage</h1>
        </ContainerProjectPage>
    );
}

const ContainerProjectPage = styled.div`
    height : 1000px;
`;

export default ProjectPage;