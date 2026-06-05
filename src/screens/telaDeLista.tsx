import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Recurso } from '../types';

// Dados fictícios (mock) apenas para a Gi ver a tela desenhada antes de conectarmos a API Java
const dadosFicticios: Recurso[] = [
  { id: 1, nome: 'Reservatório Alfa', tipo: 'Água', valorAtual: 85, limiteCritico: 20 },
  { id: 2, nome: 'Painel Solar Principal', tipo: 'Energia', valorAtual: 15, limiteCritico: 30 }, // Este vai dar alerta!
  { id: 3, nome: 'Ar Condicionado Setor 3', tipo: 'Climatização', valorAtual: 22, limiteCritico: 10 },
  { id: 4, nome: 'Gerador de Emergência', tipo: 'Energia', valorAtual: 5, limiteCritico: 10 }, // Este também!
];

export default function TelaDeLista() {
  
  // Função que renderiza cada quadradinho (card) de recurso na tela
  const renderItem = ({ item }: { item: Recurso }) => {
    // Regra de Alerta: se o valor atual for menor ou igual ao limite crítico, a base está em perigo!
    const estaEmAlerta = item.valorAtual <= item.limiteCritico;

    return (
      <View style={[styles.card, estaEmAlerta && styles.cardAlerta]}>
        <View style={styles.topoCard}>
          <Text style={styles.nomeRecurso}>{item.nome}</Text>
          <Text style={styles.tipoRecurso}>{item.tipo === 'Água' ? '💧' : item.tipo === 'Energia' ? '⚡' : '🌡️'} {item.tipo}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.textoInfo}>Nível Atual: <Text style={styles.valorDestaque}>{item.valorAtual}%</Text></Text>
          <Text style={styles.textoInfo}>Limite Crítico: {item.limiteCritico}%</Text>
        </View>

        {/* Badge de Status Operacional Dinâmico */}
        <View style={[styles.badgeStatus, estaEmAlerta ? styles.badgeAlerta : styles.badgeNormal]}>
          <Text style={[styles.textoBadge, estaEmAlerta ? styles.textoBadgeAlerta : styles.textoBadgeNormal]}>
            {estaEmAlerta ? '⚠️ ALERTA CRÍTICO' : '✅ OPERAÇÃO NORMAL'}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🛰️ Painel de Controle Lunar</Text>
      <Text style={styles.subtitulo}>Sistemas monitorados em tempo real</Text>

      <FlatList
        data={dadosFicticios}
        keyExtractor={(item) => item.id!.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A', // Mesmo fundo escuro espacial
    padding: 20,
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
    marginBottom: 20,
  },
  lista: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#1E293B',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#334155',
  },
  cardAlerta: {
    borderColor: '#EF4444', // Borda vermelha se estiver em alerta
    borderWidth: 1.5,
  },
  topoCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  nomeRecurso: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F8FAFC',
  },
  tipoRecurso: {
    fontSize: 14,
    color: '#94A3B8',
    backgroundColor: '#0F172A',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  infoContainer: {
    marginBottom: 12,
  },
  textoInfo: {
    color: '#CBD5E1',
    fontSize: 15,
    marginBottom: 4,
  },
  valorDestaque: {
    fontWeight: 'bold',
    color: '#38BDF8', // Azul brilhante para o valor
  },
  badgeStatus: {
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: 'center',
  },
  badgeNormal: {
    backgroundColor: 'rgba(16, 185, 129, 0.2)', // Verde clarinho transparente
  },
  badgeAlerta: {
    backgroundColor: 'rgba(239, 68, 68, 0.2)', // Vermelho clarinho transparente
  },
  textoBadge: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  textoBadgeNormal: {
    color: '#10B981',
  },
 textoBadgeAlerta: {
    color: '#EF4444',
  },
});