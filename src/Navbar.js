import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchorEl(null);
  };

  return (
    <AppBar position="static" className="navbar-alt">
      <Toolbar className="navbar-toolbar-alt">
        <div className="navbar-logo-link-alt">
          <Link to="/loginbtn" className="navbar-logo-link-alt">
            <img src={logo} alt="CourseCraft Logo" className="navbar-logo-alt" />
            <Typography variant="h6" component="div" className="navbar-title-alt">
              CourseCraft
            </Typography>
          </Link>
        </div>
        <div className="navbar-actions-alt">
          <Button className="navbar-button-alt"><Link to='/loginnav'>Login</Link></Button>
          <Button className="navbar-button-alt"><Link to='/contact'>Contact Us</Link></Button>
          <Button
            className="navbar-button-alt"
            aria-controls="profession-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Profession
          </Button>
          <Menu
            id="profession-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}><Link to='/agriculture'>Agriculture</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to='/arts'>Arts & Science</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to='/engineering'>Engineering</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to='/medicine'>Medicine</Link></MenuItem>
          </Menu>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="profile-menu"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="profile-menu"
            anchorEl={profileMenuAnchorEl}
            keepMounted
            open={Boolean(profileMenuAnchorEl)}
            onClose={handleProfileMenuClose}
          >
            <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleProfileMenuClose}><Link to='/logout'>Logout</Link></MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
