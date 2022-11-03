import React from "react";
import Episodes from "./graphApi/Episodes";
import EpisodeNav from "./graphApi/EpisodeNav";
import { BrowserRouter, Routes , Route } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Episodes />} />
      <Route path="epiNav/:id" element={<EpisodeNav/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
