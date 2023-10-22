"use clinet";
import React from "react";
import { FiHome } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { MdOutlineAlternateEmail, MdOutlineContacts } from "react-icons/md";
import { useForm } from "react-hook-form";
import { SendMessageApi } from "@/helper/SendMessgae";
import toast from "react-hot-toast";

export default function Contect() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onHandleSubmit = async (event) => {
    toast.promise(SendMessageApi(event), {
      loading: "Loading",
      success: "ThankYou For ContactUs !",
      error: "Something Worng Sorry !",
    });
    reset();
  };
  return (
    <div className="h-[50vh]">
      <div
        className="max-w-6xl  flex-col pt-8 items-center md:space-y-10 mx-auto  border shadow py-2 "
        id="contact"
      >
        <div className="flex flex-col md:flex-row md:space-x-4 gap-2 justify-around">
          <div className="grid justify-items-center space-y-2" id="icons">
            <FiHome size={30} color="#FF6046" />
            <p className="font-special2 uppercase text-xl font-medium text-[#606467]">
              Subhashnagar,Bhavnagar Gurjat,India
            </p>
          </div>
          <div className="grid justify-items-center space-y-2" id="icons">
            <MdOutlineContacts size={30} color="#46CB5E" />
            <p className="font-special2 uppercase text-xl font-medium text-[#606467]">
              7043832256
            </p>
          </div>
          <div className="grid justify-items-center space-y-2" id="icons">
            <MdOutlineAlternateEmail size={30} color="#FF6046" />
            <p className="font-special2 uppercase text-xl font-medium text-[#606467]">
              hj201812@gmail.com
            </p>
          </div>
        </div>
        <form
          className="flex-col md:px-[6.5rem] p-4"
          onSubmit={handleSubmit(onHandleSubmit)}
        >
          <div className="flex flex-col  md:flex-row  md:space-x-3 gap-2">
            <div className="flex flex-col  space-y-4">
              <div className="">
                <input
                  type="text"
                  className="border-[1px] text-[#838589] font-special2 text-xl font-semibold border-[#FF6046] border-opacity-80 px-6 py-2 placeholder:opacity-80  placeholder:uppercase placeholder:text-[#62656A]  placeholder:font-special2  placeholder:font-semibold  placeholder:tracking-wider placeholder:text-xl outline-none"
                  placeholder="your name "
                  size={25}
                  {...register("name", { required: true })}
                />
              </div>
              <div>
                <input
                  type="text"
                  className="border-[1px] font-special2 text-[#838589] text-xl font-semibold border-[#46CB5E] border-opacity-80 px-6 py-2 placeholder:opacity-80  placeholder:uppercase placeholder:text-[#62656A]  placeholder:font-special2 placeholder:font-semibold  placeholder:tracking-wider  placeholder:text-xl outline-none"
                  placeholder="your email "
                  size={25}
                  {...register("email", { required: true })}
                />
              </div>
              <div>
                <input
                  type="text"
                  className="border-[1px] font-special2 text-[#838589] text-xl font-semibold border-[#FF6046] border-opacity-80 px-6 py-2 placeholder:opacity-80  placeholder:uppercase placeholder:text-[#62656A]  placeholder:font-special2 placeholder:font-semibold  placeholder:tracking-wider  placeholder:text-xl outline-none"
                  placeholder="your project "
                  size={25}
                  {...register("project", { required: true })}
                />
              </div>
            </div>
            <div>
              <textarea
                className="border-[1px] max-w-xs md:max-w-full text-[#838589] font-special2 text-xl font-semibold border-[#46CB5E] border-opacity-80 px-6 py-[0.9rem] placeholder:opacity-80  placeholder:uppercase placeholder:text-[#62656A]  placeholder:font-special2  placeholder:font-semibold  placeholder:tracking-wider placeholder:text-xl outline-none"
                cols={62}
                rows={5.6}
                placeholder="project descripation"
                {...register("description", { required: true })}
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center py-4">
            <button className="group px-6 py-2 bg-[#FF6046] font-special2 text-xl font-medium rounded-full tracking-wider  uppercase text-white flex items-center space-x-2">
              <span>Send Message</span>
              <GoArrowRight className="transition-all group-hover:translate-x-2" />
            </button>
          </div>
        </form>
      </div>
      <div className="max-w-6xl mx-auto mt-6 pb-10 flex flex-col items-center justify-around md:flex-row gap-3">
        <a
          target="_blank"
          href="https://www.instagram.com/joshi_harsh_04/"
          className="border uppercase shadow-md px-6 py-2 flex items-center space-x-4 font-special2 font-medium text-[#838589] text-xl cursor-pointer"
          id="icons"
        >
          <BsInstagram size={25} className="text-pink-600" />
          <p>@joshi_harsh_04</p>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/harsh-joshi-93a619289"
          className="border uppercase shadow-md px-6 py-2 flex items-center space-x-4 font-special2 font-medium text-[#838589] text-xl cursor-pointer"
          id="icons"
        >
          <BiLogoLinkedin size={25} className="text-blue-600" />
          <p>@Harsh Joshi</p>
        </a>
        <a
          target="_blank"
          href="https://twitter.com/harsh_joshi_04"
          className="border uppercase shadow-md px-6 py-2 flex items-center space-x-4 font-special2 font-medium text-[#838589] text-xl cursor-pointer"
          id="icons"
        >
          <RiTwitterXFill size={25} className="text-black" />
          <p>@Harsh_Joshi_04</p>
        </a>
      </div>
    </div>
  );
}
