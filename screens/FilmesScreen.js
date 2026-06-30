import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native';

export default function FilmesScreen({
    filmes,
    excluirFilme,
    editarFilme,
    temaEscuro
}) {
    const [editando, setEditando] = useState(null);

    const [novoNome, setNovoNome] = useState('');
    const [novoAno, setNovoAno] = useState('');
    const [novoGenero, setNovoGenero] = useState('');
    const [novaCapa, setNovaCapa] = useState('');
    const [novoResumo, setNovoResumo] = useState('');

    function abrirEdicao(filme) {
        setEditando(filme.id);

        setNovoNome(filme.nome);
        setNovoAno(filme.ano);
        setNovoGenero(filme.genero);
        setNovaCapa(filme.capa);
        setNovoResumo(filme.resumo);
    }

    function salvarEdicao(filme) {
        if (
            !novoNome ||
            !novoAno ||
            !novoGenero ||
            !novaCapa ||
            !novoResumo
        ) {
            Alert.alert(
                'Erro',
                'Preencha todos os campos.'
            );
            return;
        }

        editarFilme({
            ...filme,
            nome: novoNome,
            ano: novoAno,
            genero: novoGenero,
            capa: novaCapa,
            resumo: novoResumo
        });

        setEditando(null);

        Alert.alert(
            'Sucesso',
            'Filme atualizado!'
        );
    }

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: temaEscuro
                        ? '#121212'
                        : '#FFFFFF'
                }
            ]}
        >
            <FlatList
                data={filmes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View
                        style={[
                            styles.card,
                            {
                                backgroundColor: temaEscuro
                                    ? '#1B1B1B'
                                    : '#FFFFFF',

                                borderColor: temaEscuro
                                    ? '#89F336'
                                    : '#2E6F40'
                            }
                        ]}
                    >
                        {editando === item.id ? (
                            <>
                                <TextInput
                                    style={[
                                        styles.inputEditar,
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
                                    value={novoNome}
                                    onChangeText={setNovoNome}
                                    placeholder="Nome do filme"
                                    placeholderTextColor={
                                        temaEscuro
                                            ? '#AAAAAA'
                                            : '#666666'
                                    }
                                />

                                <TextInput
                                    style={[
                                        styles.inputEditar,
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
                                    value={novoAno}
                                    onChangeText={setNovoAno}
                                    placeholder="Ano do filme"
                                    placeholderTextColor={
                                        temaEscuro
                                            ? '#AAAAAA'
                                            : '#666666'
                                    }
                                    keyboardType="numeric"
                                />

                                <TextInput
                                    style={[
                                        styles.inputEditar,
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
                                    value={novoGenero}
                                    onChangeText={setNovoGenero}
                                    placeholder="Gênero do filme"
                                    placeholderTextColor={
                                        temaEscuro
                                            ? '#AAAAAA'
                                            : '#666666'
                                    }
                                />

                                <TextInput
                                    style={[
                                        styles.inputEditar,
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
                                    value={novaCapa}
                                    onChangeText={setNovaCapa}
                                    placeholder="URL da capa"
                                    placeholderTextColor={
                                        temaEscuro
                                            ? '#AAAAAA'
                                            : '#666666'
                                    }
                                />

                                <TextInput
                                    style={[
                                        styles.inputEditar,
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
                                    value={novoResumo}
                                    onChangeText={setNovoResumo}
                                    placeholder="Resumo do filme"
                                    placeholderTextColor={
                                        temaEscuro
                                            ? '#AAAAAA'
                                            : '#666666'
                                    }
                                    multiline
                                />

                                <TouchableOpacity
                                    style={[
                                        styles.botaoSalvar,
                                        {
                                            backgroundColor: temaEscuro
                                                ? '#89F336'
                                                : '#2E6F40'
                                        }
                                    ]}
                                    onPress={() => salvarEdicao(item)}
                                >
                                    <Text style={styles.textoBotaoSalvar}>
                                        Salvar Alterações
                                    </Text>
                                </TouchableOpacity>
                            </>
                        ) : (
                            <>
                                <Image
                                    source={{ uri: item.capa }}
                                    style={styles.imagem}
                                />

                                <Text
                                    style={[
                                        styles.nome,
                                        {
                                            color: temaEscuro
                                                ? '#FFFFFF'
                                                : '#000000'
                                        }
                                    ]}
                                >
                                    {item.nome}
                                </Text>

                                <Text
                                    style={[
                                        styles.info,
                                        {
                                            color: temaEscuro
                                                ? '#FFFFFF'
                                                : '#000000'
                                        }
                                    ]}
                                >
                                    📅 Ano: {item.ano}
                                </Text>

                                <Text
                                    style={[
                                        styles.info,
                                        {
                                            color: temaEscuro
                                                ? '#FFFFFF'
                                                : '#000000'
                                        }
                                    ]}
                                >
                                    🎭 Gênero: {item.genero}
                                </Text>

                                <Text
                                    style={[
                                        styles.info,
                                        {
                                            color: temaEscuro
                                                ? '#FFFFFF'
                                                : '#000000'
                                        }
                                    ]}
                                >
                                    📝 Resumo:
                                </Text>

                                <Text
                                    style={[
                                        styles.resumo,
                                        {
                                            color: temaEscuro
                                                ? '#FFFFFF'
                                                : '#000000'
                                        }
                                    ]}
                                >
                                    {item.resumo}
                                </Text>

                                <View style={styles.botoesContainer}>
                                    <TouchableOpacity
                                        style={[
                                            styles.botaoEditar,
                                            {
                                                backgroundColor: temaEscuro
                                                    ? '#89F336'
                                                    : '#2E6F40'
                                            }
                                        ]}
                                        onPress={() => abrirEdicao(item)}
                                    >
                                        <Text style={styles.textoBotao}>
                                            ✏️ Editar
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={styles.botaoExcluir}
                                        onPress={() => excluirFilme(item.id)}
                                    >
                                        <Text style={styles.textoBotaoExcluir}>
                                            🗑️ Excluir
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },

    card: {
        borderWidth: 1,
        borderRadius: 15,
        padding: 12,
        marginBottom: 15
    },

    imagem: {
        width: '100%',
        height: 250,
        borderRadius: 10,
        resizeMode: 'cover'
    },

    nome: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10
    },

    info: {
        fontSize: 16,
        marginTop: 5
    },

    resumo: {
        fontSize: 15,
        marginTop: 5,
        lineHeight: 22
    },

    botoesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },

    botaoEditar: {
        flex: 1,
        padding: 12,
        borderRadius: 10,
        marginRight: 5,
        alignItems: 'center'
    },

    botaoExcluir: {
        backgroundColor: '#D32F2F',
        flex: 1,
        padding: 12,
        borderRadius: 10,
        marginLeft: 5,
        alignItems: 'center'
    },

    textoBotao: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16
    },

    textoBotaoExcluir: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16
    },

    inputEditar: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        marginBottom: 5
    },

    inputResumo: {
        height: 120,
        textAlignVertical: 'top'
    },

    botaoSalvar: {
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10
    },

    textoBotaoSalvar: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16
    }
});