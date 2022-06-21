import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import withStyles from "@mui/styles/withStyles";
import Carousel from 'react-bootstrap/Carousel'
import classNames from "classnames";
import ReactCompareImage from './ReactCompareImage';

import { Box, Hidden, Typography } from "@mui/material";
import waterAvatar from '../../assets/water.png'
import greenAvatar from '../../assets/earth.png'
import fireAvatar from '../../assets/fire.png'
import windAvatar from '../../assets/wind.png'
import soulAvatar from '../../assets/soul.png'

import Countdown from "./Countdown";
import Storyboard from "./Storyboard";
import fireImage from '../../assets/fire.png'
import Mintboard from "./Mintboard";
import nextIcon from '../../assets/nextIcon.png'

import './animation.css';
import Community from "../community/Community";

import {
  refreshAccount,
  sendTransactions,
  useGetAccountInfo,
  useGetNetworkConfig,
  useGetPendingTransactions,
} from '@elrondnetwork/dapp-core';

import {
  U32Value,
  ArgSerializer,
  GasLimit,
  Address,
  AbiRegistry,
  SmartContractAbi,
  SmartContract,
  ProxyProvider,
  DefaultSmartContractController,
} from '@elrondnetwork/erdjs';

import {
  convertEsdtToWei
} from '../utils';

import {
  NFT_MINT_CONTRACT_ADDRESS,
  NFT_MINT_CONTRACT_ABI,
  NFT_MINT_CONTRACT_NAME,

  TIMEOUT
} from '../../config';

const styles = (theme) => ({

  background: {
    width: '100%',
    height: '100%',
    // minHeight: '100vh',
    objectFit: 'cover',
    marginTop: 0,
  },
  gods: {
    marginTop: 100,
    [theme.breakpoints.down('sm')]: {
      visibility: 'hidden'
    }
  }
});

function Home(props) {
  const { classes, selectHome } = props;

  const totalCount = 2004;
  const [contractInteractor, setContractInteractor] = useState(null);
  const [mintDuration, setMintDuration] = useState([0, 0]);
  const [mintedCounts, setMintedCounts] = useState([0, 0, 0, 0, 0]);
  const [totalMinted, setTotalMinted] = useState(0);

  const [mintStatus, setMintStatus] = useState('START');

  const { address } = useGetAccountInfo();
  const { hasPendingTransactions } = useGetPendingTransactions();
  const { network } = useGetNetworkConfig();

  const provider = new ProxyProvider(network.apiAddress, { timeout: TIMEOUT });

  useEffect(selectHome, [selectHome]);

  useEffect(async () => {
    const registry = await AbiRegistry.load({ urls: [NFT_MINT_CONTRACT_ABI] });
    const abi = new SmartContractAbi(registry, [NFT_MINT_CONTRACT_NAME]);
    const contract = new SmartContract({ address: new Address(NFT_MINT_CONTRACT_ADDRESS), abi: abi });
    const controller = new DefaultSmartContractController(abi, provider);

    setContractInteractor({
        contract,
        controller,
    });
  }, []);

  useEffect(async () => {
    if (!contractInteractor || hasPendingTransactions) {
      return;
    }

    const interaction = contractInteractor.contract.methods.viewContractSetting();
    const res = await contractInteractor.controller.query(interaction);

    if (!res || !res.returnCode.isSuccess()) {
      return;
    }

    const data = res.firstValue.fields;

    setMintDuration([
      data[0].value.valueOf().toNumber(),
      data[1].value.valueOf().toNumber(),
    ]);
  }, [hasPendingTransactions, contractInteractor]);

  useEffect(async () => {
    if (!contractInteractor || hasPendingTransactions) {
      return;
    }

    const interaction = contractInteractor.contract.methods.viewCollectionSettings();
    const res = await contractInteractor.controller.query(interaction);

    if (!res || !res.returnCode.isSuccess()) {
      return;
    }

    const data = res.firstValue.items;

    const minted = [
      data[0].fields[11].value.valueOf().toNumber(),
      data[1].fields[11].value.valueOf().toNumber(),
      data[2].fields[11].value.valueOf().toNumber(),
      data[3].fields[11].value.valueOf().toNumber(),
      data[4].fields[11].value.valueOf().toNumber()
    ];

    const sum = minted.reduce((partialSum, a) => partialSum + a, 0);

    setMintedCounts(minted);
    setTotalMinted(sum);
  }, [hasPendingTransactions, contractInteractor]);

  const mint = async (collectionId, mintPrice) => {
    try {
      if(!address || hasPendingTransactions) {
        return;
      }

      const args = [
        new U32Value(collectionId),
      ];

      const { argumentsString } = new ArgSerializer().valuesToString(args);
      const data = `publicMint@${argumentsString}`;

      const tx = {
        receiver: NFT_MINT_CONTRACT_ADDRESS,
        gasLimit: new GasLimit(300000000),
        data:data,
        value: convertEsdtToWei(mintPrice),
      };
      await refreshAccount();

      await sendTransactions({
        transactions: tx,
        transactionsDisplayInfo: {
          processingMessage: 'Processing Staking transaction',
          errorMessage: 'An error has occured during Staking',
          successMessage: 'Staking transaction successful'
        },
        redirectAfterSign: false
      });
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <div className={classes.background}>
        <ReactCompareImage
          handle={<Fragment />}
          hover={true}
          slope={0.3}
          leftImage="assets/images/comparison/green.png"
          rightImage="assets/images/comparison/polluted.png"
        />
      </div>
      <Storyboard innerText={<React.Fragment>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unlike traditional NFTs collections, we have imagined and created <span style={{ color: '#189828', textDecoration: 'underline' }}> 5 characters </span> representing the <span style={{ color: '#189828', textDecoration: 'underline' }}> 5 elements essentials to life</span>, all of them with special benefits within our ecosystem in terms of giving back to our investors and community, a chance to win the ultimate electric car Tesla and pledge to donate a percentage of the proceedings generated to support impacting immediate actions worldwide for each element of life.

        <br /><br />
        <span style={{ marginTop: '1rem' }}></span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Every character category is represented in both polluted and clean environments, with specific traits, have different prices, different benefits within our ecosystem, but all of them give to you, our investor, a chance to take part in our journey, get involved in the growth process from the early stages and be rewarded for it.
        <br /><br />
        <span style={{ marginTop: '1rem' }}></span>
        {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our way of giving back is by offering a lower purchasing price for the token on seed sale, a higher buying limit, a bigger reward for recycling at Convert Carbon RVM’s or our partners turning your investment into a long-term partnership and last but not least will represent one or more tickets to our TESLA Giveaway which will directly send one of you into the 0 pollution world. We do have more actions planned along our journey and be sure this is only the begging, but for starters, meet THE PRIMORDIALS
      </React.Fragment>} />
      <Countdown
        mintStatus={mintStatus}
        setMintStatus={setMintStatus}
        mintedCount={totalMinted - 20}
        startTime={mintDuration[0]}
        endTime={mintDuration[1]}
      />
      <div className="wrapper-div" style={{ marginTop: "15rem" }}>
        <div className="box-image left-side-box">
          <div className="left-side-box-image" >
            <img src={waterAvatar} height="85%" width={'100%'} />
          </div>
          <div className="left-side-box-content">
            <h1 style={{ color: 'white', fontSize: "max(3em,20px)", fontFamily: "HeadingFont", }}>
              Enki
            </h1>
            <p style={{ color: 'white', fontSize: "max(1.4em,14px)" }}>
              <span style={{ fontWeight: 'bold' }}>Enki  </span> -  the Sumerian god of water, knowledge, life and creation – without water there is no life. Without blue, there is no green. A perspective that rarely is realized, let alone shared or discussed.
              We made it our mission to support those who create, clean and maintain sources of water across the world. Really big things can happen when clean water reaches a community that has never had access to it. However, many of the world’s rivers and streams are severely affected by pollution, with plastic being one of the major culprits. To limit the amount of plastic pollution beyond the reach of collection and recycling that enters our oceans, we must remove it before it gets there.
              As a result of this Convert Carbon
              pledges to support
              <a target={"_blank"} href="https://www.river-cleanup.org/en" style={{ color: '#189828', textDecoration: 'underline' }}>
                River Clean Up
              </a>
              and
              <a target={"_blank"} style={{ color: '#189828', textDecoration: 'underline' }} href="https://wholives.org/">
                Who Lives
              </a>
              contributing to their efforts for a different world.

            </p>
          </div>
        </div>
        <div className="box-image right-side-box">
          <h1 style={{ color: 'white', fontSize: "max(3em,20px)", marginBottom: "max(0.5em,10px)", fontFamily: "HeadingFont", }}>
            BENEFITS
          </h1>
          <ul style={{ display: 'flex', justifyContent: 'space-between', minHeight: '20rem', flexDirection: 'column' }}>
            <li className="right-side-box-li">  Token max buy limit : 20 EGLD</li>
            <li className="right-side-box-li">  25% discount from presale price </li>
            <li className="right-side-box-li">Tesla Lottery Tickets – 2</li>
            <li className="right-side-box-li"> RVM token rewards: + 2%</li>
            <li className="right-side-box-li">     Mint price – 0.85 EGLD</li>
          </ul>
          <button
            disabled={(mintStatus === 'END' && mintedCounts[0] < totalCount) ? false : true}
            onClick={() => mint(1, 0.85)}
            style={{ borderRadius: '20px', height: '44px', width: '14rem', minWidth: "150px", background: "#010032", color: 'white', border: "none", outline: 'none', fontFamily: "Arial", fontWeight: '900', fontSize: "max(1em,15px)" }}>
            MINT
          </button>
          <Typography
            style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: "#fff",
              padding: "10px 0"
            }}
            align="center"
          >
            {mintedCounts[0] - 4}/2,000
          </Typography>
        </div>
      </div>
      <div className="wrapper-div">
        <div className="box-image left-side-box">
          <div className="left-side-box-image" >
            <img src={greenAvatar} height="85%" width={'100%'} />
          </div>
          <div className="left-side-box-content">
            <h1 style={{ color: 'white', fontSize: "max(3em,20px)", fontFamily: "HeadingFont", }}>
              Emesh
            </h1>
            <p style={{ color: 'white', fontSize: "max(1.4em,14px)" }}>
              <span style={{ fontWeight: 'bold' }} >Emesh</span> -    is a Sumerian god of vegetation, responsible on earth for woods, fields, synonym with the abundance of the earth and with summer.<br />
              There is no question that Earth has been a giving planet. The ability we have to manipulate the landscape and recognize the consequences of doing so puts us in a peculiar position.However, we also have an obligation to maintain the environment, as we depend on the resources and services it provides. As we have removed ourselves further and further from nature, we have developed a willing ignorance of our role and relationship within it. Our cognitive ability and understanding of nature oblige us to maintain the integrity of the environment therefore we must change how we influence the land.<br />
              Supporting actions taken and people that dedicate themselves to this specific purpose is one of our projects goals, therefore Convert Carbon pledges to support
              <a target={"_blank"} href="https://www.fauna-flora.org/ " style={{ color: '#189828', textDecoration: 'underline' }}>
                Fauna & Flora International (FFI)
              </a>
              and
              <a target={"_blank"} style={{ color: '#189828', textDecoration: 'underline' }} href="https://www.wcs.org/  ">
                Wildlife Conservation Society (WCS)
              </a>
              joining the many that have chosen not to look away from the problem hoping it will disappear
            </p>
          </div>
        </div>
        <div className="'box-image right-side-box">
          <h1 style={{ color: 'white', fontSize: "max(3em,20px)", marginBottom: "max(0.5em,10px)", fontFamily: "HeadingFont", }}>
            BENEFITS
          </h1>
          <ul style={{ display: 'flex', justifyContent: 'space-between', minHeight: '20rem', flexDirection: 'column' }}>
            <li className="right-side-box-li">  Token max buy limit : 25 EGLD</li>
            <li className="right-side-box-li">  25% discount from presale price </li>
            <li className="right-side-box-li">Tesla Lottery Tickets – 4</li>
            <li className="right-side-box-li"> RVM token rewards: + 4%</li>
            <li className="right-side-box-li">     Mint price – 0.9 EGLD</li>
          </ul>
          <button
            disabled={(mintStatus === 'END' && mintedCounts[1] < totalCount) ? false : true}
            onClick={() => mint(2, 0.9)}
            style={{ borderRadius: '20px', height: '44px', width: '14rem', minWidth: "150px", background: "#010032", color: 'white', border: "none", outline: 'none', fontFamily: "Arial", fontWeight: '900', fontSize: "max(1em,15px)" }}
          >
            MINT
          </button>
          <Typography
            style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: "#fff",
              padding: "10px 0"
            }}
            align="center"
          >
            {mintedCounts[1] - 4}/2,000
          </Typography>
        </div>
      </div>
      <div className="wrapper-div">
        <div className="box-image left-side-box">
          <div className="left-side-box-image" >
            <img src={fireImage} height="100%" width='100%' />
          </div>
          <div className="left-side-box-content">
            <h1 style={{ color: 'white', fontSize: "max(3em,20px)", fontFamily: "HeadingFont", }}>
              Amaterasu
            </h1>
            <p style={{ color: 'white', fontSize: "max(1.4em,14px)" }}>
              <span style={{ fontWeight: 'bold' }} > Amaterasu</span> -  the celestial goddess of the sun in Japanese from whom the Japanese imperial family claims descent, and an important Shinto deity. An embodiment of the rising sun and Japan itself, she is the queen of the kami and ruler of the universe.<br />
              The origin of fire is tied to the origin of plants and therefore the fabric of life itself and it is a source of energy that requires careful moderation and control.  Solar energy technologies and power plants do not produce air pollution or greenhouse gases when operating. Using solar energy can have a positive, indirect effect on the environment when solar energy replaces or reduces the use of other energy sources that have larger effects on the environment.<br />
              Aware that are still a lot of communities in which the basic things like electricity are considered luxury and so many people ca benefit from the solar technology, Convert Carbon pledges to support

              and

              in their mission to help others.
              Aware that are still a lot of communities in which the basic things like electricity are considered luxury and so many people ca benefit from the solar technology, Convert Carbon pledges to support <a target={"_blank"} href="https://solar-aid.org/" style={{ color: '#189828', textDecoration: 'underline' }}>
                The Solar Aid project
              </a> and    <a target={"_blank"} style={{ color: '#189828', textDecoration: 'underline' }} href="https://givepower.org/ ">
                Givepower project
              </a> in their mission to help others.
            </p>
          </div>
        </div>
        <div className="'box-image right-side-box">
          <h1 style={{ color: 'white', fontSize: "max(3em,20px)", marginBottom: "max(0.5em,10px)", fontFamily: "HeadingFont", }}>
            BENEFITS
          </h1>
          <ul style={{ display: 'flex', justifyContent: 'space-between', minHeight: '20rem', flexDirection: 'column' }}>
            <li className="right-side-box-li"> Token max buy limit: 35 EGLD</li>
            <li className="right-side-box-li">  25% discount from presale price </li>
            <li className="right-side-box-li">Tesla Lottery Tickets – 6</li>
            <li className="right-side-box-li"> RVM token rewards: + 6%</li>
            <li className="right-side-box-li">     Mint price – 1 EGLD</li>
          </ul>
          <button
            disabled={(mintStatus === 'END' && mintedCounts[2] < totalCount) ? false : true}
            onClick={() => mint(3, 1)}
            style={{ borderRadius: '20px', height: '44px', width: '14rem', minWidth: "150px", background: "#010032", color: 'white', border: "none", outline: 'none', fontFamily: "Arial", fontWeight: '900', fontSize: "max(1em,15px)" }}
          >
            MINT
          </button>
          <Typography
            style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: "#fff",
              padding: "10px 0"
            }}
            align="center"
          >
            {mintedCounts[2] - 4}/2,000
          </Typography>
        </div>
      </div>
      <div className="wrapper-div">
        <div className="box-image left-side-box">
          <div className="left-side-box-image" >
            <img src={windAvatar} height="85%" width={'100%'} />
          </div>
          <div className="left-side-box-content">
            <h1 style={{ color: 'white', fontSize: "max(3em,20px)", fontFamily: "HeadingFont", }}>
              Khamsin
            </h1>
            <p style={{ color: 'white', fontSize: "max(1.4em,14px)" }}>
              <span style={{ fontWeight: 'bold' }} >Khamsin</span> -  a hot, dry, sand-filed windstorm – a sight that will become more and more common as global warming and desertification increases. Historically these storms are so violent that changed lives, outcome of wars and the overall way life is lived.<br />
              We need to take immediate action so this doesn’t become a reality, combat desertification and yes, Regreening helps! Water evaporates out of the pores of plants and trees, increasing the humidity. The formation of clouds is stimulated and rainfall increases, the roots of vegetation help the water to infiltrate into the soil, the land can be used for agriculture again, increasing the food security and income for people and expanding the biodiversity.<br />
              As a result of this Convert Carbon pledges to support
              <a href="  https://www.unccd.int/" target={"_blank"} style={{ color: '#189828', textDecoration: 'underline' }}>
                United Nations Convention to Combat Desertification(UNCCD)
              </a>
              and more specifically
              <a target={"_blank"} style={{ color: '#189828', textDecoration: 'underline' }} href="https://www.unccd.int/actions/great-green-wall-initiative">
                The Green Wall Initiative
              </a>
              contributing the creation of the largest living structure on the planet.
            </p>
          </div>
        </div>
        <div className="'box-image right-side-box">
          <h1 style={{ color: 'white', fontSize: "max(3em,20px)", marginBottom: "max(0.5em,10px)", fontFamily: "HeadingFont", }}>
            BENEFITS
          </h1>
          <ul style={{ display: 'flex', justifyContent: 'space-between', minHeight: '20rem', flexDirection: 'column' }}>
            <li className="right-side-box-li"> Token max buy limit: 50 EGLD</li>
            <li className="right-side-box-li">  25% discount from presale price </li>
            <li className="right-side-box-li">Tesla Lottery Tickets – 8</li>
            <li className="right-side-box-li"> RVM token rewards: + 8%</li>
            <li className="right-side-box-li">     Mint price – 1.15 EGLD</li>
          </ul>
          <button
            disabled={(mintStatus === 'END' && mintedCounts[3] < totalCount) ? false : true}
            onClick={() => mint(4, 1.15)}
            style={{ borderRadius: '20px', height: '44px', width: '14rem', minWidth: "150px", background: "#010032", color: 'white', border: "none", outline: 'none', fontFamily: "Arial", fontWeight: '900', fontSize: "max(1em,15px)" }}
          >
            MINT
          </button>
          <Typography
            style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: "#fff",
              padding: "10px 0"
            }}
            align="center"
          >
            {mintedCounts[3] - 4}/2,000
          </Typography>
        </div>
      </div>

      <div className="wrapper-div">
        <div className="box-image left-side-box">
          <div className="left-side-box-image" >
            <img src={soulAvatar} height="85%" width={'100%'} />
          </div>
          <div className="left-side-box-content">
            <h1 style={{ color: 'white', fontSize: "max(3em,20px)", fontFamily: "HeadingFont", }}>
              Eleos
            </h1>
            <p style={{ color: 'white', fontSize: "max(1.4em,14px)" }}>
              <span style={{ fontWeight: 'bold' }} >Eleos </span> - the ancient Greece was the personification of mercy, clemency, compassion and pity, was characteristically kind, compassionate and gentle. She gives succor to all who ask for it and she is described as among all the gods the most useful to human life in all its vicissitude.<br />
              Now, more than ever, it’s hard to watch someone who is suffering. We may feel their pain or absorb their sorrow; we may worry that we won’t know what to do or say. The ability to connect empathically with others, to feel with them, to care about their well-being, and to act with compassion is critical to our lives, helping us to get along, work more effectively, and thrive as a society.<br />
              With the knowledge that every little bit counts and all of this small contributions make a huge difference in the life of so many, Convert Carbon pledges to support
              <a target={"_blank"} href="https://www.unhcr.org/ " style={{ color: '#189828', textDecoration: 'underline' }}>
                UN Refugee Agency
              </a>
              and
              <a target={"_blank"} style={{ color: '#189828', textDecoration: 'underline' }} href="https://paws2rescue.com/">
                Paws2Rescue organization
              </a>
              in their efforts.
            </p>
          </div>
        </div>
        <div className="'box-image right-side-box">
          <h1 style={{ color: 'white', fontSize: "max(3em,20px)", marginBottom: "max(0.5em,10px)", fontFamily: "HeadingFont", }}>
            BENEFITS
          </h1>
          <ul style={{ display: 'flex', justifyContent: 'space-between', minHeight: '20rem', flexDirection: 'column' }}>
            <li className="right-side-box-li"> Token max buy limit: 70 EGLD</li>
            <li className="right-side-box-li">  25% discount from presale price </li>
            <li className="right-side-box-li">Tesla Lottery Tickets – 10</li>
            <li className="right-side-box-li"> RVM token rewards: + 10%</li>
            <li className="right-side-box-li">   Mint price – 1.3 EGLD</li>
          </ul>
          <button
            disabled={(mintStatus === 'END' && mintedCounts[4] < totalCount) ? false : true}
            onClick={() => mint(5, 1.3)}
            style={{ borderRadius: '20px', height: '44px', width: '14rem', minWidth: "150px", background: "#010032", color: 'white', border: "none", outline: 'none', fontFamily: "Arial", fontWeight: '900', fontSize: "max(1em,15px)" }}
          >
            MINT
          </button>
          <Typography
            style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: "#fff",
              padding: "10px 0"
            }}
            align="center"
          >
            {mintedCounts[4] - 4}/2,000
          </Typography>
        </div>
      </div>


      <Community />
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(Home);
