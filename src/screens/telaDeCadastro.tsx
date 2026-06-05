import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { Recurso } from '../types';

export default function CadastroScreen() {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('Água');
  const [valorAtual, setValorAtual] = useState('');
  const [limiteCritico, setLimiteCritico] = useState('');

  const handleSalvar = () => {
    if (!nome || !valorAtual || !limiteCritico) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos do sensor lunar!');
      return;
    }

    const novoRecurso: Recurso = {
      nome,
      tipo,
      valorAtual: parseFloat(valorAtual),
      limiteCritico: parseFloat(limiteCritico),
    };

    console.log('Enviando para a API Java:', novoRecurso);
    Alert.alert('Sucesso', `Sensor "${nome}" cadastrado localmente!`);
    
    setNome('');
    setValorAtual('');
    setLimiteCritico('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>🛰️ Cadastro de Recurso Lunar</Text>
      <Text style={styles.subtitulo}>Monitore os sistemas essenciais da sua base</Text>

      <Text style={styles.label}>Nome do Sistema / Sensor:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Reservatório de Oxigênio Beta"
        placeholderTextColor="#888"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Tipo de Recurso:</Text>
      <View style={styles.containerBotoesTipo}>
        {['Água', 'Energia', 'Climatização'].map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.botaoTipo, tipo === item && styles.botaoTipoSelecionado]}
            onPress={() => setTipo(item)}
          >
            <Text style={[styles.textoBotaoTipo, tipo === item && styles.textoBotaoTipoSelecionado]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Nível / Valor Atual:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 85.5"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={valorAtual}
        onChangeText={setValorAtual}
      />

      <Text style={styles.label}>Limite Alerta Crítico:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 20.0"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={limiteCritico}
        onChangeText={setLimiteCritico}
      />

      <TouchableOpacity style={styles.botaoSalvar} onPress={handleSalvar}>
        <Text style={styles.textoBotaoSalvar}>Salvar Dispositivo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#0F172A',
    flexGrow: 1,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F8FAFC',
    textAlign: 'center',
    marginTop: 20,
  },
  subtitulo: {
    fontSize: 14,
    color: '#94A3B8',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    color: '#E2E8F0',
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#1E293B',
    color: '#F8FAFC',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#334155',
  },
  containerBotoesTipo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  botaoTipo: {
    flex: 1,
    backgroundColor: '#1E293B',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  botaoTipoSelecionado: {
    backgroundColor: '#38BDF8',
    borderColor: '#38BDF8',
  },
  textoBotaoTipo: {
    color: '#94A3B8',
    fontWeight: 'bold',
  },
  textoBotaoTipoSelecionado: {
    color: '#0F172A',
  },
  botaoSalvar: {
    backgroundColor: '#10B981',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotaoSalvar: {
    color: '#F8FAFC',
    fontSize: 18,
    fontWeight: 'bold',
  },
});