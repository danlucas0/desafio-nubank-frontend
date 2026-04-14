import React from 'react';
import { cadastrarCliente } from '../api';
import { FormData } from '../types';

function CadastroForm() {
  const [cpf, setCpf] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [endereco, setEndereco] = React.useState('');
  const [cep, setCep] = React.useState('');
  const [cidade, setCidade] = React.useState('');

  const [carregando, setCarregando] = React.useState(false);
  const [erro, setErro] = React.useState('');
  const [sucesso, setSucesso] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      setCarregando(true);
      setErro('');
      setSucesso(false);

      const dados: FormData = {
        cpf,
        nome,
        endereco,
        cep,
        cidade,
      };

      await cadastrarCliente(dados);

      setCpf('');
      setNome('');
      setEndereco('');
      setCep('');
      setCidade('');
      setSucesso(true);
    } catch (error) {
      if (error instanceof Error) {
        setErro(error.message);
      } else {
        setErro('Erro ao cadastrar cliente');
      }
    } finally {
      setCarregando(false);
    }
  };

  const formatarCPF = (valor: string): string => {
    const numeros = valor.replace(/\D/g, '').slice(0, 11);

    if (numeros.length <= 3) return numeros;
    if (numeros.length <= 6) {
      return numeros.replace(/(\d{3})(\d+)/, '$1.$2');
    }
    if (numeros.length <= 9) {
      return numeros.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
    }

    return numeros.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
  };

  const formatarCEP = (valor: string): string => {
    const numeros = valor.replace(/\D/g, '').slice(0, 8);

    if (numeros.length <= 5) return numeros;

    return numeros.replace(/(\d{5})(\d+)/, '$1-$2');
  };

  return (
    <section className="form-section">
      <div className="form-card">
        <h2 className="form-title">Novo Cadastro</h2>
        <p className="form-subtitle">
          Preencha os dados abaixo para se tornar um cliente Nubank.
        </p>

        {sucesso && (
          <div className="alert alert-success">
            ✅ Cliente cadastrado com sucesso!
          </div>
        )}

        {erro && (
          <div className="alert alert-error">
            ❌ {erro}
          </div>
        )}

        <form className="cadastro-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cpf">CPF</label>
            <input
              id="cpf"
              type="text"
              placeholder="000.000.000-00"
              maxLength={14}
              className="form-input"
              value={cpf}
              onChange={(e) => {
                setCpf(formatarCPF(e.target.value));
                setSucesso(false);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="nome">Nome completo</label>
            <input
              id="nome"
              type="text"
              placeholder="Digite seu nome completo"
              className="form-input"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
                setSucesso(false);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="endereco">Endereço</label>
            <input
              id="endereco"
              type="text"
              placeholder="Rua, número, complemento"
              className="form-input"
              value={endereco}
              onChange={(e) => {
                setEndereco(e.target.value);
                setSucesso(false);
              }}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="cep">CEP</label>
              <input
                id="cep"
                type="text"
                placeholder="00000-000"
                maxLength={9}
                className="form-input"
                value={cep}
                onChange={(e) => {
                  setCep(formatarCEP(e.target.value));
                  setSucesso(false);
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="cidade">Cidade</label>
              <input
                id="cidade"
                type="text"
                placeholder="Sua cidade"
                className="form-input"
                value={cidade}
                onChange={(e) => {
                  setCidade(e.target.value);
                  setSucesso(false);
                }}
              />
            </div>
          </div>

          <button type="submit" className="btn-submit" disabled={carregando}>
            {carregando ? 'Cadastrando...' : 'Cadastrar'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default CadastroForm;