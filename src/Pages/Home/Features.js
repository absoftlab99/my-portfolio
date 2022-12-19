import React from 'react';
import { FiBookOpen, FiMenu, FiTv } from "react-icons/fi";
import { BsBox, BsPhone } from "react-icons/bs";
import { ImStack } from "react-icons/im";

const Features = () => {
    return (
        <div className='mt-16 ff-brand'>
            <h3 className='text-xl tracking-widest brand'>FEATURES</h3>
            <h1 className='text-6xl font-[800]'>What I Do_</h1>
            <div className="grid grid-cols-12 gap-4 my-16">
                <div className="col-span-4 shadow-2xl border rounded-2xl p-8 hover:-translate-y-2 duration-500 hover:bg-pink-500 hover:text-white">
                    <FiMenu className='text-5xl'></FiMenu>
                    <h2 className='text-xl pt-4'>Business Stratagy</h2>
                    <p className='pt-3'>throw myself down among the tall grass by the stream as Ilie close to the earth.</p>
                </div>
                <div className="col-span-4 shadow-2xl border rounded-2xl p-8 hover:-translate-y-2 duration-500 hover:bg-pink-500 hover:text-white">
                    <FiBookOpen className='text-5xl'></FiBookOpen>
                    <h2 className='text-xl pt-4'>App Development</h2>
                    <p className='pt-3'>throw myself down among the tall grass by the stream as Ilie close to the earth.</p>
                </div>
                <div className="col-span-4 shadow-2xl border rounded-2xl p-8 hover:-translate-y-2 duration-500 hover:bg-pink-500 hover:text-white">
                    <FiTv className='text-5xl'></FiTv>
                    <h2 className='text-xl pt-4'>Business Stratagy</h2>
                    <p className='pt-3'>throw myself down among the tall grass by the stream as Ilie close to the earth.</p>
                </div>
                <div className="col-span-4 shadow-2xl border rounded-2xl p-8 hover:-translate-y-2 duration-500 hover:bg-pink-500 hover:text-white">
                    <BsPhone className='text-5xl'></BsPhone>
                    <h2 className='text-xl pt-4'>Mobile Apps</h2>
                    <p className='pt-3'>throw myself down among the tall grass by the stream as Ilie close to the earth.</p>
                </div>
                <div className="col-span-4 shadow-2xl border rounded-2xl p-8 hover:-translate-y-2 duration-500 hover:bg-pink-500 hover:text-white">
                    <ImStack className='text-5xl'></ImStack>
                    <h2 className='text-xl pt-4'>SEO Optimization</h2>
                    <p className='pt-3'>throw myself down among the tall grass by the stream as Ilie close to the earth.</p>
                </div>
                <div className="col-span-4 shadow-2xl border rounded-2xl p-8 hover:-translate-y-2 duration-500 hover:bg-pink-500 hover:text-white">
                    <BsBox className='text-5xl'></BsBox>
                    <h2 className='text-xl pt-4'>Ux Consulting</h2>
                    <p className='pt-3'>throw myself down among the tall grass by the stream as Ilie close to the earth.</p>
                </div>
            </div>
        </div>
    );
};

export default Features;