"use client";
import About from "@/components/About";
import HeroSection from "@/components/HeroSection";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const anim1 = gsap.context(() => {
      let t1 = gsap.timeline();
      let t2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".aboutSection",
          scroll: "body",
        },
      });
      let t3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".projectSection",
          scroll: "body",
        },
      });
      t1.to("#loader #loading", {
        opacity: 1,
        scale: 1.2,
        delay: 0.5,
        duration: 0.6,
        onStart: count,
      });
      t1.to("#loader", {
        top: "-100vh",
        delay: 1,
        duration: 1.5,
      });
      t1.from("#title", {
        opacity: 0,
        y: 40,
      });
      t1.from("#titleJob", {
        opacity: 0,
        y: 40,
      });
      t1.from("#seeMore", {
        scale: 0,
        y: 40,
      });
      t2.from("#abouttitle", {
        opacity: 0,
        duration: 0.5,
        scale: 0,
      });
      t2.from("#image", {
        duration: 0.4,
        opacity: 0,
        y: 20,
      });
      t2.from("#about-content", {
        duration: 0.5,
        opacity: 0,
        y: 20,
        stagger: 0.4,
      });
      t2.from("#abouttitle2", {
        opacity: 0,
        duration: 0.5,
        scale: 0,
      });
      t2.from("#skills", {
        duration: 0.2,
        opacity: 0,
      });
      t2.from("#lan", {
        opacity: 0,
        y: 10,
        duration: 0.2,
        stagger: 0.1,
      });
      t3.from("#abouttitle3", {
        opacity: 0,
        duration: 0.5,
        scale: 0,
      });
      t3.from("#image1", {
        opacity: 0,
        duration: 0.5,
      });
      t3.from("#description1", {
        x: -20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.2,
      });
      t3.from("#image2", {
        opacity: 0,
        duration: 0.5,
      });
      t3.from("#description2", {
        x: -20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.2,
      });
      t3.from("#image3", {
        opacity: 0,
        duration: 0.5,
      });
      t3.from("#description3", {
        x: -20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.2,
      });
      t3.from("#image4", {
        opacity: 0,
        duration: 0.5,
      });
      t3.from("#description4", {
        x: -20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.2,
      });
      t3.from("#project-btn", {
        y: 10,
        opacity: 0,
        duration: 0.4,
      });
      t3.from("#contact", {
        opacity: 0,
      });
      t3.from("#icons", {
        opacity: 0,
        scale: 0.5,
        stagger: 0.2,
      });
    });
    return () => {
      anim1.revert();
    };
  }, []);
  function count() {
    var a = 0;
    setInterval(function () {
      a = a + Math.floor(Math.random() * 20);
      if (a < 100) {
        document.getElementById("loading").innerHTML = a + "%";
      } else {
        a = 100;
        document.getElementById("loading").innerHTML = a + "%";
      }
    }, 150);
  }

  return (
    <div>
      <div className="fixed z-30" id="loader">
        <div className="w-[100vw] h-[100vh] flex justify-center items-center  bg-white">
          <p className="font-semibold text-5xl font-special" id="loading">
            0%
          </p>
        </div>
      </div>
      <section>
        <HeroSection />
      </section>
      <section className="aboutSection ">
        <About />
      </section>
    </div>
  );
}
