
import React from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

export default function wishlist(){
    return(
        <div>
            <Header isLogged={true} isHome={false}></Header>
            <Button></Button>
        </div>
    );
}
