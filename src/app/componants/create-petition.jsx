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
            <section className="bg-half-170 d-flex flex-column align-items-center"  style={{paddingBottom:'4rem',backgroundImage:'linear-gradient(120deg, #b1ecff, #ffbef9 50%, #faf8f1)'}} id="home">
                <Fade damping={0.7} triggerOnce direction="down" className="container align-items-center" >
                    <div className="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="col-12 col-md-12 col-lg-12" style={{ position: 'relative', display: 'inline-block' }}>

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
            <div className="container mt-100 mt-60">
                    <div className="row align-items-center">


                        <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 order-1 order-md-1">
                            <div className="section-title">
                                <h6 className="fw-normal text-secondary">Explore all petitions</h6>
                                <h4 className="title mb-4">Discover Change-Makers: Browse and Support Petitions Today </h4>

                                <p className="text-muted">Explore a diverse range of petitions crafted by passionate individuals dedicated to making a difference in their communities. With just a few clicks, you can support causes that resonate with you and contribute to positive change.</p>
                            </div>
                        </div>
                        <div className="col-md-6 order-2 order-md-2" style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="text-lg-end align-items-center justify-content-center">
                                <img src='/images/petition3.jpg' style={{ maxWidth: '93vw', width: '400px', height: '300px', borderRadius: '1.5rem', boxShadow: '0 0 20px 3px rgba(0, 0, 0, 0.1)' }} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterFour />
            <ScrollTop />
        </>
    )
}