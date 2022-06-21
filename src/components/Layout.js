import React, { memo, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import AOS from "aos/dist/aos";
import withStyles from '@mui/styles/withStyles';
import NavBar from "./navigation/NavBar";
import Footer from "./footer/Footer";
import "aos/dist/aos.css";
import Router from "./Router";
import smoothScrollTop from "../shared/functions/smoothScrollTop";
import { Grid } from "@mui/material";

AOS.init({ once: true });

const styles = (theme) => ({
  wrapper: {
    overflowX: "hidden",
  },
  noPadding: {
      padding: '0px !important'
  }
});

function Layout(props) {
  const { classes } = props;
  const [selectedTab, setSelectedTab] = useState(null);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const selectHome = useCallback(() => {
    smoothScrollTop();
    document.title =
      "Primordials • Home";
    setSelectedTab("Home");
  }, [setSelectedTab]);

  const selectConnect = useCallback(() => {
    smoothScrollTop();
    document.title =
      "Primordials • Connect";
    setSelectedTab("Connect");
  }, [setSelectedTab]);

  const handleMobileDrawerOpen = useCallback(() => {
    setIsMobileDrawerOpen(true);
  }, [setIsMobileDrawerOpen]);

  const handleMobileDrawerClose = useCallback(() => {
    setIsMobileDrawerOpen(false);
  }, [setIsMobileDrawerOpen]);

  return (
    <div className={classes.wrapper}>
        <NavBar
        selectedTab={selectedTab}
        selectTab={setSelectedTab}
        mobileDrawerOpen={isMobileDrawerOpen}
        handleMobileDrawerOpen={handleMobileDrawerOpen}
        handleMobileDrawerClose={handleMobileDrawerClose}
        />
        <Router
        selectHome={selectHome}
        selectConnect={selectConnect}
        />
        <Footer />
    </div>
  );
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(Layout));
