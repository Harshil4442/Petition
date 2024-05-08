import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import petitionData from '../../data/petitionData';
import { motion } from "framer-motion";

export default function MarketingNavbar({ handleSearch }) {
    let [scroll, setScroll] = useState(false);
    let [isMenu, setisMenu] = useState(false);
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isMini = useMediaQuery({ query: '(max-width: 450px)' });
    const isTab = useMediaQuery({ query: '(max-width: 990px)' });

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    const toggleMenu = () => {
        setisMenu(!isMenu);
    };

    const handlePetition = () => {
        navigate('/create-petition');
    };

    return (
        <header id="topnav" className={`${scroll ? "nav-sticky" : "nav-sticky"} defaultscroll sticky`}>
            <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <a className="logo" href="/">
                    <img
                        src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6480171142a0ce741b56cc79_logo.svg"
                        loading="lazy"
                        width="Auto"
                        height="Auto"
                        alt="logo"
                        className="image-28"
                    />
                </a>

                <div className="menu-extras" style={{ height: '100%', alignItems: 'center', display: 'flex', width: isMini ? '100%' : 'auto', justifyContent: 'end' }}>
                    <div className="menu-item">
                        <button className={`navbar-toggle ${isMenu ? 'open' : ''}`} onClick={toggleMenu}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </button>
                    </div>
                </div>

                {
                    isTab ? <div></div> :
                        <div id="navigation" style={{ display: isMenu ? 'block' : 'none', height: '100%' }}>
                            <ul className="navigation-menu" id="navmenu-nav" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                                <li className="has-submenu">
                                    <Link to="/" activeclass="active" spy="true" smooth="true" duration={500} className="sub-menu-item" style={{ fontWeight: '500', textDecoration: 'none', textTransform: 'capitalize', fontSize: '16px' }}>Home</Link>
                                </li>
                                <li className="has-submenu">
                                    <Link to="/petitions" activeclass="active" spy="true" smooth="true" duration={500} className="sub-menu-item" style={{ fontWeight: '500', textDecoration: 'none', textTransform: 'capitalize', fontSize: '16px' }}>Petitions</Link>
                                </li>
                                <li className="has-submenu">
                                    <Link to="/" activeclass="active" spy="true" smooth="true" duration={500} className="sub-menu-item" style={{ fontWeight: '500', textDecoration: 'none', textTransform: 'capitalize', fontSize: '16px' }}>Features</Link>
                                </li>
                                <li className="has-submenu">
                                    <Link to="/" activeclass="active" spy="true" smooth="true" duration={500} className="sub-menu-item" style={{ fontWeight: '500', textDecoration: 'none', textTransform: 'capitalize', fontSize: '16px' }}>Pricing</Link>
                                </li>
                            </ul>
                        </div>
                }

                {
                    isMobile ? (
                        isMini ?
                            <></>
                            :
                            <ul className="buy-button list-inline mb-0" style={{ height: '100%', paddingTop: '2px' }}>
                                <li className="list-inline-item ps-1 mb-0" style={{ fontSize: '20%', height: '100%', display: 'flex', alignItems: 'center' }}>
                                    <motion.div
                                        whileHover={{ scale: 1.05, color: '#242424', backgroundImage: 'linear-gradient(126deg, #b1ecff, #dfbaff 79%) ' }}
                                        whileTap={{ scale: 0.8 }}
                                        type="submit"
                                        className="w-button"
                                        style={{ fontWeight: '400', color: '#242424', backgroundColor: 'rgb(177, 236, 255)', display: 'flex', borderStyle: 'none', borderRadius: '50px', fontSize: '16px', flex: '0 auto', order: '0', alignItems: 'center', justifyContent: 'center', padding: '14px 32px', lineHeight: 'inherit', cursor: 'pointer', fontFamily: 'Google sans, sans-serif' }}
                                        onClick={handlePetition}>
                                        Create Petition
                                    </motion.div>
                                </li>
                            </ul>
                    ) :
                        <ul className="buy-button list-inline mb-0" style={{ height: '100%', paddingTop: '2px' }}>
                            <li className="list-inline-item ps-1 mb-0" style={{ fontSize: '20%', height: '100%', display: 'flex', alignItems: 'center' }}>
                                <motion.div
                                    whileHover={{ scale: 1.05, color: '#242424', background: 'linear-gradient(126deg, #b1ecff, #dfbaff 79%)' }}
                                    whileTap={{ scale: 0.8 }}
                                    type="submit"
                                    className="w-button"
                                    style={{ fontWeight: '400', color: '#242424', backgroundColor: 'rgb(177, 236, 255)', display: 'flex', borderStyle: 'none', borderRadius: '50px', flex: '0 auto', fontSize: '16px', order: '0', alignItems: 'center', padding: '14px 32px', justifyContent: 'center', lineHeight: 'inherit', cursor: 'pointer', fontFamily: 'Google sans, sans-serif' }}
                                    onClick={handlePetition}>
                                    Create Petition
                                </motion.div>
                            </li>
                        </ul>
                }
            </div>
            {
                isTab ?
                    <div id="navigation" style={{ display: isMenu ? 'flex' : 'none', }}>
                        <ul className="navigation-menu" id="navmenu-nav" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'end' }}>
                            <li className="has-submenu">
                                <Link to="/" activeclass="active" spy="true" smooth="true" duration={500} className="sub-menu-item" style={{ fontWeight: '500', textDecoration: 'none', textTransform: 'capitalize', fontSize: '16px' }}>Home</Link>
                            </li>
                            <li className="has-submenu">
                                <Link to="/petitions" activeclass="active" spy="true" smooth="true" duration={500} className="sub-menu-item" style={{ fontWeight: '500', textDecoration: 'none', textTransform: 'capitalize', fontSize: '16px' }}>Petitions</Link>
                            </li>
                            <li className="has-submenu">
                                <Link to="/" activeclass="active" spy="true" smooth="true" duration={500} className="sub-menu-item" style={{ fontWeight: '500', textDecoration: 'none', textTransform: 'capitalize', fontSize: '16px' }}>Features</Link>
                            </li>
                            <li className="has-submenu">
                                <Link to="/" activeclass="active" spy="true" smooth="true" duration={500} className="sub-menu-item" style={{ fontWeight: '500', textDecoration: 'none', textTransform: 'capitalize', fontSize: '16px' }}>Pricing</Link>
                            </li>
                        </ul>
                    </div> : <div></div>
            }
        </header>
    );
}
