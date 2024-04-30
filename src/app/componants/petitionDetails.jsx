import React from "react";
import MarketingNavbar from "../componants/navbar/marketingNavbarHome";
import FooterFour from "../componants/footer/footerFour";
import ScrollTop from "../componants/scrollTop";
import { useParams } from 'react-router-dom';
import petitionData from '../data/petitionData';
import { useMediaQuery } from 'react-responsive';



export default function petitionDetails(props) {
    const {id}=useParams();
    const petition = petitionData.find(petition => petition.id === id);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });


    return (
        <>
            <MarketingNavbar />

            <section style={{background: 'linear-gradient(138deg, rgba(177,221,255,0.9) 19%, rgba(232,185,255,0.8) 38%, rgba(255,170,247,0.7) 62%, rgba(253,201,255,0.6) 96%)'}} className="section" id="features">
                <div className="container position-relative" style={{display:'flex', justifyContent:'center'}}>
                    <div className="row" style={{width:'99%', marginTop:'2rem',display:'flex', justifyContent:'center'}}>
                        <div className="col-lg-8" style={{width:'99%',display:'flex', justifyContent:'center'}}>
                            <div className="row" style={{width:'99%',display:'flex', justifyContent:'center'}}>
                                <div className="mt-4 pt-2" style={{ textDecoration: 'none',width:'99%',display:'flex', justifyContent:'center' }}>
                                    <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-lg overflow-hidden" style={{
                                        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85)),url(/images/form-back.jpg)', // Specify the path to your background image
                                        backgroundSize: 'cover', // Ensure the image covers the entire background
                                        backgroundPosition: 'center', // Center the image
                                        backgroundRepeat: 'no-repeat',
                                        margin:'-1.3rem'
                                    }}> {isMobile?
                                            <div className="content mt-4" style={{padding:'0.2rem', lineHeight:'1.6rem'}}>
                                                <h4>Title:  {petition.title}</h4>
                                                <p style={{fontSize:'1.1rem', marginTop:'1rem'}}>{petition.municipality}</p>
                                                <div style={{marginTop:'2.5rem'}}><b>Description<br/></b> <p className="text-muted mt-3">{petition.description}</p></div>
                                                <div style={{marginTop:'2.5rem'}}><b>Category<br/></b><p className="text-muted mt-3">{petition.category}</p></div>
                                                <div style={{marginTop:'2.5rem'}}><b>Name<br/></b> <p className="text-muted mt-3">{petition.name}</p></div>
                                                <div style={{marginTop:'2.5rem'}}><b>Address<br/></b> <p className="text-muted mt-3">{petition.address}</p></div>
                                                <div style={{marginTop:'2.5rem'}}><b>Contact No.<br/></b><p className="text-muted mt-3">{petition.contact}</p></div>
                                                <div style={{marginTop:'2.5rem'}}><b>Email ID<br/></b> <p className="text-muted mt-3">{petition.email}</p></div>
                                            </div>
                                            :<div className="content mt-4" style={{padding:'3.5rem', lineHeight:'1.6rem'}}>
                                                <h4>Title:  {petition.title}</h4>
                                                <p style={{fontSize:'1.1rem', marginTop:'1rem'}}>{petition.municipality}</p>
                                                <div style={{marginTop:'2.5rem'}}><b>Description<br/></b> <p className="text-muted mt-3">{petition.description}</p></div>
                                                <div style={{marginTop:'2.5rem'}}><b>Category<br/></b><p className="text-muted mt-3">{petition.category}</p></div>
                                                <div style={{marginTop:'2.5rem'}}><b>Name<br/></b> <p className="text-muted mt-3">{petition.name}</p></div>
                                                <div style={{marginTop:'2.5rem'}}><b>Address<br/></b> <p className="text-muted mt-3">{petition.address}</p></div>
                                                <div style={{marginTop:'2.5rem'}}><b>Contact No.<br/></b><p className="text-muted mt-3">{petition.contact}</p></div>
                                                <div style={{marginTop:'2.5rem'}}><b>Email ID<br/></b> <p className="text-muted mt-3">{petition.email}</p></div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img src='/images/square/square-warning.png' width={500} height={500} className="img-fluid rounded-pill bg-image-position" alt="" />
                    <img src='/images/square/square-success.png' width={140} height={140} className="img-fluid rounded-lg avatar avatar-large bg-image-position-2 spin-anything" alt="" />

                </div>



                <div className="container mt-100 mt-60">
                    <div className="row align-items-center">


                        <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 order-1 order-md-1">
                            <div className="section-title">
                                <h6 className="fw-normal text-primary">Explore all petitions</h6>
                                <h4 className="title mb-4">Discover Change-Makers: Browse and Support Petitions Today </h4>

                                <p className="text-muted">Explore a diverse range of petitions crafted by passionate individuals dedicated to making a difference in their communities. With just a few clicks, you can support causes that resonate with you and contribute to positive change.</p>
                            </div>
                        </div>
                        <div className="col-md-6 order-2 order-md-2">
                            <div className="text-lg-end align-items-center">
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