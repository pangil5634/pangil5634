import styled from "styled-components";
import { ContainerBase } from "../Layout/ContainerBase";

function NavBar() {
    return (
        <ContainerNavBar>
            Navabar
        </ContainerNavBar>
    );
}


const ContainerNavBar = styled(ContainerBase)`
    height : 100px;

    background-color: ${({ theme }) => theme.colors.black_100};
    color : ${({theme}) => theme.colors.white_100}

`
export default NavBar;