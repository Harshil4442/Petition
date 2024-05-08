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

                <div className="brodcast-line2" style={{ top: '40%' }}>
                    <img src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6480171142a0ce741b56ccaf_Line-2.svg" loading="lazy" alt="Decorative line " className="img-fluid" />
                </div>
                <div className="container" >


                    <div className="row" style={{ paddingTop: '2rem' }}>
                        <div class="background-mesh-3" style={{ width: '30%' }}>
                            <div class="mesh-purple-3"></div>
                            <div class="mesh-bleu-3"></div>
                        </div>
                        <div className="col-md-8" >
                            <img style={{ borderRadius: '1rem', scale: '0.99', maxWidth: '100%', maxHeight: '100%', marginBottom: '2rem' }} src="\images\petition-details.jpg"></img>
                            <div className="">
                                <button style={{ color: '#242424', fontSize: '0.7rem', fontWeight: '600', marginBottom: '1rem', backgroundColor: '#FFDEFB', border: 'transparent', borderRadius: '1.5rem', padding: '0.5rem' }}>{petition.municipality}</button>
                                <h1 className="heading-style-h2"  >{petition.title}</h1>
                                <div style={{ marginTop: '1rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}> <img style={{ borderRadius: '1rem', width: '2.5rem', height: 'auto', marginRight: '0.7rem' }} src="\images\profile.png"></img><p style={{ padding: '0px', fontSize: '1.1rem', fontWeight: '500', borderRadius: '0.4rem', backgroundColor: 'white', background: 'transparent' }} className="text-muted mt-3">Started by <b>{petition.name}</b>    </p></div>
                                <div style={{ marginTop: '2.1rem' }}><b style={{ fontSize: '1.25rem', fontWeight: '600' }}>Description<br /></b> <p style={{ padding: '0px', fontWeight: '500', borderRadius: '0.4rem', backgroundColor: 'white', background: 'transparent' }} className="text-muted mt-3">{petition.description}</p></div>

                            </div>
                        </div>

                        <div className={`col-md-3 ${isMobile?'':'position-fixed'}`} style={{ right:isMobile?'auto':'9%', padding: isMobile ? '1rem 1rem' : '0 0' }}>
                            <div className="blue-pink-gradient" style={{ padding: '2rem 1px', borderRadius: '2rem', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                <div style={{ width: isMobile ? '95%' : '85%', height: '0.5rem', display: 'flex', flexDirection: 'row', border: '1px solid black', borderRadius: '0.2rem' }}>
                                    <div style={{ width: `${(((petition.like) / (petition.like + petition.dislike)) * 100)}%`, borderRadius: '0.2rem', backgroundColor: '#242424' }}></div>
                                    <div style={{ width: `${(((petition.dislike) / (petition.like + petition.dislike)) * 100)}%` }}></div>
                                </div>
                                <div style={{ width: isMobile ? '95%' : '85%', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '50%' }}><b style={{ fontSize: '2rem', color: '#242424', display: 'flex', justifyContent: 'start' }}>{petition.like}</b>
                                            <motion.div
                                                whileHover={{ scale: 1.005, color: '#242424', background: 'linear-gradient(126deg, #EEEEEE, #EEEEEE  79%)' }}
                                                whileTap={{ scale: 0.95 }}
                                                type="submit"
                                                className="w-button"
                                                onClick={() => handleLike(petition.id)}
                                                style={{ fontWeight: '400', color: '#EEEEEE', backgroundColor: '#242424', display: 'flex', borderStyle: 'none', borderRadius: '50px', flex: '0 auto', fontSize: '15px', order: '0', alignItems: 'center', padding: '8px 20px', justifyContent: 'center', lineHeight: 'inherit', cursor: 'pointer', fontFamily: 'Google sans, sans-serif' }}
                                            >
                                                Upvote
                                            </motion.div>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '50%' }}><b style={{ fontSize: '2rem', color: '#242424', display: 'flex', justifyContent: 'end' }}>{petition.dislike}</b>
                                            <motion.div
                                                whileHover={{ scale: 1.005, color: '#242424', background: 'linear-gradient(126deg, #EEEEEE, #EEEEEE  79%)' }}
                                                whileTap={{ scale: 0.95 }}
                                                type="submit"
                                                className="w-button"
                                                onClick={() => handleDisLike(petition.id)}
                                                style={{ fontWeight: '400', color: '#EEEEEE', backgroundColor: '#242424', display: 'flex', borderStyle: 'none', borderRadius: '50px', flex: '0 auto', fontSize: '15px', order: '0', alignItems: 'center', padding: '8px 20px', justifyContent: 'center', lineHeight: 'inherit', cursor: 'pointer', fontFamily: 'Google sans, sans-serif' }}
                                            >
                                                Downvote
                                            </motion.div></div>
                                    </div>

                                </div>
                                <div style={{ width: isMobile ? '95%' : '85%', }}>
                                    <div style={{ width: '100%', marginTop: '2rem', display: 'flex', flexDirection: 'column' }}>
                                        <div className="categories-2">
                                            <div className="" style={{ fontWeight: '600' }}>Categories</div>
                                            <div className="w-dyn-list" style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
                                                {petition.category.split(' ').map((part, index) => (
                                                    <div key={index} style={{ margin: '0.3rem 0.2rem', backgroundColor: '#F0EBE3', padding: '0.3rem 0.8rem', borderRadius: '1rem' }} className="tags-3">
                                                        <div className="body-default-medium">{part}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <Divider />
                                    <div style={{ width: '100%', marginTop: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                                        
                                            <div className="" style={{ fontWeight: '600',paddingBottom:'0.5rem' }}>Contact</div>
                                            <div className="" style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>
                                                <div style={{display:'flex',  padding: '0rem 0rem', borderRadius: '1rem' }} className="">
                                                <img style={{scale:'0.8',  width: '1.3rem', height: 'auto', marginRight: '0.7rem' }} src="\images\email.png"></img>
                                                    <div style={{fontSize:'13px'}}>{petition.email}</div>
                                                </div>
                                                <div style={{ display:'flex', padding: '0rem 0rem', borderRadius: '1rem' }} className="">
                                                <img style={{scale:'0.8',  width: '1.3rem', height: 'auto', marginRight: '0.7rem' }} src="\images\phone.png"></img>
                                                    <div style={{fontSize:'13px'}}>{petition.contact}</div>
                                                </div>
                                                <div style={{ display:'flex', padding: '0rem 0rem', borderRadius: '1rem' }} className="">
                                                <img style={{ scale:'0.8', width: '1.3rem', height: 'auto', marginRight: '0.7rem' }} src="\images\maps-and-flags.png"></img>
                                                    <div style={{fontSize:'13px'}}>{petition.address}</div>
                                                </div>
                                            </div>
                                    </div>
                                    <div style={{ width: '100%', marginTop: '1rem', display: 'flex', flexDirection: 'column' }}>
                                        <Link to="/petitions" activeclass="active" spy="true" smooth="true" duration={500} className="sub-menu-item" style={{ fontWeight: '500', textDecoration: 'none', textTransform: 'capitalize', fontSize: '16px' }}>
                                        <motion.div
                                                whileHover={{ scale: 1.005, color: '#242424', background: 'linear-gradient(126deg, #EEEEEE, #EEEEEE  79%)' }}
                                                whileTap={{ scale: 0.95 }}
                                                type="submit"
                                                className="w-button"
                                                style={{ fontWeight: '400', color: '#EEEEEE', backgroundColor: '#242424', display: 'flex', borderStyle: 'none', borderRadius: '50px', flex: '0 auto', fontSize: '12px', order: '0', alignItems: 'center', padding: '8px 20px', justifyContent: 'center', lineHeight: 'inherit', cursor: 'pointer', fontFamily: 'Google sans, sans-serif' }}
                                            >
                                                Browse more petitions<MdArrowDownward />
                                            </motion.div>
                                        </Link>
                                        <Divider />
                                    </div>
                                </div>
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