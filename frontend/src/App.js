//useEffect utilizado disparar funções sempre que tiver alguma informação alterada ou não
import React, {useState, useEffect} from 'react';
import api from './services/api';

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
  
  const [projects, setProjects] = useState([]);

  /**
   * Dois parametros
   * 
   * 1. Qual função eu quero disparar
   * 2. Quando eu quero disparar essa função
   */
  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);
  async function handleAddProject() {
    //projects.push(`Novo projeto ${Date.now()}`);

    //spread operator. Esta copiando cada um dos projetos e inserindo no novo array
    //conceito de imutabilidade.
    //setProjects([...projects, `Novo projeto ${Date.now()}`])
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: "Igor Andrade"
    });

    const project = response.data;

    setProjects([...projects, project]);
    //console.log(projects);
  }

  //Conceito de fragment. Não é permitido colocar componentes sem nada estar envolvido entre eles.
  return (
  <>    
      
    <Header title="Projects"/>
    <img width={300} src={backgroundImage}/>  

    <ul>
      {projects.map(project => <li key={project.id}>{project.title}</li>)}
    </ul>    
    <button type="button" onClick={handleAddProject}>Adicionar projeto</button>

  </>
  )
}

export default App;