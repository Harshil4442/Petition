import React,{useState,useEffect} from "react";
import {Link, useNavigate} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import petitionData from '../../data/petitionData';







export default function MarketingNavbar({handleSearch}){


    const [searchTerm, setSearchTerm] = useState("");
    const [filteredPetitions, setFilteredPetitions] = useState([]);

    const handlepSearch = (e) => {
        setSearchTerm(e.target.value);
        const filteredData = petitionData.filter(petition => {
            return petition.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
                   petition.municipality.toLowerCase().includes(e.target.value.toLowerCase()) ||
                   petition.description.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setFilteredPetitions(filteredData);
        handleSearch(filteredData);
    };


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
                    <div className="menu-item" style={{height:'100%', display:'flex', alignItems:'center'}}>
                        <a href="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                    </div>
                </div>
                
                <ul className="buy-button list-inline mb-0" style={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <li className="list-inline-item ps-1 mb-0" style={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            
                            {
                                isMobile?
                                <div style={{ position: 'relative', display: 'inline-block',paddingTop:'3px' }}>
                                    <img src="/images/svg/search.svg"  style={{ opacity:'0.6',position: 'absolute', top: '53%', left: '10px', transform: 'translateY(-50%)', width: '16px', height: 'auto', zIndex: '1' }}></img>
                                    <input 
                                        style={{
                                            width:'80px',
                                            height:'28px',
                                            fontSize:'0.8rem',
                                            paddingLeft:'30px',
                                            borderRadius:'2rem',
                                            borderColor:'lightgrey',
                                            boxShadow: '0 0 8px 1px rgba(0, 0, 0, 0.2)'
                                        }}
                                        value={searchTerm}
                                        onChange={handlepSearch}
                                        type="text"
                                        placeholder="Search"
                                    ></input>
                                </div>
                                :
                                <div style={{ position: 'relative', display: 'inline-block',paddingTop:'3px' }}>
                                    <img src="/images/svg/search.svg"  style={{ opacity:'0.6',position: 'absolute', top: '53%', left: '15px', transform: 'translateY(-50%)', width: '16px', height: 'auto', zIndex: '1' }}></img>
                                    <input 
                                        style={{
                                            width:'120px',
                                            height:'38px',
                                            fontSize:'0.9rem',
                                            paddingLeft:'35px',
                                            borderRadius:'2rem',
                                            borderColor:'lightgrey',
                                            boxShadow: '0 0 8px 1px rgba(0, 0, 0, 0.2)'
                                        }}
                                        value={searchTerm}
                                        onChange={handlepSearch}
                                        type="text"
                                        placeholder="Search"
                                    ></input>
                                </div>
                            }
                            
                        </li>
                </ul>
                <ul className="buy-button list-inline mb-0" style={{height:'100%',paddingTop:'2 px'}}>
                    <li className="list-inline-item ps-1 mb-0" style={{fontSize:'20%',height:'100%', display:'flex',alignItems:'center'}}>
                            {/* <div className="btn btn-icon btn-pills btn-primary d-sm-none d-inline-flex"><FiUser className="fea icon-sm"/></div> */}
                            {
                                isMobile?
                                <button type="submit" className="btn" style={{color:'white',width:'5.7rem',fontFamily:'sans-serif',borderRadius:'3rem',fontSize:'0.4rem',boxShadow: 'inset 0 0 2px 3px rgba(255, 255, 255, 0.1)', background: 'linear-gradient(90deg, rgba(90,100,255,1) 3%, rgba(90,130,255,1) 97%)'}} onClick={handlePetition}> Create petition</button>
                                :
                                <button type="submit" className="btn" style={{color:'white',fontFamily:'sans-serif',borderRadius:'2rem',fontSize:'1rem',boxShadow: 'inset 0 0 2px 3px rgba(255, 255, 255, 0.1)', background: 'linear-gradient(90deg, rgba(90,100,255,1) 3%, rgba(90,130,255,1) 97%)'}} onClick={handlePetition}>Create petition</button>
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