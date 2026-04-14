import { Cliente, FormData } from './types';

const BASE_URL = 'http://localhost:3000';

export async function cadastrarCliente(dados: FormData): Promise<Cliente> {
  const response = await fetch(`${BASE_URL}/clientes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dados),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Erro ao cadastrar cliente');
  }

  return data;
}

export async function listarClientes(): Promise<Cliente[]> {
  const response = await fetch(`${BASE_URL}/clientes`);

  if (!response.ok) {
    throw new Error('Erro ao buscar clientes');
  }

  const data = await response.json();
  return data;
}