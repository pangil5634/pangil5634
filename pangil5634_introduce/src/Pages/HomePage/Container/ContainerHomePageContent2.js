import styled from "styled-components";
import { ContainerMainArea } from "./ContainerHomePageContent1";

function HomePageContent1() {
    return (
        <ContainerHomePageContent1>
            <ContainerMainArea>
                <WrapperCard>

                </WrapperCard>
                <WrapperCard style={{marginTop : "100px"}}>
                
                </WrapperCard>
            </ContainerMainArea>
        </ContainerHomePageContent1>
    );
}

const ContainerHomePageContent1 = styled.div`
    width: 100%;
    height : 100vh;
    box-sizing: border-box;

    background-color: inherit;

    display: flex;
    justify-content: center;
`

const WrapperCard = styled.div`
    width: 400px;
    height : 600px;
    
    background-color: white;

    border-radius: 30px;

    transition: background-color 0.5s ease; /* 배경 색상에 대한 transition 효과 */
    &:hover{
        background-color: gray;
    }
`
export default HomePageContent1;
