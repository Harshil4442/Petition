import React, { useState, useEffect } from "react";
import MarketingNavbar from "../componants/navbar/marketingNavbarHome";
import FooterFour from "../componants/footer/footerFour";
import ScrollTop from "../componants/scrollTop";
import { useParams } from 'react-router-dom';
import petitionData from '../data/petitionData';
import { useMediaQuery } from 'react-responsive';
import { Fade } from "react-awesome-reveal";
import Dropdown from 'react-bootstrap/Dropdown';
import { motion } from "framer-motion";
import Divider from '@mui/joy/Divider';
import { MdArrowDownward, MdArrowRightAlt } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';







export default function petitionDetails(props) {
    const { id } = useParams();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [petitions, setPetitions] = useState([]);
    const [clicked, setc] = useState(true);
    const [clickedLikes, setClickedLikes] = useState(Array(petitionData.length).fill(false));
    const [clickedDisLikes, setClickedDisLikes] = useState(Array(petitionData.length).fill(false));

    const petition = (petitions.length ? petitions : petitionData).find(petition => petition.id === id);
    useEffect(() => {
        // Initialize the petitions state with like and dislike counts from petitionData
        if (clicked) {
            const initializedPetitions = petitionData.map(petition => ({
                ...petition,
                like: parseInt(petition.like),
                dislike: parseInt(petition.dislike)
            }));
            setPetitions(initializedPetitions);

            setc(false);
        }
    }, [clicked]);


    const isMini = useMediaQuery({ query: '(max-width: 450px)' });

    const handleLike = (index) => {
        if (!clickedLikes[index]) {
            const newPetitions = [...petitions];
            newPetitions[index].like += 1;
            setPetitions(newPetitions);
            const newClickedLikes = [...clickedLikes];
            newClickedLikes[index] = true;
            setClickedLikes(newClickedLikes);

            if (clickedDisLikes[index]) {
                const newPetitions1 = [...petitions];
                newPetitions1[index].dislike -= 1;
                setPetitions(newPetitions1);
                const newClickedDisLikes1 = [...clickedDisLikes];
                newClickedDisLikes1[index] = false;
                setClickedDisLikes(newClickedDisLikes1);
            } else {
                return;
            }
        }
    };

    const handleDisLike = (index) => {
        if (!clickedDisLikes[index]) {
            const newPetitions = [...petitions];
            newPetitions[index].dislike += 1;
            setPetitions(newPetitions);
            const newClickedDisLikes = [...clickedDisLikes];
            newClickedDisLikes[index] = true;
            setClickedDisLikes(newClickedDisLikes);

            if (clickedLikes[index]) {
                const newPetitions1 = [...petitions];
                newPetitions1[index].like -= 1;
                setPetitions(newPetitions1);
                const newClickedLikes1 = [...clickedLikes];
                newClickedLikes1[index] = false;
                setClickedLikes(newClickedLikes1);
            }
        }
    };



    return (
        <>
            <MarketingNavbar />

            <section className="section" id="features" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', fontFamily: 'Google sans, sans-serif' }}>
                <div className="container" >
                    <div className="row">
                        <div className="col-md-12" style={{ margin: '3rem 0rem' }}>
                            <div className="text-center">
                                <b className="text-center" style={{ fontWeight: '700', fontSize: '2.3rem' }}>{petition.title}</b>
                                <p style={{ color: '#7D7C7C' }}>{petition.municipality}</p>
                            </div>
                        </div>
                        <div className="col-md-8" >
                            <img style={{ borderRadius: '1rem', scale: '0.99', maxWidth: '100%', maxHeight: '100%', marginBottom: '2rem' }} src="\images\petition-details.jpg"></img>
                            <div className="text-start">
                                <b className="text-start" style={{ fontWeight: '600', fontSize: '1.6rem' }}>Why this petition matters</b>
                                <div style={{ marginTop: '1rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}> <img style={{ borderRadius: '1rem', width: '2.5rem', height: 'auto', marginRight: '0.7rem' }} src="\images\profile.png"></img><p style={{ padding: '0px', fontSize: '1.1rem', fontWeight: '500', borderRadius: '0.4rem', backgroundColor: 'white', background: 'transparent' }} className="text-muted mt-3">Started by <b>{petition.name}</b>    </p></div>
                                <div style={{ marginTop: '2.1rem' }}><b style={{ fontSize: '1.25rem', fontWeight: '600' }}>Description<br /></b> <p style={{ padding: '0px', fontWeight: '500', borderRadius: '0.4rem', backgroundColor: 'white', background: 'transparent' }} className="text-muted mt-3">{petition.description}</p></div>

                            </div>
                        </div>
                        <div className="col-md-4" style={{ padding: '15px 5px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <div style={{ width: isMobile ? '95%' : '80%', height: '0.5rem', display: 'flex', flexDirection: 'row', border: '1px solid black', borderRadius: '0.2rem' }}>
                                <div style={{ width: `${((petition.like / (petition.like + petition.dislike)) * 100)}%`, backgroundColor: 'green' }}></div>
                                <div style={{ width: `${((petition.dislike / (petition.like + petition.dislike)) * 100)}%` }}></div>
                            </div>
                            <div style={{ width: isMobile ? '95%' : '80%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '50%' }}><b style={{ display: 'flex', justifyContent: 'start' }}>{petition.like}</b>
                                        <motion.div whileHover={{ scale: 1.05, backgroundColor: '#EEF7FF', color: '#242424' }}
                                            whileTap={{
                                                scale: 0.8,
                                            }} type="submit" onClick={() => handleLike(petition.id)} style={{ fontSize: '0.8rem', backgroundColor: '#242424', color: '#fff', border:'transparent', padding: '5px 12px', margin: '0.8rem 0rem', borderRadius: '1rem', cursor: 'pointer', display: 'flex', justifyContent: 'start',boxShadow:clickedLikes[petition.id]?'none':'0 1px 5px grey' }}>UpVote</motion.div></div>
                                    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '50%' }}><b style={{ display: 'flex', justifyContent: 'end' }}>{petition.dislike}</b>
                                        <motion.div whileHover={{ scale: 1.05, backgroundColor: '#EEF7FF', color: '#242424' }}
                                            whileTap={{
                                                scale: 0.8,
                                            }} type="submit" onClick={() => handleDisLike(petition.id)} style={{ fontSize: '0.8rem', backgroundColor: '#242424', color: '#fff', border: 'transparent', padding: '5px 12px', margin: '0.8rem 0rem', borderRadius: '1rem', cursor: 'pointer', display: 'flex', justifyContent: 'end',boxShadow:clickedDisLikes[petition.id]?'none':'0 1px 5px grey' }}>DownVote</motion.div></div>
                                </div>

                            </div>
                            <div style={{ width: '100%' }}>
                                <div style={{ width: '80%', marginTop: '2rem', display: 'flex', flexDirection: 'column' }}>
                                    <h5 style={{ margin: '1px 2px' }}>Categories</h5>
                                    <Divider />
                                    <p style={{ padding: '10px 5px' }}>{petition.category}</p>
                                </div>
                                <div style={{ width: '80%', marginTop: '2rem', display: 'flex', flexDirection: 'column' }}>
                                    <h5 style={{ margin: '1px 2px' }}>Contact us</h5>
                                    <Divider />
                                    <p style={{ padding: '0px 5px', margin: '0px' }}>{petition.email}</p>
                                    <p style={{ padding: '0px 5px', margin: '0px' }}>{petition.contact}</p>
                                    <p style={{ padding: '0px 5px', margin: '0px' }}>{petition.address}</p>
                                </div>
                                <div style={{ width: '80%', marginTop: '2rem', display: 'flex', flexDirection: 'column' }}>
                                    <Link to="/petitions" activeclass="active" spy="true" smooth="true" duration={500} className="sub-menu-item" style={{ fontWeight: '500', textDecoration: 'none', textTransform: 'capitalize', fontSize: '16px' }}>

                                        <p style={{ textAlign: 'end', fontSize: '0.75rem', padding: '0px 5px', margin: '0px' }}>Browse more petitions<MdArrowDownward /></p>
                                    </Link>
                                    <Divider />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src='/images/square/square-warning.png' width={500} height={500} className="img-fluid rounded-pill bg-image-position" alt="" />
                <img src='/images/square/square-success.png' width={140} height={140} className="img-fluid rounded-lg avatar avatar-large bg-image-position-2 spin-anything" alt="" />




                <div className="container mt-100 mt-60">
                    <div className="row align-items-center">


                        <Fade direction="up" damping={0.3} className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 order-1 order-md-1">
                            <div className="section-title">
                                <h6 className="fw-normal text-primary">Explore all petitions</h6>
                                <h4 className="title mb-4">Discover Change-Makers: Browse and Support Petitions Today </h4>

                                <p className="text-muted">Explore a diverse range of petitions crafted by passionate individuals dedicated to making a difference in their communities. With just a few clicks, you can support causes that resonate with you and contribute to positive change.</p>
                            </div>
                        </Fade>
                        <Fade direction="up" damping={0.3} className="col-md-6 order-2 order-md-2" style={{ display: 'flex', justifyContent: 'center' }}>
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