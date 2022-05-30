import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "app1/Header";
import Footer from "app1/Footer";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";

import "./index.css";

const App = () => (
  <div>
    <Header headerData = {{message:"Importing Header Component from tsx app1 to jsx home", date:"Constant date: 30 May, 2022"}}></Header>
    <Content1></Content1>
    <Content2></Content2>
    <Footer></Footer>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
