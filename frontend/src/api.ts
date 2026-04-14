import { Cliente, FormData } from './types';

const BASE_URL = 'http://localhost:3000';

// ============================================================
// TODO: Implemente as funções abaixo para se comunicar com a API
// Documentação disponível em: http://localhost:3000/api
// ============================================================

/**
 * TODO: Implemente esta função para cadastrar um cliente.
 * 
 * Dica: Use fetch() ou axios para fazer uma requisição POST para
 * `${BASE_URL}/clientes` enviando os dados no body como JSON.
 * 
 * Em caso de erro (ex: CPF duplicado), lance um Error com a mensagem
 * retornada pela API para que o formulário possa exibi-la.
 */
export async function cadastrarCliente(dados: FormData): Promise<Cliente> {
  // Apague este comentário e escreva sua implementação aqui
  throw new Error('Função não implementada');
}

/**
 * TODO: Implemente esta função para buscar todos os clientes cadastrados.
 * 
 * Dica: Use fetch() ou axios para fazer uma requisição GET para
 * `${BASE_URL}/clientes`.
 * 
 * Deve retornar um array de clientes.
 */
export async function listarClientes(): Promise<Cliente[]> {
  // Apague este comentário e escreva sua implementação aqui
  throw new Error('Função não implementada');
}
