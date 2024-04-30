import React from "react";
import MarketingNavbar from "../componants/navbar/marketingNavbarHome";
import FooterFour from "../componants/footer/footerFour";
import ScrollTop from "../componants/scrollTop";
import Form from './form/form1';
// import '../assets/css/style.css';




import { FiCodesandbox, FiSend, FiStar, FiBookmark, FiUsers, FiMessageCircle, AiOutlineCheckCircle } from "../assets/icons/vander"


export default function IndexMarketing() {

    return (
        <>
            <MarketingNavbar />
            <section className="bg-half-170 d-flex align-items-center"  style={{paddingBottom:'4rem',background:'linear-gradient(138deg, rgba(177,221,255,1) 19%, rgba(232,185,255,0.9557948179271709) 38%, rgba(255,170,247,1) 62%, rgba(253,201,255,0.9277836134453782) 96%)'}} id="home">
                <div className="container align-items-center" >
                    <div className="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="col-12 col-md-10 col-lg-10" style={{ position: 'relative', display: 'inline-block' }}>

                            <div style={{
                                padding: '2rem', background: '#F2F3F4', borderRadius: '1rem', boxShadow: '0 0 20px 3px rgba(0, 0, 0, 0.1)',
                                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.785)),url(/images/form-back.jpg)', // Specify the path to your background image
                                backgroundSize: 'cover', // Ensure the image covers the entire background
                                backgroundPosition: 'center', // Center the image
                                backgroundRepeat: 'no-repeat',
                            }}>
                                <Form />
                            </div>
                        </div>

                        {/* <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0" >
                        <div className="ms-lg-5">
                        <div className="text-lg-end">
                            <img src='/images/form-image.jpg'   style={{maxWidth:'93vw',scale:'0.7',width:'400px', height:'350px',borderRadius:'1rem',boxShadow: '0 0 20px 3px rgba(0, 0, 0, 0.1)'}} className="img-fluid" alt=""/>
                        </div>
                        </div>
                    </div> */}
                    </div>
                </div>
            </section>


            <FooterFour />
            <ScrollTop />
        </>
    )
}