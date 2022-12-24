import React from 'react';
import { TbBrandFirebase } from "react-icons/tb";
import { VscDebug } from "react-icons/vsc";
import { FaFigma, FaLaravel, FaReact, FaRegFileWord } from "react-icons/fa";

const Features = () => {
    return (
        <div className='mt-16 ff-brand'>
            <div className='text-center'>
                <h3 className='tracking-widest brand'>MY WORK FLOW</h3>
                <h1 className='text-6xl font-[800] pt-5'>What I Do_</h1>
            </div>
            <div className="grid grid-cols-12 gap-4 my-16">
                <div className="col-span-4 shadow-2xl border rounded-2xl p-8 hover:-translate-y-2 duration-500 hover:bg-pink-500 hover:text-white">
                    <FaRegFileWord className='text-5xl'></FaRegFileWord>
                    <h2 className='text-xl pt-4'>Project Documentation</h2>
                    <p className='pt-3'>First I understand the overview of the whole project and create the documentation.</p>
                </div>
                <div className="col-span-4 shadow-2xl border rounded-2xl p-8 hover:-translate-y-2 duration-500 hover:bg-pink-500 hover:text-white">
                    <FaFigma className='text-5xl'></FaFigma>
                    <h2 className='text-xl pt-4'>Ui/Ux Design</h2>
                    <p className='pt-3'>After that I create the user interface and user experience according to the documentation.</p>
                </div>
                <div className="col-span-4 shadow-2xl border rounded-2xl p-8 hover:-translate-y-2 duration-500 hover:bg-pink-500 hover:text-white">
                    <FaReact className='text-5xl'></FaReact>
                    <h2 className='text-xl pt-4'>Frontend Develop</h2>
                    <p className='pt-3'>Then I develop the frontend by following the user interface with React.</p>
                </div>
                <div className="col-span-4 shadow-2xl border rounded-2xl p-8 hover:-translate-y-2 duration-500 hover:bg-pink-500 hover:text-white">
                    <TbBrandFirebase className='text-5xl'></TbBrandFirebase>
                    <h2 className='text-xl pt-4'>User Authentication</h2>
                    <p className='pt-3'>Then (if necessary) I create a user authentication system using Google Firebase.</p>
                </div>
                <div className="col-span-4 shadow-2xl border rounded-2xl p-8 hover:-translate-y-2 duration-500 hover:bg-pink-500 hover:text-white">
                    <FaLaravel className='text-5xl'></FaLaravel>
                    <h2 className='text-xl pt-4'>Backend Development</h2>
                    <p className='pt-3'>Once the design and authentication are complete, I develop the web app with Laravel or NoteJS and MongoDB</p>
                </div>
                <div className="col-span-4 shadow-2xl border rounded-2xl p-8 hover:-translate-y-2 duration-500 hover:bg-pink-500 hover:text-white">
                    <VscDebug className='text-5xl'></VscDebug>
                    <h2 className='text-xl pt-4'>Debug & Finalize</h2>
                    <p className='pt-3'>If any error or problem is found after testing, then I solve those problems and finalize the web app.</p>
                </div>
            </div>
        </div>
    );
};

export default Features;