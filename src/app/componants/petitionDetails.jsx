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


                    <div className="row" style={{ paddingTop: '5rem' }}>

                        <div className="col-md-8" >
                            <img style={{ borderRadius: '1rem', scale: '0.99', maxWidth: '100%', maxHeight: '100%', marginBottom: '2rem' }} src="\images\petition-details.jpg"></img>
                            <div className="">
                                <button style={{ color: '#242424', fontSize: '0.7rem', fontWeight: '600', marginBottom: '1rem', backgroundColor: '#FFDEFB', border: 'transparent', borderRadius: '1.5rem', padding: '0.5rem' }}>{petition.municipality}</button>
                                <h1 className="heading-style-h2"  >{petition.title}</h1>
                                <div style={{ marginTop: '1rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}> <img style={{ borderRadius: '1rem', width: '2.5rem', height: 'auto', marginRight: '0.7rem' }} src="\images\profile.png"></img><p style={{ padding: '0px', fontSize: '1.1rem', fontWeight: '500', borderRadius: '0.4rem', backgroundColor: 'white', background: 'transparent' }} className="text-muted mt-3">Started by <b>{petition.name}</b>    </p></div>
                                <div style={{ marginTop: '2.1rem' }}><b style={{ fontSize: '1.25rem', fontWeight: '600' }}>Description<br /></b> <p style={{ padding: '0px', fontWeight: '500', borderRadius: '0.4rem', backgroundColor: 'white', background: 'transparent' }} className="text-muted mt-3">{petition.description}</p></div>

                            </div>
                        </div>

                        <div className="col-md-4" style={{ padding: '10px 5px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>

                            <div style={{ width: isMobile ? '95%' : '85%', height: '0.5rem', display: 'flex', flexDirection: 'row', border: '1px solid black', borderRadius: '0.2rem' }}>
                                <div style={{ width: `${(((petition.like) / (petition.like + petition.dislike)) * 100)}%`, borderRadius: '0.2rem', backgroundColor: '#0E46A3' }}></div>
                                <div style={{ width: `${(((petition.dislike) / (petition.like + petition.dislike)) * 100)}%` }}></div>
                            </div>
                            <div style={{ width: isMobile ? '95%' : '85%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '50%' }}><b style={{ fontSize: '2rem', color: '#0E46A3', display: 'flex', justifyContent: 'start' }}>{petition.like}</b>
                                        <motion.div
                                            whileHover={{ scale: 1.005, color: '#242424', background: 'linear-gradient(126deg, #b1ecff, #dfbaff 79%)' }}
                                            whileTap={{ scale: 0.95 }}
                                            type="submit"
                                            className="w-button"
                                            onClick={()=>handleLike(petition.id)}
                                            style={{ fontWeight: '400', color: '#242424', backgroundColor: 'rgb(177, 236, 255)', display: 'flex', borderStyle: 'none', borderRadius: '50px', flex: '0 auto', fontSize: '16px', order: '0', alignItems: 'center', padding: '10px 28px', justifyContent: 'center', lineHeight: 'inherit', cursor: 'pointer', fontFamily: 'Google sans, sans-serif' }}
                                        >
                                            UpVote
                                        </motion.div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '50%' }}><b style={{ fontSize: '2rem', color: '#0E46A3', display: 'flex', justifyContent: 'end' }}>{petition.dislike}</b>
                                        <motion.div
                                            whileHover={{ scale: 1.005, color: '#242424', background: 'linear-gradient(126deg, #b1ecff, #dfbaff 79%)' }}
                                            whileTap={{ scale: 0.95 }}
                                            type="submit"
                                            className="w-button"
                                            onClick={()=>handleDisLike(petition.id)}
                                            style={{ fontWeight: '400', color: '#242424', backgroundColor: 'rgb(177, 236, 255)', display: 'flex', borderStyle: 'none', borderRadius: '50px', flex: '0 auto', fontSize: '16px', order: '0', alignItems: 'center', padding: '10px 28px', justifyContent: 'center', lineHeight: 'inherit', cursor: 'pointer', fontFamily: 'Google sans, sans-serif' }}
                                        >
                                            DownVote
                                        </motion.div></div>
                                </div>

                            </div>
                            <div style={{ width: isMobile ? '95%' : '85%', }}>
                                <div style={{ width: '100%', marginTop: '2rem', display: 'flex', flexDirection: 'column' }}>
                                    <div className="categories-2">
                                        <div className="category">Categories</div>
                                        <div className="w-dyn-list" style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
                                            {petition.category.split(' ').map((part, index) => (
                                                <div key={index} style={{margin:'0.3rem 0.2rem', backgroundColor: '#d8ffdb', padding: '0.3rem 0.8rem', borderRadius: '1rem' }} className="tags-3">
                                                    <div className="body-default-medium">{part}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: '100%', marginTop: '2rem', display: 'flex', flexDirection: 'column' }}>
                                    <div className="categories-2">
                                        <div className="category">Contact</div>
                                        <div className="w-dyn-list" style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>
                                                <div style={{margin:'0.3rem 0.2rem', backgroundColor: '#F6F5F2', padding: '0.3rem 0.8rem', borderRadius: '1rem' }} className="tags-3">
                                                    <div className="body-default-medium">{petition.email}</div>
                                                </div>
                                                <div style={{margin:'0.3rem 0.2rem', backgroundColor: '#F6F5F2', padding: '0.3rem 0.8rem', borderRadius: '1rem' }} className="tags-3">
                                                    <div className="body-default-medium">{petition.contact}</div>
                                                </div>
                                                <div style={{margin:'0.3rem 0.2rem', backgroundColor: '#F6F5F2', padding: '0.3rem 0.8rem', borderRadius: '1rem' }} className="tags-3">
                                                    <div className="body-default-medium">{petition.address}</div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: '100%', marginTop: '2rem', display: 'flex', flexDirection: 'column' }}>
                                    <Link to="/petitions" activeclass="active" spy="true" smooth="true" duration={500} className="sub-menu-item" style={{ fontWeight: '500', textDecoration: 'none', textTransform: 'capitalize', fontSize: '16px' }}>

                                        <p style={{ textAlign: 'end', fontSize: '0.75rem', padding: '0px 5px', margin: '0px' }}>Browse more petitions<MdArrowDownward /></p>
                                    </Link>
                                    <Divider />
                                </div>
                            </div>
                        </div>
                    </div>
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