import { useState, useEffect, useRef } from "react";
import { Nav, NavUL, NavLink, NavIcon } from "./navbar.style";
import { navData } from "./navData";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const [active, setActive] = useState(0)
    const navRef = useRef(null);

    useEffect(() => {
        const sticky = navRef.current.offsetTop; // this actually increase performance

        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > sticky) {
                setIsFixed(true)
            }
            else {
                setIsFixed(false)
            }
        })
        return () => {
            window.removeEventListener("scroll", scrollCallBack)
        }
    }, [])
    return (
        <>
            <NavIcon onClick={() => setNavbar(!navbar)}>
                {navbar ? <FaTimes /> : <FaBars />}
            </NavIcon>
            <Nav ref={navRef} isFixed={isFixed} navbar={navbar}>
                <NavUL>
                    {navData.map((item, index) => {
                        return (
                            <NavLink key={index}>
                                <Link activeClass="active" offset={item.offset} to={item.path} isDynamic={true} spy duration={700}>{item.title}</Link>
                            </NavLink>
                        )
                    })}
                </NavUL>
            </Nav>
        </>
    )
}

export default Navbar

/**
 * {navData.map((item, index) => (
                        <NavLink
                            active={active}
                            key={item.id}
                            onClick={() => setActive(index)}
                            className={`${index === active && 'active'}`}
                        >
                            <Link activeClass="active" offset={item.offset} to={item.path} isDynamic={true} spy smooth="easeInOutQuart" duration={1000}>{item.title}</Link>
                        </NavLink>
                )
                    )}
                */
