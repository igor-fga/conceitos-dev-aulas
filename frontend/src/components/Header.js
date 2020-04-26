import React from 'react';

//Foi usado a desestruturação
//title é uma propriedade
//Conteudo do componentes
export default function Header({title}) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}