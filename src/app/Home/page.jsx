import React from "react";
import MarketingNavbar from "../componants/navbar/marketingNavbarHome";
import FooterFour from "../componants/footer/footerFour";
import ScrollTop from "../componants/scrollTop";



import {FiCodesandbox,FiSend,FiStar,FiBookmark,FiUsers,FiMessageCircle,AiOutlineCheckCircle} from "../assets/icons/vander"


export default function IndexMarketing(){

    return(
        <>
        <MarketingNavbar flag={true} />
        <section className="bg-half-170 bg-soft-primary d-flex align-items-center" id="home">
            <div className="container" >
                <div className="row align-items-center" >
                    <div className="col-md-6" >
                        <div className="title-heading">
                            <h6 className="fw-normal">Welcome to our municipal app</h6>
                            <h4 className="heading fw-semibold text-dark mb-4">Empower Your Community with Our Municipal Petition Platform</h4>
                            <p className="text-muted para-desc mb-0">Discover a streamlined way to advocate for your community's needs and foster civic engagement without the hassle of logging in.</p>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 align-items-center justify-content-center" >
                        <div className="ms-lg-5 align-items-center justify-content-center">
                            <div className="position-relative align-items-center justify-content-center">
                                <img src='/images/petition.jpg'   style={{maxWidth:'93vw',width:'350px', height:'300px',borderRadius:'1rem',boxShadow: '0 10px 9px rgba(0,0,0,0.2)'}} className="img-fluid" alt=""/>
                                {/* <Modal/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <section className="py-5 bg-primary">
            <div className="container">
                <Counter/>
            </div>
        </section> */}
        <section className="section" id="features">
            <div className="container position-relative">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">Empower Your Voice <br/> Shape Your Community</h4>
                            <p className="text-muted para-desc mb-0">Join our platform to amplify your voice, spark change, and shape the future of your municipality.</p>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mt-4 pt-2">
                                <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-lg overflow-hidden">
                                    <FiCodesandbox className="fea icon-lg fea-icon"/>
                                    <div className="content mt-4">
                                        <h5>User Friendly</h5>
                                        <p className="text-muted mt-3">Designed with simplicity in mind, our platform offers an intuitive user experience, making petition creation and engagement effortless for everyone.</p>
        
                                        {/* <a href="/page-service-detail" className="link">Read more<MdArrowForward/></a> */}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 mt-4 pt-2">
                                <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-lg overflow-hidden">
                                    <FiSend className="fea icon-lg fea-icon"/>
                                    <div className="content mt-4">
                                        <h5>Super Fast</h5>
                                        <p className="text-muted mt-3">Experience lightning-fast petition creation and engagement on our platform, ensuring swift action on community issues.</p>
        
                                        {/* <a href="/page-service-detail" className="link">Read more <MdArrowForward/></a> */}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 mt-4 pt-2">
                                <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-lg overflow-hidden">
                                    <FiStar className="fea icon-lg fea-icon"/>
                                    <div className="content mt-4">
                                        <h5>Easy Petition Creation</h5>
                                        <p className="text-muted mt-3">Our intuitive petition creation tool allows you to draft and submit petitions with ease. Simply provide a title, description, and relevant details about the issue you're addressing.</p>
        
                                        {/* <a href="/page-service-detail" className="link">Read more <MdArrowForward/></a> */}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 mt-4 pt-2">
                                <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-lg overflow-hidden">
                                    <FiBookmark className="fea icon-lg fea-icon"/>
                                    <div className="content mt-4">
                                        <h5>Municipal Search</h5>
                                        <p className="text-muted mt-3">Explore petitions tailored to your municipality with our comprehensive search feature.</p>
        
                                        {/* <a href="/page-service-detail" className="link">Read more <MdArrowForward/></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>

                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-12 col-md-6 mt-4 pt-2">
                                <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-lg overflow-hidden">
                                    <FiUsers className="fea icon-lg fea-icon"/>
                                    <div className="content mt-4">
                                        <h5>No Login Required</h5>
                                        <p className="text-muted mt-3">Enjoy hassle-free participation on our platform without the need for cumbersome user accounts or login credentials</p>
        
                                        {/* <a href="/page-service-detail" className="link">Read more <MdArrowForward/></a> */}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-12 col-md-6 mt-4 pt-2">
                                <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-lg overflow-hidden">
                                   <FiMessageCircle className="fea icon-lg fea-icon"/>
                                    <div className="content mt-4">
                                        <h5>Like/Dislike Functionality</h5>
                                        <p className="text-muted mt-3">Express your stance on petitions through our interactive like/dislike feature, enabling you to signal your support or opposition with a single click.</p>
        
                                        {/* <a href="/page-service-detail" className="link">Read more <MdArrowForward/></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <img src='/images/square/square-warning.png' width={500} height={500} className="img-fluid rounded-pill bg-image-position" alt=""/>
                <img src='/images/square/square-success.png' width={140} height={140} className="img-fluid rounded-lg avatar avatar-large bg-image-position-2 spin-anything" alt=""/>
            </div>

           

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-md-6 order-1 order-md-2">
                        <div className="text-lg-end">
                            <img src='/images/petition2.jpg' style={{maxWidth:'93vw',width:'500px', height:'300px', borderRadius:'1.5rem', boxShadow: '0 0 20px 3px rgba(0, 0, 0, 0.1)'}} className="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 order-2 order-md-1">
                        <div className="section-title">
                            <h6 className="fw-normal text-primary">Easy To Track</h6>
                            <h4 className="title mb-4">Easily Monitor Community Concerns </h4>

                            <p className="text-muted">Effortlessly track the pulse of your municipality with our user-friendly petition tracking system. Stay informed about local issues, monitor petition progress, and engage with community feedback—all in one convenient platform.</p>
                        
                            <ul className="list-unstyled text-muted">
                                <li className="mb-1"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Real-time Updates</li>
                                <li className="mb-1"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Comprehensive Insights</li>
                                <li className="mb-1"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Enhanced Community Engagement</li>
                            </ul>

                            <div className="mt-4">
                                <a href="#" className="btn btn-pills btn-soft-primary">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <FooterFour/>
        <ScrollTop/>
        </>
    )
}