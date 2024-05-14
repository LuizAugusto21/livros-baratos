import React from "react";
import "./button.scss";

// function goBack(){
//     window.location.href = "home???"
// }

export default function Button(){
    return(
        <div className="container-botao">
            <button className="botao-voltar" onclick="goBack()">Voltar</button>
        </div>
    );
}