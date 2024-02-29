import styled from "styled-components";

function MyPage() {
    return (
        <ContainerMyPage>
            <h1>MyPage</h1>
        </ContainerMyPage>
    );
}

const ContainerMyPage = styled.div`
    color : ${({ theme }) => theme.colors.peach_100 || 'skyblue'};
`;

export default MyPage;