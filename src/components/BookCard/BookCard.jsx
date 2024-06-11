import React, {useState, useEffect} from "react";
import styles from "./BookCard.module.scss";
import { Link, useNavigate } from "react-router-dom";



export default function BookCard( {nomeLivro, Autor, preco, descricao, ano, generos}) {
  
  const navigate = useNavigate();
  const [ book, setBook ] = useState(null);

  useEffect(()=> {
    // Cria um objeto com as informações do livro atual
    const newBook = { name: nomeLivro,
      author: Autor,
      price: preco,
      genres: generos,
      description: descricao,
      year: ano };

      setBook(newBook);
  }, [])

  const handleDetailClick = () => {
    
    const jsonValue = JSON.stringify(book);
    localStorage.setItem("currentBook", jsonValue);
    
    // Vai para a página de detalhes
    navigate("/detalhes");

  }

  const [ itemsOnCart, setItemsOnCart] = useState([]);

  // Função para salvar os dados no localStorage
  const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  function handleBuyButtonClick(){
    const updatedItemsOnCart = [...itemsOnCart, book]; 
        setItemsOnCart(updatedItemsOnCart);

        // Registra a lista atualizada
        saveToLocalStorage("OnCart", updatedItemsOnCart);

        console.log("Adicionou a lista do carrinho de compras");

        // Navega até a página de carrinho
        navigate("/carrinho")
  }

  useEffect(() => {
    // Carrega a lista atual de itens no carrinho
    const storedItensOnCart = loadListData("OnCart");
    if (storedItensOnCart) {
        setItemsOnCart(storedItensOnCart);
    }
  }, []);

  // Carrega a lista de favoritos
  function loadListData(key){
    const jsonValue = localStorage.getItem(key);
    if(jsonValue){
        try{
            return JSON.parse(jsonValue);
        } catch(e) {
            console.error("Erro ao analisar JSON: ", e);
            return [];
        }
    }
    return [];
}
  
return (
  <div className={styles["BookCard-box"]}>
      <div className={styles["BookCard-content"]}>
          <img src="/default-placeholder.png" alt="" height={166} onClick={handleDetailClick} />
          <div className={styles["BookCard-info"]}>
              <p>
                  <span>
                      R${preco}<br />
                      {nomeLivro}
                  </span>{" "}
                  <br />
                  {Autor}
              </p>
              <div className={styles["condition"]}></div>
          </div>
          <button onClick={handleBuyButtonClick}>Comprar</button>
      </div>
  </div>
);

}
