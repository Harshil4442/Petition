import React, { useState, useEffect } from "react";
import MarketingNavbar from "../componants/navbar/marketingNavbarHome";
import FooterFour from "../componants/footer/footerFour";
import ScrollTop from "../componants/scrollTop";
import { Link } from 'react-router-dom';
import petitionData from '../data/petitionData';
import { MdArrowForward, MdModelTraining } from "react-icons/md";
import { useMediaQuery } from 'react-responsive';
import { motion } from "framer-motion";
import { AnimatedOnScroll } from "react-animated-css-onscroll";


export default function Petitions() {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };
    const [filpetitions, setFilPetitions] = useState([
        ...petitionData
    ]);
    const [petitions, setPetitions] = useState([]);
    const [clicked, setc] = useState(true);
    const [clickedLikes, setClickedLikes] = useState(Array(petitionData.length).fill(false));
    const [clickedDisLikes, setClickedDisLikes] = useState(Array(petitionData.length).fill(false));
    const [searchTerm, setSearchTerm] = useState("");

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

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const generateShortDescription = (description) => {
        const short = description.length > 50 ? `${description.substring(0, 50)}...` : description;
        return short;
    };

    const handleLike = (index) => {
        if (!clickedLikes[index]) {
            const newPetitions = [...petitions];
            newPetitions[index].like += 1;
            setPetitions(newPetitions);
            const newClickedLikes = [...clickedLikes];
            newClickedLikes[index] = true;
            setClickedLikes(newClickedLikes);
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
        }
    };

    const handleSearch = (e) => {
        const initializedPetitions = e.map(petition => ({
            ...petition,
            like: parseInt(petitions.find(p => p.id === petition.id) ? petitions.find(p => p.id === petition.id).like : petition.like),
            dislike: parseInt(petitions.find(p => p.id === petition.id) ? petitions.find(p => p.id === petition.id).dislike : petition.dislike)
        }));
        setFilPetitions(initializedPetitions);
    };

    const handlepSearch = (e) => {
        setSearchTerm(e.target.value);
        const filteredData = petitionData.filter(petition => {
            return petition.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
                petition.municipality.toLowerCase().includes(e.target.value.toLowerCase()) ||
                petition.description.toLowerCase().includes(e.target.value.toLowerCase());
        });
        handleSearch(filteredData);
    };

    return (
        <>
            <MarketingNavbar handleSearch={handleSearch} />
            <section style={{ boxShadow: ' inset 0px -50px 100px rgba(255, 255, 255, 1)', paddingBottom: '3rem', background: 'linear-gradient(160deg, rgba(177,221,255,1) 19%, rgba(232,185,255,0.7557948179271709) 30%, rgba(255,162,246,0.6333858543417367) 37%, rgba(255,255,255,0.9277836134453782) 91%)' }} className="bg-half-170 d-flex align-items-center" id="home">
                <div className="container">
                    <motion.ul variants={container} initial="hidden" animate="visible" style={{ listStyle: 'none' }} className="row align-items-center">
                        <motion.li variants={item} className="col-md-6">
                            <div className="title-heading">
                                <h6 className="fw-normal" style={{ color: 'darkblue' }}>Browse Petitions</h6>
                                <h4 className="heading fw-semibold text-dark mb-4">Stand Up for What Matters in Your Community</h4>
                                <p className="text-muted para-desc mb-0">Browse through a curated collection of petitions addressing a wide range of community concerns. From advocating for safer streets to protecting the environment, discover opportunities to lend your voice and make a difference. </p>
                            </div>
                        </motion.li>
                        <motion.li variants={item} className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <div className="ms-lg-5">
                                <div className="text-lg-end">
                                    <img src='/images/petition3.jpg' style={{ maxWidth: '100%', scale: '0.95', width: '100%', height: '100%', borderRadius: '1rem', boxShadow: '0 0 7px 1px rgba(0, 0, 0, 0.05)' }} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </motion.li>
                    </motion.ul>
                </div>
            </section>
            <AnimatedOnScroll
                animationIn="fadeInUpBig"
                className="fade-in-custom"
                style={{
                    marginTop: "80px",
                }}
            >
                {
                    isMobile ?
                        <motion.ul variants={container} initial="hidden" animate="visible" style={{ listStyle: 'none', width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <motion.li variants={item} style={{ position: 'relative', display: 'inline-block', paddingTop: '3px' }}>
                                <img src="/images/svg/search.svg" style={{ opacity: '0.6', position: 'absolute', top: '53%', left: '15px', transform: 'translateY(-50%)', width: '16px', height: 'auto', zIndex: '1' }}></img>
                                <input
                                    style={{
                                        width: '270px',
                                        height: '38px',
                                        fontSize: '0.9rem',
                                        paddingLeft: '35px',
                                        borderRadius: '2rem',
                                        borderColor: 'lightgrey',
                                        boxShadow: '0 0 8px 1px rgba(0, 0, 0, 0.2)'
                                    }}
                                    value={searchTerm}
                                    onChange={handlepSearch}
                                    type="text"
                                    placeholder="Search"
                                ></input>
                            </motion.li>
                        </motion.ul>
                        :
                        <motion.ul variants={container} initial="hidden" animate="visible" style={{ listStyle: 'none', width: '100%', display: 'flex', paddingLeft: '8rem', paddingRight: '3rem', justifyContent: 'start' }}>
                            <motion.li variants={item} style={{ position: 'relative', display: 'inline-block', paddingTop: '3px' }}>
                                <img src="/images/svg/search.svg" style={{ opacity: '0.6', position: 'absolute', top: '53%', left: '15px', transform: 'translateY(-50%)', width: '16px', height: 'auto', zIndex: '1' }}></img>
                                <input
                                    style={{
                                        width: '200px',
                                        height: '38px',
                                        fontSize: '0.9rem',
                                        paddingLeft: '35px',
                                        borderRadius: '2rem',
                                        borderColor: 'lightgrey',
                                        boxShadow: '0 0 8px 1px rgba(0, 0, 0, 0.2)'
                                    }}
                                    value={searchTerm}
                                    onChange={handlepSearch}
                                    type="text"
                                    placeholder="Search"
                                ></input>
                            </motion.li>
                        </motion.ul>
                }
            </AnimatedOnScroll>
            <section className="section" id="features">
                <AnimatedOnScroll
                    animationIn="fadeInUpBig"
                    className="fade-in-custom"
                    style={{
                        marginTop: "80px",
                    }}
                >
                    <div className="container position-relative" style={{ background: 'radial-gradient(circle, rgba(249,128,255,0.2417892156862745) 0%, rgba(255,255,255,1) 47%)', width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <div className="col-lg-8" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <motion.ul variants={container} initial="hidden" animate="visible" className="row" style={{ listStyle: 'none', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                    {isMobile ?
                                        (petitions ? petitions : petitionData).filter(petition => filpetitions.some(p => p.id === petition.id)).map((petition, index) => (
                                            <motion.li variants={item} key={index} className="col-md-12 mt-4 pt-2" style={{ textDecoration: 'none', height: '22rem' }}>
                                                <div className="card features feature-primary feature-clean feature-transition p-4 py-2 border-0 shadow rounded-lg overflow-hidden" style={{ height: '100%' }}>
                                                    <div className="content mt-4" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                        <h5>{generateShortDescription(petition.title)}</h5>
                                                        <h6>{generateShortDescription(petition.municipality)}</h6>
                                                        <p className="text-muted mt-3">{generateShortDescription(petition.description)}</p>
                                                        <div style={{ marginBottom: '1rem', display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                                                            <div style={{ width: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'start' }}>
                                                                <span style={{ width: '3.5rem', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                                                    <img
                                                                        src={clickedLikes[petition.id] ? '/images/thumbs-up-filled.png' : '/images/thumbs-up.png'}
                                                                        onClick={() => handleLike(petition.id)}
                                                                        style={{ width: '2rem', margin: '0.5rem', cursor: 'pointer' }}
                                                                        alt=""
                                                                    />
                                                                    {/* const petition = petitionData.find(petition => petition.id === id); */}
                                                                    {petition.like}
                                                                </span>
                                                                <span style={{ width: '3.5rem', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                                                    <img
                                                                        src={clickedDisLikes[petition.id] ? '/images/negative-vote-filled.png' : '/images/negative-vote.png'}
                                                                        onClick={() => handleDisLike(petition.id)}
                                                                        style={{ width: '2rem', margin: '0.5rem', cursor: 'pointer' }}
                                                                        alt=""
                                                                    />
                                                                    {petition.dislike}
                                                                </span>
                                                            </div>
                                                            <Link to={{ pathname: `/petition-details/${petition.id}` }} duration={500} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'end', alignItems: 'center', width: '13rem' }}>
                                                                <motion.div whileHover={{ scale: 1.05 }}
                                                                    whileTap={{
                                                                        scale: 0.9,
                                                                        borderRadius: "50%"
                                                                    }} style={{ color: 'black', borderStyle: "hidden", backgroundColor: '#F0EBE3', borderRadius: '0.7rem', paddingLeft: '0.7rem', paddingRight: '0.7rem', padding: '0.3rem', margin: '0.5rem', textDecoration: 'none', justifyContent: 'end', alignItems: 'end' }} >view more<MdArrowForward /></motion.div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.li>

                                        ))
                                        : (petitions ? petitions : petitionData).filter(petition => filpetitions.some(p => p.id === petition.id)).map((petition, index) => (
                                            <motion.li variants={item} key={index} className="col-md-12 mt-4 pt-2" style={{ textDecoration: 'none', width: '48%', height: '23rem' }}>
                                                <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-lg overflow-hidden" style={{ height: '100%' }}>
                                                    <div className="content mt-4" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                                                        <h5>{generateShortDescription(petition.title)}</h5>
                                                        <h6>{generateShortDescription(petition.municipality)}</h6>
                                                        <p className="text-muted mt-3">{generateShortDescription(petition.description)}</p>
                                                        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                                                            <div style={{ width: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'start' }}>
                                                                <span style={{ width: '4rem', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                                                    <img
                                                                        src={clickedLikes[petition.id] ? '/images/thumbs-up-filled.png' : '/images/thumbs-up.png'}
                                                                        onClick={() => handleLike(petition.id)}
                                                                        style={{ width: '2rem', margin: '0.5rem', cursor: 'pointer' }}
                                                                        alt=""
                                                                    />
                                                                    {/* const petition = petitionData.find(petition => petition.id === id); */}
                                                                    {petition.like}
                                                                </span>
                                                                <span style={{ width: '4rem', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                                                    <img
                                                                        src={clickedDisLikes[petition.id] ? '/images/negative-vote-filled.png' : '/images/negative-vote.png'}
                                                                        onClick={() => handleDisLike(petition.id)}
                                                                        style={{ width: '2rem', margin: '0.5rem', cursor: 'pointer' }}
                                                                        alt=""
                                                                    />
                                                                    {petition.dislike}
                                                                </span>
                                                            </div>
                                                            <Link to={{ pathname: `/petition-details/${petition.id}` }} duration={500} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'end', alignItems: 'center', width: '13rem' }}>
                                                                <motion.div whileHover={{ scale: 1.05 }}
                                                                    whileTap={{
                                                                        scale: 0.9,
                                                                        borderRadius: "50%"
                                                                    }} style={{ color: 'black', borderStyle: "hidden", backgroundColor: '#F0EBE3', borderRadius: '0.7rem', paddingLeft: '0.7rem', paddingRight: '0.7rem', padding: '0.3rem', margin: '0.5rem', textDecoration: 'none', justifyContent: 'end', alignItems: 'end' }} >view more<MdArrowForward /></motion.div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                            </motion.li>
                                        ))}
                                </motion.ul>
                            </div>
                        </div>

                        {/* <img src='/images/square/square-warning.png' width={500} height={500} className="img-fluid rounded-pill bg-image-position" alt="" />
                        <img src='/images/square/square-success.png' width={140} height={140} className="img-fluid rounded-lg avatar avatar-large bg-image-position-2 spin-anything" alt="" /> */}

                    </div>
                </AnimatedOnScroll>
                <AnimatedOnScroll
                    animationIn="fadeInUpBig"
                    className="fade-in-custom"
                    style={{
                        marginTop: "80px",
                    }}
                >
                    <div style={{ boxShadow: ' inset 0px -100px 100px rgba(255, 255, 255, 1), inset 0px 100px 100px rgba(255, 255, 255, 1)', background: ' linear-gradient(30deg, rgba(255,255,255,1) 9%, rgba(100,230,243,0.269432773109244) 10%, rgba(255,255,255,1) 89%)' }} className="container mt-100 mt-60">
                        <motion.ul variants={container} initial="hidden" animate="visible" style={{ listStyle: 'none' }} className="row align-items-center">
                            <motion.li variants={item} className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 order-1 order-md-1">
                                <div className="section-title">
                                    <h6 className="fw-normal text-primary">Explore all petitions</h6>
                                    <h4 className="title mb-4">Discover Change-Makers: Browse and Support Petitions Today </h4>
                                    <p className="text-muted">Explore a diverse range of petitions crafted by passionate individuals dedicated to making a difference in their communities. With just a few clicks, you can support causes that resonate with you and contribute to positive change.</p>
                                </div>
                            </motion.li>
                            <motion.li variants={item} className="col-md-6 order-2 order-md-2">
                                <div className="text-lg-end align-items-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src='/images/petition4.jpg' style={{ maxWidth: '100%', width: '480px', height: '300px', borderRadius: '1.5rem', boxShadow: '0 0 20px 3px rgba(0, 0, 0, 0.1)' }} className="img-fluid" alt="" />
                                </div>
                            </motion.li>
                        </motion.ul>
                    </div>
                </AnimatedOnScroll>
            </section>
            <FooterFour />
            <ScrollTop />
        </>
    );
}
