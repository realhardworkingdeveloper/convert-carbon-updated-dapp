import { minHeight } from "@mui/system";
import React from "react";
import FireImage from '../../assets/fire.png'



function Attributes(props) {
    return (
        <React.Fragment>
            <div className="main-body-wrapper">
                <h1 className="collection-heading" style={{ marginTop: '2rem' }}>NFTS ATTRIBUTES</h1>
                <p className="collection-para" style={{ marginTop: 10 }}>
                    Here you will find the the attributes and stats of the nfts</p>

                <div className="attributes-card">
                    <h1 className="attributes-card-heading">AMATERASU</h1>
                    <div className="attributes-card-content">
                        <div className="attributes-card-content-left-side">
                            <img src={FireImage} style={{ width: "23rem", minWidth: '200px', position: 'absolute', top: '-4rem' }} />
                        </div>
                        <div className="attributes-card-content-right-side">
                            <div className="attributes-card-content-right-side-content">
                                <h1 className="attributes-card-content-right-side-main-heading">Head</h1>
                                <div>
                                    <div className="attributes-card-content-right-side-main-properties" style={{ color: "white" }}>
                                        <span className="attributes-card-content-right-side-main-properties-heading">
                                            Eyes
                                        </span>
                                        <span className="attributes-card-content-right-side-main-properties-button" style={{ marginLeft: '2rem' }}>
                                            Starshape Sunglasses
                                        </span>
                                    </div>
                                    <div className="attributes-card-content-right-side-main-properties" style={{ color: "white" }}>
                                        <span className="attributes-card-content-right-side-main-properties-heading">
                                            MOUTH
                                        </span>
                                        <span className="attributes-card-content-right-side-main-properties-button" style={{ marginLeft: '2rem' }}>
                                            IR Mask
                                        </span>
                                    </div>
                                    <div className="attributes-card-content-right-side-main-properties" style={{ color: "white" }}>
                                        <span className="attributes-card-content-right-side-main-properties-heading">
                                            MASK
                                        </span>
                                        <span className="attributes-card-content-right-side-main-properties-button" style={{ marginLeft: '2rem' }}>
                                            Skubamask
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="attributes-card-content-right-side-content" style={{ marginTop:'4.5rem' }}>
                                <h1 className="attributes-card-content-right-side-main-heading">UPPER BODY</h1>
                                <div>
                                    <div className="attributes-card-content-right-side-main-properties" style={{ color: "white" }}>
                                        <span className="attributes-card-content-right-side-main-properties-heading">
                                            NECK
                                        </span>
                                        <span className="attributes-card-content-right-side-main-properties-button" style={{ marginLeft: '2rem' }}>
                                            Starshape Sunglasses
                                        </span>
                                    </div>
                                    <div className="attributes-card-content-right-side-main-properties" style={{ color: "white" }}>
                                        <span className="attributes-card-content-right-side-main-properties-heading">
                                            CHEST
                                        </span>
                                        <span className="attributes-card-content-right-side-main-properties-button" style={{ marginLeft: '2rem' }}>
                                            IR Mask
                                        </span>
                                    </div>

                                </div>
                            </div>
                            <div className="attributes-card-content-right-side-content" style={{ marginTop:'4.5rem' }}>
                                <h1 className="attributes-card-content-right-side-main-heading">LOWER BODY</h1>
                                <div>
                                    <div className="attributes-card-content-right-side-main-properties" style={{ color: "white" }}>
                                        <span className="attributes-card-content-right-side-main-properties-heading">
                                            LEGS
                                        </span>
                                        <span className="attributes-card-content-right-side-main-properties-button" style={{ marginLeft: '2rem' }}>
                                            Starshape Sunglasses
                                        </span>
                                    </div>

                                </div>
                            </div>
                            <div className="attributes-card-content-right-side-content" style={{ marginTop:'4.5rem' }}>
                                <h1 className="attributes-card-content-right-side-main-heading">BACKGROUND</h1>
                                <div>
                                    <div className="attributes-card-content-right-side-main-properties" style={{ color: "white" }}>
                                        <span className="attributes-card-content-right-side-main-properties-heading">
                                            BG
                                        </span>
                                        <span className="attributes-card-content-right-side-main-properties-button" style={{ marginLeft: '2rem' }}>
                                            Starshape Sunglasses
                                        </span>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


export default Attributes;
