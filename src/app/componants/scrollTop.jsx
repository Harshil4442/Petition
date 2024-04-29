import React,{useEffect , useState} from 'react'
import { animateScroll as scroll } from 'react-scroll';
import {AiOutlineArrowUp} from "../assets/icons/vander"

export default function ScrollTop(){
    let [scrollToTops, setScrollToTops] = useState(false); 
    useEffect(()=>{
      if (typeof window !== "undefined") {
          window.addEventListener("scroll", ()=>{
              setScrollToTops(window.scrollY >= 500)
          });
        }
        window.scrollTo(0, 0)
    },[])
      let scrollToTop = () => {
          scroll.scrollToTop({
              duration: 500,
              smooth: true,
          });
      }

    return(
        <>
        <a to="#" onClick={scrollToTop} id="back-to-top" className="back-to-top rounded-pill fs-5" style={{display: scrollToTops ? 'inline' : 'none'}}><AiOutlineArrowUp className="fea icon-sm icons align-middle"/>  </a>
        </>
    )
}