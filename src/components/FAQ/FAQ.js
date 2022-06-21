import React from "react";
import searchIcon from '../../assets/search.png'
import collpaseIcon from '../../assets/collapse.png'
import collpaseGreenIcon from '../../assets/collapseGreen.png'
import { Collapse } from "@mui/material";
import Line from '../../assets/Line.png'

function FAQ(props) {
    const [collapse, setCollapse] = React.useState(false)
    const [activeIndex, setActiveIndex] = React.useState(null)
    const [activeIndexSecond, setActiveIndexSecond] = React.useState(null)
    const [collapseTwo, setCollapseTwo] = React.useState(false)
    const collapseHandler = (index) => {
        setCollapse(!collapse)
        if (activeIndex === index) {
            setActiveIndex(null)
        } else {
            setActiveIndex(index)
        }
    }
    const collapseHandlerSecond = (index) => {
        setCollapseTwo(!collapseTwo)
        if (activeIndexSecond === index) {
            setActiveIndexSecond(null)
        } else {
            setActiveIndexSecond(index)
        }
    }
    const firstFive = [
        {
            question: `What are the Primordials?`,
            ans: `Primordials are a 10k NFT collection of 5 characters imagined, representing the 5 elements essential to life on earth.`
        },
        {
            question: `How are the Primordials divided?`,
            ans: `Each character is represented in both polluted and clean environments, with specific traits and have different prices, different benefits within our ecosystem.`
        },
        {
            question: `What are the elements represented by Primordials?`,
            ans: `The elements represented by Primordials are water, earth, fire, air and soul.`
        },
        {
            question: `Where I can see the benefits of each Primordial?`,
            ans: `Next to the description of every category of Primordial the benefits are stated.`
        },
        {
            question: `Why Elrond?`,
            ans: `We strongly believe that the Elrond blockchain is revolutionary and in line with the values the team stands for through this project. We put the contribution to the development of Elrond as one of our priorities.`
        },
    ]
    const secondFive = [
        {
            question: `How will the benefits be translated in the long-term development of the Convert Carbon Project? `,
            ans: `Owning and NFT will make you more than an investor, will transform you in a trusted partner that will reap the rewards of his investment as long as the project will function, most likely his entire lifetime.`
        },
        {
            question: `What is the important information about the public sale?`,
            ans: `Public sale will be done on our website in EGLD, but all the NFT buyers will be able to benefit of a special price, lower that the public sale. `
        },
        {
            question: `What is the point of releasing the NFT collection?`,
            ans: `We decided to create this NFT collection to offer our early investor the opportunity to invest in this project at a more advantageous price regardless of the budget, to create a tighter community, reward the users of our system and why not introduce to one of them to the ultimate electric driving experience.`
        },
        {
            question: `When and how will the winner of the TESLA will be announced?`,
            ans: `After the NFT sale will be over and all Primordials will find a home, we will host a live raffle and will announce the winner of the Tesla. Will be done live and transparent.`
        },
        {
            question: `Is the KYC process mandatory? `,
            ans: `Yes, to comply with the current anti money laundering regulations worldwide, a KYC(know your customer) procedure is required.`
        },
    ]
    return (
        <React.Fragment>
            <div className="main-body-wrapper">
                <h1 className="collection-heading" style={{ marginTop: '2rem' }}>FREQUENTLY ASKED QUESTIONS</h1>
                <p className="collection-para" style={{ marginTop: 10 }}>
                    Here you will find the list of frequently asked questions by our users. We are user friendly and <br />
                    have wrote all the answers to help you get started with us.</p>
                <div style={{ position: 'relative', width: '70%', height: "52px", marginTop: '4rem' }}>
                    <label className="collection-icon" htmlFor="search" style={{ position: 'absolute' }}>
                        <img src={searchIcon} style={{ objectFit: 'contain' }} width='100%' height='100%' />
                    </label>
                    <input defaultValue={'Search asked questions'} placeholder="Search asked questions" id="search" className="collection-search" />
                </div>
                <div className="faq-main-div">
                    <div>
                        {firstFive.map((item, index) =>
                            <div key={index} className="faq-div">
                                <div className="faq-div-content">

                                    {item.question}
                                    {activeIndex === index ?
                                        <img onClick={() => collapseHandler(index)} src={collpaseGreenIcon} style={{ objectFit: 'contain' }} />
                                        :
                                        <img onClick={() => collapseHandler(index)} src={collpaseIcon} style={{ objectFit: 'contain' }} />}
                                </div>
                                <Collapse in={index === activeIndex ? true : false}>
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <span className="collapse-data">
                                            {item.ans}
                                        </span>
                                    </div>
                                </Collapse>
                            </div>
                        )}
                    </div>
                    <img className="line" src={Line} style={{ objectFit: 'contain' }} />
                    <div>
                        {secondFive.map((item, index) =>
                            <div key={index} className="faq-div">
                                <div className="faq-div-content">

                                    {item.question}
                                    {activeIndexSecond === index ?
                                        <img onClick={() => collapseHandlerSecond(index)} src={collpaseGreenIcon} style={{ objectFit: 'contain' }} />
                                        :
                                        <img onClick={() => collapseHandlerSecond(index)} src={collpaseIcon} style={{ objectFit: 'contain' }} />}
                                </div>
                                <Collapse in={index === activeIndexSecond ? true : false}>
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <span className="collapse-data">
                                            {item.ans}
                                        </span>
                                    </div>
                                </Collapse>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default FAQ;
