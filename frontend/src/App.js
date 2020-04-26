import React, {useState} from 'react';

import './App.css';

import backgroundImage from './assets/img01.jpeg';

import Header from './components/Header';

function App() {
  /**
   * useState retorna um array com 2 posições
   * 
   * 1. Variavel com o seu valor inicial
   * 2. Função para atualizarmos esse valor
   */
  
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  function handleAddProject() {
    //projects.push(`Novo projeto ${Date.now()}`);

    //spread operator. Esta copiando cada um dos projetos e inserindo no novo array
    //conceito de imutabilidade.
    setProjects([...projects, `Novo projeto ${Date.now()}`])
    console.log(projects);
  }

  //Conceito de fragment. Não é permitido colocar componentes sem nada estar envolvido entre eles.
  return (
  <>    
      
    <Header title="Projects"/>
    <img width={300} src={backgroundImage}/>  

    <ul>
      {projects.map(project => <li key={project}>{project}</li>)}
    </ul>    
    <button type="button" onClick={handleAddProject}>Adicionar projeto</button>

  </>
  )
}

export default App;