import React from "react";
import {AiFillLinkedin,BiLogoFacebook,AiOutlineInstagram,AiOutlineTwitter,FiMail,AiOutlineFile,MdOutlineKeyboardArrowRight,MdArrowForward} from "../../assets/icons/vander"

export default function FooterFour(){
    return(
        <footer className="bg-footer">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-py-60 footer-border">
                            <div className="row">
                                <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                                    <a href="#" className="logo-footer">
                                        <img src='/images/petition_transparent.png' style={{width:'90px', height:'90px'}}  alt=""/>
                                    </a>
                                    <p className="mt-4">Join Us in Building a Better Tomorrow.</p>
                                    <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                                        <li className="list-inline-item"><a href="http://linkedin.com/company/shreethemes" target="_blank" className="rounded"><AiFillLinkedin/></a></li>
                                        <li className="list-inline-item"><a href="https://www.facebook.com/shreethemes" target="_blank" className="rounded"><BiLogoFacebook/></a></li>
                                        <li className="list-inline-item"><a href="https://www.instagram.com/shreethemes/" target="_blank" className="rounded"><AiOutlineInstagram/></a></li>
                                        <li className="list-inline-item"><a href="https://twitter.com/shreethemes" target="_blank" className="rounded"><AiOutlineTwitter/></a></li>
                                    </ul>
                                </div>
                                
                                <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="footer-head">Company</h5>
                                    <ul className="list-unstyled footer-list mt-4">
                                        <li><a href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> About us</a></li>

                                    </ul>
                                </div>
                                
                                <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="footer-head">Useful Links</h5>
                                    <ul className="list-unstyled footer-list mt-4">
                                        <li><a href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Terms of Services</a></li>
                                        <li><a href="#" className="text-foot"><MdOutlineKeyboardArrowRight className="me-1"/> Privacy Policy</a></li>
                                    </ul>
                                </div>
            
                                <div className="col-lg-4 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 className="footer-head">Your Voice Matters. Make it Heard</h5>

                                  
                                    <small className="d-block">Unite Your Community, Amplify Your Impact. Together, We Make Change Happen </small>

                                    {/* <img src='/images/petition_transparent.png' width={104} height={104} className="mt-4" alt=""/> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-py-30 footer-bar">
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <div className="text-center">
                                <p className="mb-0">© {new Date().getFullYear()} petitions. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}