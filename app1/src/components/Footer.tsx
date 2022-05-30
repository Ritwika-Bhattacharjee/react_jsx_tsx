import { type } from "os";
import React, { useState } from "react";

interface FooterProps  {
    footerData?: string
  };
   
const Footer = ({ footerData="No data Available"} : FooterProps) => {
    return(
        <div style={{backgroundColor: "lightgreen", padding:"20px", textAlign:"center"}}>
            <h3>Footer Component</h3>
            <p>{footerData}</p>
        </div>
    )
}

export default Footer