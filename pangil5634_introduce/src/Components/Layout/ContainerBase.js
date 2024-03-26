import styled from "styled-components";

export const ContainerBase = styled.div`
    width: 100%;
    color : ${({ theme }) => theme.colors.white_100};
    background-color: ${({ theme }) => theme.colors.black_100};
    border-top: 1px solid white;
`