import React, { useState, useEffect} from "react";

export default function ItensOnCartResume({size}){
    const [ itensResume, setItensResume] = useState([]);

    useEffect(()=> {
        const generateItens = () =>{
            const newItensResume = [];
            for(let i=0; i<size; i++){
                newItensResume.push(<div className="resumo-pedido-texto">Item {i+1}</div>, 
                                    <div className="resumo-pedido-preco"> R$ 20</div>);
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
