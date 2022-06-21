import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
  Typography,
  Toolbar,
} from "@mui/material";
import { AppBar, Button } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { logout, useGetAccountInfo } from '@elrondnetwork/dapp-core';

const styles = (theme) => ({
  closeIcon: {
    marginRight: theme.spacing(0.5),
  },
  headSection: {
    width: 200,
  },
  blackList: {
    backgroundColor: theme.palette.common.black,
    height: "100%",
  },
  noDecoration: {
    textDecoration: "none !important",
  },
});

function NavigationDrawer(props) {
  const { open, onClose, anchor, classes, menuItems, selectedItem, theme, selectedTab } =
    props;
  const { address } = useGetAccountInfo();
  const isLoggedIn = Boolean(address);

  const isWidthUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  const location = useLocation();
  const loginPath = { pathname: '/unlock' };

  window.onresize = () => {
    if (isWidthUpSm && open) {
      onClose();
    }
  };

  const handleLogout = () => {
    logout(`${window.location.origin}/`);
  };

  return (
    <Drawer variant="temporary" open={open} onClose={onClose} anchor={anchor}>
      <Toolbar className={classes.headSection}>
        <ListItem
          style={{
            paddingTop: theme.spacing(0),
            paddingBottom: theme.spacing(0),
            height: "100%",
            justifyContent: anchor === "left" ? "flex-start" : "flex-end",
          }}
          disableGutters
        >
          <ListItemIcon className={classes.closeIcon}>
            <IconButton
              onClick={onClose}
              aria-label="Close Navigation"
              size="large"
            >
              <CloseIcon style={{ width: '30px', height: '30px' }} color="primary" />
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </Toolbar>
      <List className={classes.blackList}>
        {menuItems.map(element => {
          if (element.link) {
            if (element.link == '/unlock' && isLoggedIn == false) {
              return (
                <Link
                  key={element.name}
                  to={loginPath}
                  className={classes.noDecoration}

                >
                  {/* <Button
                    color="secondary"
                    size="large"
                    classes={{ text: classes.menuButtonText }}
                  >
                    {element.name}
                  </Button> */}
                  <ListItem
                    button
                    selected={selectedItem === element.name}
                    /**
                     * We disable ripple as it will make a weird animation
                     * with primary and secondary color
                     */
                    disableRipple
                    disableTouchRipple
                  >
                    <ListItemIcon>{element.icon}</ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="subtitle1" className="text-white">
                          {element.name}
                        </Typography>
                      }
                    />
                  </ListItem>
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
                    alert("");
                    handleLogout();

                  }}
                >
                  <ListItem
                    button
                    selected={selectedItem === element.name}
                    /**
                     * We disable ripple as it will make a weird animation
                     * with primary and secondary color
                     */
                    disableRipple
                    disableTouchRipple
                  >
                    <ListItemIcon>{element.icon}</ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="subtitle1" className="text-white">
                          DISCONNECT
                        </Typography>
                      }
                    />
                  </ListItem>
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

                >
                  <ListItem
                    button
                    selected={selectedItem === element.name}
                    /**
                     * We disable ripple as it will make a weird animation
                     * with primary and secondary color
                     */
                    disableRipple
                    disableTouchRipple
                  >
                    <ListItemIcon>{element.icon}</ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="subtitle1" className="text-white">
                          {element.name}
                        </Typography>
                      }
                    />
                  </ListItem>
                </a>
                : element.name === "TERMS & CONDITIONS" ?
                  <a
                    href={element.link}
                    target={'_blank'}
                    className={classes.noDecoration}

                  >
                    <ListItem
                      button
                      selected={selectedItem === element.name}
                      /**
                       * We disable ripple as it will make a weird animation
                       * with primary and secondary color
                       */
                      disableRipple
                      disableTouchRipple
                    >
                      <ListItemIcon>{element.icon}</ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="subtitle1" className="text-white">
                            {element.name}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </a> :
                  element.name === 'COMMUNITY' ?

                    <a href="#comm">
                     <ListItem
                  button
                  selected={selectedItem === element.name}
                  /**
                   * We disable ripple as it will make a weird animation
                   * with primary and secondary color
                   */
                  disableRipple
                  disableTouchRipple
                >
                  <ListItemIcon>{element.icon}</ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" className="text-white">
                        {element.name}
                      </Typography>
                    }
                  />
                </ListItem>
                    </a>
                    :
                    <Link
                      to={element.link}
                      target={'_blank'}
                      className={classes.noDecoration}

                    >
                      <ListItem
                        button
                        selected={selectedItem === element.name}
                        /**
                         * We disable ripple as it will make a weird animation
                         * with primary and secondary color
                         */
                        disableRipple
                        disableTouchRipple
                      >
                        <ListItemIcon>{element.icon}</ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography variant="subtitle1" className="text-white">
                              {element.name}
                            </Typography>
                          }
                        />
                      </ListItem>
                    </Link>
              }
            </React.Fragment>
          );
        })}
      </List>
    </Drawer>
  );
}

NavigationDrawer.propTypes = {
  anchor: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.object.isRequired,
  selectedItem: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(NavigationDrawer);
