import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Promotion from '../Promotion/Promotion';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Promotion></Promotion>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;