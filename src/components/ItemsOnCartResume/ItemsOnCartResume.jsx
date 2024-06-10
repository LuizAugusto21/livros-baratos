import React, { useState, useEffect} from "react";

export default function ItemsOnCartResume({size, price}){
    const [ itemsResume, setItemsResume] = useState([]);

    useEffect(()=> {
        const generateitems = () =>{
            const newitemsResume = [];
            for(let i=0; i<size; i++){
                newitemsResume.push(<div className="resumo-pedido-texto">Item {i+1}</div>, 
                                    <div id={"item " + (i+1)} className="resumo-pedido-preco"> R$ {price[i]}</div>);
            }
            setItemsResume(newitemsResume);
        }

        generateitems();
    }, [size]);

    return(
            <div className="resumo-pedido-item">
                {itemsResume}                  
            </div>
        
    )
}
