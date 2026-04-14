import React from 'react';
import { listarClientes } from '../api';
import { Cliente } from '../types';

// ============================================================
// DESAFIO: Implemente a listagem de clientes cadastrados
// ============================================================

function ClientesList() {
  // TODO 1: Crie um estado para armazenar a lista de clientes.
  //   const [clientes, setClientes] = React.useState<Cliente[]>([]);
  //
  // TODO 2: Crie um estado para controlar o carregamento:
  //   const [carregando, setCarregando] = React.useState(false);


  // TODO 3: Implemente a função para buscar os clientes da API.
  //
  // Esta função deve:
  //   1. Setar carregando para true
  //   2. Chamar listarClientes() do arquivo api.ts
  //   3. Atualizar o estado com os clientes retornados
  //   4. Setar carregando para false no final
  const buscarClientes = async () => {
    // Escreva sua implementação aqui
  };

  // TODO 4: Use o hook useEffect para chamar buscarClientes()
  // automaticamente quando o componente for montado na tela.
  //
  // Dica:
  //   React.useEffect(() => {
  //     buscarClientes();
  //   }, []);


  return (
    <section className="list-section">
      <div className="list-header">
        <h2 className="list-title">Clientes Cadastrados</h2>
        {/* TODO 5: Ao clicar neste botão, chame buscarClientes() para atualizar a lista */}
        <button className="btn-refresh">
          🔄 Atualizar
        </button>
      </div>

      {/* TODO 6: Mostre "Carregando..." enquanto o estado carregando for true */}

      {/* TODO 7: Mostre "Nenhum cliente cadastrado ainda." se a lista estiver vazia */}

      {/* TODO 8: Renderize a tabela abaixo apenas quando houver clientes.
          Use .map() para iterar sobre o array de clientes e gerar uma <tr> para cada um.
          Lembre-se de usar a prop key={cliente.id} em cada <tr>. */}
      <div className="table-wrapper">
        <table className="clientes-table">
          <thead>
            <tr>
              <th>CPF</th>
              <th>Nome</th>
              <th>Endereço</th>
              <th>CEP</th>
              <th>Cidade</th>
              <th>Cadastrado em</th>
            </tr>
          </thead>
          <tbody>
            {/* Renderize as linhas aqui */}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ClientesList;
