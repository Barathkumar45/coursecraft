import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={3} className="footer-section">
            <Typography variant="h6" component="div">
              About Us
            </Typography>
            <Typography variant="body2" component="div">
              We are committed to providing high-quality courses to help you achieve your educational goals.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} className="footer-section">
            <Typography variant="h6" component="div">
              Contact Us
            </Typography>
            <Typography variant="body2" component="div">
              Email: coursecraft@gmail.com
            </Typography>
            <Typography variant="body2" component="div">
              Phone: +1 (555) 123-4567
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} className="footer-section">
            <Typography variant="h6" component="div">
              Quick Links
            </Typography>
            <Typography variant="body2" component="div">
              <Link href="/" className="footer-link">Home</Link>
            </Typography>
            <Typography variant="body2" component="div">
              <Link href="/about" className="footer-link">About Us</Link>
            </Typography>
            <Typography variant="body2" component="div">
              <Link href="/contact" className="footer-link">Contact Us</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} className="footer-section">
            <Typography variant="h6" component="div">
              Follow Us
            </Typography>
            <div className="social-icons">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FacebookIcon />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <TwitterIcon />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <InstagramIcon />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <LinkedInIcon />
              </Link>
            </div>
          </Grid>
        </Grid>
        <div className="footer-bottom">
          <Typography variant="body2" component="div">
            © {new Date().getFullYear()} CourseCraft. All rights reserved.
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
