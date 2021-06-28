import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div class="footer">
            <div className="row">
            <div className="col1">
                <h4>Fiber</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ullam? Sapiente dolorem nulla ducimus officiis saepe illo, iste veniam maiores?</p>
                <h5>Made With </h5>
            </div>
            <div className="col2">
                <h4>Sitemap</h4>
                <p>Homepage</p>
                <p>Pricing</p>
                <p>Testimonial</p>
                <p>Features</p>
            </div>
            <div className="col3">
                <h4>Resources</h4>
                <p>Support</p>
                <p>Contact</p>
                <p>FAQ</p>
            </div>
            <div className="col4">
                <h4>Company</h4>
                <p>About</p>
                <p>Customers</p>
                <p>Blog</p>
            </div>
            <div className="col5">
            <h4>Portfolios</h4>
                <p>Sarah Andrews</p>
                <p>Mathew Higgins</p>
                <p>Janice Dave</p>
            </div>
            </div>
        </div>
    );
};

export default Footer;