import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native'; //Parecia com uma div de HTML
import api from './services/api';

//Não possuem valor semântico (significado)
//Não possuem estilização propria
//Todos componentes possuem por padrão display: flex 

// View: div, footer, header, main, aside, section
// Text: p, span, strong, h1, h2, h3
//Flatlist é mais performatico que o Scrollview
//SafeAreaView não ocupada a area da status bar

export default function App() {
  //useState é no mesmo formato que a variavel projects
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data);
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'Igor Andrade'
    });

    const project = response.data;
    setProjects([...projects, project]);
  }
  
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({item : project}) => ( //alias 
            <Text style={styles.project}>{project.title}</Text>
          )}     
        />
        <TouchableOpacity 
          activeOpacity={0.6} 
          style={styles.button} 
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>     
      {/* <View style={styles.container}>
        {projects.map(project => (
          <Text style={styles.project} key={project.id}>{project.title}</Text>
        ))}
      </View> */}
    </>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    //justifyContent: 'center', não pode ser usado com Flatlist
    //alignItems: 'center'
  },

  project: {
    color: '#FFF',
    fontSize: 20,
  },

  button: {
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'   
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});