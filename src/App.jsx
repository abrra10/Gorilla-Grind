import React, { useState } from "react";
import Hero from "./components/Hero";
import Generator from "./components/Generator";
import Workout from "./components/Workout";
import { generateWorkout } from "./utils/Functions.js";

export default function App() {
  const [workout, setWorkout] = useState(null);
  const [tree, setTree] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [bananas, setBananas] = useState("strength_power");

  function updateWorkout() {
    if (muscles.length < 1) {
      return;
    }
    let newWorkout = generateWorkout({ tree, muscles, bananas });
    setWorkout(newWorkout);

    window.location.href = "#workout";
  }
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Hero />
      <Generator
        tree={tree}
        setTree={setTree}
        muscles={muscles}
        setMuscles={setMuscles}
        bananas={bananas}
        setBananas={setBananas}
        updateWorkout={updateWorkout}
      />
      {workout && <Workout workout={workout} />}
    </main>
  );
}
