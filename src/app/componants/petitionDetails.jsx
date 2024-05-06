import React from "react";
import MarketingNavbar from "../componants/navbar/marketingNavbarHome";
import FooterFour from "../componants/footer/footerFour";
import ScrollTop from "../componants/scrollTop";
import { useParams } from 'react-router-dom';
import petitionData from '../data/petitionData';
import { useMediaQuery } from 'react-responsive';
import { Fade } from "react-awesome-reveal";



export default function petitionDetails(props) {
    const { id } = useParams();
    const petition = petitionData.find(petition => petition.id === id);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });


    return (
        <>
            <MarketingNavbar />

            <section className="section" id="features">
                <div className="container mt-100 mt-60">
                    <div className="row align-items-center">
                        {isMobile ?
                            <div className="" style={{ lineHeight: '1.6rem', fontFamily: 'Google sans, sans-serif' }}>
                                <Fade damping={0.7} triggerOnce direction="down"><b style={{ fontSize: '2.2rem', lineHeight: '4rem', fontWeight: '700' }}> {petition.title}</b></Fade>
                                <Fade damping={0.7} triggerOnce direction="down"><p style={{ fontSize: '1rem', marginTop: '1rem', paddingLeft: '5px' }}>{petition.municipality}</p></Fade>
                                <Fade damping={0.7} triggerOnce direction="up"><div style={{ marginTop: '1rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}> <img style={{ borderRadius: '1rem', width: '2.5rem', height: 'auto', marginRight: '0.7rem' }} src="\images\profile.png"></img><p style={{ padding: '0px', fontSize: '1.1rem', fontWeight: '500', borderRadius: '0.4rem', backgroundColor: 'white', background: 'transparent' }} className="text-muted mt-3">{petition.name}</p></div></Fade>
                                <Fade damping={0.7} triggerOnce direction="up"><img style={{ borderRadius: '1rem', margin: '1.4rem 0' }} src="\images\petition-details.jpg"></img></Fade>
                                <Fade damping={0.7} triggerOnce direction="up"><div style={{ marginTop: '2.1rem' }}><b style={{ fontSize: '1.5rem', fontWeight: '600' }}>Description<br /></b> <p style={{ padding: '0px', fontWeight: '500', borderRadius: '0.4rem', backgroundColor: 'white', background: 'transparent' }} className="text-muted mt-3">{petition.description}</p></div></Fade>
                                <Fade damping={0.7} triggerOnce direction="up"><div style={{ marginTop: '2.1rem' }}><b style={{ fontSize: '1.5rem', fontWeight: '600' }}>Category<br /></b><p style={{ padding: '0px', fontWeight: '500', borderRadius: '0.4rem', backgroundColor: 'white', background: 'transparent' }} className="text-muted mt-3">{petition.category}</p></div></Fade>
                                <Fade damping={0.7} triggerOnce direction="up"><div style={{ marginTop: '2.1rem' }}><b style={{ fontSize: '1.5rem', fontWeight: '600' }}>Address<br /></b> <p style={{ padding: '0px', fontWeight: '500', borderRadius: '0.4rem', backgroundColor: 'white', background: 'transparent' }} className="text-muted mt-3">{petition.address}</p></div></Fade>
                                <Fade damping={0.7} triggerOnce direction="up"><div style={{ marginTop: '2.1rem' }}><b style={{ fontSize: '1.5rem', fontWeight: '600' }}>Contact No.<br /></b><p style={{ padding: '0px', fontWeight: '500', borderRadius: '0.4rem', backgroundColor: 'white', background: 'transparent' }} className="text-muted mt-3">{petition.contact}</p></div></Fade>
                                <Fade damping={0.7} triggerOnce direction="up"><div style={{ marginTop: '2.1rem' }}><b style={{ fontSize: '1.5rem', fontWeight: '600' }}>Email ID<br /></b> <p style={{ padding: '0px', fontWeight: '500', borderRadius: '0.4rem', backgroundColor: 'white', background: 'transparent' }} className="text-muted mt-3">{petition.email}</p></div></Fade>
                            </div>
                            : <div className="" style={{ lineHeight: '1.6rem', fontFamily: 'Google sans, sans-serif' }}>
                                <Fade damping={0.7} triggerOnce direction="down"><b style={{ fontSize: '3rem', lineHeight: '4rem', fontWeight: '700' }}> {petition.title}</b></Fade>
                                <Fade damping={0.7} triggerOnce direction="down"><p style={{ fontSize: '1.1rem', marginTop: '1rem', paddingLeft: '5px' }}>{petition.municipality}</p></Fade>
                                <Fade damping={0.7} triggerOnce direction="up"><div style={{ marginTop: '1rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}> <img style={{ borderRadius: '1rem', width: '2.5rem', height: 'auto', marginRight: '0.7rem' }} src="\images\profile.png"></img><p style={{ padding: '0px', fontSize: '1.1rem', fontWeight: '500', borderRadius: '0.4rem', backgroundColor: 'white', background: 'transparent' }} className="text-muted mt-3">{petition.name}</p></div></Fade>
                                <Fade damping={0.7} triggerOnce direction="up"><img style={{ borderRadius: '1rem', margin: '2rem 0' }} src="\images\petition-details.jpg"></img></Fade>
                                <Fade damping={0.7} triggerOnce direction="up"><div style={{ marginTop: '2.5rem' }}><b style={{ fontSize: '1.9rem', fontWeight: '600' }}>Description<br /></b> <p style={{ padding: '0px', fontWeight: '500', borderRadius: '0.4rem', backgroundColor: 'white', background: 'transparent' }} className="text-muted mt-3">{petition.description}</p></div></Fade>
                                <Fade damping={0.7} triggerOnce direction="up"><div style={{ marginTop: '2.5rem' }}><b style={{ fontSize: '1.9rem', fontWeight: '600' }}>Category<br /></b><p style={{ padding: '0px', fontWeight: '500', borderRadius: '0.4rem', backgroundColor: 'white', background: 'transparent' }} className="text-muted mt-3">{petition.category}</p></div></Fade>
                                <Fade damping={0.7} triggerOnce direction="up"><div style={{ marginTop: '2.5rem' }}><b style={{ fontSize: '1.9rem', fontWeight: '600' }}>Address<br /></b> <p style={{ padding: '0px', fontWeight: '500', borderRadius: '0.4rem', backgroundColor: 'white', background: 'transparent' }} className="text-muted mt-3">{petition.address}</p></div></Fade>
                                <Fade damping={0.7} triggerOnce direction="up"><div style={{ marginTop: '2.5rem' }}><b style={{ fontSize: '1.9rem', fontWeight: '600' }}>Contact No.<br /></b><p style={{ padding: '0px', fontWeight: '500', borderRadius: '0.4rem', backgroundColor: 'white', background: 'transparent' }} className="text-muted mt-3">{petition.contact}</p></div></Fade>
                                <Fade damping={0.7} triggerOnce direction="up"><div style={{ marginTop: '2.5rem' }}><b style={{ fontSize: '1.9rem', fontWeight: '600' }}>Email ID<br /></b> <p style={{ padding: '0px', fontWeight: '500', borderRadius: '0.4rem', backgroundColor: 'white', background: 'transparent' }} className="text-muted mt-3">{petition.email}</p></div></Fade>
                            </div>
                        }
                    </div>






                    <img src='/images/square/square-warning.png' width={500} height={500} className="img-fluid rounded-pill bg-image-position" alt="" />
                    <img src='/images/square/square-success.png' width={140} height={140} className="img-fluid rounded-lg avatar avatar-large bg-image-position-2 spin-anything" alt="" />

                </div>



                <div className="container mt-100 mt-60">
                    <div className="row align-items-center">


                        <Fade direction="left" className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 order-1 order-md-1">
                            <div className="section-title">
                                <h6 className="fw-normal text-primary">Explore all petitions</h6>
                                <h4 className="title mb-4">Discover Change-Makers: Browse and Support Petitions Today </h4>

                                <p className="text-muted">Explore a diverse range of petitions crafted by passionate individuals dedicated to making a difference in their communities. With just a few clicks, you can support causes that resonate with you and contribute to positive change.</p>
                            </div>
                        </Fade>
                        <Fade direction="right" className="col-md-6 order-2 order-md-2" style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="text-lg-end align-items-center justify-content-center">
                                <img src='/images/petition3.jpg' style={{ maxWidth: '93vw', width: '400px', height: '300px', borderRadius: '1.5rem', boxShadow: '0 0 20px 3px rgba(0, 0, 0, 0.1)' }} className="img-fluid" alt="" />
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
            <FooterFour />
            <ScrollTop />
        </>
    )
}