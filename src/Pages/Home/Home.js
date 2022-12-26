import React from 'react';
import Contact from './Contact';
import Features from './Features';
import Intro from './Intro';
import Portfolio from './Portfolio';
const Home = () => {
    return (
        <div className='mt-20 w-[85%] m-auto'>
            <Intro></Intro>
            <hr className='mt-16' id='features'></hr>
            <Features></Features>
            <hr className='my-16' id='portfolio'></hr>
            <Portfolio></Portfolio>
            <hr className='my-16'></hr>
            <Contact></Contact>
        </div>
    );
};

export default Home;