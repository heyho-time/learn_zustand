import React from "react";
import useStore from "./store";
import { useNavigate } from "react-router-dom";

const Main = () => {
  // const bears = useStore((state) => state.bears);
  const { bears, increasePopulation, removeAllBears } = useStore();
  const navigate = useNavigate();

  return (
    <>
      <p>{bears}Main page</p>
      <div>
        <button onClick={increasePopulation}>plus</button>
      </div>
      <div>
        <button onClick={removeAllBears}>reset</button>
      </div>
      <div>
        <button onClick={() => navigate("/bear")}>go</button>
      </div>
    </>
  );
};
export default Main;
