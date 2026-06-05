import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import TelaDeCadastro from './src/screens/telaDeCadastro';
import TelaDeLista from './src/screens/telaDeLista';

export default function App() {
  // Estado para controlar qual tela está ativa: 'lista' ou 'cadastro'
  const [telaAtiva, setTelaAtiva] = useState<'lista' | 'cadastro'>('lista');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0F172A" />

      {/* Área onde a tela selecionada vai aparecer */}
      <View style={styles.conteudo}>
        {telaAtiva === 'lista' ? <TelaDeLista /> : <TelaDeCadastro />}
      </View>

      {/* Barra de Navegação Inferior (Tabs) */}
      <View style={styles.AbasContainer}>
        <TouchableOpacity
          style={[styles.botaoAba, telaAtiva === 'lista' && styles.botaoAbaAtiva]}
          onPress={() => setTelaAtiva('lista')}
        >
          <Text style={[styles.textoAba, telaAtiva === 'lista' && styles.textoAbaAtiva]}>
            📊 Monitor
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botaoAba, telaAtiva === 'cadastro' && styles.botaoAbaAtiva]}
          onPress={() => setTelaAtiva('cadastro')}
        >
          <Text style={[styles.textoAba, telaAtiva === 'cadastro' && styles.textoAbaAtiva]}>
            ➕ Cadastrar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  conteudo: {
    flex: 1,
  },
  AbasContainer: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#1E293B',
    borderTopWidth: 1,
    borderColor: '#334155',
  },
  botaoAba: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoAbaAtiva: {
    backgroundColor: '#0F172A',
    borderTopWidth: 2,
    borderTopColor: '#38BDF8', // Linha azul brilhante na aba ativa
  },
  textoAba: {
    color: '#94A3B8',
    fontSize: 14,
    fontWeight: '600',
  },
  textoAbaAtiva: {
    color: '#38BDF8',
    fontWeight: 'bold',
  },
});