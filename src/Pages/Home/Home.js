import React from 'react';
import Features from './Features';
import Intro from './Intro';
const Home = () => {
    return (
        <div className='mt-20 w-[85%] m-auto'>
            <Intro></Intro>
            <hr className='mt-16'></hr>
            <Features></Features>
        </div>
    );
};

export default Home;