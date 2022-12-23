import React from 'react';
import { FiTv } from "react-icons/fi";
import { BsPhone } from "react-icons/bs";
import { GrDocumentText, GrDatabase } from "react-icons/gr";
import { SiMaterialdesignicons } from "react-icons/si";
import { VscDebug } from "react-icons/vsc";

const Features = () => {
    return (
        <div className='mt-16 ff-brand'>
            <h3 className='tracking-widest brand'>FEATURES</h3>
            <h1 className='text-6xl font-[800] pt-5'>What I Do_</h1>
            <div className="grid grid-cols-12 gap-4 my-16">
                <div className="col-span-4 glass shadow-2xl border rounded-2xl p-8 hover:-translate-y-2 duration-500 hover:bg-pink-500 hover:text-white">
                    <GrDocumentText className='text-5xl'></GrDocumentText>
                    <h2 className='text-xl pt-4'>Project Documentation</h2>
                    <p className='pt-3'>throw myself down among the tall grass by the stream as Ilie close to the earth.</p>
                </div>
                <div className="col-span-4 glass shadow-2xl border rounded-2xl p-8 hover:-translate-y-2 duration-500 hover:bg-pink-500 hover:text-white">
                    <SiMaterialdesignicons className='text-5xl'></SiMaterialdesignicons>
                    <h2 className='text-xl pt-4'>Ui/Ux Design</h2>
                    <p className='pt-3'>throw myself down among the tall grass by the stream as Ilie close to the earth.</p>
                </div>
                <div className="col-span-4 glass shadow-2xl border rounded-2xl p-8 hover:-translate-y-2 duration-500 hover:bg-pink-500 hover:text-white">
                    <FiTv className='text-5xl'></FiTv>
                    <h2 className='text-xl pt-4'>Frontend Develop</h2>
                    <p className='pt-3'>throw myself down among the tall grass by the stream as Ilie close to the earth.</p>
                </div>
                <div className="col-span-4 glass shadow-2xl border rounded-2xl p-8 hover:-translate-y-2 duration-500 hover:bg-pink-500 hover:text-white">
                    <BsPhone className='text-5xl'></BsPhone>
                    <h2 className='text-xl pt-4'>User Authentication</h2>
                    <p className='pt-3'>throw myself down among the tall grass by the stream as Ilie close to the earth.</p>
                </div>
                <div className="col-span-4 glass shadow-2xl border rounded-2xl p-8 hover:-translate-y-2 duration-500 hover:bg-pink-500 hover:text-white">
                    <GrDatabase className='text-5xl'></GrDatabase>
                    <h2 className='text-xl pt-4'>Backend Development</h2>
                    <p className='pt-3'>throw myself down among the tall grass by the stream as Ilie close to the earth.</p>
                </div>
                <div className="col-span-4 shadow-2xl border rounded-2xl p-8 hover:-translate-y-2 duration-500 hover:bg-pink-500 hover:text-white">
                    <VscDebug className='text-5xl'></VscDebug>
                    <h2 className='text-xl pt-4'>Debug & Finalize</h2>
                    <p className='pt-3'>throw myself down among the tall grass by the stream as Ilie close to the earth.</p>
                </div>
            </div>
        </div>
    );
};

export default Features;