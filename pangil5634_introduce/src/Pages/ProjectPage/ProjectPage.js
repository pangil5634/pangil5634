import styled from "styled-components";
import { ContainerBase } from "../../Components/Layout/ContainerBase";

function ProjectPage() {
    return (
        <ContainerProjectPage>
            <h1>ProjectPage</h1>
        </ContainerProjectPage>
    );
}

const ContainerProjectPage = styled(ContainerBase)`
    height : 1000px;
    padding : 0px 300px;
`;

export default ProjectPage;