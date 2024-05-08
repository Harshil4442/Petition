import React from "react";
import MarketingNavbar from "../componants/navbar/marketingNavbarHome";
import FooterFour from "../componants/footer/footerFour";
import ScrollTop from "../componants/scrollTop";
import Form from './form/form1';
// import '../assets/css/style.css';
import {Fade} from 'react-awesome-reveal';




import { FiCodesandbox, FiSend, FiStar, FiBookmark, FiUsers, FiMessageCircle, AiOutlineCheckCircle } from "../assets/icons/vander"


export default function IndexMarketing() {

    return (
        <>
            <MarketingNavbar />
            <section className="bg-half-170 d-flex flex-column align-items-center blue-pink-gradient"  style={{minHeight:'70vh',paddingBottom:'4rem'}} id="home">
                
                
                <Fade damping={0.7} triggerOnce direction="down" className="container align-items-center" style={{height:'100%'}} >
                    <div className="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="col-12 col-md-12 col-lg-12 " style={{ position: 'relative', display: 'inline-block' }}>
                        
                           
                                <Form />
                        </div>

                        
                    </div>
            </Fade>
            
            </section>

            <FooterFour />
            <ScrollTop />
        </>
    )
}