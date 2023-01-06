import React from "react";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import contact from "../../Assets/images/contact.png";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data);
    const messageData = {
      userName: data.fullName,
      userEmail: data.userEmail,
      userPhone: data.userPhone,
      messageSubject: data.messageSubject,
      userMessage: data.userMessage,
    };
    console.log(messageData);
    fetch("http://localhost:5000/message", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(messageData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          reset();
          toast.success("Message Send Successful!");
        }
      });
  };
  return (
    <div>
      <div className="text-center">
        <h3 className="tracking-widest brand">Contact</h3>
        <h1 className="text-2xl md:text-6xl font-[800] pt-5">
          Contact With Me_
        </h1>
      </div>
      {/* contact form */}
      <div className="grid grid-cols-12 gap-4 my-10">
        <div className="col-span-12 md:col-span-4 border rounded-lg shadow-2xl">
          <div className="p-5">
            <img className="rounded-lg" src={contact} alt="" />
          </div>
          <div className="px-5">
            <h2 className="text-2xl">Abdullah Al Mahmud</h2>
            <h4 className="text-lg text-gray-400">MERN Stack Developer</h4>
            <p className="text-md my-4">
              I am available for freelance work. Connect with me via and call in
              to my account.
            </p>
            <p>
              Phone:{" "}
              <a
                className="hover:text-pink-600 hover:underline"
                href="tel:+8801798930232"
              >
                +880 1798-930232
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                className="hover:text-pink-600 hover:underline"
                href="mailto:mahmud.live1@gmail.com"
              >
                mahmud.live1@gmail.com
              </a>
            </p>
          </div>
          <div className="px-5 my-3">
            <p className="text-lg font-bold">FIND WITH ME</p>
            <div className="mt-3 grid grid-cols-6">
              <div className="p-2 border border-gray-700 col-span-1 shadow-2xl h-12 w-12 rounded hover:-translate-y-2 duration-500 hover:bg-pink-600 hover:text-white hover:border-gray-50">
                <a
                  className=""
                  target="blank"
                  href="https://facebook.com/absoftlab"
                >
                  <FiFacebook className="text-3xl"></FiFacebook>
                </a>
              </div>
              <div className="p-2 border border-gray-700 col-span-1 shadow-2xl h-12 w-12 rounded hover:-translate-y-2 duration-500 hover:bg-pink-600 hover:text-white hover:border-gray-50">
                <a
                  className=""
                  target="blank"
                  href="https://www.linkedin.com/in/absoftlab11"
                >
                  <FiLinkedin className="text-3xl"></FiLinkedin>
                </a>
              </div>
              <div className="p-2 border border-gray-700 col-span-1 shadow-2xl h-12 w-12 rounded hover:-translate-y-2 duration-500 hover:bg-pink-600 hover:text-white hover:border-gray-50">
                <a
                  className=""
                  target="blank"
                  href="https://www.instagram.com/absoftlab/"
                >
                  <FiInstagram className="text-3xl"></FiInstagram>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8 border rounded-lg shadow-2xl bg-gradient-to-tl from-gray-50 via-slate-200 to-slate-300">
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="md:flex pt-5 md:px-10 px-4 gap-4">
              <div className="form-control md:w-[50%]">
                <label className="label">
                  <span className="label-text">YOUR NAME</span>
                </label>
                <input
                  {...register("fullName", {
                    required: "Name is required",
                  })}
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                />
              </div>
              <div className="form-control md:w-[50%]">
                <label className="label">
                  <span className="label-text">PHONE NUMBER</span>
                </label>
                <input
                  {...register("userPhone")}
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="md:px-10 px-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">EMAIL</span>
                </label>
                <input
                  {...register("userEmail")}
                  type="email"
                  placeholder=""
                  className="input input-bordered"
                />
                {errors.userEmail && (
                  <p className="text-red-500">{errors.userEmail?.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">SUBJECT</span>
                </label>
                <input
                  {...register("messageSubject")}
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">YOUR MESSAGE</span>
                </label>
                <textarea
                  {...register("userMessage")}
                  className="textarea input-bordered h-40"
                  placeholder="Type your message here!"
                ></textarea>
              </div>
            </div>
            {/* <p>{errors ? errors : ""}</p> */}
            <div className="md:px-10 px-4 mt-5">
              <button
                onSubmit={register}
                className="btn bg-gradient-to-l from-slate-50 to-slate-300 w-[100%] text-black shadow-2xl"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
