import styled from 'styled-components';

export const Section = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &#one{
        background: #999;       
        height: 100vh;
        transition: .5s ease-out;
        @media screen and (min-width: 767px){
            height: calc(100vh - 8rem);            
        }
    }
    &#two{
        background: #777;
        height: 100vh;
    }
    &#three{
        background: #555;
        height: 100vh;
    }
`;

export const Header = styled.h1`
    color: #fff;
    font-size: clamp(2.2rem, 6vw, 4rem);
    letter-spacing: .5rem;
    text-transform: uppercase;
`;