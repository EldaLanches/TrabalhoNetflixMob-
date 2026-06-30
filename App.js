import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  Text
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CadastroScreen from './screens/CadastroScreen';
import FilmesScreen from './screens/FilmesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [filmes, setFilmes] = useState([]);
  const [temaEscuro, setTemaEscuro] = useState(true);

  useEffect(() => {
    carregarFilmes();
  }, []);

  useEffect(() => {
    salvarFilmes();
  }, [filmes]);

  async function carregarFilmes() {
    try {
      const dados = await AsyncStorage.getItem('filmes');

      if (dados !== null) {
        setFilmes(JSON.parse(dados));
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function salvarFilmes() {
    try {
      await AsyncStorage.setItem(
        'filmes',
        JSON.stringify(filmes)
      );
    } catch (error) {
      console.log(error);
    }
  }

  function alternarTema() {
    setTemaEscuro(!temaEscuro);
  }

  function excluirFilme(id) {
    setFilmes(
      filmes.filter(
        filme => filme.id !== id
      )
    );
  }

  function editarFilme(filmeEditado) {
    setFilmes(
      filmes.map(filme =>
        filme.id === filmeEditado.id
          ? filmeEditado
          : filme
      )
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: temaEscuro
              ? '#121212'
              : '#FFFFFF',
          },

          headerTintColor: temaEscuro
            ? '#89F336'
            : '#2E6F40',

          headerTitleStyle: {
            fontWeight: 'bold',
          },

          headerRight: () => (
            <TouchableOpacity
              onPress={alternarTema}
              style={{ marginRight: 5 }}
            >
              <Text style={{ fontSize: 24 }}>
                {temaEscuro ? '☀️' : '🌙'}
              </Text>
            </TouchableOpacity>
          )
        }}
      >
        <Stack.Screen name="Cadastro">
          {(props) => (
            <CadastroScreen
              {...props}
              filmes={filmes}
              setFilmes={setFilmes}
              temaEscuro={temaEscuro}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Filmes">
          {(props) => (
            <FilmesScreen
              {...props}
              filmes={filmes}
              excluirFilme={excluirFilme}
              editarFilme={editarFilme}
              temaEscuro={temaEscuro}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}