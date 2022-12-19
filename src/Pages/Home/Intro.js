import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import html from '../../Assets/images/html-5.png';
import css from '../../Assets/images/css-3.png';
import bootstrap from '../../Assets/images/bootstrap.png';
import tailwindcss from '../../Assets/images/tailwindcss.png';
import javascript from '../../Assets/images/js.png';
import reacts from '../../Assets/images/react.png';
import express from '../../Assets/images/expressjs.png';
import node from '../../Assets/images/node-js.png';
import firebase from '../../Assets/images/firebase.png';
import vercel from '../../Assets/images/vercel.png';
import netlify from '../../Assets/images/netlify.png';
import mongodb from '../../Assets/images/mongdb.png';

const Intro = () => {
    return (
        <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-7'>
                <h2 className='text-sm font-thin tracking-widest text-gray-700'>WELCOME MY WORLD!</h2>
                <h1 className='text-5xl font-[900] pt-5'>Hi, I'm <span className='brand'>A. Al Mahmud</span></h1>
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
                <p className='pt-5 text-justify text-gray-500'>
                I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.
                </p>
                <div className='mt-4'>
                    <h3 className='text-xl'>Best Skill On</h3>
                    <div className='grid grid-cols-12 mt-3'>
                        <div className='p-2 col-span-1 drop-shadow-2xl h-12 w-12 rounded hover:-translate-y-2 duration-500'>
                            <img src={html} alt="html 5" />
                        </div>
                        <div className='p-2 col-span-1 drop-shadow-2xl h-12 w-12 rounded hover:-translate-y-2 duration-500'>
                            <img src={css} alt="css 3" />
                        </div>
                        <div className='p-2 col-span-1 drop-shadow-2xl h-12 w-12 rounded hover:-translate-y-2 duration-500'>
                            <img src={bootstrap} alt="bootstrap" />
                        </div>
                        <div className='p-2 col-span-1 drop-shadow-2xl h-12 w-12 rounded hover:-translate-y-2 duration-500'>
                            <img src={tailwindcss} alt="tailwind css" />
                        </div>
                        <div className='p-2 col-span-1 drop-shadow-2xl h-12 w-12 rounded hover:-translate-y-2 duration-500'>
                            <img src={javascript} alt="java script" />
                        </div>
                        <div className='p-2 col-span-1 drop-shadow-2xl h-12 w-12 rounded hover:-translate-y-2 duration-500'>
                            <img src={reacts} alt="React" />
                        </div>
                        <div className='p-2 col-span-1 drop-shadow-2xl h-12 w-12 rounded hover:-translate-y-2 duration-500'>
                            <img src={express} alt="Express JS" />
                        </div>
                        <div className='p-2 col-span-1 drop-shadow-2xl h-12 w-12 rounded hover:-translate-y-2 duration-500'>
                            <img src={node} alt="Node Js" />
                        </div>
                        <div className='p-2 col-span-1 drop-shadow-2xl h-12 w-12 rounded hover:-translate-y-2 duration-500'>
                            <img src={vercel} alt="Vercel" />
                        </div>
                        <div className='p-2 col-span-1 drop-shadow-2xl h-12 w-12 rounded hover:-translate-y-2 duration-500'>
                            <img src={mongodb} alt="Mongo DB" />
                        </div>
                        <div className='p-2 col-span-1 drop-shadow-2xl h-12 w-12 rounded hover:-translate-y-2 duration-500'>
                            <img src={firebase} alt="firebase" />
                        </div>
                        <div className='p-2 col-span-1 drop-shadow-2xl h-12 w-12 rounded hover:-translate-y-2 duration-500'>
                            <img src={netlify} alt="netlify" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-5 bg-pink-500'>grid 2</div>
        </div>
    );
};

export default Intro;