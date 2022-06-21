import React from "react";
import searchIcon from '../../assets/search.png'
import collpaseIcon from '../../assets/collapse.png'
import collpaseGreenIcon from '../../assets/collapseGreen.png'
import { Collapse } from "@mui/material";
import Line from '../../assets/Line.png'

function RulesAndRegulation(props) {
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
                <h1 className="collection-heading" style={{ marginTop: '2rem' }}>Rules and Regulations</h1>
                <p className="collection-para" style={{ marginTop: 10, width: '80%', textAlign: 'left' }}>
                    Selection of winners:
                </p>
                <ul className="collapse-data" style={{ marginTop: 10, width: '80%', textAlign: 'left' }}>
                    <div style={{ marginTop: 10 }}>
                        ⦁   The winner will be notified according to the contact information provided to Convert Carbon Project and/or owning company at the time of NFT purchase through the google doc.
                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁   In order to collect his or her prize, the raffle ticket winner may be required to sign and deliver to Convert Carbon Project and/or owning company: <br />  <span style={{ fontWeight: 'bolder' }}>(a)</span> a notary legalized sworn affidavit of eligibility in accordance with these rules and applicable law, including without limitation that he or she is at least 18 years old at the time he or she purchased the winning raffle ticket;  <br /> <span style={{ fontWeight: 'bolder' }}>(b)</span> proof of identity in forms satisfactory to the law showing that the person claiming the prize is the same person who owns the winning raffle wallet.
                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁   Winner will be announced immediately after the end of the raffle and will be contacted by our team for further details
                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁  If the winner cannot provide documents required to prove the purchase, the raffle will be declared void and another draw will take place. No new entries will be accepted.
                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁   NFT’s will lose all benefits if the owning address before the raffle
                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁   The raffle will take place on<a href="Random.org" target={'_blank'} style={{ fontWeight: 'bolder', color: 'green', textDecoration: 'underline' }} > Random.org</a>
                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁   The raffle for the giveaway will be transmitted and posted on all social media platforms for transparency reasons (where the platform allows it) and a video registration will be available online
                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁   The raffle will take place 30 days after the end of the NFT collection sale or 30 days after the collection is sold out
                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁    Giveaway will take place even if not all NFT’s are sold at the end of the collection availability but only if a percentage equal or above 70% of the NFT’s are sold
                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁    NFT’s sale period is 60 days or will end if the collection is sold out
                    </div>

                </ul>
                <p className="collection-para" style={{ marginTop: 10, width: '80%', textAlign: 'left' }}>
                    Winning odds:
                </p>
                <ul className="collapse-data" style={{ marginTop: 10, width: '80%', textAlign: 'left' }}>
                    <div style={{ marginTop: 10 }}>
                        ⦁    Each ticket is equal with 1(one) chance (10 tickets = 10 chances at raffle).
                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁  Each NFT has a specific number of chances(tickets) linked to it and are clearly stated on the website (primordialsnft.com
                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁   All benefits of the NFT’s are stated on primordialsnft.com beside the character they represent

                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁  No token purchase is necessary and the purchase will not increase the chances of winning
                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁  The chances of winning are based on the number of NFT’s, implicitly tickets bought
                    </div>
                </ul>
                <p className="collection-para" style={{ marginTop: 10, width: '80%', textAlign: 'left' }}>
                    Prize:
                </p>
                <ul className="collapse-data" style={{ marginTop: 10, width: '80%', textAlign: 'left' }}>
                    <div style={{ marginTop: 10 }}>
                        ⦁  The prize is a 2022 Tesla Model 3 RWD(approximate value 50,000 euros – 55,000 $ ); no cash option is available.
                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁  The Prize winner of the car shall assume all fees and local taxes which must be paid prior to the car being transferred to the winner. Convert Carbon Project and/or the owning company takes no responsibility for any tax liabilities or costs. Consult your tax advisor. This offer is void where prohibited by law, state, and local laws and regulations apply.
                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁   Acceptance of prize offered constitutes permission to use winner's name, biographical information and/or likeness for purposes of advertising and promotion without further compensation
                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁  Acceptance of prize offered constitutes permission to use winner's name, biographical information and/or likeness for purposes of advertising and promotion without further compensation
                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁	The vehicle comes base model factory equipped and the winner is also solely responsible for other fees associated with the vehicle, as well as insurance and pickup or delivery costs at the dealership as well as any non-standard options chosen by the winner and negotiated with the dealership. The vehicle is subject to availability at the automobile dealer selected by Convert Carbon Project and/or owning company – local or national authorized Tesla dealer

                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁	Convert Carbon project and/or the owning company will not be responsible for further costs of operating the vehicle and/or any further damage done by the owner
                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁	Convert Carbon Project and/or the owning company are not responsible for the delivery time of the vehicle, they are responsible for buying the allocation and ordering the vehicle

                    </div>
                </ul>
                <p className="collection-para" style={{ marginTop: 10, width: '80%', textAlign: 'left' }}>
                    Eligibility:
                </p>
                <ul className="collapse-data" style={{ marginTop: 10, width: '80%', textAlign: 'left' }}>
                    <div style={{ marginTop: 10 }}>
                        ⦁	Anyone 18 years of age or older at the time of the purchaser’s raffle ticket purchase may enter.
                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁	Employees of Convert Carbon project and/or the owning company and the immediate family members of, and any persons domiciled with, any such employees, are not eligible to enter or to win. The term immediate family members include spouses, parents, grandparents, siblings, children and grandchildren.
                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁	To complete a full registration please follow exactly the steps necessary stated in the google form and/or contact somebody from the team for guidance.

                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁	All participants must comply with the official rules if they elect to enter the giveaway.
                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁	Only participants that purchased the NFT from official website primordialsnft.com will be eligible for the raffle.
                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁	 Only participants that completed all the required steps will be eligible for the raffle .
                    </div>
                </ul>
                <p className="collection-para" style={{ marginTop: 10, width: '80%', textAlign: 'left' }}>
                    Google form necessary steps:
                </p>
                <ul className="collapse-data" style={{ marginTop: 10, width: '80%', textAlign: 'left' }}>
                    <div style={{ marginTop: 10 }}>
                        ⦁  	Follow @Convert_Carbon <a style={{ color: "green", fontWeight: "bolder" }}> https://twitter.com/Convert_Carbon </a> and submit your Twitter handle (username)

                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁	 Retweet the Tesla Giveaway tweet pinned and tag 3 friends
                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁	Join our Telegram channel<a style={{ color: "green", fontWeight: "bolder" }}> https://t.me/ConvertCarbon</a> and submit you Telegram handle (username)
                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁	Join our Discord community <a style={{ color: "green", fontWeight: "bolder" }}>https://t.co/vb6ZB04Ykk </a> and submit your Discord handle (username)
                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁	At least 2 out of the 3 conditions related to social media must be met for a valid submission

                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁	Check and agree with our T&C (Terms and Conditions), rules and regulations of the current campaign
                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁	Agree that you have submitted the correct information

                    </div>
                    <div style={{ marginTop: 10 }}>
                        ⦁	Submit your email address where you can be contacted for any further details and confirmation that your subscription process is complete and valid
                    </div>
                </ul>
            </div>

        </React.Fragment>
    );
}
export default RulesAndRegulation;
