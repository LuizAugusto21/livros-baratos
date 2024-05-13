
import React from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import "./Wishlist.scss";


export default function wishlist(){
    return(
        <div>
            <Header isLogged={true} isHome={true}></Header>
            <h1 className="titulo-favorito">Wishlist</h1>

            <div className="conteiner-botao"> 
                <Button></Button>
            </div>
        </div>
    );
}
