# 🟣 Desafio Técnico — Nubank Cadastro de Clientes

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Nu_pagamentos_logo.svg/1200px-Nu_pagamentos_logo.svg.png" width="180" alt="Nubank"/>
</p>

---

## 📋 Contexto

A **Nubank** está expandindo sua base de clientes e precisa de um sistema web para cadastrar novos clientes com dados básicos de identificação e endereço.

O time de backend já entregou a API com todas as rotas prontas e documentadas. **Sua missão é implementar o frontend em React**, conectando o formulário à API e exibindo os clientes cadastrados.

---

## 🎯 O que você deve implementar

### 1. Formulário de Cadastro (`CadastroForm.tsx`)

- [ ] Gerenciar os campos com **`useState`** (cpf, nome, endereço, cep, cidade)
- [ ] **Máscara de CPF**: formatação automática `000.000.000-00`
- [ ] **Máscara de CEP**: formatação automática `00000-000`
- [ ] Enviar os dados para a API ao clicar em "Cadastrar"
- [ ] Exibir **mensagem de sucesso** após cadastro
- [ ] Exibir **mensagem de erro** (ex: CPF já cadastrado)
- [ ] Desabilitar o botão durante a requisição (feedback de carregamento)
- [ ] Limpar os campos após cadastro bem-sucedido

### 2. Listagem de Clientes (`ClientesList.tsx`)

- [ ] Buscar clientes da API com **`useEffect`** ao montar o componente
- [ ] Exibir os clientes em uma tabela
- [ ] Mostrar estado de "Carregando..."
- [ ] Mostrar estado vazio ("Nenhum cliente cadastrado ainda.")
- [ ] Botão "Atualizar" para recarregar a lista

### 3. Comunicação com a API (`api.ts`)

- [ ] Implementar `cadastrarCliente()` — `POST /clientes`
- [ ] Implementar `listarClientes()` — `GET /clientes`

---

## 🚀 Como rodar o projeto

### Pré-requisitos

- Node.js 18+
- MySQL Workbench com usuário `root` / senha `root`

### Passo 1 — Criar o banco de dados

Abra o **MySQL Workbench** e execute:

```sql
CREATE DATABASE nubank_cadastro;
```

> O backend cria a tabela `clientes` automaticamente na primeira execução.

### Passo 2 — Subir o backend

```bash
cd backend
npm install
npm run start:dev
```

- API rodando em: `http://localhost:3000`
- Documentação Swagger: `http://localhost:3000/api`

### Passo 3 — Subir o frontend

```bash
cd frontend
npm install
npm start
```

- App rodando em: `http://localhost:3001`

---

## 🗂️ Estrutura do projeto

```
nubank-desafio/
├── backend/                  ✅ Pronto — não precisa alterar
│   └── src/
│       ├── clientes/
│       │   ├── cliente.entity.ts       # Entidade do banco
│       │   ├── clientes.controller.ts  # Rotas da API
│       │   ├── clientes.service.ts     # Regras de negócio
│       │   ├── clientes.module.ts
│       │   └── dto/
│       │       └── create-cliente.dto.ts
│       ├── app.module.ts
│       └── main.ts
│
└── frontend/                 ✏️  Aqui você implementa
    └── src/
        ├── components/
        │   ├── CadastroForm.tsx   ← TODOs 1 a 9
        │   └── ClientesList.tsx   ← TODOs 1 a 8
        ├── api.ts                 ← TODOs: cadastrarCliente e listarClientes
        ├── types.ts               # Tipos TypeScript (não alterar)
        └── App.tsx                # Já montado
```

---

## 📡 Referência da API

### `POST /clientes` — Cadastrar cliente

**Body (JSON):**
```json
{
  "cpf": "123.456.789-00",
  "nome": "João da Silva",
  "endereco": "Rua das Flores, 123",
  "cep": "01310-100",
  "cidade": "São Paulo"
}
```

**Resposta 201:**
```json
{
  "id": 1,
  "cpf": "123.456.789-00",
  "nome": "João da Silva",
  "endereco": "Rua das Flores, 123",
  "cep": "01310-100",
  "cidade": "São Paulo",
  "criadoEm": "2024-05-01T12:00:00.000Z"
}
```

**Erros:**
| Status | Descrição |
|--------|-----------|
| `400`  | Dados inválidos (ex: CPF fora do formato) |
| `409`  | CPF já cadastrado |

---

### `GET /clientes` — Listar clientes

**Resposta 200:** Array com todos os clientes cadastrados, ordenados do mais recente para o mais antigo.

> 💡 Consulte a documentação interativa completa em `http://localhost:3000/api` (Swagger UI)

---

## ✅ Critérios de avaliação

| Critério | Peso |
|----------|------|
| Uso correto de `useState` em todos os campos | ⭐⭐⭐ |
| Comunicação com a API (POST e GET) | ⭐⭐⭐ |
| Uso correto de `useEffect` para carregar a lista | ⭐⭐ |
| Máscaras de CPF e CEP funcionando | ⭐⭐ |
| Feedback de sucesso e erro ao usuário | ⭐⭐ |
| Código limpo e organizado | ⭐ |

---

## 📤 Como entregar

1. Faça o **fork** deste repositório
2. Crie uma branch com seu nome: `git checkout -b feat/seu-nome`
3. Implemente os TODOs
4. Suba o código: `git push origin feat/seu-nome`
5. Abra um **Pull Request** para o repositório original com o título: `[Desafio] Seu Nome`

---

## 💡 Dicas

- Leia os comentários `// TODO` nos arquivos — eles guiam a implementação passo a passo
- Use o **Swagger** em `http://localhost:3000/api` para testar as rotas antes de implementar
- O `Content-Type: application/json` é obrigatório no cabeçalho do POST
- Para máscaras, use `String.replace()` com regex — sem bibliotecas externas

---

*Boa sorte! Em caso de dúvidas, abra uma issue no repositório.* 🟣
