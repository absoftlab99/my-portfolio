import React from "react";
import { FiHeart } from "react-icons/fi";
import item1 from "../../Assets/images/portfolio-1.jpg";
import item2 from "../../Assets/images/portfolio-2.jpg";
import item3 from "../../Assets/images/portfolio-3.jpg";
import item4 from "../../Assets/images/portfolio-4.jpg";
import item5 from "../../Assets/images/portfolio-5.jpg";
import item6 from "../../Assets/images/portfolio-6.jpg";

const Portfolio = () => {
  return (
    <div>
      <div className="text-center">
        <h3 className="tracking-widest brand">
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </h3>
        <h1 className="text-2xl md:text-6xl font-[800] pt-5">My Portfolio_</h1>
      </div>
      <div className="grid grid-cols-12 gap-4 my-8">
        <div className="col-span-12 md:col-span-4">
          <div className="card glass p-6 shadow-2xl hover:shadow-slate-800 hover:-translate-y-3 duration-500">
            <figure className="rounded-2xl">
              <img
                className="hover:scale-110 duration-500"
                src={item1}
                alt="Mobile Apps"
              />
            </figure>
            <div className="">
              <div className="flex justify-between mt-3">
                <p className="brand text-sm">GALLERY</p>
                <p className="flex text-sm">
                  <FiHeart className="mr-2 mt-1"></FiHeart> 254
                </p>
              </div>
              <h3 className="text-xl mt-6">
                NFT Dashboard Application Development.
              </h3>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="card glass p-6 shadow-2xl hover:shadow-slate-800 hover:-translate-y-3 duration-500">
            <figure className="rounded-2xl">
              <img
                className="hover:scale-110 duration-500"
                src={item2}
                alt="Mobile Apps"
              />
            </figure>
            <div className="">
              <div className="flex justify-between mt-3">
                <p className="brand text-sm">GALLERY</p>
                <p className="flex text-sm">
                  <FiHeart className="mr-2 mt-1"></FiHeart> 254
                </p>
              </div>
              <h3 className="text-xl mt-6">
                NFT Dashboard Application Development.
              </h3>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="card glass p-6 shadow-2xl hover:shadow-slate-800 hover:-translate-y-3 duration-500">
            <figure className="rounded-2xl">
              <img
                className="hover:scale-110 duration-500"
                src={item3}
                alt="Mobile Apps"
              />
            </figure>
            <div className="">
              <div className="flex justify-between mt-3">
                <p className="brand text-sm">GALLERY</p>
                <p className="flex text-sm">
                  <FiHeart className="mr-2 mt-1"></FiHeart> 254
                </p>
              </div>
              <h3 className="text-xl mt-6">
                NFT Dashboard Application Development.
              </h3>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="card glass p-6 shadow-2xl hover:shadow-slate-800 hover:-translate-y-3 duration-500">
            <figure className="rounded-2xl">
              <img
                className="hover:scale-110 duration-500"
                src={item4}
                alt="Mobile Apps"
              />
            </figure>
            <div className="">
              <div className="flex justify-between mt-3">
                <p className="brand text-sm">GALLERY</p>
                <p className="flex text-sm">
                  <FiHeart className="mr-2 mt-1"></FiHeart> 254
                </p>
              </div>
              <h3 className="text-xl mt-6">
                NFT Dashboard Application Development.
              </h3>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="card glass p-6 shadow-2xl hover:shadow-slate-800 hover:-translate-y-3 duration-500">
            <figure className="rounded-2xl">
              <img
                className="hover:scale-110 duration-500"
                src={item5}
                alt="Mobile Apps"
              />
            </figure>
            <div className="">
              <div className="flex justify-between mt-3">
                <p className="brand text-sm">GALLERY</p>
                <p className="flex text-sm">
                  <FiHeart className="mr-2 mt-1"></FiHeart> 254
                </p>
              </div>
              <h3 className="text-xl mt-6">
                NFT Dashboard Application Development.
              </h3>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="card glass p-6 shadow-2xl hover:shadow-slate-800 hover:-translate-y-3 duration-500">
            <figure className="rounded-2xl">
              <img
                className="hover:scale-110 duration-500"
                src={item6}
                alt="Mobile Apps"
              />
            </figure>
            <div className="">
              <div className="flex justify-between mt-3">
                <p className="brand text-sm">GALLERY</p>
                <p className="flex text-sm">
                  <FiHeart className="mr-2 mt-1"></FiHeart> 254
                </p>
              </div>
              <h3 className="text-xl mt-6">
                NFT Dashboard Application Development.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
