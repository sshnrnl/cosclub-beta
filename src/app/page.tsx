"use client";
import Image from "next/image";
import { Caveat_Brush, Caveat } from "next/font/google";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import { Heart } from "lucide-react";
import { initializeParallax } from "../app/script/parallax";
import { useEffect, useRef, useState } from "react";
import { Button } from "./components/button";
import { Slider } from "./components/slider";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Lenis from "@studio-freight/lenis";
// hooks/useLenis.ts

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // specify weights you want to use
  variable: "--font-poppins",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  // weight optional if font has default
});

const caveatBrush = Caveat_Brush({
  weight: "400", // only 400 supported
  subsets: ["latin"],
  variable: "--font-caveat-brush",
  display: "swap",
});

export default function Home() {
  useEffect(() => {
    initializeParallax();
  });

  return (
    <div className="w-[100dvw] h-[100dvh] bg-[url('/assets/cloudy/blue-bg.png')] bg-cover  bg-no-repeat ">
      {/* <audio src="/assets/cloudy/bg.mp3" autoPlay loop></audio> */}

      <div
        data-speedx="0.1"
        data-tx="-50%"
        data-ty="-50%"
        className="parallax max-w-[400px] absolute left-1/2 top-1/2  h-[95dvh] w-[95vw] md:h-[90dvhh] md:w-auto md:aspect-[381/662] "
      >
        <img
          src="/assets/cloudy/main-border.png"
          className="pointer-events-none"
          alt=""
        />
        <div className="absolute left-1/2 top-1/2 -translate-1/2 md:w-[98%] w-[97%] md:h-[98%] h-[97%] bg-white z-0 rounded-3xl"></div>
        <img
          src="/assets/cloudy/main-border.png"
          className="z-[10] absolute w-full h-full top-0 left-0 pointer-events-none"
          alt=""
        />
        <MainComponent />
      </div>
      <div className="fixed h-[100dvh] w-[100dvw] pointer-events-none overflow-hidden">
        <div
          data-speedx="0.12"
          data-tx="-5%"
          data-ty="40%"
          className="parallax absolute bottom-0 left-1/2 z-20 w-[320px] "
        >
          <img src="/assets/cloudy/bottom-cloud.png" alt="" />
        </div>
        <div
          data-speedx="0.15"
          data-tx="-80%"
          data-ty="30%"
          className="parallax absolute bottom-0 left-1/2 z-20 w-[305px]"
        >
          <img src="/assets/cloudy/cosclub-cloud.png" alt="" />
        </div>
        <div
          data-speedx="0.15"
          data-tx="-80%"
          data-ty="-40%"
          className="parallax absolute top-0 left-1/2 z-20 w-[370px]"
        >
          <img src="/assets/cloudy/top-cloud-1.png" alt="" />
        </div>
        <div
          data-speedx="0.25"
          data-tx="-20%"
          data-ty="-40%"
          className="parallax absolute top-0 left-1/2 z-20 w-[390px]"
        >
          <img src="/assets/cloudy/top-cloud-2.png" alt="" />
        </div>
      </div>
    </div>
  );
}
import Scrollbar from "smooth-scrollbar";
function MainComponent() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scrollbar = Scrollbar.init(scrollRef.current, {
      damping: 0.05, // smoothness
      continuousScrolling: true,
    });

    return () => scrollbar.destroy();
  }, []);

  return (
    <div
      ref={scrollRef}
      style={{ position: "absolute" }}
      className="pb-[96px] w-full h-full scroll-smooth overflow-scroll left-0 top-0 z-[2]"
    >
      <div className="w-full aspect-[370/148]  sticky top-0 z-20">
        <img
          className="w-full h-full absolute z-10"
          src="/assets/cloudy/banner-border.png"
          alt=""
        />
        <div className="absolute left-1/2 top-1/2 -translate-1/2 bg-[url('/assets/cloudy/banner.gif')] bg-cover bg-center bg-no-repeat rounded-3xl h-[96%] w-[96%]"></div>
        <div className="relative left-1/2 top-[100%] -translate-1/2  w-[96px] h-[96px] z-20 ">
          <img
            className="absolute w-full h-full z-10"
            src="/assets/cloudy/profile-border.png"
            alt=""
          />
          <img
            className="absolute left-1/2 top-1/2 -translate-1/2 w-[95%] aspect-square z-0"
            src="/assets/cloudy/profile.png"
            alt=""
          />
        </div>
      </div>
      <div className="mt-[48px] flex flex-col gap-8  items-center">
        <div className="px-[36px] flex flex-col items-center w-full gap-2">
          {/* User's name display */}
          <div className="flex gap-1 items-center">
            <h1
              className={`${caveatBrush.className} text-black text-4xl flex items-center leading-[100%]`}
            >
              Shanieulle
            </h1>
            <Heart
              className="text-black text-lg"
              fill="#ff0000"
              strokeWidth={2}
            />
            <img
              className="w-[1.5rem] h-[1.5rem] pl-[4px]"
              src="/assets/cloudy/verified.svg"
              alt=""
            />
          </div>
          {/* User's ID */}
          <h2
            className={`${poppins.className} text-sm font-semibold text-black leading-[100%]`}
          >
            @shanieulle • <span className="font-normal">he/him</span>
          </h2>
          <p
            className={`${poppins.className} text-[12px] text-black leading-[100%] text-center `}
          >
            The best time to be awake is when the world sleeps, for in those
            quiet moments, dreams are built and possibilities come alive.
          </p>
          <div className="flex gap-2">
            <img
              className="h-[40px] w-auto"
              src="/assets/cloudy/follow-button.png"
              alt=""
            />
            <img
              className="h-[40px] w-auto"
              src="/assets/cloudy/collab-button.png"
              alt=""
            />
          </div>
        </div>
        <div className=" flex flex-col items-center w-full gap-4">
          <h2 className={`${caveatBrush.className} text-3xl text-black`}>
            My Cosplay
          </h2>
          <Slider />
        </div>

        <div className=" flex flex-col items-center w-full gap-4 px-[36px]">
          <h2 className={`${caveatBrush.className} text-3xl text-black`}>
            My Links
          </h2>
          <img
            className="w-full aspect-auto"
            src="/assets/cloudy/link-instagram.png"
            alt=""
          />
          <img
            className="w-full aspect-auto"
            src="/assets/cloudy/link-discord.png"
            alt=""
          />
          <img
            className="w-full aspect-auto"
            src="/assets/cloudy/link-tiktok.png"
            alt=""
          />
          <img
            className="w-full aspect-auto"
            src="/assets/cloudy/link-github.png"
            alt=""
          />

          {/* <Slider /> */}
        </div>
        <a
          className={`text-[#000] font-semibold ${poppins.className} cursor-none`}
          href="https://discord.gg/kny6SqMNrV"
        >
          © 2025 Cos Club ID
        </a>
      </div>
    </div>
  );
}
