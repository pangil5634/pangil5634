import styled from "styled-components";
import { ContainerBase } from "../Layout/ContainerBase";
import { Outlet } from 'react-router-dom';
import NavBar from "./NavBar";

function Header() {
    return (
        <ContainerHeader>
            <NavBar />
            <ContainerOutlet>
                <Outlet/>
            </ContainerOutlet>
        </ContainerHeader>
    );
}

const ContainerHeader = styled.div`

`

const ContainerOutlet = styled(ContainerBase)`
`
export default Header;