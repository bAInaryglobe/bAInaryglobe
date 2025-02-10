"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <>
      <section className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <div className={`mb-12 ${isAnimated ? 'animate-fade-in-up' : ''}`}>
                  <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    <span className="text-primary">bAInaryglobe:</span> Shaping the Future with AI and Innovation
                  </h1>
                  <p className="text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                    Experience cutting-edge AI solutions that transform businesses and empower innovation. Join us in creating the next generation of intelligent technology.
                  </p>
                </div>
                <div className={`flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 ${isAnimated ? 'animate-fade-in-up animation-delay-200' : ''}`}>
                  <Link
                    href="/services"
                    className="rounded-md bg-primary/90 backdrop-blur-sm py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 hover:shadow-signUp"
                  >
                    Explore Services
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-md bg-black/20 dark:bg-white/20 backdrop-blur-sm py-4 px-8 text-base font-semibold text-black dark:text-white duration-300 ease-in-out hover:bg-black/30 dark:hover:bg-white/30"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 right-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-pulse"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="277"
                y1="-162"
                x2="277"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-pulse"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
