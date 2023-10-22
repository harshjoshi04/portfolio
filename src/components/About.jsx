"use client";

import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  SimpleGrid,
  Box,
  Tooltip,
} from "@chakra-ui/react";

import Project from "./Project";
import Contect from "./Contect";

const frontEnd = [
  {
    id: 1,
    title: "HTML",
    image: "/html.png",
  },
  {
    id: 2,
    title: "CSS",
    image: "/css.png",
  },
  {
    id: 3,
    title: "Javascript",
    image: "/js.png",
  },
  {
    id: 4,
    title: "Typescript",
    image: "/typescript.png",
  },
  {
    id: 5,
    title: "Bootstrap",
    image: "/boot.png",
  },
  {
    id: 6,
    title: "Tailwind CSS",
    image: "/tailwind.png",
  },
  {
    id: 7,
    title: "React Js",
    image: "/react.png",
  },
  {
    id: 8,
    title: "Next Js",
    image: "/nextui.png",
  },
  {
    id: 9,
    title: "Redux",
    image: "/redux.png",
  },
  {
    id: 10,
    title: "Chakra Ui",
    image: "/chakra.png",
  },
];

const BackEnd = [
  {
    id: 11,
    title: "C & C++",
    image: "/c.png",
  },
  {
    id: 12,
    title: "Python",
    image: "/python.png",
  },
  {
    id: 13,
    title: "PHP",
    image: "/php.png",
  },
  {
    id: 14,
    title: "Node Js",
    image: "/nodejs.png",
  },
  {
    id: 15,
    title: "Express Js",
    image: "/ex.png",
  },
  {
    id: 16,
    title: "MongoDb",
    image: "/mogno.png",
  },
  {
    id: 17,
    title: "Mysql",
    image: "/mysql.png",
  },
  {
    id: 18,
    title: "Socket Io",
    image: "/socket.png",
  },
  {
    id: 19,
    title: "JWT Token",
    image: "/jwt.png",
  },
];

const DevOps = [
  {
    id: 20,
    title: "Linux",
    image: "/linux.png",
  },
  {
    id: 21,
    title: "Git",
    image: "/git.png",
  },
  {
    id: 22,
    title: "Postman",
    image: "/postman.png",
  },
  {
    id: 23,
    title: "NPM",
    image: "/npm.png",
  },
  {
    id: 24,
    title: "yarn",
    image: "/yarn.png",
  },
];
export default function About() {
  const [option, setoption] = useState(0);

  return (
    <div className="h-[100vh] about">
      <div className="max-w-7xl flex-col items-center mx-auto">
        <p className="text-5xl text-[#64686D] pl-[10vw] py-16" id="abouttitle">
          <span id="headerTitle">
            About <span className="text-[#FF6046]">Me</span>
          </span>
        </p>
        <div className="sm:flex px-4">
          <div>
            <img src="/coffe.png" alt="" width={350} height={350} id="image" />
          </div>
          <div className="flex-col justify-evenly space-y-5 py-4 md:py-16 font-boldF text-[#64686D]">
            <div className="max-w-3xl " id="about-content">
              I am Harsh Joshi, a passionate and results-driven MERN stack
              developer with a deep love for building web applications. With a
              strong foundation in MongoDB, Express.js, React, and Node.js, I
              thrive in crafting robust and interactive digital experiences. My
              journey in the world of web development began with a curiosity to
              bridge the gap between creativity and technology.
            </div>
            <div className="flex space-x-9">
              <button
                className="uppercase flex  items-center space-x-3 px-6 rounded-full py-2 bg-[#FF6046] text-white "
                id="about-content"
              >
                <span>Contact now </span>
                <AiOutlineArrowRight />
              </button>
              <a
                href="/cv.pdf"
                className="uppercase flex  items-center space-x-3 px-6 rounded-full py-2 bg-[#46CB5E] text-white"
                id="about-content"
                download
              >
                <span>DONWLOAD CV </span>
                <MdKeyboardDoubleArrowDown />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl flex-col items-center mx-auto">
        <p className="text-5xl text-[#64686D] pl-[10vw] py-16" id="abouttitle2">
          <span id="headerTitle2">
            Ski<span className="text-[#FF6046]">lls</span>
          </span>
        </p>
        <div className="px-4 mb-6">
          <Tabs
            isFitted={true}
            variant="enclosed"
            className="max-w-5xl mx-auto pb-16 text-xl font-boldF font-medium text-[#64686D]"
            onChange={(index) => {
              setoption(index);
            }}
          >
            <TabList
              mb="1em"
              className="flex justify-between text-2xl  "
              id="skills"
            >
              <Tab>
                <span
                  className={`transition-all ${
                    option == 0 && "text-[#FF6046]"
                  }`}
                >
                  Front
                </span>
                End
              </Tab>
              <Tab>
                <span
                  className={`transition-all ${
                    option == 1 && "text-[#FF6046]"
                  }`}
                >
                  Back
                </span>
                End
              </Tab>
              <Tab>
                <span
                  className={`transition-all ${
                    option == 2 && "text-[#FF6046]"
                  }`}
                >
                  Dev
                </span>
                Ops
              </Tab>
            </TabList>
            <TabPanels className="py-4 ">
              <TabPanel>
                <SimpleGrid
                  minChildWidth="120px"
                  spacing="40px"
                  alignItems="center"
                  className="my-6 sm:pl-0 pl-8"
                >
                  {frontEnd.map(({ title, image, id }) => {
                    return (
                      <>
                        <Box key={id} id="lan">
                          <Tooltip label={title}>
                            <img
                              src={image}
                              width={90}
                              height={90}
                              className="transition-all hover:scale-105"
                            />
                          </Tooltip>
                        </Box>
                      </>
                    );
                  })}
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <SimpleGrid
                  minChildWidth="120px"
                  spacing="40px"
                  className="my-6 sm:pl-0 pl-8"
                >
                  {BackEnd.map(({ title, image, id }) => {
                    return (
                      <>
                        <Box key={id} id="lan">
                          <Tooltip label={title}>
                            <img
                              src={image}
                              width={90}
                              height={90}
                              className="transition-all hover:scale-105"
                            />
                          </Tooltip>
                        </Box>
                      </>
                    );
                  })}
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <SimpleGrid
                  minChildWidth="120px"
                  spacing="40px"
                  className="my-6 sm:pl-0 pl-8"
                >
                  {DevOps.map(({ title, image, id }) => {
                    return (
                      <>
                        <Box key={id} id="lan">
                          <Tooltip label={title}>
                            <img
                              src={image}
                              width={90}
                              height={90}
                              className="transition-all hover:scale-105"
                            />
                          </Tooltip>
                        </Box>
                      </>
                    );
                  })}
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
        <section id="projectSection">
          <Project />
        </section>
      </div>
    </div>
  );
}
