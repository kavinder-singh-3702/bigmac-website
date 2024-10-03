"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Statistics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className=" text-white py-16 px-5 text-center">
      <h2 className=" text-5xl font-bold text-center my-10 mb-20">
        Best Solutions for your <span className="text-[#65b8de]">Website</span>
      </h2>
      <p className="text-lg text-white font-semibold mb-10">
        Here are some numbers for you.
      </p>
      <div className="flex flex-wrap justify-center">
        <div className="flex-1 min-w-[200px] mx-5 mb-5 text-center">
          <i className="fas fa-rocket text-6xl mb-3"></i>
          <h3 className="text-4xl mb-1">
            {inView && <CountUp start={0} end={1210} duration={2.75} />}
          </h3>
          <p className="text-lg text-gray-400">Website Projects</p>
        </div>
        <div className="flex-1 min-w-[200px] mx-5 mb-5 text-center">
          <i className="fas fa-users text-6xl mb-3"></i>
          <h3 className="text-4xl mb-1">
            {inView && <CountUp start={0} end={450} duration={2.75} />}
          </h3>
          <p className="text-lg text-gray-400">No. of Clients</p>
        </div>
        <div className="flex-1 min-w-[200px] mx-5 mb-5 text-center">
          <i className="fas fa-clock text-6xl mb-3"></i>
          <h3 className="text-4xl mb-1">
            {inView && <CountUp start={0} end={11420} duration={2.75} />}
          </h3>
          <p className="text-lg text-gray-400">Working Hours</p>
        </div>
        <div className="flex-1 min-w-[200px] mx-5 mb-5 text-center">
          <i className="fas fa-award text-6xl mb-3"></i>
          <h3 className="text-4xl mb-1">
            {inView && <CountUp start={0} end={25} duration={2.75} />}
          </h3>
          <p className="text-lg text-gray-400">Awards</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
