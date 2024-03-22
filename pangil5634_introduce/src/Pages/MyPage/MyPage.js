import styled from "styled-components";
import { ContainerBase } from "../../Components/Layout/ContainerBase";

function MyPage() {
    return (
        <ContainerMyPage>
            <h1>MyPage</h1>
        </ContainerMyPage>
    );
}

const ContainerMyPage = styled(ContainerBase)`
    color : ${({ theme }) => theme.colors.peach_100};

`;

export default MyPage;