import React, { useState } from "react";

interface HeaderData {
    headerData:{
        message: string,
        date: string
    }
}
const Header = ({headerData}:HeaderData) => {
    
    return(
        <div style={{backgroundColor: "gold", padding:"20px", textAlign:"center"}}>
            <h3>Header Component</h3>
            <p>{headerData.message}</p>
            <p>{headerData.date}</p>
        </div>
    )
}

export default Header;