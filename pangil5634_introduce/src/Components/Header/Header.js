import styled from "styled-components";
import { ContainerBase } from "../Layout/ContainerBase";
import { Outlet } from 'react-router-dom';
import NavBar from "./NavBar";

function Header() {
    return (
        <ContainerHeader>
            <NavBar />
            <Outlet/>
        </ContainerHeader>
    );
}

const ContainerHeader = styled(ContainerBase)`

`
export default Header;