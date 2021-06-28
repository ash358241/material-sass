import React from 'react';
import './Banner.scss';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import bannerImg from '../../images/hero-Illustration.png';

const Banner = () => {
    const preventDefault = (event) => event.preventDefault();

    return (
        <div className="banner">
            <div className="bannerItem">
                <div className="bannerInfo">
                    <div className="iconRating">
                    <div className="icons">
                    <i class="fas fa-star icon"></i>
                    <i class="fas fa-star icon"></i>
                    <i class="fas fa-star icon"></i>
                    <i class="fas fa-star icon"></i>
                    <i class="fas fa-star icon"></i>
                    </div>
                    <div className="ratingText">
                    <h5>Rated 4.8/5 (283 reviews)</h5>
                    </div>
                    </div>

                    <div className="bannerText">
                        <h1>Create your portfolio in minutes.</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione non praesentium, illum sunt aliquid ducimus. Commodi odio iste voluptatem voluptate?</p>
                    </div>
                    <div className="bannerBtn">
                    <Button variant="contained" color="primary">
                        Start Free Trial
                    </Button>
                    <Link href="#" onClick={preventDefault}>
                        View Examples
                    </Link>
                    </div>
                    <div className="bannerOffer">
                        <p className="firstChild"><i style={{color: 'green'}} class="fas fa-check"></i> No credit card required</p>
                        <p><i style={{color: 'green'}} class="fas fa-check"></i> 10 free templates</p>
                    </div>
            </div>
            <div className="bannerImg">
                <img src={bannerImg} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Banner;