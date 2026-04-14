import React from 'react';
import { cadastrarCliente } from '../api';
import { FormData } from '../types';

// ============================================================
// DESAFIO: Implemente o gerenciamento de estado deste formulário
// ============================================================

function CadastroForm() {
  // TODO 1: Crie um estado para cada campo do formulário usando useState.
  //
  // Exemplo de como criar um estado:
  //   const [nome, setNome] = React.useState('');
  //
  // Campos necessários: cpf, nome, endereco, cep, cidade
  //
  // Dica: você também vai precisar de estados para controlar:
  //   - carregando: boolean (exibir feedback enquanto a requisição acontece)
  //   - erro: string     (exibir mensagem de erro da API)
  //   - sucesso: boolean (exibir mensagem de cadastro concluído)


  // TODO 2: Implemente a função de submit.
  //
  // Esta função deve:
  //   1. Chamar event.preventDefault() para não recarregar a página
  //   2. Setar o estado de carregando para true
  //   3. Limpar qualquer erro anterior
  //   4. Chamar cadastrarCliente() com os dados do formulário
  //   5. Em caso de sucesso: limpar os campos e mostrar mensagem de sucesso
  //   6. Em caso de erro: exibir a mensagem de erro no formulário
  //   7. Setar o estado de carregando para false no final (sucesso ou erro)
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Escreva sua implementação aqui
  };

  // TODO 3: Implemente a função de formatação do CPF.
  //
  // Ao digitar, formate automaticamente para o padrão 000.000.000-00.
  // Dica: use replace() para remover caracteres não numéricos
  // e depois aplique a máscara conforme o comprimento da string.
  const formatarCPF = (valor: string): string => {
    // Escreva sua implementação aqui
    return valor;
  };

  // TODO 4: Implemente a função de formatação do CEP.
  //
  // Ao digitar, formate automaticamente para o padrão 00000-000.
  const formatarCEP = (valor: string): string => {
    // Escreva sua implementação aqui
    return valor;
  };

  return (
    <section className="form-section">
      <div className="form-card">
        <h2 className="form-title">Novo Cadastro</h2>
        <p className="form-subtitle">
          Preencha os dados abaixo para se tornar um cliente Nubank.
        </p>

        {/* TODO 5: Exiba a mensagem de sucesso condicionalmente.
            Mostre este bloco apenas quando o estado "sucesso" for true. */}
        <div className="alert alert-success">
          ✅ Cliente cadastrado com sucesso!
        </div>

        {/* TODO 6: Exiba a mensagem de erro condicionalmente.
            Mostre este bloco apenas quando o estado "erro" tiver uma mensagem. */}
        <div className="alert alert-error">
          ❌ Erro aqui
        </div>

        {/* TODO 7: Adicione o onSubmit={handleSubmit} neste form */}
        <form className="cadastro-form">

          <div className="form-group">
            <label htmlFor="cpf">CPF</label>
            {/* TODO 8: Conecte os campos ao estado:
                - value={cpf}
                - onChange para chamar setCpf com o valor formatado pelo formatarCPF()
                Faça o mesmo para todos os outros campos abaixo. */}
            <input
              id="cpf"
              type="text"
              placeholder="000.000.000-00"
              maxLength={14}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="nome">Nome completo</label>
            <input
              id="nome"
              type="text"
              placeholder="Digite seu nome completo"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="endereco">Endereço</label>
            <input
              id="endereco"
              type="text"
              placeholder="Rua, número, complemento"
              className="form-input"
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
              />
            </div>

            <div className="form-group">
              <label htmlFor="cidade">Cidade</label>
              <input
                id="cidade"
                type="text"
                placeholder="Sua cidade"
                className="form-input"
              />
            </div>
          </div>

          {/* TODO 9: Desabilite o botão quando o estado "carregando" for true
              e troque o texto para "Cadastrando..." */}
          <button type="submit" className="btn-submit">
            Cadastrar
          </button>

        </form>
      </div>
    </section>
  );
}

export default CadastroForm;
