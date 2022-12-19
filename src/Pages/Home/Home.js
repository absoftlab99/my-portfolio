import React from 'react';
import Features from './Features';
import Intro from './Intro';
import Portfolio from './Portfolio';
const Home = () => {
    return (
        <div className='mt-20 w-[85%] m-auto'>
            <Intro></Intro>
            <hr className='mt-16'></hr>
            <Features></Features>
            <hr className='my-16'></hr>
            <Portfolio></Portfolio>
            <hr className='my-16'></hr>
        </div>
    );
};

export default Home;