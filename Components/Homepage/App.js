import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Home from "./components/Home";
import Replies from "./components/Forum/Replies";
import Explore from "./components/Explore/Explore";
import Chat from "./components/Chat/Chat";



function App() {

  return (
       

        <div className="container">
            <header> Health + </header>
            <p> Hello and welcome to Health+. This is your FDM wellness app designed specifically for you. Here you can find a veriety of resources for recipes, fitness, and mentall wellbeing blogs. You can also keep track of you daily mood, fitness, meals and medication.</p>


        </div>
  );
}
export default App;
