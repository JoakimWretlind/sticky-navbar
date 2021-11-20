import styled from 'styled-components';

export const Nav = styled.nav`
    position: ${({ isFixed }) => isFixed ? "fixed" : "relative"};
    top: 0;
    left: 0;
    height: 8rem;
    width: 100%;
    background: #222;    
    display: none;
    z-index: 999;
    @media screen and (min-width: 767px){
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const NavUL = styled.ul`
    height: 100%;
    width: 100%;
    max-width: 46rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
`;

export const NavLink = styled.a`
    color: #fff;
    text-transform: lowercase;
    letter-spacing: .3rem;
    font-size: 1.2rem;
    font-family: 'arial', sans-serif;
    transition: .25s ease-out;
    &:hover {
        cursor: pointer;
        color: #999;
    }
    a{&.active{
        color: gold;
        }
    }
`;

export const NavIcon = styled.div`
    display: block;
    color: white;
    position: fixed;
    top: 3rem;
    left: 2rem;
    font-size: 1.8rem;
    transition: .25s ease-out;
    z-index: 100;
    &:hover{
        cursor: pointer;
        color: #000;
    }
    @media screen and (min-width: 767px){
        display: none;
    }
`;