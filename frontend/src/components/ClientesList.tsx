import React from 'react';
import { listarClientes } from '../api';
import { Cliente } from '../types';

function ClientesList() {
  const [clientes, setClientes] = React.useState<Cliente[]>([]);
  const [carregando, setCarregando] = React.useState(false);

  const buscarClientes = async () => {
    try {
      setCarregando(true);
      const dados = await listarClientes();
      setClientes(dados);
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
      setClientes([]);
    } finally {
      setCarregando(false);
    }
  };

  React.useEffect(() => {
    buscarClientes();
  }, []);

  return (
    <section className="list-section">
      <div className="list-header">
        <h2 className="list-title">Clientes Cadastrados</h2>
        <button className="btn-refresh" onClick={buscarClientes}>
          🔄 Atualizar
        </button>
      </div>

      {carregando && <p>Carregando...</p>}

      {!carregando && clientes.length === 0 && (
        <p>Nenhum cliente cadastrado ainda.</p>
      )}

      {!carregando && clientes.length > 0 && (
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
              {clientes.map((cliente) => (
                <tr key={cliente.id}>
                  <td>{cliente.cpf}</td>
                  <td>{cliente.nome}</td>
                  <td>{cliente.endereco}</td>
                  <td>{cliente.cep}</td>
                  <td>{cliente.cidade}</td>
                  <td>{new Date(cliente.criadoEm).toLocaleString('pt-BR')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default ClientesList;