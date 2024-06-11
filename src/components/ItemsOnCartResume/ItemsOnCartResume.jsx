import React, { useState, useEffect} from "react";
import styles from "../../pages/shopping/ShoppingCart.module.css";

export default function ItemsOnCartResume({size, price}){
    const [ itemsResume, setItemsResume] = useState([]);

    useEffect(()=> {
        const generateitems = () =>{
            const newitemsResume = [];
            for(let i=0; i<size; i++){
                newitemsResume.push(<div className={styles["resumo-pedido-texto"]}>Item {i+1}</div>, 
                                    <div id={"item " + (i+1)} className={styles["resumo-pedido-preco"]}> R$ {price[i]}</div>);
            }
            setItemsResume(newitemsResume);
        }

        generateitems();
    }, [size]);

    return(
            <div className={styles["resumo-pedido-item"]}>
                {itemsResume}                  
            </div>   
    );
}
