import styled from "styled-components";
import { MyLink } from "../Component/MyLink";

export const MenuDropDown = (e) => {
    const MenuList = styled.div`
        width: 100%;
        height : 70px;

        display: flex;
        justify-content: end;
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

    return (
        <MenuList>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/project">Project</MenuItem>
            <MenuItem to="/hobby">Hobby</MenuItem>
            <MenuItem onClick={() => (e.setIsMenuOpen(!e.isMenuOpen))}>CLOSE</MenuItem>
        </MenuList>
    );
    
}

