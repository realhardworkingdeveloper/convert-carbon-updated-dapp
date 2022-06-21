import React from "react";
import searchIcon from '../../assets/search.png'
import waterAvatar from '../../assets/water.png'
import greenAvatar from '../../assets/earth.png'
import fireAvatar from '../../assets/fire.png'
import windAvatar from '../../assets/wind.png'
import soulAvatar from '../../assets/soul.png'


function Collection(props) {
    return (
        <React.Fragment>
            <div className="main-body-wrapper">
                <h1 className="collection-heading" style={{ marginTop: '2rem' }}>MY NFTS COLLECTION</h1>
                {/* <p className="collection-para" style={{ marginTop: 10 }}>
                    Here you will find the number of NFTs we have generated for you,<br />
                    so you can engage with our platform</p> */}
                {/* <div style={{ position: 'relative', width: '70%', height: "52px", marginTop: '4rem' }}>
                    <label className="collection-icon" htmlFor="search" style={{ position: 'absolute' }}>
                        <img src={searchIcon} style={{ objectFit: 'contain' }} width='100%' height='100%' />
                    </label>
                    <input defaultValue={'Search Nfts collection'} placeholder="Search Nfts collection" id="search" className="collection-search" />
                </div> */}
                <div className="collection-wrapper">
                    <div
                        // onClick={() => window.location.href = '/attributes'}
                        className="collection-card">
                        <div className="collection-card-cover"></div>
                        <img src={waterAvatar} style={{ objectFit: 'contain', width: "25rem", minWidth: "100%", height: "340px", marginBottom: '1rem' }} />
                        <button className="collection-button">
                            Enki
                        </button>
                    </div>
                    <div className="collection-card"
                    // onClick={() => window.location.href = '/attributes'}
                    >
                        <div className="collection-card-cover"></div>
                        <img src={greenAvatar} style={{ objectFit: 'contain', width: "25rem", minWidth: "100%", height: "340px", marginBottom: '1rem' }} />
                        <button className="collection-button">
                            Finlandez
                        </button>
                    </div>
                    <div className="collection-card"
                    // onClick={() => window.location.href = '/attributes'}
                    >
                        <div className="collection-card-cover"></div>
                        <img src={waterAvatar} style={{ objectFit: 'contain', width: "25rem", minWidth: "100%", height: "340px", marginBottom: '1rem' }} />
                        <button className="collection-button">
                            Enki
                        </button>
                    </div>
                    <div className="collection-card"
                    // onClick={() => window.location.href = '/attributes'}
                    >
                        <div className="collection-card-cover"></div>
                        <img src={greenAvatar} style={{ objectFit: 'contain', width: "25rem", minWidth: "100%", height: "340px", marginBottom: '1rem' }} />
                        <button className="collection-button">
                            Finlandez
                        </button>
                    </div>
                    <div className="collection-card"
                    // onClick={() => window.location.href = '/attributes'}
                    >
                        <div className="collection-card-cover"></div>
                        <img src={fireAvatar} style={{ objectFit: 'contain', width: "25rem", minWidth: "100%", height: "340px", marginBottom: '1rem' }} />
                        <button className="collection-button">
                            Chimera
                        </button>
                    </div>
                    <div className="collection-card"
                    // onClick={() => window.location.href = '/attributes'}
                    >
                        <div className="collection-card-cover"></div>
                        <img src={soulAvatar} style={{ objectFit: 'contain', width: "25rem", minWidth: "100%", height: "340px", marginBottom: '1rem' }} />
                        <button className="collection-button">
                            Eleos
                        </button>
                    </div>
                    <div className="collection-card"
                    // onClick={() => window.location.href = '/attributes'}
                    >
                        <div className="collection-card-cover"></div>
                        <img src={fireAvatar} style={{ objectFit: 'contain', width: "25rem", minWidth: "100%", height: "340px", marginBottom: '1rem' }} />
                        <button className="collection-button">
                            Chimera
                        </button>
                    </div>
                    <div className="collection-card"
                    // onClick={() => window.location.href = '/attributes'}
                    >
                        <div className="collection-card-cover"></div>
                        <img src={soulAvatar} style={{ objectFit: 'contain', width: "25rem", minWidth: "100%", height: "340px", marginBottom: '1rem' }} />
                        <button className="collection-button">
                            Eleos
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


export default Collection;
