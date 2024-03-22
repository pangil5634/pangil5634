import styled from "styled-components";
import { ContainerBase } from "../Layout/ContainerBase";
import { MyLink } from "../Component/MyLink";
import MediaQuery from "react-responsive";
import { useState } from "react";
import { MenuDropDown } from "./MenuDropDown";

function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <ContainerNavBar>
            <MediaQuery maxWidth={550}>
                {
                    isMenuOpen == false ?
                        <MenuList>
                            <MenuItem onClick={() => (setIsMenuOpen(!isMenuOpen))}>MENU</MenuItem>
                        </MenuList>
                        :
                        <MenuDropDown isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                }
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


const ContainerNavBar = styled.div`
    height : auto;
    background-color: ${({ theme }) => theme.colors.black_100};
    color : ${({ theme }) => theme.colors.white_100};

    display: flex;
    justify-content: end;
    align-items: center;

`;

const MenuList = styled.div`
    width: auto;
    height : 70px;

    display: flex;
    justify-content: space-around;
    align-items: center;
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