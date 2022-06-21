import React, { Fragment, useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@mui/styles/withStyles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Grid, Typography,  Button, Card, Hidden, Box } from "@mui/material";

const styles = (theme) => ({
    wrapper: {
        // backgroundColor: 'transparent',
        backgroundImage: 'linear-gradient(to right, transparent, rgb(0 0 0/0.1), rgb(0 0 0/0.1), transparent)',
        // boxShadow: 'none'
    },
    card: {
        boxShadow: theme.shadows[4],
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("xs")]: {
          paddingTop: theme.spacing(3),
          paddingBottom: theme.spacing(3),
        },
        [theme.breakpoints.up("sm")]: {
          paddingTop: theme.spacing(5),
          paddingBottom: theme.spacing(5),
          paddingLeft: theme.spacing(4),
          paddingRight: theme.spacing(4),
        },
        [theme.breakpoints.up("md")]: {
          paddingTop: theme.spacing(5.5),
          paddingBottom: theme.spacing(5.5),
          paddingLeft: theme.spacing(5),
          paddingRight: theme.spacing(5),
        },
        [theme.breakpoints.up("lg")]: {
          paddingTop: theme.spacing(6),
          paddingBottom: theme.spacing(6),
          paddingLeft: theme.spacing(6),
          paddingRight: theme.spacing(6),
        },
        [theme.breakpoints.down("xl")]: {
          width: "auto",
        },
    },
    vs: {
        maxWidth: 150,
        width: '100%'
    },
    god: {
        transform: 'scaleX(-1)',
        position: 'relative',
        zIndex: 9999,
        [theme.breakpoints.up("xs")]: {
            height: '250px !important',
            marginLeft: 0,
            marginBottom: -200
        },
        [theme.breakpoints.up("sm")]: {
            height: '300px !important',
            marginLeft: 4,
            marginBottom: -250
        },
        [theme.breakpoints.up("md")]: {
            height: '350px !important',
            marginLeft: 8,
            marginBottom: -300
        },
        [theme.breakpoints.up("lg")]: {
            height: '400px !important',
            marginLeft: 12,
            marginBottom: -350
        },
        
    }
    
});

function Mintboard(props) {
    const { classes, theme, title, description, benefit } = props;
    const isWidthUpLg = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <Fragment>
            <Box justifyContent="center" my={0} className={classes.wrapper} mx={isWidthUpLg ? 12 : 4}>
                <img 
                    className={classNames(classes.god, "god_1")}
                    src="/assets/images/god/water.png"
                    alt="water god"
                />
                <Card
                className={classes.card}
                data-aos-delay="200"
                data-aos="zoom-in"
                >
                    <Box justifyContent="space-between" className="row">
                        <Grid item xs={2}>
                            
                        </Grid>
                        <Grid item xs={7}>
                            <Box
                            display="flex"
                            flexDirection="column"
                            justifyContent="space-between"
                            height="100%"
                            sx={{
                                borderRight: '1px dashed'
                            }}
                            >
                                <Box mb={2}>
                                    <Typography variant={isWidthUpLg ? "h5" : "h6"}>
                                        {title}
                                    </Typography>
                                </Box>
                                <Box mb={2}>
                                    <Typography
                                        variant={isWidthUpLg ? "body1" : "body1"}
                                        // color="textSecondary"
                                        dangerouslySetInnerHTML={{__html: description}}
                                    >
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box
                                display="flex"
                                flexDirection="column"
                                justifyContent="space-between"
                                alignItems="center"
                                height="100%"
                            >
                                <Box mb={2}>
                                    <Typography variant={isWidthUpLg ? "h5" : "h6"}>
                                        Benefit
                                    </Typography>
                                </Box>
                                <Box mb={2}>
                                    <Typography
                                        variant={isWidthUpLg ? "body1" : "body1"}
                                        dangerouslySetInnerHTML={{__html: benefit}}
                                    />
                                </Box>
                                <Box
                                    mb={2}
                                >
                                    <Button variant="contained" width={100}>
                                        MINT 
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Box>
                </Card>
            </Box>
        </Fragment>
    )
}

Mintboard.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(Mintboard);
