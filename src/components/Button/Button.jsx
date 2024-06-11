import React from "react";
import styles from "./Button.module.scss";
import {Link, useNavigate} from "react-router-dom";



export default function Button({text="Voltar"}){

    const navigate = useNavigate();

    function isGoBackButton(){
        if(text === "Voltar") return true;
        else return false;
    }

    return( 
        <div className={styles["container-botao"]}>
            <>
            {
                isGoBackButton()
            ?
                <button className={styles["botao"]} onClick={()=>navigate(-1)}>{text}</button>
            :
                <button className={styles["botao"]}>{text}</button>
            }
            </>
        </div>
    );
}