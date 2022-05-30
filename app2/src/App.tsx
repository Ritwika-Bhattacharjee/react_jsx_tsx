import React from "react";
import ReactDOM from "react-dom";

import JSXContent from "app1/JSXContent";
import Header from "app1/Header";
import Footer from "app1/Footer";

import "./index.css";

const App = () => (
  <div>
    <Header headerData={{message:"TSX Header Component", date: "Constant Date: 30th May, 2022"}}></Header>
    <h4>JSX Component Imported into TSX App</h4>
    <JSXContent paragraph={"trial data: test 123"}></JSXContent>
    <Footer footerData={"TSX Footer Component"}></Footer>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
