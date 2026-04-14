export interface Cliente {
  id: number;
  cpf: string;
  nome: string;
  endereco: string;
  cep: string;
  cidade: string;
  criadoEm: string;
}

export interface FormData {
  cpf: string;
  nome: string;
  endereco: string;
  cep: string;
  cidade: string;
}
