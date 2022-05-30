import React, {useState} from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./index.css";

const App = () => {

  const [headerData, setHeaderData] = useState({
    message: "Welcome to React-jsx-tsx App",
    date: new Date().toString()
  });

  const [footerData, setFooterData] = useState("Thankyou")
  
  return(
  <div>
    <Header headerData={headerData}></Header>
    <div className="container">
      <div>Name: app1</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>
    </div>
    <Footer footerData={footerData}></Footer>
  </div>
)};
ReactDOM.render(<App />, document.getElementById("app"));
