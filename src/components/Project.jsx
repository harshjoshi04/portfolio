import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import Contect from "./Contect";

export default function Project() {
  return (
    <div className="h-[100vh] " id="project">
      <p className="text-5xl text-[#64686D] pl-[10vw] py-8" id="abouttitle3">
        <span id="headerTitle3" className="font-boldF">
          Pro<span className="text-[#FF6046]">ject</span>
        </span>
      </p>
      <div className="max-w-7xl flex-col pt-8 items-center md:space-y-10 mx-auto">
        <div className="flex flex-col md:space-x-8  px-6 py-4  md:flex-row">
          <div id="image1">
            <img
              src="https://ez-snippet.vercel.app/_next/image?url=%2Fprojects%2Famazon-clone.jpeg&w=750&q=75"
              alt=""
              className="outline-2 border-1 p-2 shadow-md"
              width={650}
            />
          </div>
          <div className="font-special2 md:pl-9 px-2 flex-col space-y-3 pt-6">
            <p
              className="text-2xl font-semibold text-[#606467]"
              id="description1"
            >
              E-commerce
            </p>
            <div className="max-w-md">
              <p
                className="tracking-normal first-letter:pl-4"
                id="description1"
              >
                Designed and developed a f ull-stack e-commerce website from
                scratch using the MERN stack. Str ipe.js was integrated for
                secure payment processing, allowing users to make purchases eff
                iciently and securely
              </p>
            </div>
            <div className="flex-col space-y-2">
              <div className="flex space-x-3 items-center" id="description1">
                <MdKeyboardArrowRight color="#FF6046" size={20} />
                <p>
                  FrontEnd As React/Next js,Redux,Tailwind CSS,React Icons,Next
                  UI
                </p>
              </div>
              <div className="flex space-x-3 items-center" id="description1">
                <MdKeyboardArrowRight color="#FF6046" size={20} />
                <p>BackEnd As Node/Express js,MongoDb,REST Api</p>
              </div>
              <div className="flex space-x-3 items-center" id="description1">
                <MdKeyboardArrowRight color="#FF6046" size={20} />
                <p>extra technology for Payment GetWay Stripe.Js</p>
              </div>
            </div>
            <a
              className="py-2 text-xl font-medium flex space-x-4 items-center cursor-pointer"
              id="description1"
              href="https://github.com/harshjoshi04/E-commerce"
            >
              <p>VISIT WEBSITE</p>
              <FiGithub />
            </a>
          </div>
        </div>
        <div className="flex  flex-col-reverse md:flex-row md:space-x-8  px-6 py-4">
          <div className="font-special2 md:pl-9 px-2 flex-col space-y-3 py-6">
            <p
              className="text-2xl font-semibold text-[#606467]"
              id="description2"
            >
              Real-time Chat Application
            </p>
            <div className="max-w-xl">
              <p
                className="tracking-normal first-letter:pl-4"
                id="description2"
              >
                Developed a real-time chat application using the MERN stack and
                WebSocket technology to facilitate instant messaging and
                collaboration between users. Designed and implemented a
                responsive and user-fr iendly chat interface with React/Nex t
                Js, prov iding a seamless chatting exper ience for users across
                dev ices. Utilized WebSocket technology to enable real-time
                communication, resulting in low-latency message deliver y and
                improved user engagement.
              </p>
            </div>
            <div className="flex-col space-y-2">
              <div className="flex space-x-3 items-center" id="description2">
                <MdKeyboardArrowRight color="#FF6046" size={20} />
                <p>
                  FrontEnd As React/Next js,Redux,Tailwind CSS,React Icons
                  etc...
                </p>
              </div>
              <div className="flex space-x-3 items-center" id="description2">
                <MdKeyboardArrowRight color="#FF6046" size={20} />
                <p>BackEnd As Node/Express js,MongoDb,JWT,REST Api</p>
              </div>
              <div className="flex space-x-3 items-center" id="description2">
                <MdKeyboardArrowRight color="#FF6046" size={20} />
                <p>extra technology for Messgare Transfer Socket.Io</p>
              </div>
            </div>
            <a
              className="py-2 text-xl font-medium flex space-x-4 items-center cursor-pointer"
              id="description2"
              href="https://github.com/harshjoshi04/Chat-application"
            >
              <p>VISIT WEBSITE</p>
              <FiGithub />
            </a>
          </div>
          <div id="image2">
            <img
              src="https://blog.hubspot.com/hubfs/live%20chat-1.jpg"
              alt=""
              className="outline-2 border-1 p-2 shadow-md"
              width={650}
            />
          </div>
        </div>
        <div className="flex  flex-col md:flex-row  md:space-x-8 px-6 py-4">
          <div id="image3">
            <img
              src="https://www.kapturecrm.com/blog/wp-content/uploads/2016/11/How-Smart-Inventory-Management-System-Lets-You-Stay-On-Top-Of-Your-Business.jpg"
              alt=""
              className="outline-2 border-1 p-2 shadow-md"
              width={650}
            />
          </div>
          <div className="font-special2 md:pl-9 px-2 flex-col space-y-3 py-6 ">
            <p
              className="text-2xl font-semibold text-[#606467]"
              id="description3"
            >
              Stock Management System
            </p>
            <div className="max-w-md">
              <p
                className="tracking-normal first-letter:pl-4"
                id="description3"
              >
                Developed a comprehensive stock management system for a retail
                company using Nex t.js 13 as the frontend framework and MongoDB
                as the backend database. The system allowed the company to eff
                iciently track inventor y, manage stock levels, and generate
                real-time reports. Implemented user authentication and author
                ization for secure access and integrated intuitive UI components
                for a seamless user exper ience.
              </p>
            </div>
            <div className="flex-col space-y-2">
              <div className="flex space-x-3 items-center" id="description3">
                <MdKeyboardArrowRight color="#FF6046" size={20} />
                <p>
                  FrontEnd As React/Next js,Typescript,Tailwind CSS,MUI Icons
                </p>
              </div>
              <div className="flex space-x-3 items-center" id="description3">
                <MdKeyboardArrowRight color="#FF6046" size={20} />
                <p>BackEnd As Nextjs 13 with MongoDb</p>
              </div>
            </div>
            <a
              className="py-2 text-xl font-medium flex space-x-4 items-center cursor-pointer"
              id="description3"
              href="https://github.com/harshjoshi04/Stock-manage"
            >
              <p>VISIT WEBSITE</p>
              <FiGithub />
            </a>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row  md:space-x-8  px-6 py-4">
          <div className="font-special2 md:pl-9 px-2 flex-col space-y-3 py-6">
            <p
              className="text-2xl font-semibold text-[#606467]"
              id="description4"
            >
              Youtube Clone
            </p>
            <div className="max-w-xl">
              <p
                className="tracking-normal first-letter:pl-4"
                id="description4"
              >
                Developed a YouTube clone using the MERN stack, including
                MongoDB, Express.js, React.js, and Node.js. Implemented features
                such as video uploading, user authentication, and a comment
                section. Demonstrated proficiency in web development
                technologies and showcased ability to work with full-stack
                frameworks.
              </p>
            </div>
            <div className="flex-col space-y-2">
              <div className="flex space-x-3 items-center" id="description4">
                <MdKeyboardArrowRight color="#FF6046" size={20} />
                <p>
                  FrontEnd As React/Next js,Redux,Tailwind CSS,Video-react,Next
                  Ui etc...
                </p>
              </div>
              <div className="flex space-x-3 items-center" id="description4">
                <MdKeyboardArrowRight color="#FF6046" size={20} />
                <p>
                  BackEnd As Node/Express js,MongoDb,JWT,REST Api,Cloudinary
                </p>
              </div>
              <div className="flex space-x-3 items-center" id="description4">
                <MdKeyboardArrowRight color="#FF6046" size={20} />
                <p>
                  extra technology for video store cloudinary and for video play
                  video-raect
                </p>
              </div>
            </div>
            <a
              className="py-2 text-xl font-medium flex space-x-4 items-center cursor-pointer"
              id="description4"
              href="https://github.com/harshjoshi04/youtube-clone"
            >
              <p>VISIT WEBSITE</p>
              <FiGithub />
            </a>
          </div>
          <div id="image4">
            <img
              src="https://i.ytimg.com/vi/rhPSo4_Tgi0/maxresdefault.jpg"
              alt=""
              className="outline-2 border-1 p-2 shadow-md"
              width={650}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <a
          className="group uppercase md:my-6 mb-6 px-6 py-2 border-2 rounded-full font-special2 text-xl font-semibold text-[#FF6046] border-[#FF6046] tracking-wide flex space-x-3 items-center"
          id="project-btn"
          href="https://github.com/harshjoshi04"
        >
          <span>more project</span>
          <GoArrowRight className="transition-all group-hover:translate-x-2" />
        </a>
      </div>
      <section>
        <Contect />
      </section>
    </div>
  );
}
