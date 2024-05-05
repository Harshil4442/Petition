import React, { useState } from 'react';
import faq from '../data/faq';


function FAQSection() {
    const [isOpen, setIsOpen] = useState(Array(faq.length).fill(false));
    const handleClick = (index) => {
        const newOpen = [...isOpen];
        newOpen[index] = !newOpen[index];
        setIsOpen(newOpen);
    }
    
    return (
        <section className="faq-section" >
            <div id="faq" className="padding-section-large" >
                <div className="container-large w-container">
                    <div className="margin-custom2 margin-bottom">
                        <h2 className="section-heading-2">Frequently asked questions</h2>
                        <p className="text-align-center faq-description" style={{paddingLeft:'1rem', paddingRight:'1rem'}}>Here are some answers to the most common questions we receive about BusinessChat.</p>
                    </div>
                    <div className="faq-main-block" style={{ width: '100%' }}>

                        {faq.map((item, index) => (
                            <div key={index} className="faq-block" style={{ width: '100%' }}>
                                <a className="faq-head w-inline-block" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row' }} onClick={() => handleClick(index)}>
                                    <div className="text-size-medium-3 text-color-black faq-title">{item.title}</div>
                                    <img src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/648416c766311009cc78948a_faq-open-icon.svg" loading="lazy" alt="" className="faq-icon" />
                                </a>
                                <div style={{ height: isOpen[index] ? 'auto' : '0px' }} className="faq-answer-block">
                                    <p className="text-size-small faq-para">
                                        {item.answer}
                                        <a href="/pricing-plans-businesschat">visit our pricing page</a>
                                    </p>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
            <div className="background-mesh-5">
                <div className="mesh-purple-5"></div>
                <div className="mesh-bleu-5"></div>
            </div>
            <div className="brodcast-line2-2">
                <img src="https://assets-global.website-files.com/64649e6768f2f33bbec372fd/6480171142a0ce741b56ccaf_Line-2.svg" loading="lazy" alt="decorative line" />
            </div>
        </section>
    );
}

export default FAQSection;
