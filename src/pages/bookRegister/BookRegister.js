import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BookRegister.module.scss";
import profilePic from "../../images/default_profilePic.jpg";

export default function BookDetails(){
    const navigate = useNavigate();
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [tipo, setTipo] = useState('NOVO');  // Default para 'NOVO'
    const [genero, setGenero] = useState('');
    const [preco, setPreco] = useState('');
    const [descricao, setDescricao] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [situacao, setSituacao] = useState('DISPONÍVEL')

    const handleSubmit = async () => {
        let imagem = '';
        try {
            const gutendexResponse = await fetch(`https://gutendex.com/books?search=${titulo}`);
            const gutendexData = await gutendexResponse.json();
            if (gutendexData.results && gutendexData.results.length > 0) {
                imagem = gutendexData.results[0].formats["image/jpeg"] || '';
            }
        } catch (error) {
            console.error('Erro ao buscar imagem do livro:', error);
        }

        const livro = {
            nome: titulo,
            nomeAutor: autor,
            condicao: tipo,
            genero: genero,
            preco: parseFloat(preco),
            descricao: descricao,
            imagemCapa: imagem
        };

        try {
            const response = await fetch('http://localhost:8080/api/livros', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(livro)
            });

            if (response.ok) {
                setShowModal(true);
            } else {
                console.error('Erro ao cadastrar livro.');
            }
        } catch (error) {
            console.error('Erro ao cadastrar livro:', error);
        }
    };

    const handleModalOk = () => {
        setShowModal(false);
        navigate("/");  // Redirecionar para a página inicial
    };

    return(
        <div className={styles["container-principal"]}>
            <div className={styles["container-navegavel"]}>
                <div className={styles["container-paginas-botoes"]}>
                    <div className={styles["paginas"]}>
                        <div className={styles["foto-e-nome"]}>
                            <img className={styles["foto"]} src={profilePic} />
                            <div className={styles["nome"]}>Fulano de Tal</div>
                        </div>
                        <div className={styles["home"]}>Home</div>
                        <div className={styles["editar"]}>Editar Perfil</div>
                        <div className={styles["vendas"]}>Vendas</div>
                        <div className={styles["compras"]}>Compras</div>
                    </div>
                    <div className={styles["botoes"]}>
                        <div className={styles["sair"]}> Sair </div>
                        <div className={styles["voltar"] } onClick={() => navigate("/")}> Voltar </div>
                    </div>
                </div>
            </div>
            <div className={styles["container-conteudo"]}>
                <div className={styles["form"]}>
                    <h1 className={styles["cadastro-titulo"]}>Cadastro de livro</h1>
                    <h3>Titulo</h3>
                    <input 
                        id="titulo" 
                        className={styles["titulo"]} 
                        value={titulo} 
                        onChange={(e) => setTitulo(e.target.value)} 
                    />
                    <h3>Autor</h3>
                    <input 
                        id="autor" 
                        className={styles["autor"]} 
                        value={autor} 
                        onChange={(e) => setAutor(e.target.value)} 
                    />            
                    <div className={styles["tipo-genero-preco"]}>
                        <div>
                            <h3>Tipo</h3>
                            <select 
                                id="tipo" 
                                className={styles["tipo"]} 
                                value={tipo} 
                                onChange={(e) => setTipo(e.target.value)}
                            >
                                <option value="NOVO">NOVO</option>
                                <option value="SEMINOVO">SEMINOVO</option>
                                <option value="USADO">USADO</option>
                            </select>
                        </div>
                        <div>
                            <h3>Gênero</h3>
                            <input 
                                id="genero" 
                                className={styles["genero"]} 
                                value={genero} 
                                onChange={(e) => setGenero(e.target.value)} 
                            />
                        </div>
                        <div>
                            <h3>Preço</h3>                            
                            <input 
                                id="preco" 
                                type="number" 
                                className={styles["preco"]} 
                                value={preco} 
                                onChange={(e) => setPreco(e.target.value)} 
                            />   
                        </div>
                    </div>
                    <h3>Descrição</h3>
                    <input 
                        id="descricao" 
                        className={styles["descricao"]} 
                        value={descricao} 
                        onChange={(e) => setDescricao(e.target.value)} 
                    />
                </div>
                <div className={styles["box-botao"]}>
                    <button 
                        className={styles["botao-cadastrar"]} 
                        onClick={handleSubmit}
                    >
                        Cadastrar
                    </button>
                </div>
            </div>
            {showModal && (
                <div className={styles["modal"]}>
                    <div className={styles["modal-content"]}>
                        <h2>Cadastro realizado com sucesso!</h2>
                        <button onClick={handleModalOk}>OK</button>
                    </div>
                </div>
            )}
        </div>
    );
}
