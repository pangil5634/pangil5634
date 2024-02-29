import { Link } from "react-router-dom";
import styled from "styled-components";

function HomePage() {
    return (
        <ContainerHomePage>
             <h1>HomePage</h1>
            <Link to = "/mypage"><button>마이페이지</button></Link>
        </ContainerHomePage>
    )
}

const ContainerHomePage = styled.div`
    color : ${({ theme }) => theme.colors.lemon_100 || 'skyblue'};
`;

export default HomePage;