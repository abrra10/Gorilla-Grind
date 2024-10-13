import React from "react";
import Wrapper from "./Wrapper";
import ExcerciseCard from "./ExcerciseCard";

export default function Workout(props) {
  const { workout } = props;
  return (
    <Wrapper
      id={"workout"}
      header={"Push Limits"}
      title={["Enter", "The Gorilla", "Zone"]}
    >
      <div className="flex flex-col gap-4">
        {workout.map((exercise, i) => {
          return <ExcerciseCard i={i} exercise={exercise} key={i} />;
        })}
      </div>
    </Wrapper>
  );
}
