import React from "react";
import "./button.scss";

export default function Button({text="Voltar"}){
    return(
        <div className="container-botao">
            <button className="botao">{text}</button>
        </div>
    );
}