import React, { useState, useEffect } from "react";
import MarketingNavbar from "../componants/navbar/marketingNavbarHome";
import FooterFour from "../componants/footer/footerFour";
import ScrollTop from "../componants/scrollTop";
import { Link } from 'react-router-dom';
import petitionData from '../data/petitionData';
import { useMediaQuery } from 'react-responsive';
import { motion } from "framer-motion";
import { Fade } from 'react-awesome-reveal';
import { AiOutlineCheckCircle } from "../assets/icons/vander";
import Drawer from '@mui/joy/Drawer';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { display, height, width } from "@mui/system";
import Stack from '@mui/system/Stack';
import { styled } from '@mui/system';
import Grid from '@mui/system/Unstable_Grid';




// import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// import Filter from "./filter";


export default function Petitions() {


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

    const isMini = useMediaQuery({ query: '(max-width: 450px)' });

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
        const filteredData = (petitions ? petitions : petitionData).filter(petition => {
            return petition.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
                petition.municipality.toLowerCase().includes(e.target.value.toLowerCase()) ||
                petition.description.toLowerCase().includes(e.target.value.toLowerCase());
        });
        handleSearch(filteredData);

    };


    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const categorySet = new Set(petitionData.map(item => item.category));
    const municipalitySet = new Set(petitionData.map(item => item.municipality));
    const category = Array.from(categorySet);
    const municipality = Array.from(municipalitySet);

    const Item = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#262B32' : '#fff',
        padding: theme.spacing(1),
        textAlign: 'center',
        borderRadius: 4,
    }));
    const Item1 = styled('div')(({ theme }) => ({
        height:'auto',
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        border: '1px solid',
        borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
        padding: theme.spacing(1),
        borderRadius: '40px',
        textAlign: 'center',
        cursor:'pointer',
        fontFamily:'Google sans, sans-serif',
        flex:'0 0 auto',
        margin:'0.3rem',
        width:'auto'
    }));

    const [categorybutton, setCategorybutton] = useState(Array(category.length).fill(false));
    const [municipalitybutton, setMunicipalitybutton] = useState(Array(petitionData.length).fill(false));


    const [filpetitionsCat, setFilPetitionsCat] = useState([
        ...(filpetitions ? filpetitions : (petitions ? petitions : petitionData))
    ]);
    const [filpetitionsMun, setFilPetitionsMun] = useState([
        ...(filpetitions ? filpetitions : (petitions ? petitions : petitionData))
    ]);


    const handleFilterCat = (cat, id) => {
        const filteredData = (filpetitions ? filpetitions : (petitions ? petitions : petitionData)).filter((petition, index) => {
            const selectedCategories = category.filter((cate, idx) => (id === idx ? !categorybutton[idx] : categorybutton[idx]));
            console.log(selectedCategories);
            return selectedCategories.some(cat => petition.category.toLowerCase() === cat.toLowerCase());
        });
        setFilPetitionsCat(filteredData);
        const newbutton = [...categorybutton];
        newbutton[id] = !newbutton[id];
        setCategorybutton(newbutton);
    }

    const handleFilterMun = (cat, id) => {
        const filteredData = (filpetitions ? filpetitions : (petitions ? petitions : petitionData)).filter((petition, index) => {
            const selectedCategories = municipality.filter((cate, idx) => (id === idx ? !municipalitybutton[idx] : municipalitybutton[idx]));
            console.log(selectedCategories);
            return selectedCategories.some(cat => petition.municipality.toLowerCase() === cat.toLowerCase());
        });
        setFilPetitionsMun(filteredData);
        const newbutton = [...municipalitybutton];
        newbutton[id] = !newbutton[id];
        setMunicipalitybutton(newbutton);
    }


    return (
        <>
            <MarketingNavbar handleSearch={handleSearch} />
            <section style={{ boxShadow: ' inset 0px -50px 100px rgba(255, 255, 255, 1)', paddingBottom: '3.5rem', background: 'linear-gradient(160deg, rgba(177,221,255,1) 19%, rgba(232,185,255,0.7557948179271709) 30%, rgba(255,162,246,0.6333858543417367) 37%, rgba(255,255,255,0.9277836134453782) 91%)' }} className="bg-half-170 d-flex align-items-center" id="home">
                <div className="container">
                    <Fade direction="down" damping={0.5} triggerOnce>
                        <div style={{ listStyle: 'none' }} className="row align-items-center">
                            <div className="col-md-6">
                                <div className="title-heading">
                                    <h6 className="fw-normal" style={{ color: '#393E46' }}>Browse Petitions</h6>
                                    <h4 className="heading fw-semibold text-dark mb-4">Stand Up for What Matters in Your Community</h4>
                                    <p className="text-muted para-desc mb-0">Browse through a curated collection of petitions addressing a wide range of community concerns. From advocating for safer streets to protecting the environment, discover opportunities to lend your voice and make a difference. </p>
                                </div>
                            </div>
                            <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="ms-lg-5">
                                    <div className="text-lg-end">
                                        <img src='/images/petition3.jpg' style={{ maxWidth: '100%', scale: '0.95', width: '100%', height: '100%', borderRadius: '1rem', boxShadow: '0 0 10px 1px rgba(0, 0, 0, 0.05)' }} className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>

            <section className="container">
                <Fade direction="up" damping={0.5} triggerOnce className="section-title" style={{ marginLeft: '13px' }}>
                    <h4 className="title mb-4">Browse Petitions </h4>
                    <p className="text-muted">Search petitions by entering any of the following data:</p>
                    <ul className="list-unstyled text-muted">
                        <li className="mb-1"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle" /></span>Title</li>
                        <li className="mb-1"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle" /></span>Name of Municipality</li>
                        <li className="mb-1"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle" /></span>Other details like name of the writer, deiscription, category etc.</li>
                    </ul>

                </Fade>
            </section>


            <Fade className="container" direction="up" damping={0.5} triggerOnce style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'center' }}>
                {
                    isMobile ?
                        <div style={{ listStyle: 'none', width: '100%', display: 'flex', justifyContent: 'center', marginTop: '4.5rem' }}>
                            <div style={{width:'80%', position: 'relative', display: 'inline-block', paddingTop: '3px' }}>
                                <img src="/images/svg/search.svg" style={{ opacity: '0.6', position: 'absolute', top: '53%', left: '15px', transform: 'translateY(-50%)', width: '16px', height: 'auto', zIndex: '1' }}></img>
                                <input
                                    style={{
                                        width: '100%',
                                        height: '38px',
                                        fontSize: '0.9rem',
                                        paddingLeft: '35px',
                                        borderRadius: '2rem',
                                        borderColor: 'transparent',
                                        backgroundColor:'#F4F4F4',
                                        
                                    }}
                                    value={searchTerm}
                                    onChange={handlepSearch}
                                    type="text"
                                    placeholder="Search petitions"
                                ></input>
                            </div>
                            <div className="" style={{ position: 'relative', display: 'flex', paddingLeft: '1%', paddingTop: '3px', justifyContent: 'end' }}>
                                <motion.div whileHover={{ scale: 1.05 }}
                                    whileTap={{
                                        scale: 0.9,
                                    }}
                                >
                                    <img src="/images/setting.png" onClick={togglePopup} style={{ height: '40px', width: '40px', cursor: 'pointer' }}></img>
                                </motion.div>
                            </div>
                            <Drawer size="lg"  open={showPopup} onClose={togglePopup}>
                                <Box
                                    style={{fontSize:'16px', width: '100%', height: '100%', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'start' }}
                                    role="presentation"

                                >

                                    <Dropdown onClick={togglePopup} onKeyDown={togglePopup} style={{ display: 'flex', justifyContent: 'end',alignItems:'start' }}>
                                        <motion.div whileHover={{ scale: 1.05 }}
                                            whileTap={{
                                                scale: 0.8,
                                            }}
                                        >
                                            <Dropdown.Toggle style={{ background: 'radial-gradient(circle, rgba(210,47,47,1) 30%, rgba(219,64,64,0.9305847338935574) 18%, rgba(255,115,0,0.9616771708683473) 100%)' }} id="dropdown-basic">
                                                X
                                            </Dropdown.Toggle>
                                        </motion.div>
                                    </Dropdown>

                                    <Box sx={{marginLeft:'-2.3rem', overflowY: 'scroll',scrollbarWidth:'none',msOverflowStyle:'none', height: '100%' }}>
                                        <Stack spacing={1} >
                                            <Item>
                                                <div style={{ display: 'flex', justifyContent: 'start', paddingBottom: '0.7rem' }}>
                                                    <b>Category</b>
                                                </div>
                                                    <Divider sx={{ marginBottom:'1rem'}}/>
                                                <Box sx={{display:'flex',flexWrap:'wrap'}}>
                                                        {category.map((cat, index) => (
                                                            <Item1 onClick={() => handleFilterCat(cat, index)} style={{flexWrap:'wrap', fontSize:'13px',textAlign:'center', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderColor: `${categorybutton[index] ? '1 px solid green' : '1 px solid black'}`,boxShadow:`${categorybutton[index]?'inset 0 0 4px 1px #524A4E':' 0 0 4px 1px #524A4E'}` ,backgroundColor: `${categorybutton[index] ? '#F0EBE3' : '#F5F7F8'}` }}>
                                                                <img
                                                                    src={categorybutton[index]?'/images/check.png':'/images/uncheck.png'}
                                                                    style={{
                                                                        width:'1rem',
                                                                        marginRight:'0.3rem'
                                                                    }}
                                                                ></img>
                                                                {cat}
                                                            </Item1>
                                                        ))}
                                                </Box>
                                                <Divider />
                                            </Item>
                                            <Item>
                                                <div style={{ display: 'flex', justifyContent: 'start', paddingBottom: '0.7rem' }}>
                                                    <b>Municipality</b>
                                                </div>
                                                <Divider sx={{ marginBottom:'1rem'}}/>

                                                <Box sx={{display:'flex',flexWrap:'wrap'}}>
                                                        {municipality.map((cat, index) => (
                                                            <Item1 onClick={() => handleFilterMun(cat, index)} style={{fontSize:'13px',textAlign:'center', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderColor: `${municipalitybutton[index] ? '1 px solid green' : '1 px solid black'}`,boxShadow:`${municipalitybutton[index]?'inset 0 0 4px 1px #524A4E':' 0 0 4px 1px #524A4E'}` ,backgroundColor: `${municipalitybutton[index] ? '#F0EBE3' : '#F5F7F8'}` }}>
                                                                <img
                                                                    src={municipalitybutton[index]?'/images/check.png':'/images/uncheck.png'}
                                                                    style={{
                                                                        width:'1rem',
                                                                        marginRight:'0.3rem'
                                                                    }}
                                                                ></img>
                                                                {cat}
                                                                </Item1>
                                                        ))}
                                                </Box>
                                                <Divider />
                                            </Item>

                                        </Stack>


                                    </Box>
                                </Box>
                            </Drawer>
                           
                        </div>
                        :
                        <div style={{ listStyle: 'none', width: '100%', marginTop: '4rem', display: 'flex',justifyContent:'center' }}>
                            <div className="" style={{width:'60%',  position: 'relative', display: 'flex', paddingLeft: '3%', paddingTop: '3px', justifyContent: 'center' }}>
                                <div style={{width:'100%', position: 'relative', display: 'inline-block' }}>
                                    <img src="/images/svg/search.svg" style={{ opacity: '0.6', position: 'absolute', top: '53%', left: '19px', transform: 'translateY(-50%)', width: '16px', height: 'auto', zIndex: '1' }}></img>
                                    <input
                                        style={{
                                            width: '100%',
                                            height: '45px',
                                            fontSize: '0.9rem',
                                            paddingLeft: '45px',
                                            borderRadius: '2rem',
                                            borderColor: 'transparent',
                                            backgroundColor:'#F4F4F4',
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                        value={searchTerm}
                                        onChange={handlepSearch}
                                        type="text"
                                        placeholder="Search petitions"
                                    ></input>
                                </div>
                            </div>

                            <div className="" style={{  position: 'relative', display: 'flex', paddingLeft: '3%', paddingTop: '3px', justifyContent: 'end' }}>
                                <motion.div whileHover={{ scale: 1.05 }}
                                    whileTap={{
                                        scale: 0.9,
                                    }}
                                >
                                    <img src="/images/setting.png" onClick={togglePopup} style={{ height: '45px', width: '45px', cursor: 'pointer' }}></img>
                                </motion.div>
                            </div>
                            <Drawer size="lg" open={showPopup} onClose={togglePopup}>
                                <Box
                                    style={{fontSize:'16px', width: '100%', height: '100%', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'start' }}
                                    role="presentation"

                                >

                                    <Dropdown onClick={togglePopup} onKeyDown={togglePopup} style={{ display: 'flex', justifyContent: 'end',alignItems:'start' }}>
                                        <motion.div whileHover={{ scale: 1.05 }}
                                            whileTap={{
                                                scale: 0.8,
                                            }}
                                        >
                                            <Dropdown.Toggle style={{ background: 'radial-gradient(circle, rgba(210,47,47,1) 30%, rgba(219,64,64,0.9305847338935574) 18%, rgba(255,115,0,0.9616771708683473) 100%)' }} id="dropdown-basic">
                                                X
                                            </Dropdown.Toggle>
                                        </motion.div>
                                    </Dropdown>

                                    <Box sx={{ overflowY: 'scroll',scrollbarWidth:'none',msOverflowStyle:'none', width: '100%', height: '100%' }}>
                                        <Stack spacing={1}>
                                            <Item>
                                                <div style={{ display: 'flex', justifyContent: 'start', paddingBottom: '0.7rem' }}>
                                                    <b>Category</b>
                                                </div>
                                                    <Divider sx={{ marginBottom:'1rem'}}/>
                                                <Box sx={{display:'flex',flexWrap:'wrap'}}>
                                                        {category.map((cat, index) => (
                                                            <Item1 onClick={() => handleFilterCat(cat, index)} style={{fontSize:'13px',textAlign:'center', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderColor: `${categorybutton[index] ? '1 px solid green' : '1 px solid black'}`,boxShadow:`${categorybutton[index]?'inset 0 0 4px 1px #524A4E':' 0 0 4px 1px #524A4E'}` ,backgroundColor: `${categorybutton[index] ? '#F0EBE3' : '#F5F7F8'}` }}>
                                                                <img
                                                                    src={categorybutton[index]?'/images/check.png':'/images/uncheck.png'}
                                                                    style={{
                                                                        width:'1rem',
                                                                        marginRight:'0.3rem'
                                                                    }}
                                                                ></img>
                                                                {cat}
                                                            </Item1>
                                                        ))}
                                                </Box>
                                                <Divider />
                                            </Item>
                                            <Item>
                                                <div style={{ display: 'flex', justifyContent: 'start', paddingBottom: '0.7rem' }}>
                                                    <b>Municipality</b>
                                                </div>
                                                <Divider sx={{ marginBottom:'1rem'}}/>

                                                <Box sx={{display:'flex',flexWrap:'wrap'}}>
                                                        {municipality.map((cat, index) => (
                                                            <Item1 onClick={() => handleFilterMun(cat, index)} style={{fontSize:'13px',textAlign:'center', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderColor: `${municipalitybutton[index] ? '1 px solid green' : '1 px solid black'}`,boxShadow:`${municipalitybutton[index]?'inset 0 0 4px 1px #524A4E':' 0 0 4px 1px #524A4E'}` ,backgroundColor: `${municipalitybutton[index] ? '#F0EBE3' : '#F5F7F8'}` }}>
                                                                <img
                                                                    src={municipalitybutton[index]?'/images/check.png':'/images/uncheck.png'}
                                                                    style={{
                                                                        width:'1rem',
                                                                        marginRight:'0.3rem'
                                                                    }}
                                                                ></img>
                                                                {cat}
                                                                </Item1>
                                                        ))}
                                                </Box>
                                                <Divider />
                                            </Item>

                                        </Stack>


                                    </Box>
                                </Box>
                            </Drawer>

                        </div>
                }
            </Fade>

            <section className="section-petition" id="features">

                <div className="container position-relative" style={{ background: 'radial-gradient(circle, rgba(249,128,255,0.2417892156862745) 0%, rgba(255,255,255,1) 47%)', width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <div className="col-lg-8" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>

                            <div className="row" style={{ listStyle: 'none', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                {isMobile ?
                                    (petitions ? petitions : petitionData).filter(pt =>
                                        filpetitions.some(p => p.id === pt.id) &&
                                        (filpetitionsCat.length===0?filpetitions:filpetitionsCat).some(p => p.category === pt.category) &&
                                        (filpetitionsMun.length===0?filpetitions:filpetitionsMun).some(p => p.municipality === pt.municipality))
                                        .map((petition, index) => (
                                            <Fade direction="up" damping={0.5} triggerOnce key={index} className="col-md-12 mt-4 pt-2" style={{ textDecoration: 'none', height: '22rem' }}>
                                                <div className="card features feature-primary feature-clean feature-transition p-4 py-2 border-0 shadow rounded-lg overflow-hidden" style={{ height: '100%' }}>
                                                    <div className="content mt-4" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                        <b style={{fontSize:'22px'}}>{generateShortDescription(petition.title)}</b>
                                                        <h6>{generateShortDescription(petition.municipality)}</h6>
                                                        <p className="text-muted mt-3">{generateShortDescription(petition.description)}</p>
                                                        <div style={{ marginBottom: '1rem', display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                                                            <div style={{ width: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'start' }}>
                                                                <span style={{ width: '3.5rem', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                                                    <motion.div whileHover={{ scale: 1.05 }}
                                                                        whileTap={{
                                                                            scale: 0.6,
                                                                        }}>
                                                                        <img
                                                                            src={clickedLikes[petition.id] ? '/images/heart-fill.png' : '/images/heart.png'}
                                                                            onClick={() => handleLike(petition.id)}
                                                                            style={{ width: '2rem', margin: '0.5rem', cursor: 'pointer' }}
                                                                            alt=""
                                                                        />
                                                                    </motion.div>
                                                                    {/* const petition = petitionData.find(petition => petition.id === id); */}
                                                                    {petition.like}
                                                                </span>
                                                                <span style={{ width: '3.5rem', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                                                    <motion.div whileHover={{ scale: 1.05 }}
                                                                        whileTap={{
                                                                            scale: 0.6,
                                                                        }}>
                                                                        <img
                                                                            src={clickedDisLikes[petition.id] ? '/images/broken-heart-fill.png' : '/images/broken-heart.png'}
                                                                            onClick={() => handleDisLike(petition.id)}
                                                                            style={{ width: '2rem', margin: '0.5rem', cursor: 'pointer' }}
                                                                            alt=""
                                                                        />
                                                                    </motion.div>
                                                                    {petition.dislike}
                                                                </span>
                                                            </div>
                                                            <Link to={{ pathname: `/petition-details/${petition.id}` }} duration={500} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'end', alignItems: 'center', width: '10rem' }}>
                                                                <motion.div whileHover={{ scale: 1.05, backgroundColor:'#F1F1F1',color:'#242424' }}
                                                                    whileTap={{
                                                                        scale: 0.9,
                                                                    }} className="button w-button" style={{marginTop:'0.3rem',backgroundColor:'#353535',color:'#F7F7F7',paddingTop:'12px' ,padding:'10px 10px', height:'2.4rem',width:'6rem',display:'flex',alignItems:'center',justifyContent:'center'}}><p style={{ marginBottom: '0.1rem',fontFamily:'Google sans,sans-serif',fontSize:'14px', display: 'flex', alignItems: 'center' }}> View More</p></motion.div>
                                                            </Link>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </Fade>

                                        ))
                                    :
                                    (petitions ? petitions : petitionData).filter(pt =>
                                        filpetitions.some(p => p.id === pt.id) &&
                                        (filpetitionsCat.length===0?filpetitions:filpetitionsCat).some(p => p.category === pt.category) &&
                                        (filpetitionsMun.length===0?filpetitions:filpetitionsMun).some(p => p.municipality === pt.municipality))
                                        .map((petition, index) => (
                                            <Fade direction="up" damping={0.5} triggerOnce key={index} className="col-md-12 mt-4 pt-2" style={{ textDecoration: 'none', width: '48%', height: '25rem' }}>
                                                <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-lg overflow-hidden" style={{ height: '100%', boxShadow: '0 0 17px 10px rgba(0, 0, 0, 1)' }}>
                                                    <div className="content mt-4" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                        <b style={{fontSize:'23px'}}>{generateShortDescription(petition.title)}</b>
                                                        <h6>{generateShortDescription(petition.municipality)}</h6>
                                                        <p className="text-muted mt-3">{generateShortDescription(petition.description)}</p>
                                                        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                                                            <div style={{alignSelf:'flex-end', width: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'start' }}>
                                                                <span style={{ width: '4rem', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                                                    <motion.div whileHover={{ scale: 1.05 }}
                                                                        whileTap={{
                                                                            scale: 0.85,
                                                                        }}>
                                                                        <img
                                                                            src={clickedLikes[petition.id] ? '/images/heart-fill.png' : '/images/heart.png'}
                                                                            onClick={() => handleLike(petition.id)}
                                                                            style={{ width: '2rem', margin: '0.5rem', cursor: 'pointer' }}
                                                                            alt=""
                                                                        />
                                                                        {/* const petition = petitionData.find(petition => petition.id === id); */}
                                                                    </motion.div>
                                                                    {petition.like}
                                                                </span>
                                                                <span style={{ width: '4rem', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                                                    <motion.div whileHover={{ scale: 1.05 }}
                                                                        whileTap={{
                                                                            scale: 0.85,
                                                                        }}>
                                                                        <img
                                                                            src={clickedDisLikes[petition.id] ? '/images/broken-heart-fill.png' : '/images/broken-heart.png'}
                                                                            onClick={() => handleDisLike(petition.id)}
                                                                            style={{ width: '2rem', margin: '0.5rem', cursor: 'pointer' }}
                                                                            alt=""
                                                                        />
                                                                    </motion.div>
                                                                    {petition.dislike}
                                                                </span>
                                                            </div>
                                                            <Link to={{ pathname: `/petition-details/${petition.id}` }} duration={500} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'end', alignItems: 'center', width: '13rem' }}>
                                                                <motion.div whileHover={{ scale: 1.05, backgroundColor:'#F1F1F1',color:'#242424' }}
                                                                    whileTap={{
                                                                        scale: 0.9,
                                                                    }} className="button w-button" style={{backgroundColor:'#353535',color:'#F7F7F7',paddingTop:'14px' ,padding:'10px 10px', height:'2.7rem',width:'7rem',display:'flex',alignItems:'center',justifyContent:'center'}}><p style={{ marginBottom: '0.2rem',fontFamily:'Google sans,sans-serif',fontSize:'16px', display: 'flex', alignItems: 'center' }}> View More</p></motion.div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Fade>

                                        ))}
                            </div>
                        </div>
                    </div>

                    {/* <img src='/images/square/square-warning.png' width={500} height={500} className="img-fluid rounded-pill bg-image-position" alt="" />
                        <img src='/images/square/square-success.png' width={140} height={140} className="img-fluid rounded-lg avatar avatar-large bg-image-position-2 spin-anything" alt="" /> */}

                </div>

                <div style={{ boxShadow: ' inset 0px -100px 100px rgba(255, 255, 255, 1), inset 0px 100px 100px rgba(255, 255, 255, 1)', background: ' linear-gradient(30deg, rgba(255,255,255,1) 9%, rgba(100,230,243,0.269432773109244) 10%, rgba(255,255,255,1) 89%)' }} className="container mt-100 mt-60">
                    <div style={{ listStyle: 'none', display: 'flex', flexDirection: 'row' }} className="row align-items-center">
                        <Fade direction="left" damping={0.5} triggerOnce className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 order-1 order-md-1">
                            <div className="section-title">
                                <h6 className="fw-normal text-primary">Explore all petitions</h6>
                                <h4 className="title mb-4">Discover Change-Makers: Browse and Support Petitions Today </h4>
                                <p className="text-muted">Explore a diverse range of petitions crafted by passionate individuals dedicated to making a difference in their communities. With just a few clicks, you can support causes that resonate with you and contribute to positive change.</p>
                            </div>
                        </Fade>
                        <Fade direction="right" damping={0.5} triggerOnce className="col-md-6 order-2 order-md-2">
                            <div className="text-lg-end align-items-center" style={{ paddingBottom: '3.8rem', paddingTop: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src='/images/petition4.jpg' style={{ maxWidth: '97%', width: '470px', height: '300px', borderRadius: '1.5rem' }} className="img-fluid" alt="" />
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
            
            <FooterFour />
            <ScrollTop />
        </>
    );
}
