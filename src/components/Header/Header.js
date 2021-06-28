import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("lg")]:{
        display: 'none',
    }
    },
    title: {
      flexGrow: 1,
    },
    sectionDesk: {
        display: 'none',
        [theme.breakpoints.up("md")]:{
            display: 'flex',
        }
    },
  }));

const Header = () => {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <div>
             <div className={classes.root}>
             <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        Fiber
                    </Typography>
                    <div className={classes.sectionDesk}>
                    <Button variant="primary" color="primary">Community</Button>
                    <Button variant="primary" color="primary">Pricing</Button>
                    <Button variant="primary" color="primary">Features</Button>
                    <Button variant="primary" color="primary">Sign In</Button>
                    </div>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <div>
                    <MenuOpenIcon onClick={handleClick}></MenuOpenIcon>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Community</MenuItem>
                        <MenuItem onClick={handleClose}>Pricing</MenuItem>
                        <MenuItem onClick={handleClose}>Features</MenuItem>
                        <MenuItem onClick={handleClose}>Sign In</MenuItem>
                    </Menu>
    </div>
                    </IconButton>
             </Toolbar>
                </div>
            </div>
    );
};

export default Header;