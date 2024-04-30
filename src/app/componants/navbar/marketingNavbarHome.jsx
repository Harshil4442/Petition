import React,{useState,useEffect} from "react";
import {Link, useNavigate} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import petitionData from '../../data/petitionData';
import { motion } from "framer-motion";





export default function MarketingNavbar({handleSearch}){
   
    let [scroll, setScroll] = useState(false);
    let [isMenu, setisMenu] = useState(false);
    const navigate=useNavigate();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    

    useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 50);
        });
      }, []);

      let toggleMenu = () => {
        setisMenu(!isMenu);
        if (document.getElementById("navigation")) {
            let anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    let target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    };

    const handlePetition=(e)=>{
        navigate('/create-petition');
    }
    return(
        <header id="topnav" className={`${scroll ? "nav-sticky" :""} defaultscroll sticky`}>
            <div className="container" style={{height:'100%'}}>
				<a className="logo" href="/">
                    <img src='/images/petition_transparent.png'  height={90} className="logo-light-mode" alt=""/>
                    <img src='/images/petition_transparent.png'  height={28} className="logo-dark-mode" alt=""/>
                </a>
                
                <div className="menu-extras" style={{height:'100%', display:'flex', alignItems:'center'}}>
                    <div className="menu-item">
                        <a href="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                    </div>
                </div>
              
                
                
                <ul className="buy-button list-inline mb-0" style={{height:'100%',paddingTop:'2px'}}>
                    <li className="list-inline-item ps-1 mb-0" style={{fontSize:'20%',height:'100%', display:'flex',alignItems:'center'}}>
                            {/* <div className="btn btn-icon btn-pills btn-primary d-sm-none d-inline-flex"><FiUser className="fea icon-sm"/></div> */}
                            {
                                isMobile?
                                <motion.div whileHover={{ scale: 1.05}}
                                    whileTap={{
                                        scale: 0.8,
                                        borderRadius: "100%"
                                    }} type="submit" className="btn" style={{display:'flex',alignItems:'center',justifyContent:'center',height:'2.5rem',color:'white',width:'7.7rem',fontFamily:'sans-serif',borderRadius:'3rem',fontSize:'0.7rem',boxShadow: 'inset 0 0 2px 3px rgba(255, 255, 255, 0.1)', background: 'linear-gradient(90deg, rgba(90,100,255,1) 3%, rgba(90,130,255,1) 97%)'}} onClick={handlePetition}>Create petition</motion.div>
                                :
                                <motion.div whileHover={{ scale: 1.05}}
                                    whileTap={{
                                        scale: 0.8,
                                        borderRadius: "100%"
                                    }} type="submit" className="btn" style={{display:'flex',alignItems:'center',justifyContent:'center',height:'2.2rem',color:'white',fontFamily:'sans-serif',borderRadius:'2rem',fontSize:'1rem',boxShadow: 'inset 0 0 2px 3px rgba(255, 255, 255, 0.1)', background: 'linear-gradient(90deg, rgba(90,100,255,1) 3%, rgba(90,130,255,1) 97%)'}} onClick={handlePetition}>Create petition</motion.div>
                            }
                            
                        </li>
                </ul>
                
                

                
                
        
                <div id="navigation" style={{ display: isMenu ? 'block' : 'none', height:'100%' }}> 
                    <ul className="navigation-menu" id="navmenu-nav" style={{height:'100%',display:'flex',alignItems:'center',justifyContent:'end'}}>
                        <li className="has-submenu">
                            <Link to="/" activeclass="active"  spy="true" smooth="true" duration={500} className="sub-menu-item" style={{textDecoration:'none', textTransform: 'capitalize',fontSize:'0.9rem'}}>Home</Link>
                        </li>
                        <li className="has-submenu">
                            <Link to="/petitions" activeclass="active"  spy="true" smooth="true" duration={500} className="sub-menu-item"  style={{textDecoration:'none', textTransform: 'capitalize',fontSize:'0.9rem'}}>Petitions</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </header>
    )
}