export interface Promocao {
  id: number;
  destino: string;
  imagem: string;
  preco: number;
}

export interface Estado {
  id: string;
  nome: string;
  sigla: string;
}

export interface Depoimentos {
  id: 0;
  texto: string;
  autor: string;
  avatar: string;
}

export interface Cadastro {
  nome: string;
  nascimento: string;
  cpf: string;
  telefone: string;
  email: string;
  senha: string;
  genero: string;
  cidade: string;
  estado: Estado;
}


export interface Resultado {
  paginaAtual: number;
  ultimaPagina: number;
  total: number;
  precoMin: number;
  precoMax: number;
  resultado: Passagem[];
}

export interface Passagem{
  tipo: string;
  precoIda: number;
  precoVolta: number;
  taxaEmbarque: number;
  conexoes: number;
  tempoVoo: number;
  origem: Estado;
  destino: Estado;
  companhia: Companhia;
  dataIda: string;
  dataVolta: string;
  total: number;
  orcamento: Orcamento[];
  id: string
}

export interface Companhia{
  id: string;
  nome: string;
}

export interface Orcamento{
  descricao: string;
  preco: number;
  taxaEmbarque: number;
  total: number
}

export interface DadosBusca{
  somenteIda?: boolean;
  passageirosAdultos?: number;
  passageirosCriancas?: number;
  passageirosBebes?: number;
  tipo?: string;
  origemId?: number;
  destinoId?: number;
  precoMin?: number;
  precoMax?: number;
  conexoes?: number;
  tempoVoo?: number;
  dataIda: string;
  dataVolta?: string;
  companhiasId?: number[];
  pagina: number;
  porPagina: number;
}

export interface Destaques {
  menorValor: Passagem,
  menorTempo: Passagem,
  recomendada: Passagem
}