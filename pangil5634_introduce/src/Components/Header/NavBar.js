import styled from "styled-components";
import { ContainerBase } from "../Layout/ContainerBase";
import { MyLink } from "../Component/MyLink";
import MediaQuery from "react-responsive";

function NavBar() {
    return (
        <ContainerNavBar>
            <MediaQuery maxWidth={550}>
                <MenuItem>Menu</MenuItem>
            </MediaQuery>
            <MediaQuery minWidth={550}>
                <MenuList>
                    <MenuItem to="/">Home</MenuItem>
                    <MenuItem to="/project">Project</MenuItem>
                    <MenuItem to="/hobby">Hobby</MenuItem>
                </MenuList>
            </MediaQuery>
        </ContainerNavBar>
    );
}


const ContainerNavBar = styled(ContainerBase)`
    height : 70px;

    background-color: ${({ theme }) => theme.colors.black_100};
    color : ${({ theme }) => theme.colors.white_100};

    display: flex;
    justify-content: end;
    align-items: center;

`;

const MenuList = styled.div`
    width: auto;
    height : 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    margin-right: 50px;
`;

const MenuItem = styled(MyLink)`
    width: auto;
    height : auto;

    font-size: 18px;
    font-weight: bold;
    line-height: normal;

    box-sizing: border-box;
    padding : 0px 20px;

    &:hover{
        color : ${({theme}) => theme.colors.blueDragon_100};
    }
`;
export default NavBar;