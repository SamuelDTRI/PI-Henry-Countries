// Ajustar los imports según sea necesario
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { NavBar } from "../src/Components/ComponentsIndex";
import { Landing, Home, Detail, Form } from "../src/Views/ViewsIndex";
import style from "./App.module.css";

function App() {
  const location = useLocation();
  return (
    <div className={style.App}>
      <div>{location.pathname !== "/" && location.pathname !== "/landing" && <NavBar />}</div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
