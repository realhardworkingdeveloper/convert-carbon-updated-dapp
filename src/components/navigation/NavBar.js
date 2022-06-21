import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Hidden, IconButton } from "@mui/material";
import withStyles from '@mui/styles/withStyles';
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import BookIcon from "@mui/icons-material/Book";
import NavigationDrawer from "../../shared/components/NavigationDrawer";
import { logout, useGetAccountInfo } from '@elrondnetwork/dapp-core';

const styles = theme => ({
  logo: {
    paddingLeft: '3rem',
    height: '4rem',
    minHeight:'40px',
    marginTop: 3,
  },
  appBar: {
    backgroundColor: '#01004D',
    boxShadow: 'none'
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
    color: '#fff',
    margin: "0 12px",
  },
  noDecoration: {
    textDecoration: "none !important"
  }
});

function NavBar(props) {
  const {
    classes,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab
  } = props;

  const loginPath = { pathname: '/unlock' };

  const { address } = useGetAccountInfo();
  const isLoggedIn = Boolean(address);

  const menuItems = [
    // {
    //   link: "/",
    //   name: "TOKEN SALE",
    //   icon: <HomeIcon style={{ width: '25px', height: '25px' }} className="text-white" />
    // },
    {
      link: "https://convertcarbon.eu/wp-content/uploads/Convert-Carbon-WHITEPAPER-1-2.pdf",
      name: "WHITEPAPER",
      icon: <BookIcon style={{ width: '25px', height: '25px' }} className="text-white" />
    },
    {
      link: "https://convertcarbon.eu/wp-content/uploads/Terms_Conditions.pdf",
      name: "TERMS & CONDITIONS",
      icon: <BookIcon style={{ width: '25px', height: '25px' }} className="text-white" />
    },
    {
      link: "/faq",
      name: "FAQ",
      icon: <BookIcon style={{ width: '25px', height: '25px' }} className="text-white" />
    },
    {
      link: "/collection",
      name: "MY COLLECTION",
      icon: <BookIcon style={{ width: '25px', height: '25px' }} className="text-white" />
    },
    {
      link: "#comm",
      name: "COMMUNITY",
      icon: <BookIcon style={{ width: '25px', height: '25px' }} className="text-white" />
    },


    {
      link: "/unlock",
      name: "CONNECT WALLET",
      icon: <LockOpenIcon style={{ width: '25px', height: '25px' }} className="text-white" />
    }
  ];

  const handleLogout = () => {
    logout(`${window.location.origin}/`);
  };

  return (
    <div style={{ position: 'fixed', zIndex: 4234242342, width: '100%' }} className={classes.root}>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <a target="_blank" href="http://Convertcarbon.eu">
            <img src="assets/images/logo.png" className={classes.logo} />
          </a>
          <div>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleMobileDrawerOpen}
                aria-label="Open Navigation"
                size="large">
                <MenuIcon style={{ width: '30px', height: '30px' }} fontSize="large" color="primary" />
              </IconButton>
            </Hidden>
            <Hidden mdDown>

              {menuItems.map(element => {
                if (element.link) {
                  if (element.link == '/unlock' && isLoggedIn == false) {
                    return (
                      <Link
                        key={element.name}
                        to={loginPath}
                        className={classes.noDecoration}
                        onClick={handleMobileDrawerClose}
                      >
                        <Button
                          color="secondary"
                          size="large"
                          classes={{ text: classes.menuButtonText }}
                        >
                          {element.name}
                        </Button>
                      </Link>
                    );
                  }
                  else if (element.link == '/unlock' && isLoggedIn == true) {
                    return (
                      <Link
                        key={element.name}
                        to={'#'}
                        className={classes.noDecoration}
                        onClick={() => {
                          handleLogout();
                          handleMobileDrawerClose();
                        }}
                      >
                        <Button
                          color="secondary"
                          size="large"
                          className={selectedTab === element.name ? 'selected' : null}
                          classes={{ text: classes.menuButtonText }}
                        >
                          Disconnect
                        </Button>
                      </Link>
                    )
                  }
                }
                return (
                  <React.Fragment
                    key={element.name}
                  >
                    {element.name === 'WHITEPAPER' ?
                      <a
                        href={element.link}
                        target={'_blank'}
                        className={classes.noDecoration}
                        onClick={handleMobileDrawerClose}
                      >
                        <Button
                          color="secondary"
                          size="large"
                          className={selectedTab === element.name ? 'selected' : null}
                          classes={{ text: classes.menuButtonText }}
                        >
                          {element.name}
                        </Button>
                      </a>
                      : element.name === "TERMS & CONDITIONS" ?
                        <a
                          href={element.link}
                          target={'_blank'}
                          className={classes.noDecoration}
                          onClick={handleMobileDrawerClose}
                        >
                          <Button
                            color="secondary"
                            size="large"
                            className={selectedTab === element.name ? 'selected' : null}
                            classes={{ text: classes.menuButtonText }}
                          >
                            {element.name}
                          </Button>
                        </a> :
                        element.name === 'COMMUNITY' ?

                          <a href="#comm">
                            <Button
                              color="secondary"
                              size="large"
                              classes={{ text: classes.menuButtonText }}
                            >
                              COMMUNITY
                            </Button>
                          </a>
                          :
                          <Link
                            to={element.link}
                            target={'_blank'}
                            className={classes.noDecoration}
                            onClick={handleMobileDrawerClose}
                          >
                            <Button
                              color="secondary"
                              size="large"
                              className={selectedTab === element.name ? 'selected' : null}
                              classes={{ text: classes.menuButtonText }}
                            >
                              {element.name}
                            </Button>
                          </Link>
                    }
                  </React.Fragment>
                );
              })}
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
