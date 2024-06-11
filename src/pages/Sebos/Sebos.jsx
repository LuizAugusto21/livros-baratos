import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'

import styles from "./Sebos.module.scss"

export default function Sebos() {
  return (
    <div className={styles['conteudo-sebos']}>
        <h1>Pesquisar Sebos</h1>
        <p>Pesquise novos Sebos para descobrir novas histórias</p>

        <SearchBar></SearchBar>
    </div>
  )
}
