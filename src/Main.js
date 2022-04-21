import React from "react";
import create from "zustand";

export const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

const Main = () => {
  return <p>Main page</p>;
};
export default Main;
