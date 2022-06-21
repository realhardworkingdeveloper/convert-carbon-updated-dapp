import React, { Fragment, useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@mui/styles/withStyles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Grid, Typography, Button, Card, CardActionArea, CardActions, CardMedia, CardContent, Box } from "@mui/material";

const styles = (theme) => ({
    card: {
        // maxWidth: 600,
        // marginTop: 50,
        color: '#000',
        // backgroundColor: 'transparent',
        // backgroundImage: 'linear-gradient(to right, transparent, rgb(0 0 0/0.1), rgb(0 0 0/0.1), transparent)',
        boxShadow: 'none'
    }
});

function Storyboard(props) {
    const { classes, theme, title, description } = props;
    const isWidthUpLg = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <Fragment>
            <Box display="flex" justifyContent="center" className="row" marginTop={10}>
                <Card
                    className={classes.card}
                    data-aos-delay="200"
                    data-aos="zoom-in"
                >
                    <Grid item xs={12}>
                        <Box display="flex" justifyContent="center" className="row" xs={{ maxWidth: 'none' }}>
                            {/* <Typography
                                variant="h3"
                                sx={{
                                    fontFamily: "'Caveat', cursive",
                                    mt: 8
                                }}
                            >
                                NFT story
                            </Typography> */}
                            <Typography
                                variant={
                                    props.fontSize ? null : isWidthUpLg ? "h5" : "h6"
                                }
                                sx={{
                                    fontFamily: props.font ? "Calibri" : 'Calibri',
                                    lineHeight: 1.5,
                                    mt: 2,
                                    mb: 4,
                                    textAlign: 'left',
                                    fontSize: props.fontSize ? props.fontSize : null,
                                    fontWeight: props.font ? "900" : '600',
                                    color: props.textColor ? props.textColor : null
                                }}
                            >
                                {
                                    props.innerText
                                }

                            </Typography>
                        </Box>
                    </Grid>
                </Card>
            </Box>
        </Fragment>
    )
}

Storyboard.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(Storyboard);
