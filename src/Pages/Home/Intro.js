import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

const Intro = () => {
    return (
        <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-7'>
                <h2 className='text-sm font-thin tracking-widest text-gray-700'>WELCOME MY WORLD!</h2>
                <h1 className='text-5xl tracking-tighter font-[900] pt-5'>Hi, I'm <span className='brand'>A. Al Mahmud</span></h1>
                <h1 className='text-5xl brand font-[900] pt-3'>
                    a{' '}
                    <span className='text-black'>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['MERN Stack Developer', 'Ui/Ux Designer', 'App Developer', 'Digital Marketer']}
                        loop={Infinity}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                    </span>
                </h1>
            </div>
            <div className='col-span-5 bg-pink-500'>grid 2</div>
        </div>
    );
};

export default Intro;