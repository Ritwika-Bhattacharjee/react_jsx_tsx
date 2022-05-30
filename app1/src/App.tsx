import React, {useState} from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import JSXContent from "./components/JSXContent";

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
    <JSXContent paragraph={"He stepped away from the mic. This was the best take he had done so far, but something seemed missing. Then it struck him all at once. Visuals ran in front of his eyes and music rang in his ears. His eager fingers went to work in an attempt to capture his thoughts hoping the results would produce something that was at least half their glory."}></JSXContent>
    <Footer footerData={footerData}></Footer>
  </div>
)};
ReactDOM.render(<App />, document.getElementById("app"));
