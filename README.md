# Projeto de CI/CD para Aplicação Node.js

Este repositório contém uma aplicação simples em Node.js configurada com um pipeline de Integração e Entrega Contínua (CI/CD) utilizando o GitHub Actions. O objetivo é demonstrar um fluxo de trabalho automatizado para testes, linting, build e deploy de forma eficiente.

## 🚀 Funcionalidades

* **API Simples:** Aplicação Express que serve um endpoint básico.
* **Testes Automatizados:** Cobertura de testes com `Jest` para garantir a qualidade do código.
* **Linting de Código:** Análise de código com `ESLint` para manter um padrão consistente.
* **Pipeline de CI/CD:** Automação completa de `build` e `deploy` através do GitHub Actions.

## ⚙️ Tecnologias Utilizadas

* **Node.js** e **npm**
* **Express** (Framework Web)
* **Jest** (Framework de Testes)
* **ESLint** (Linter de Código)
* **GitHub Actions** (Automação de Workflow)

## 📦 Como Rodar o Projeto

Para configurar e executar o projeto localmente, siga os passos abaixo:

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/SEU-USUARIO/workflow-node-js-ci-cd.git](https://github.com/SEU-USUARIO/workflow-node-js-ci-cd.git)
    cd workflow-node-js-ci-cd
    ```

2.  **Instale as Dependências:**
    ```bash
    npm install
    ```

3.  **Execute a Aplicação:**
    ```bash
    npm start
    ```
    A aplicação estará disponível em `http://localhost:3000`.

## ✅ Testes

Para executar os testes automatizados e verificar a cobertura de código, utilize o seguinte comando:

```bash
npm test
```

## 🤖 Pipeline de CI/CD

O pipeline de CI/CD é configurado no arquivo `.github/workflows/ci-cd.yml`. Ele é acionado automaticamente em cada `push` e `pull_request` para a branch `main`.

O workflow realiza as seguintes etapas:

1.  **Checkout do Código:** Clona o código do repositório.
2.  **Setup Node.js:** Configura o ambiente com a versão `20.x` do Node.js.
3.  **Instalação de Dependências:** Instala as dependências de forma segura com `npm ci`.
4.  **Linting do Código:** Executa o `ESLint` para verificar a qualidade do código.
5.  **Execução de Testes:** Roda os testes com `Jest`.
6.  **Build e Preparação do Artefato:** Prepara os arquivos da aplicação para o deploy.
7.  **Upload do Artefato:** Salva o artefato do `build` para ser utilizado em outros jobs.
8.  **Download do Artefato (Job de Deploy):** Baixa o artefato do build para o ambiente de deploy.
9.  **Deploy:** Simula a implantação da aplicação em um servidor.

---
**Feito com ❤️ por [Seu Nome ou Usuário do GitHub]**
