import React, { useState, useEffect} from "react";

export default function ItensOnCartResume({size, price}){
    const [ itensResume, setItensResume] = useState([]);

    useEffect(()=> {
        const generateItens = () =>{
            const newItensResume = [];
            for(let i=0; i<size; i++){
                newItensResume.push(<div className="resumo-pedido-texto">Item {i+1}</div>, 
                                    <div id={"item " + (i+1)} className="resumo-pedido-preco"> R$ {price[i]}</div>);
            }
            setItensResume(newItensResume);
        }

        generateItens();
    }, [size]);

    return(
            <div className="resumo-pedido-item">
                {itensResume}                  
            </div>
        
    )
}
