import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HeroFooter from '../components/HeroFooter';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className=' w-[80vw] mx-auto'>
            <Navbar />
            <Hero />
            <HeroFooter />
            <Footer />
        </div>
    );
};

export default Home;