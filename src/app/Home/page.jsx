import React from "react";
import MarketingNavbar from "../componants/navbar/marketingNavbarHome";
import FooterFour from "../componants/footer/footerFour";
import ScrollTop from "../componants/scrollTop";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { animateScroll as scroll } from "react-scroll";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { FiCodesandbox, FiSend, FiStar, FiBookmark, FiUsers, FiMessageCircle, AiOutlineCheckCircle } from "../assets/icons/vander"
import { Fade } from 'react-awesome-reveal';
import { useMediaQuery } from 'react-responsive';
import { Link, useNavigate } from 'react-router-dom';



export default function IndexMarketing() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTab = useMediaQuery({ query: '(max-width: 1201)' });
    const navigate = useNavigate();


    const handlePetition = (e) => {
        navigate('/create-petition');
    }

    return (
        <>
            <MarketingNavbar flag={true} />
            <section style={{ width: '100%', marginTop: '5.5rem', marginBottom: '0rem', paddingBottom: '3rem', paddingTop: '6rem', backgroundImage: 'linear-gradient(120deg, #b1ecff, #ffbef9 50%, #faf8f1)' }} className="bg-half-170 bg-soft-primary d-flex align-items-center justify-content-center" id="home">
                <Fade direction="down" damping={0.7} triggerOnce style={{ width: '100%', marginLeft: '6.1%', marginRight: '6.1%' }} >
                    <div className="row align-items-center justify-content-between" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {/* <div className="col-md-12" style={{display:'flex',alignItems:'center',justifyContent:`${isTab?'center':'start'}`,flexDirection:`${isTab?'column':'row'}`}}> */}
                        <div className='col-md-6' >
                            <div className="title-heading" style={{ width: '100%', justifyContent: 'center', textAlign: 'center' }}>
                                <div style={{ display: 'flex', justifyContent:`${isMobile? 'center':'start'}`,alignItems:'center', color: '#616161' }}>
                                    <img
                                        src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/653a1fa7a889c0a4df8213d7_whatsapp-icon.svg"
                                        loading="eager"
                                        alt="whatsapp logo with transparent background"
                                        className="whatsapp-api-icon"
                                        style={{paddingRight:'0.3rem'}}
                                    />

                                    <h5 className="fw-normal" style={{ display: 'flex', justifySelf: 'center', textAlign: `${isMobile ? 'center' : 'start'}` }}>Welcome to our municipal app</h5>
                                </div>
                                <b className="heading mb-4" style={{ display: 'flex', textAlign: `${isMobile ? 'center' : 'start'}` }}>Empower Your Community with Our Platform</b>
                            </div>
                        </div>
                        <div className="col-md-6" >
                            <div className="title-heading">
                                <p style={{ paddingBottom: '4%', justifyContent: `${isMobile ? 'center' : 'start'}`, textAlign: `${isMobile ? 'center' : 'start'}` }} className="text-muted para-desc mb-0" >Discover a streamlined way to advocate for your community's needs and foster civic engagement without the hassle of logging in. Engage effortlessly with a platform designed to amplify your voice and connect you with like-minded individuals.</p>
                                <div style={{ display: 'flex', justifyContent:`${isMobile? 'center':'start'}`}}>
                                    {
                                        isMobile ?
                                            <motion.div whileHover={{ scale: 1.05, backgroundColor: '#EEF7FF', color: '#242424' }}
                                                whileTap={{
                                                    scale: 0.8,
                                                }} type="submit" className="" style={{ marginBottom: '2rem', color: '#fff', backgroundColor: '#242424', display: 'inline-block', borderStyle: 'none', borderRadius: '50px', flex: '0 auto', order: '0', alignSelf: 'flex-start', padding: '0.875rem 2rem', lineHeight: 'inherit', cursor: 'pointer' }} onClick={handlePetition}>Create petition</motion.div>
                                            :
                                            <motion.div whileHover={{ scale: 1.05, backgroundColor: '#EEF7FF', color: '#242424' }}
                                                whileTap={{
                                                    scale: 0.8,
                                                }} type="submit" className="" style={{ color: '#fff', backgroundColor: '#242424', display: 'inline-block', borderStyle: 'none', borderRadius: '50px', flex: '0 auto', order: '0', alignSelf: 'flex-start', padding: '0.875rem 2rem', lineHeight: 'inherit', cursor: 'pointer' }} onClick={handlePetition}>Create petition</motion.div>
                                    }
                                </div>
                            </div>
                        </div>
                        {/* </div> */}

                        <div className="col-md-12 mt-4 pt-2 mt-sm-0 pt-sm-0 align-items-center justify-content-center" >
                            {isMobile ?
                                <img
                                    src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6578581b5b392936003da540_mobile%20visual.webp"
                                    loading="eager"
                                    sizes="100vw"
                                    srcSet="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6578581b5b392936003da540_mobile%20visual-p-500.webp 500w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6578581b5b392936003da540_mobile%20visual-p-800.webp 800w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6578581b5b392936003da540_mobile%20visual.webp 903w"
                                    alt="BusinessChat dashboard displaying features like chatbot, helpdesk, and WhatsApp Marketing"
                                    // className="hide-desktop"
                                    style={{ margin: '-24px' }}
                                />
                                :
                                <img
                                    className="hide-mobile-landscape home-page-hero image-hero-home"
                                    src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/65784ee7f2fdefdc299e7c78_Hero%20image.webp"
                                    loading="eager"
                                    style={{ margin: '0px -29px', scale: '1.01' }}
                                    sizes="(max-width: 479px) 99vw, (max-width: 767px) 752.4125366210938px, (max-width: 991px) 99vw, (max-width: 1439px) 95vw, (max-width: 1919px) 86vw, 73vw"
                                    srcSet="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/65784ee7f2fdefdc299e7c78_Hero%20image-p-500.webp 500w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/65784ee7f2fdefdc299e7c78_Hero%20image-p-800.webp 800w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/65784ee7f2fdefdc299e7c78_Hero%20image-p-1080.webp 1080w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/65784ee7f2fdefdc299e7c78_Hero%20image-p-1600.webp 1600w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/65784ee7f2fdefdc299e7c78_Hero%20image.webp 1920w"
                                    alt="Businesschat platform interface"
                                />

                            }
                        </div>
                    </div>
                </Fade>
            </section>

            <section style={{ height: '17rem', paddingTop: '3rem', paddingBottom: '6rem', marginTop: '0rem', marginBottom: '0rem', width: '100%' }} className="section" id="features">
                <div className="adv" style={{ width: '87.8%', marginLeft: '6.1%', marginRight: '6.1%' }}>
                    <div className="div-block-39">
                        <div className="brand-wrap" style={{ width: '100%', transform: 'translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', willChange: 'transform' }}>
                            <img src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/65410753d5988352f85263ce_dALEEL.webp" loading="lazy" alt="" className="brand-logo" />
                            <img src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522dfacbc6595a760ce56e2_7ed1791e-5be2-4747-be13-1290b9a592be.svg" loading="lazy" alt="" className="brand-logo" />
                            <img src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e3bbb97a83b9c222c44c_logo3.webp" loading="lazy" alt="" className="brand-logo" />
                            <img src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e055f8028276244f2073_Rasees_coupon-338x150.webp" loading="lazy" alt="" className="brand-logo" />
                            <img src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e40c01945334e6478190_aT4RiRR9jX24V9CdTyOvLAKYqMlGBntMI2ntq0fJ.webp" loading="lazy" srcSet="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e40c01945334e6478190_aT4RiRR9jX24V9CdTyOvLAKYqMlGBntMI2ntq0fJ-p-500.webp 500w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e40c01945334e6478190_aT4RiRR9jX24V9CdTyOvLAKYqMlGBntMI2ntq0fJ.webp 954w" alt="" sizes="(max-width: 479px) 114.5875015258789px, (max-width: 767px) 24vw, (max-width: 1439px) 183.35000610351562px, 229.1875px" className="brand-logo" />
                            <img src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e343d7cd843a5d36852a_Doctor_house_logo.webp" loading="lazy" sizes="(max-width: 479px) 109.9375px, (max-width: 767px) 23vw, (max-width: 1439px) 175.90000915527344px, 219.875px" srcSet="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e343d7cd843a5d36852a_Doctor_house_logo-p-500.webp 500w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e343d7cd843a5d36852a_Doctor_house_logo-p-800.webp 800w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e343d7cd843a5d36852a_Doctor_house_logo-p-1080.webp 1080w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e343d7cd843a5d36852a_Doctor_house_logo-p-1600.webp 1600w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e343d7cd843a5d36852a_Doctor_house_logo-p-2000.webp 2000w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e343d7cd843a5d36852a_Doctor_house_logo.webp 3782w" alt="" className="brand-logo" />
                            <img src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e585d4a92133beb933e5_J2390JZaR9D9Vq9YP79jdsJNlp8kFXxcXvk7oqnC.webp" loading="lazy" sizes="(max-width: 479px) 97.9625015258789px, (max-width: 767px) 20vw, (max-width: 1439px) 156.7375030517578px, 195.9250030517578px" srcSet="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e585d4a92133beb933e5_J2390JZaR9D9Vq9YP79jdsJNlp8kFXxcXvk7oqnC-p-500.webp 500w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e585d4a92133beb933e5_J2390JZaR9D9Vq9YP79jdsJNlp8kFXxcXvk7oqnC-p-800.webp 800w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e585d4a92133beb933e5_J2390JZaR9D9Vq9YP79jdsJNlp8kFXxcXvk7oqnC.webp 1374w" alt="" className="brand-logo" />
                            <img src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e649496b7b6fa1fd6aa3_Z4D6nG12Xa5jGTp2cqxLKKbsHlkF5lnSqDKqQ9oM.webp" loading="lazy" alt="" className="brand-logo" />
                        </div>
                        <div className="brand-wrap" style={{ width: '100%', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', willChange: 'transform' }}>
                            <img src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/65410753d5988352f85263ce_dALEEL.webp" loading="lazy" alt="" className="brand-logo" />
                            <img src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522dfacbc6595a760ce56e2_7ed1791e-5be2-4747-be13-1290b9a592be.svg" loading="lazy" alt="" className="brand-logo" />
                            <img src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e3bbb97a83b9c222c44c_logo3.webp" loading="lazy" alt="" className="brand-logo" />
                            <img src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e055f8028276244f2073_Rasees_coupon-338x150.webp" loading="lazy" alt="" className="brand-logo" />
                            <img src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e40c01945334e6478190_aT4RiRR9jX24V9CdTyOvLAKYqMlGBntMI2ntq0fJ.webp" loading="lazy" srcSet="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e40c01945334e6478190_aT4RiRR9jX24V9CdTyOvLAKYqMlGBntMI2ntq0fJ-p-500.webp 500w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e40c01945334e6478190_aT4RiRR9jX24V9CdTyOvLAKYqMlGBntMI2ntq0fJ.webp 954w" alt="" sizes="(max-width: 479px) 114.5875015258789px, (max-width: 767px) 24vw, (max-width: 1439px) 183.35000610351562px, 229.1875px" className="brand-logo" />
                            <img src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e343d7cd843a5d36852a_Doctor_house_logo.webp" loading="lazy" sizes="(max-width: 479px) 109.9375px, (max-width: 767px) 23vw, (max-width: 1439px) 175.90000915527344px, 219.875px" srcSet="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e343d7cd843a5d36852a_Doctor_house_logo-p-500.webp 500w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e343d7cd843a5d36852a_Doctor_house_logo-p-800.webp 800w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e343d7cd843a5d36852a_Doctor_house_logo-p-1080.webp 1080w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e343d7cd843a5d36852a_Doctor_house_logo-p-1600.webp 1600w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e343d7cd843a5d36852a_Doctor_house_logo-p-2000.webp 2000w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e343d7cd843a5d36852a_Doctor_house_logo.webp 3782w" alt="" className="brand-logo" />
                            <img src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e585d4a92133beb933e5_J2390JZaR9D9Vq9YP79jdsJNlp8kFXxcXvk7oqnC.webp" loading="lazy" sizes="(max-width: 479px) 97.9625015258789px, (max-width: 767px) 20vw, (max-width: 1439px) 156.7375030517578px, 195.9250030517578px" srcSet="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e585d4a92133beb933e5_J2390JZaR9D9Vq9YP79jdsJNlp8kFXxcXvk7oqnC-p-500.webp 500w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e585d4a92133beb933e5_J2390JZaR9D9Vq9YP79jdsJNlp8kFXxcXvk7oqnC-p-800.webp 800w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e585d4a92133beb933e5_J2390JZaR9D9Vq9YP79jdsJNlp8kFXxcXvk7oqnC.webp 1374w" alt="" className="brand-logo" />
                            <img src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6522e649496b7b6fa1fd6aa3_Z4D6nG12Xa5jGTp2cqxLKKbsHlkF5lnSqDKqQ9oM.webp" loading="lazy" alt="" className="brand-logo" />
                        </div>
                    </div>
                </div>

            </section>

            <section style={{ paddingTop: '3rem', paddingBottom: '6rem', marginTop: '0rem', marginBottom: '0rem', width: '100%' }} className="section" id="features">
                <div className="brodcast-line2">
                    <img src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6480171142a0ce741b56ccaf_Line-2.svg" loading="lazy" alt="Decorative line " className="img-fluid" />
                </div>
                <div class="background-mesh-3" style={{ width: '30%' }}>
                    <div class="mesh-purple-3"></div>
                    <div class="mesh-bleu-3"></div>
                </div>
                <div className="position-relative" style={{ marginLeft: '6.1%', marginRight: '6.1%' }}>
                    <div className="row" >
                        <div className="col-lg-8">
                            <Fade direction="up" damping={0.7} triggerOnce style={{ listStyle: 'none', padding: 0, marginLeft: "13px" }} className="section-title mb-4 pb-2">
                                <div>
                                    <h4 className="title mb-4">Empower Your Voice <br /> Shape Your Community</h4>
                                    <p className="text-muted para-desc mb-0">Join our platform to amplify your voice, spark change, and shape the future of your municipality.</p>
                                </div>
                            </Fade>
                            <div className="row" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                <Fade direction="left" damping={0.7} triggerOnce className="col-md-6 mt-4 pt-2">
                                    <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-lg overflow-hidden">
                                        <FiCodesandbox className="fea icon-lg fea-icon" />
                                        <div className="content mt-4">
                                            <h5>User Friendly</h5>
                                            <p className="text-muted mt-3">Designed with simplicity in mind, our platform offers an intuitive user experience, making petition creation effortless for everyone.</p>

                                            {/* <a href="/page-service-detail" className="link">Read more<MdArrowForward/></a> */}
                                        </div>
                                    </div>
                                </Fade>
                                <Fade direction="left" damping={0.7} triggerOnce className="col-md-6 mt-4 pt-2">

                                    <div >
                                        <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-lg overflow-hidden">
                                            <FiSend className="fea icon-lg fea-icon" />
                                            <div className="content mt-4">
                                                <h5>Super Fast</h5>
                                                <p className="text-muted mt-3">Experience lightning-fast petition creation and engagement on our platform, ensuring swift action on community issues.</p>

                                                {/* <a href="/page-service-detail" className="link">Read more <MdArrowForward/></a> */}
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                                <Fade direction="left" damping={0.7} triggerOnce className="col-md-6 mt-4 pt-2">

                                    <div>
                                        <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-lg overflow-hidden">
                                            <FiStar className="fea icon-lg fea-icon" />
                                            <div className="content mt-4">
                                                <h5>Easy Petition Creation</h5>
                                                <p className="text-muted mt-3">Our intuitive petition creation tool allows you to draft and submit petitions with ease.</p>

                                                {/* <a href="/page-service-detail" className="link">Read more <MdArrowForward/></a> */}
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                                <Fade direction="left" damping={0.7} triggerOnce className="col-md-6 mt-4 pt-2">
                                    <div >
                                        <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-lg overflow-hidden">
                                            <FiBookmark className="fea icon-lg fea-icon" />
                                            <div className="content mt-4">
                                                <h5>Municipal Search</h5>
                                                <p className="text-muted mt-3">Explore petitions tailored to your municipality with our comprehensive search feature.</p>

                                                {/* <a href="/page-service-detail" className="link">Read more <MdArrowForward/></a> */}
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <Fade direction="right" damping={0.7} triggerOnce>
                                <div className="row" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    <div className="col-lg-12 col-md-6 mt-4 pt-2">
                                        <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-lg overflow-hidden">
                                            <FiUsers className="fea icon-lg fea-icon" />
                                            <div className="content mt-4">
                                                <h5>No Login Required</h5>
                                                <p className="text-muted mt-3">Enjoy hassle-free participation on our platform without the need for cumbersome user accounts or login credentials</p>

                                                {/* <a href="/page-service-detail" className="link">Read more <MdArrowForward/></a> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6 mt-4 pt-2">
                                        <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-lg overflow-hidden">
                                            <FiMessageCircle className="fea icon-lg fea-icon" />
                                            <div className="content mt-4">
                                                <h5>Like/Dislike Functionality</h5>
                                                <p className="text-muted mt-3">Express your stance on petitions through our interactive like/dislike feature, enabling you to signal your support or opposition with a single click.</p>

                                                {/* <a href="/page-service-detail" className="link">Read more <MdArrowForward/></a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>

                    {/* <img src='/images/square/square-warning.png' width={500} height={500} className="img-fluid rounded-pill bg-image-position" alt="" />
                            <img src='/images/square/square-success.png' width={140} height={140} className="img-fluid rounded-lg avatar avatar-large bg-image-position-2 spin-anything" alt="" /> */}
                </div>
            </section>



            <section style={{ paddingTop: '3rem', paddingBottom: '6rem', marginTop: '0rem', marginBottom: '0rem', width: '100%', paddingLeft: '6.1%', paddingRight: '6.1%' }} className="section" id="features">
                <div className="brodcast-line2">
                    <img src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6480171142a0ce741b56ccaf_Line-2.svg" loading="lazy" alt="Decorative line " className="img-fluid" />
                </div>
                <div class="background-mesh-3" style={{ width: '30%' }}>
                    <div class="mesh-purple-3"></div>
                    <div class="mesh-bleu-3"></div>
                </div>
                <div>
                    <Fade direction="up" damping={0.7} triggerOnce style={{ backgroundColor: 'transparent' }}>
                        <div className="mt-4 mt-2" style={{ backgroundColor: 'transparent' }}>
                            <div className="row align-items-center" style={{ backgroundColor: 'transparent' }}>
                                <div className="col-md-6 order-2 order-md-1" style={{ backgroundColor: 'transparent', marginBottom: '2rem' }}>
                                    <div className="text-lg-end" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <img
                                            src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/65a178bf02611b560181d27e_ChatBot%20Hero%20EN%20(1).webp"
                                            loading="lazy"
                                            sizes="(max-width: 479px) 89vw, (max-width: 767px) 80vw, 500px"
                                            srcSet="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/65a178bf02611b560181d27e_ChatBot%20Hero%20EN%20(1)-p-500.webp 500w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/65a178bf02611b560181d27e_ChatBot%20Hero%20EN%20(1)-p-800.webp 800w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/65a178bf02611b560181d27e_ChatBot%20Hero%20EN%20(1)-p-1080.webp 1080w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/65a178bf02611b560181d27e_ChatBot%20Hero%20EN%20(1).webp 1093w"
                                            alt="whatsapp chatbot"
                                            className="img-fluid"
                                        />

                                        <div className="background-mesh-4">
                                            <div className="mesh-purple-4"></div>
                                            <div className="mesh-bleu-4"></div>
                                        </div>                                    </div>
                                </div>

                                <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 order-1 order-md-2" style={{ backgroundColor: 'transparent' }}>
                                    <div className="section-title" style={{ backgroundColor: 'transparent', marginLeft: '13px' }}>
                                        <h4 className="title mb-4">Delight your customers & Team with WhatsApp Chatbot </h4>

                                        <p className="text-muted">Reduce your team's workload by up to 40% with your Ecommerce chatbot. Help them focus on the most important conversations.
                                            Connect your chatbot with your store to provide instant order status updates to your customers upon request</p>
                                        <ul className="list-unstyled text-muted">
                                            <li className="mb-1"><span className="text-primary h5 me-2"><img
                                                src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6482c12c1867cc9b3bde40c5_popular-plan-check.svg"
                                                loading="lazy"
                                                alt=""
                                            /></span>Real-time Updates</li>
                                            <li className="mb-1"><span className="text-primary h5 me-2"><img
                                                src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6482c12c1867cc9b3bde40c5_popular-plan-check.svg"
                                                loading="lazy"
                                                alt=""
                                            /></span>Comprehensive Insights</li>
                                        </ul>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>

            <section style={{ paddingTop: '3rem', paddingBottom: '6rem', marginTop: '0rem', marginBottom: '0rem', width: '100%', paddingLeft: '6.1%', paddingRight: '6.1%' }} className="section" id="features">

                <div class="background-mesh-3" style={{ width: '30%' }}>
                    <div class="mesh-purple-3"></div>
                    <div class="mesh-bleu-3"></div>
                </div>
                <div className="padding-section-large">
                    <Fade direction="up" damping={0.7} triggerOnce style={{ backgroundColor: 'transparent' }}>
                        <div className="mt-4 mt-2" style={{ backgroundColor: 'transparent' }}>
                            <div className="row align-items-center" style={{ backgroundColor: 'transparent' }}>
                                <div className="col-md-6 order-2 order-md-2" style={{ backgroundColor: 'transparent', marginBottom: '2rem' }}>
                                    <div className="text-lg-end" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <img
                                            src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/655615828ff4d7cbf37fd7ea_Campaigns%20EN.webp"
                                            loading="lazy"
                                            srcSet="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/655615828ff4d7cbf37fd7ea_Campaigns%20EN-p-500.webp 500w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/655615828ff4d7cbf37fd7ea_Campaigns%20EN.webp 903w"
                                            alt="whatsapp broadcast and bulk campaigns"
                                            sizes="(max-width: 479px) 89vw, (max-width: 767px) 83vw, (max-width: 991px) 84vw, 454px"
                                            className="img-fluid"
                                        />

                                        <div className="background-mesh-4">
                                            <div className="mesh-purple-4"></div>
                                            <div className="mesh-bleu-4"></div>
                                        </div>                                    </div>
                                </div>

                                <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 order-1 order-md-1" style={{ backgroundColor: 'transparent' }}>
                                    <div className="section-title" style={{ backgroundColor: 'transparent', marginLeft: '13px' }}>
                                        <h4 className="title mb-4">Send Whatsapp Marketing campaigns to all your customers without ban </h4>

                                        <p className="text-muted">For your seasonal campaigns & product launches. Send your WhatssApp Broadcast campaigns to all your customers in one click. Get access to a detailed report on all your campaign metrics</p>
                                        <ul className="list-unstyled text-muted">
                                            <li className="mb-1"><span className="text-primary h5 me-2"><img
                                                src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6482c12c1867cc9b3bde40c5_popular-plan-check.svg"
                                                loading="lazy"
                                                alt=""
                                            /></span>Real-time Updates</li>
                                            <li className="mb-1"><span className="text-primary h5 me-2"><img
                                                src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6482c12c1867cc9b3bde40c5_popular-plan-check.svg"
                                                loading="lazy"
                                                alt=""
                                            /></span>Comprehensive Insights</li>
                                            <li className="mb-1"><span className="text-primary h5 me-2"><img
                                                src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6482c12c1867cc9b3bde40c5_popular-plan-check.svg"
                                                loading="lazy"
                                                alt=""
                                            /></span>Enhanced Community Engagement</li>
                                        </ul>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>

            <section style={{ paddingTop: '3rem', paddingBottom: '6rem', marginTop: '0rem', marginBottom: '0rem', width: '100%', paddingLeft: '6.1%', paddingRight: '6.1%' }} className="section" id="features">
                <div className="brodcast-line2">
                    <img src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6480171142a0ce741b56ccaf_Line-2.svg" loading="lazy" alt="Decorative line " className="img-fluid" />
                </div>
                <div className="">
                    <Fade direction="up" damping={0.5} triggerOnce style={{ backgroundColor: 'transparent' }}>
                        <div className="mt-4 mt-2" style={{ backgroundColor: 'transparent' }}>
                            <div className="row align-items-center justify-content-center" style={{ backgroundColor: 'transparent' }}>
                                <h2 style={{ display: 'flex', justifyContent: 'center', paddingBottom: '2rem' }}>Whatsapp Marketing in numbers</h2>

                                <div className="col-md-11 order-1 order-md-1 blue-pink-gradient" style={{ borderRadius: '3rem', padding: `${isMobile ? '2rem' : '3rem'}` }} >
                                    <div className="section-title" style={{ backgroundColor: 'transparent', display: 'flex', flexDirection: `${useMediaQuery({ query: '(max-width: 990px)' }) ? 'column' : 'row'}`, justifyContent: 'space-around' }}>
                                        <div className="value-block">
                                            <div className="heading-style-h1 bigger counter-numbers">80<span className="heading-style-h2">%</span></div>
                                            <div>
                                                <div className="value-heading-2">Open Rate</div>
                                                <p className="text-size-regular-5">The best open rate out there. No email subject line can beat that</p>
                                            </div>
                                        </div>

                                        <div className="value-block">
                                            <div className="heading-style-h1 bigger counter-numbers">20<span className="heading-style-h2">%</span></div>
                                            <div>
                                                <div className="value-heading-2">Click-through rate</div>
                                                <p className="text-size-regular-5">Send campaigns designed to get you optimal results</p>
                                            </div>
                                        </div>

                                        <div className="value-block">
                                            <div className="heading-style-h1 bigger counter-numbers">90<span className="heading-style-h2">$</span></div>
                                            <div>
                                                <div className="value-heading-2">Return on each $1</div>
                                                <p className="text-size-regular-5">And that's just an average. Our top performers get $130 on the dollar</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>

            <section style={{ paddingTop: '3rem', paddingBottom: '6rem', marginTop: '0rem', marginBottom: '0rem', width: '100%', paddingLeft: '6.1%', paddingRight: '6.1%' }} className="section" id="features">
                <div className="brodcast-line2">
                    <img src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6480171142a0ce741b56ccaf_Line-2.svg" loading="lazy" alt="Decorative line " className="img-fluid" />
                </div>
                <div>
                    <Fade direction="up" damping={0.7} triggerOnce style={{ backgroundColor: 'transparent' }}>
                        <div className="mt-4 mt-2" style={{ backgroundColor: 'transparent' }}>
                            <div className="row align-items-center" style={{ backgroundColor: 'transparent' }}>
                                <div className="col-md-6 order-2 order-md-1" style={{ backgroundColor: 'transparent', marginBottom: '2rem' }}>
                                    <div class="background-mesh-3" style={{ width: '30%' }}>
                                        <div class="mesh-purple-3"></div>
                                        <div class="mesh-bleu-3"></div>
                                    </div>
                                    <div className="text-lg-end" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <img
                                            src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/65561541de139e073687bc97_Abondoned%20Cart%20Flow%20EN.webp"
                                            loading="lazy"
                                            srcSet="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/65561541de139e073687bc97_Abondoned%20Cart%20Flow%20EN-p-500.webp 500w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/65561541de139e073687bc97_Abondoned%20Cart%20Flow%20EN.webp 903w"
                                            alt="whatsapp abandoned cart notifications"
                                            sizes="(max-width: 479px) 89vw, (max-width: 767px) 83vw, 100vw"
                                            className="img-fluid"
                                        />


                                        <div className="background-mesh-4">
                                            <div className="mesh-purple-4"></div>
                                            <div className="mesh-bleu-4"></div>
                                        </div>                                    </div>
                                </div>

                                <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 order-1 order-md-2" style={{ backgroundColor: 'transparent' }}>
                                    <div className="section-title" style={{ backgroundColor: 'transparent', marginLeft: '13px' }}>
                                        <h4 className="title mb-4">Recover up to 20% of your abandoned carts</h4>

                                        <p className="text-muted">Only 30% of customers that add a product to their shopping cart will finalize their purchase & 70% will leave . Send automated WhatsApp notifications with special offers and recover up 20% of your lost carts.</p>
                                        <ul className="list-unstyled text-muted">
                                            <li className="mb-1"><span className="text-primary h5 me-2">
                                                <img
                                                    src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6482c12c1867cc9b3bde40c5_popular-plan-check.svg"
                                                    loading="lazy"
                                                    alt=""
                                                />
                                            </span>Real-time Updates</li>
                                            <li className="mb-1"><span className="text-primary h5 me-2">
                                                <img
                                                    src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6482c12c1867cc9b3bde40c5_popular-plan-check.svg"
                                                    loading="lazy"
                                                    alt=""
                                                /></span>Comprehensive Insights</li>
                                            <li className="mb-1"><span className="text-primary h5 me-2"><img
                                                src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6482c12c1867cc9b3bde40c5_popular-plan-check.svg"
                                                loading="lazy"
                                                alt=""
                                            /></span>Enhanced Community Engagement</li>
                                        </ul>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>

            <section style={{ paddingTop: '3rem', paddingBottom: '6rem', marginTop: '0rem', marginBottom: '0rem', width: '100%', paddingLeft: '6.1%', paddingRight: '6.1%' }} className="section" id="features">

                <div>
                    <Fade direction="up" damping={0.7} triggerOnce style={{ backgroundColor: 'transparent' }}>
                        <div className="mt-4 mt-2" style={{ backgroundColor: 'transparent' }}>
                            <div className="row align-items-center" style={{ backgroundColor: 'transparent' }}>

                                <div className="col-md-6 order-2 order-md-2" style={{ backgroundColor: 'transparent', marginBottom: '2rem' }}>
                                    <div class="background-mesh-3" style={{ width: '30%' }}>
                                        <div class="mesh-purple-3"></div>
                                        <div class="mesh-bleu-3"></div>
                                    </div>

                                    <div className="text-lg-end" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <img
                                            src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/65a9683d7486b0b6c74c9867_INBOX%20COMPONENT%20EN.webp"
                                            loading="lazy"
                                            height=""
                                            alt="whatsapp help desk and multi-agent inbox"
                                            sizes="(max-width: 479px) 89vw, (max-width: 767px) 80vw, 100vw"
                                            srcSet="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/65a9683d7486b0b6c74c9867_INBOX%20COMPONENT%20EN-p-500.webp 500w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/65a9683d7486b0b6c74c9867_INBOX%20COMPONENT%20EN-p-800.webp 800w, https://assets-global.website-files.com/64649e6768f2f33bbec372fd/65a9683d7486b0b6c74c9867_INBOX%20COMPONENT%20EN.webp 912w"
                                            className="img-fluid"
                                        />



                                        <div className="background-mesh-4">
                                            <div className="mesh-purple-4"></div>
                                            <div className="mesh-bleu-4"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 order-1 order-md-1" style={{ backgroundColor: 'transparent' }}>
                                    <div className="section-title" style={{ backgroundColor: 'transparent', marginLeft: '13px' }}>
                                        <h4 className="title mb-4">WhatsApp Helpdesk for all your team</h4>

                                        <p className="text-muted">Boost your team's productivity on WhatsApp with automated conversation routing and customized quick replies.
                                            Keep track of your team's performance with your supervisor dashboard.</p>
                                        <ul className="list-unstyled text-muted">
                                            <li className="mb-1"><span className="text-primary h5 me-2">
                                                <img
                                                    src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6482c12c1867cc9b3bde40c5_popular-plan-check.svg"
                                                    loading="lazy"
                                                    alt=""
                                                />
                                            </span>Real-time Updates</li>
                                            <li className="mb-1"><span className="text-primary h5 me-2">
                                                <img
                                                    src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6482c12c1867cc9b3bde40c5_popular-plan-check.svg"
                                                    loading="lazy"
                                                    alt=""
                                                /></span>Comprehensive Insights</li>
                                            <li className="mb-1"><span className="text-primary h5 me-2"><img
                                                src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6482c12c1867cc9b3bde40c5_popular-plan-check.svg"
                                                loading="lazy"
                                                alt=""
                                            /></span>Enhanced Community Engagement</li>
                                        </ul>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>

            <Fade direction="up" damping={0.7} triggerOnce>
                <div className="send-campaign">
                    <div className="padding-section-large">
                        <div className="container-medium">
                            <div className="margin-custom2 margin-bottom">
                                <h2 className="section-heading">
                                    <strong className="section-heading">WhatsApp-first solutions to help you grow your business</strong>
                                </h2>
                            </div>
                            <div className="products-list">
                                <div id="w-node-_90d2b5a1-27c0-f6f2-9db0-e9572272f628-67841314" className="integration-list_item">
                                    <img alt="Whatsapp API Icon Businesschat" src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/653f9364327ec69cbe5bbec8_Whatsapp%20API.svg" loading="lazy" className="margin-custom1 margin-bottom icon-block green-gradient" />
                                    <h3 className="margin-xsmall margin-bottom heading-style-h4">WhatsApp Marketing automation platform</h3>
                                    <p className="text-size-regular-2 padding-bottom-2">Automating your Ecommerce marketing and sending broadcast campaigns on WhatsApp is made easy with BusinessChat. Choose from the Top performing automation flows pre-built for you.</p>
                                    <div className="integration-body"></div>
                                    <a href="#" data-w-id="68d2d055-ed08-8251-4522-25256dbd3be4" style={{ backgroundColor: 'rgb(177, 236, 255)' }} className="button w-button">Marketing automation solution</a>
                                </div>
                                <div className="integration-list_item">
                                    <img alt="Whatsapp customer service icon Businesschat" loading="lazy" src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/653f934e268e090307a18d59_Conversational.svg" className="margin-custom1 margin-bottom icon-block green-gradient" />
                                    <h3 className="margin-xsmall margin-bottom heading-style-h4">WhatsApp Customer service Platform</h3>
                                    <p className="text-size-regular-2 padding-bottom-2">Make WhatsApp your first sales and customer service channel. Engage with your customers on their favorite messaging platform while powering your team for Top-notch customer service.</p>
                                    <div className="integration-body"></div>
                                    <a href="#" data-w-id="e7cbcdb7-4f0f-fa77-688c-293f24040e88" style={{ backgroundColor: 'rgb(177, 236, 255)' }} className="button w-button">Customer service solution</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="brodcast-line2">
                        <img src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6480171142a0ce741b56ccaf_Line-2.svg" loading="lazy" alt="Decorative line " className="img-fluid" />
                    </div>
                    <div className="background-mesh-5">
                        <div className="mesh-purple-14"></div>
                        <div className="mesh-bleu-13"></div>
                    </div>
                </div>
            </Fade>


            <section style={{ paddingTop: '3rem', paddingBottom: '6rem', marginTop: '0rem', marginBottom: '0rem', width: '100%', paddingLeft: '6.1%', paddingRight: '6.1%' }} className="section" id="features">
                <div className="brodcast-line2">
                    <img src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6480171142a0ce741b56ccaf_Line-2.svg" loading="lazy" alt="Decorative line " className="img-fluid" />
                </div>
                <div className="">
                    <Fade direction="up" damping={0.7} triggerOnce style={{ backgroundColor: 'transparent' }}>
                        <div className="mt-4 mt-2" style={{ backgroundColor: 'transparent' }}>
                            <div className="row align-items-center justify-content-center" style={{ backgroundColor: 'transparent' }}>

                                <div className="col-md-11 order-1 order-md-1 blue-pink-gradient" style={{ display: 'flex', flexDirection: 'row', borderRadius: '3rem', padding: `${isMobile ? '2rem' : '3rem'}` }} >
                                    <div className="section-title" style={{ backgroundColor: 'transparent', display: 'flex', flexDirection: `column`, justifyContent: 'space-around' }}>
                                        <h2 style={{ display: 'flex', justifyContent: 'start', paddingBottom: '0rem' }}>Join the Conversation</h2>
                                        <b style={{ color: 'grey', display: 'flex', justifyContent: 'start' }}>Running great Ads is no longer enough.</b>
                                        <p style={{ color: '#524G42', fontWeight: '400' }} className="text-size-regular-5">We will send you the best tips and tools to help you convert more visitors and retain more loyal customers.<br /> We will share some cool WhatsApp marketing & customer service Insights as well.</p>

                                        {
                                            isMobile ?
                                                <motion.div whileHover={{ scale: 1.05, backgroundColor: '#EEF7FF', color: '#242424' }}
                                                    whileTap={{
                                                        scale: 0.8,
                                                    }} type="submit" className="" style={{ color: '#fff', backgroundColor: '#242424', display: 'inline-block', borderStyle: 'none', borderRadius: '50px', flex: '0 auto', order: '0', alignSelf: 'flex-start', padding: '0.875rem 2rem', lineHeight: 'inherit', cursor: 'pointer' }} onClick={handlePetition}>Create petition</motion.div>
                                                :
                                                <motion.div whileHover={{ scale: 1.05, backgroundColor: '#EEF7FF', color: '#242424' }}
                                                    whileTap={{
                                                        scale: 0.8,
                                                    }} type="submit" className="" style={{ color: '#fff', backgroundColor: '#242424', display: 'inline-block', borderStyle: 'none', borderRadius: '50px', flex: '0 auto', order: '0', alignSelf: 'flex-start', padding: '0.875rem 2rem', lineHeight: 'inherit', cursor: 'pointer' }} onClick={handlePetition}>Create petition</motion.div>
                                        }

                                    </div>
                                    <div className="cta-right-img">
                                        <img src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/65561c7ddc98631f3e2371b5_Newsletter%20Thumbnail.webp" loading="lazy" alt="" className="image-join-us" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>



            <FooterFour />
            <ScrollTop />
        </>
    )
}