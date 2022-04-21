import React from "react";
import useStore from "./store";

const Bear = () => {
  // const bears = useStore((state) => state.bears);
  const { bears, increasePopulation, removeAllBears } = useStore();

  return <div>{bears}</div>;
  // <p>{bears} around here ...</p>;
  // return <button onClick={increasePopulation}>one up</button>;
};
export default Bear;
