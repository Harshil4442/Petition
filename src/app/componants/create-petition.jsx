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
            <section className="bg-half-170 d-flex align-items-center"  style={{paddingBottom:'4rem',backgroundImage:'linear-gradient(120deg, #b1ecff, #ffbef9 50%, #faf8f1)'}} id="home">
                <Fade damping={0.7} triggerOnce direction="down" className="container align-items-center" >
                    <div className="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="col-12 col-md-10 col-lg-10" style={{ position: 'relative', display: 'inline-block' }}>

                            <div style={{
                                padding: '2rem', background: '#F2F3F4', borderRadius: '1rem', boxShadow: '0 0 20px 3px rgba(0, 0, 0, 0.1)',
                                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.855)),url(/images/form-back.jpg)', // Specify the path to your background image
                                backgroundSize: 'cover', // Ensure the image covers the entire background
                                backgroundPosition: 'center', // Center the image
                                backgroundRepeat: 'no-repeat',
                            }}>
                                <Form />
                            </div>
                        </div>

                        
                    </div>
            </Fade>
            </section>

            <FooterFour />
            <ScrollTop />
        </>
    )
}