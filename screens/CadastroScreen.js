import React, { useState } from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    ScrollView
} from 'react-native';

export default function CadastroScreen({
    navigation,
    filmes,
    setFilmes,
    temaEscuro
}) {
    const [nome, setNome] = useState('');
    const [ano, setAno] = useState('');
    const [genero, setGenero] = useState('');
    const [capa, setCapa] = useState('');
    const [resumo, setResumo] = useState('');

    function adicionarFilme() {
        if (!nome || !ano || !genero || !capa || !resumo) {
            Alert.alert('Erro', 'Preencha todos os campos!');
            return;
        }

        const novoFilme = {
            id: Date.now().toString(),
            nome,
            ano,
            genero,
            capa,
            resumo
        };

        setFilmes([...filmes, novoFilme]);

        setNome('');
        setAno('');
        setGenero('');
        setCapa('');
        setResumo('');

        Alert.alert('Sucesso', 'Filme adicionado!');
    }

    return (
        <ScrollView
            style={[
                styles.container,
                {
                    backgroundColor: temaEscuro
                        ? '#121212'
                        : '#FFFFFF'
                }
            ]}
        >
            <Text
                style={[
                    styles.titulo,
                    {
                        color: temaEscuro
                            ? '#89F336'
                            : '#2E6F40'
                    }
                ]}
            >
                EldaFlix - Cadastro de Filmes
            </Text>

            <TextInput
                style={[
                    styles.input,
                    {
                        backgroundColor: temaEscuro
                            ? '#1E1E1E'
                            : '#FFFFFF',

                        color: temaEscuro
                            ? '#FFFFFF'
                            : '#000000',

                        borderColor: temaEscuro
                            ? '#89F336'
                            : '#2E6F40'
                    }
                ]}
                placeholder="Nome do filme"
                placeholderTextColor={
                    temaEscuro
                        ? '#AAAAAA'
                        : '#666666'
                }
                value={nome}
                onChangeText={setNome}
            />

            <TextInput
                style={[
                    styles.input,
                    {
                        backgroundColor: temaEscuro
                            ? '#1E1E1E'
                            : '#FFFFFF',

                        color: temaEscuro
                            ? '#FFFFFF'
                            : '#000000',

                        borderColor: temaEscuro
                            ? '#89F336'
                            : '#2E6F40'
                    }
                ]}
                placeholder="Ano do filme"
                placeholderTextColor={
                    temaEscuro
                        ? '#AAAAAA'
                        : '#666666'
                }
                keyboardType="numeric"
                value={ano}
                onChangeText={setAno}
            />

            <TextInput
                style={[
                    styles.input,
                    {
                        backgroundColor: temaEscuro
                            ? '#1E1E1E'
                            : '#FFFFFF',

                        color: temaEscuro
                            ? '#FFFFFF'
                            : '#000000',

                        borderColor: temaEscuro
                            ? '#89F336'
                            : '#2E6F40'
                    }
                ]}
                placeholder="Gênero do filme"
                placeholderTextColor={
                    temaEscuro
                        ? '#AAAAAA'
                        : '#666666'
                }
                value={genero}
                onChangeText={setGenero}
            />

            <TextInput
                style={[
                    styles.input,
                    {
                        backgroundColor: temaEscuro
                            ? '#1E1E1E'
                            : '#FFFFFF',

                        color: temaEscuro
                            ? '#FFFFFF'
                            : '#000000',

                        borderColor: temaEscuro
                            ? '#89F336'
                            : '#2E6F40'
                    }
                ]}
                placeholder="URL da capa"
                placeholderTextColor={
                    temaEscuro
                        ? '#AAAAAA'
                        : '#666666'
                }
                value={capa}
                onChangeText={setCapa}
            />

            <TextInput
                style={[
                    styles.input,
                    styles.inputResumo,
                    {
                        backgroundColor: temaEscuro
                            ? '#1E1E1E'
                            : '#FFFFFF',

                        color: temaEscuro
                            ? '#FFFFFF'
                            : '#000000',

                        borderColor: temaEscuro
                            ? '#89F336'
                            : '#2E6F40'
                    }
                ]}
                placeholder="Resumo do filme"
                placeholderTextColor={
                    temaEscuro
                        ? '#AAAAAA'
                        : '#666666'
                }
                value={resumo}
                onChangeText={setResumo}
                multiline
            />

            <TouchableOpacity
                style={[
                    styles.botao,
                    {
                        backgroundColor: temaEscuro
                            ? '#89F336'
                            : '#2E6F40'
                    }
                ]}
                onPress={adicionarFilme}
            >
                <Text
                    style={[
                        styles.textoBotao,
                        {
                            color: '#FFFFFF'
                        }
                    ]}
                >
                    Adicionar Filme
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    styles.botaoSecundario,
                    {
                        borderColor: temaEscuro
                            ? '#89F336'
                            : '#2E6F40'
                    }
                ]}
                onPress={() => navigation.navigate('Filmes')}
            >
                <Text
                    style={[
                        styles.textoBotaoSecundario,
                        {
                            color: temaEscuro
                                ? '#89F336'
                                : '#2E6F40'
                        }
                    ]}
                >
                    Filmes Cadastrados
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 25,
        marginTop: 20
    },

    input: {
        borderWidth: 1,
        borderRadius: 12,
        padding: 12,
        marginBottom: 12
    },

    inputResumo: {
        height: 120,
        textAlignVertical: 'top'
    },

    botao: {
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 10
    },

    textoBotao: {
        fontWeight: 'bold',
        fontSize: 18
    },

    botaoSecundario: {
        borderWidth: 2,
        padding: 15,
        borderRadius: 12,
        alignItems: 'center'
    },

    textoBotaoSecundario: {
        fontWeight: 'bold',
        fontSize: 18
    }
});