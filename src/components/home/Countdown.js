import React, { Fragment, useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@mui/styles/withStyles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Grid, Typography, Button, Card, Box } from "@mui/material";

const styles = (theme) => ({
    card: {
        // maxWidth: 600,
        // marginTop: 100,
        color: '#fff',
        backgroundColor: '#010032',
        // backgroundImage: 'linear-gradient(to right,transparent, rgb(0 0 0/0.5), rgb(0 0 0/0.5), transparent)',
        boxShadow: 'none',
        width: '70%',
        minWidth: '300px',
        borderRadius: 10,
        padding: 20,
    },
    countdownItem: {
        // width: 70,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'baseline',
        // border: '2px solid white',
        borderRadius: 10,
        // margin: '0 10px'
    },
    countdownLabel: {
        fontSize: '1.5rem',
        width: '100%',
        textTransform: 'uppercase',
        fontWeight: 700,
        textAlign: 'center',
        marginTop: '0.1rem',
        color: '#189828',
    },
    countdownValue: {
        width: '100%',
        padding: '0 0.5rem',
        fontWeight: "600",
        fontSize: '7rem',
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Arial',
    },
    typewriter: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        // margin: '0 auto',
        animation: '$typing 1.5s steps(40, end)',
        fontFamily: 'Arial',
        fontSize: '2rem',
        fontWeight: '600'
    },
    "@keyframes typing": {
        from: { width: 0 },
        to: { width: '100%' }
    }
});

function getTimeLeft(time) {
    return {
        days: Math.floor(time / (60 * 60 * 24)),
        hours: Math.floor((time / (60 * 60)) % 24),
        minutes: Math.floor((time / 60) % 60),
        seconds: Math.floor(time % 60),
    }
}

function Countdown(props) {
    const { 
        classes,
        theme,
        mintedCount,
        startTime,
        endTime,
        setMintStatus,
        mintStatus
    } = props;

    const isWidthUpLg = useMediaQuery(theme.breakpoints.up("lg"));
    const [timeLeft, setTimeLeft] = useState(getTimeLeft(0));
    
    useEffect(() => {
        if(startTime >= endTime) return;
        
        const timer = setTimeout(() => {
            const now = Date.now() / 1000;
            
            if(now < startTime) {
                if(mintStatus !== 'START') {
                    setMintStatus('START');
                }

                setTimeLeft(getTimeLeft(startTime - now));
            } else if(now < endTime) {
                if(mintStatus !== 'END') {
                    setMintStatus('END');
                }
                
                setTimeLeft(getTimeLeft(endTime - now));
            } else {
                if(mintStatus !== 'OVER') {
                    setMintStatus('OVER');
                }
                
                setTimeLeft(getTimeLeft(0));
            }
        }, 1000);
    
        return () => clearTimeout(timer);
    }, [timeLeft, startTime, endTime]);

    return (
        <Box display="flex" justifyContent="center" style={{ marginTop: 0 }} className="row"
        //  my={12}
        >
            <Card
                className={classes.card}
                data-aos-delay="200"
                data-aos="zoom-in"
                style={{ overflow: 'visible', zIndex: 123 }}
            >
                <Grid item
                    xs={12}
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        height="100%"
                    >
                        {
                            mintStatus === 'OVER' ? (
                                <Box>
                                    <Typography
                                        align="center"
                                        variant={isWidthUpLg ? "h3" : "h4"}
                                        className={classNames("title-font", classes.typewriter)}
                                    >
                                        THE SALE IS OVER
                                    </Typography>
                                </Box>
                            ) : (
                                <Box  >
                                    <Typography
                                        align="center"
                                        variant={isWidthUpLg ? "h3" : "h4"}
                                        className={classNames("title-font", classes.typewriter)}
                                    >
                                        MINT {mintStatus} IN

                                    </Typography>
                                </Box>
                                )
                        }
                        {timeLeft !== undefined ?
                            (<Box display="flex" justifyContent="space-evenly" alignItems={"center"} paddingBottom={'20px'}>

                                <div className={classes.countdownItem}>
                                    <span className={classes.countdownValue}>
                                        {String(timeLeft.days).padStart(2, '0')}
                                    </span>
                                    <span className={classes.countdownLabel}>Days</span>
                                </div>
                                <span style={{ fontSize: '7rem', marginBottom: "4%" }}>:</span>
                                <div className={classes.countdownItem}>
                                    <span className={classes.countdownValue}>
                                        {String(timeLeft.hours).padStart(2, '0')}
                                    </span>
                                    <span className={classes.countdownLabel}>Hours</span>
                                </div>
                                <span style={{ fontSize: '7rem', marginBottom: "4%" }}>:</span>
                                <div className={classes.countdownItem}>
                                    <span className={classes.countdownValue}>
                                        {String(timeLeft.minutes).padStart(2, '0')}
                                    </span>
                                    <span className={classes.countdownLabel}>MINUTES</span>
                                </div>
                                <span style={{ fontSize: '7rem', marginBottom: "4%" }}>:</span>
                                <div className={classes.countdownItem}>
                                    <span className={classes.countdownValue}>
                                        {String(timeLeft.seconds).padStart(2, '0')}
                                    </span>
                                    <span className={classes.countdownLabel}>SECONDS</span>
                                </div>
                            </Box>)
                            : (
                                <></>
                            )
                        }
                        <div style={{ width: '40%', position: 'absolute', bottom: -75, zIndex: 9999999, minHeight: '75px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#010032', alignSelf: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <Typography
                                style={{ fontSize: '1.5rem', fontWeight: '600' }}
                                align="center"
                                variant={isWidthUpLg ? "h3" : "h4"}
                            >
                                {mintedCount}/10,000
                            </Typography>
                        </div>
                    </Box>
                </Grid>
            </Card>
        </Box>
    )
}

Countdown.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(Countdown);
