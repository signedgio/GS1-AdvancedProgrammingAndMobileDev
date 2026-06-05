// Esse arquivo diz ao celular quais informações existem em um Recurso Lunar
export interface Recurso {
  id?: number; // O ponto de interrogação significa que o ID é opcional (o banco Java gera sozinho)
  nome: string; // Ex: "Reservatório de Água Alfa"
  tipo: string; // Ex: "Água", "Energia" ou "Climatização"
  valorAtual: number; // Medição do sensor no momento
  limiteCritico: number; // O nível mínimo de segurança
  statusOperacional?: string; // Ex: "NORMAL" ou "ALERTA CRÍTICO"
}