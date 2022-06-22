import React, { useState, useEffect } from "react";
import searchIcon from '../../assets/search.png'
import waterAvatar from '../../assets/water.png'
import greenAvatar from '../../assets/earth.png'
import fireAvatar from '../../assets/fire.png'
import windAvatar from '../../assets/wind.png'
import soulAvatar from '../../assets/soul.png'

import {
    refreshAccount,
    sendTransactions,
    useGetAccountInfo,
    useGetNetworkConfig,
    useGetPendingTransactions,
} from '@elrondnetwork/dapp-core';

import {
    GATEWAY,
    TOKEN_IDS
} from '../../config';

import axios from 'axios';

function Collection(props) {
    const { address } = useGetAccountInfo();
    const { hasPendingTransactions } = useGetPendingTransactions();

    const [ownedNfts, setOwnedNfts] = useState([]);

    useEffect(() => {
        if(hasPendingTransactions || !address) return;
        axios
          .get(`${GATEWAY}/accounts/${address}/nfts?collections=${TOKEN_IDS}`)
          .then((res) => {
    
            const nfts = [];
    
            res.data.map(nft => {
                nfts.push({
                    id: nft.identifier,
                    collection: nft.collection,
                    nonce: nft.nonce,
                    src: nft.url,
                    rarity: nft.metadata.rarity === undefined ? 0 : nft.metadata.rarity.rarityScore,
                    name: nft.name,
                })
            });
    
            setOwnedNfts(nfts)
          }).catch(err => {
            console.log(err);
          });
      }, [hasPendingTransactions, TOKEN_IDS, address]);

    return (
        <React.Fragment>
            <div className="main-body-wrapper">
                <h1 className="collection-heading" style={{ marginTop: '2rem' }}>MY NFTS COLLECTION</h1>

                
                    {
                        ownedNfts.length === 0 ? (
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
                        ) : (
                            <div className="collection-wrapper">
                                {ownedNfts.map(nft => (
                                    <div 
                                        className="collection-card"
                                        key={nft.id}
                                    // onClick={() => window.location.href = '/attributes'}
                                    >
                                        {/* <div className="collection-card-cover"></div> */}
                                        <img src={nft.src} style={{ objectFit: 'contain', width: "25rem", minWidth: "100%", height: "340px", marginBottom: '1rem' }} />
                                        <button className="collection-button">
                                            {nft.name}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )
                    }
                    
                
            </div>
        </React.Fragment>
    );
}


export default Collection;
