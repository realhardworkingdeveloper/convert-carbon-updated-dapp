import React, { Fragment, useEffect } from "react";
import teleIcon from '../../assets/telegram.png'
import youtubeIcon from '../../assets/youtube.png'
import facebookIcon from '../../assets/facebook.png'
import twitterIcon from '../../assets/twitter.png'
import redditIcon from '../../assets/reddit.png'
import instgramIcon from '../../assets/instagram.png'
import mediumIcon from '../../assets/medium.png'
import wedonthaveIcon from '../../assets/weDontHaveTime.png'
import discordIcon from '../../assets/discord.png'
import tiktokIcon from '../../assets/tiktok.png'
import linkedinIcon from '../../assets/linkedin.png'



function Community(props) {
    const Images = [
        {
            imageUrl: teleIcon,
            imageLink: 'https://t.me/ConvertCarbon'
        },
        {
            imageUrl: facebookIcon,
            imageLink: 'https://www.facebook.com/ConvertCarbon'
        },
        {
            imageUrl: twitterIcon,
            imageLink: 'https://twitter.com/Convert_Carbon '
        },
        {
            imageUrl: redditIcon,
            imageLink: 'https://www.reddit.com/user/Carbon_CRB'
        },
        {
            imageUrl: instgramIcon,
            imageLink: 'https://www.instagram.com/convert_carbon/'
        },
        {
            imageUrl: mediumIcon,
            imageLink: 'https://medium.com/@ConvertCarbon'
        },
        {
            imageUrl: wedonthaveIcon,
            imageLink: 'https://app.wedonthavetime.org/profile/convert_carbon '
        },
        {
            imageUrl: discordIcon,
            imageLink: 'https://t.co/vb6ZB04Ykk'
        },
        {
            imageUrl: tiktokIcon,
            imageLink: 'https://www.tiktok.com/@convertcarbon '
        },
        {
            imageUrl: linkedinIcon,
            imageLink: 'https://www.linkedin.com/company/convert-carbon/'
        },
    ]
    return (
        <Fragment>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', paddingLeft: '2rem', paddingRight: '2rem', flexDirection: 'column', marginTop: '3rem', marginBottom: '3rem' }}>
            <h1 id="comm" style={{ color: '#010032', fontSize: "max(3em,20px)", fontFamily: "HeadingFont", }}>
                    Community
                </h1>
                <div className="image-comm">
                    <div style={{ width: '300px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {
                            Images.slice(0, 5).map((item =>
                                <a key={item.imageLink} href={item.imageLink} target={'_blank'}>
                                    <img style={{ objectFit: 'contain', width: '80px', height: '80px' }} className="image-community" src={item.imageUrl} />
                                </a>
                            ))
                        }
                    </div>
                    <div style={{ width: '300px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {
                            Images.slice(5, 10).map((item =>
                                <a key={item.imageLink} target={'_blank'} href={item.imageLink}>
                                    <img style={{ objectFit: 'contain', width: '80px', height: '80px' }} className="image-community" src={item.imageUrl} />
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );
}


export default Community;
