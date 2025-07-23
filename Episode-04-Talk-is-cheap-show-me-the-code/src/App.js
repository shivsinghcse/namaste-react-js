import React from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import Header from "./components/Header";
import ResContainer from "./components/ResContainer";

const App = () => {
  return (
    <>
      <Header />
      <ResContainer />
    </>
  );
};


const root = createRoot(document.getElementById("root"));

root.render(<App />);
