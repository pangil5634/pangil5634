import styled from "styled-components";

function HomePageContent1() {
    return (
        <ContainerHomePageContent1>
            <ContainerMainArea>
                <ContainerTitle>
                    <Title>개발, 누구나 할 수 있어.</Title>
                    <SubTitle>프론트엔드 개발자를 꿈꾸는 대학생 개발자</SubTitle>
                </ContainerTitle>
            </ContainerMainArea>
        </ContainerHomePageContent1>
    );
}

const ContainerHomePageContent1 = styled.div`
    width: 100%;
    height : 200vh;
    box-sizing: border-box;

    background-color: inherit;

    display: flex;
    justify-content: center;
`
export const ContainerMainArea = styled.div`
    width : 1000px;
    height : inherit;

    display: flex;
    flex-direction: column;

    align-items: center;
    /* background-color: #ffffff; */

`

const ContainerTitle = styled.div`
    width: 100%;
    height : auto;
    /* background-color: skyblue; */

    display: flex;
    justify-content: end;
    flex-direction: column;

    margin-top: 300px;
`

const Title = styled.p`
    font-size: 100px;
    font-weight: 500;
    line-height: 120px;

    color : ${({theme}) => theme.colors.blueDragon_100};
`

const SubTitle = styled.p`
    font-size: 40px;
    font-weight: 500;
    line-height: 60px;

    margin-top: 50px;

    color : ${({theme}) => theme.colors.pink_50};
`
export default HomePageContent1;
