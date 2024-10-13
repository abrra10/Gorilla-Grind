import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[750px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>YOUR TIME TO </p>
        <h1 className="uppercase font-semibold text-yellow-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl ">
          Dominate the Jungle{" "}
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        It's time to tap into your primal instincts and unleash{" "}
        <span className="text-yellow-400 font-medium">the beast within</span>.
        Our specialized training programs are tailored to help you build muscle,
        increase endurance, and enhance overall fitness. Join us and transform
        your body with workouts that are as intense as they are rewarding.
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text="Join the Gorilla Grind"
      />
    </div>
  );
}
