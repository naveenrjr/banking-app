"use client";
import React from "react";
import CountUp from "react-countup";
const AnimatedCounter = ({ value }: { value: number }) => {
  return (
    <div className="w-full">
      <CountUp
        end={value}
        duration={2.75}
        separator=","
        decimals={2}
        decimal="."
        prefix="$"
      />
    </div>
  );
};

export default AnimatedCounter;
