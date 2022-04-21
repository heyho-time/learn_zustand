import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./Main";
import Bear from "./Bear";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/bear" element={<Bear />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
