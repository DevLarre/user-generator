# 🌐 GERADOR DE USUÁRIO ALEATÓRIO - INTEGRAÇÃO FRONT-END & BACK-END 🚀

Este projeto tem como objetivo o **aprendizado** e a **integração** de **Front-end** com **Back-end**, consumindo uma API externa e armazenando os dados gerados no banco de dados **PostgreSQL** hospedado na plataforma **Render.com**.

## 💻 FUNCIONALIDADES PRINCIPAIS

- **Integração Front-End & Back-End**: Consome a API **RandomUser** para gerar dados aleatórios de usuários.
- **Armazenamento no Banco de Dados**: Salva os dados dos usuários gerados em um banco de dados **PostgreSQL** remoto.
- **Interface Interativa**: Interface simples que permite ao usuário gerar novos perfis ao clicar em um botão.
- **Visualização dos Dados**: Exibe informações detalhadas dos usuários como nome, email, país, estado, cidade, telefone, etc.
- **Acompanhamento de Dados**: Utilizando o Swagger é possivel acompanhar a requisição feita no servidor, Status page mostra se o banco de dados esta operacional em tempo real.

## 🔧 TECNOLOGIAS UTILIZADAS

- **HTML5** 🖼️
- **CSS3** 🎨
- **JavaScript (Fetch API)** 📜
- **React** ⚛️
- **Java (Spring Boot)** ☕
- **PostgreSQL** 🐘
- **API Externa**: [RandomUser.me](https://randomuser.me) 🌍

## 🌐 ESTRUTURA DO PROJETO

### FRONT-END (HTML, CSS, JavaScript)

- O front-end é uma aplicação simples em **HTML**, **CSS** e **JavaScript**, com o objetivo de consumir os dados da API fornecida pelo back-end.
- O botão **"Gerar Usuário"** aciona uma chamada **Fetch** para a API do back-end, que por sua vez consome a **RandomUser API** e retorna os dados de um novo usuário.
- A interface exibe os dados do usuário, como gênero, email, nome, localização, e telefone, juntamente com ícones representativos.

### BACK-END (Spring Boot)

- O back-end é uma aplicação em **Java** com **Spring Boot**, que consome a **RandomUser API**, processa os dados e os salva no banco de dados **PostgreSQL**.
- A aplicação inclui um **endpoint** que o front-end consome para gerar e exibir os dados do usuário.

### Banco de Dados (PostgreSQL)

- O projeto está integrado com um banco de dados **PostgreSQL** hospedado na plataforma **Render.com**, onde os dados dos usuários são armazenados após serem gerados pela API.

## 🚀 COMO EXECUTAR O PROJETO

### 🖥️ Front-End

1. **Clone o repositório**:
   ```
   git clone https://github.com/DevLarre/Random-User.git
   ```

2. Navegue até o diretório do projeto:

```
cd gerador-usuario-aleatorio
```

3. Instale as dependências:

```
npm install
```

4. Inicie o servidor de desenvolvimento:

```
npm start
```

5. Abra o navegador e acesse http://localhost:3000 para visualizar a interface.

6. Clique no botão "Gerar Usuário" para obter um usuário aleatório.

## 🛠️ Back-End

### Olhe o repositório https://github.com/DevLarre/apiConsumoBackend

## 📋 ARQUIVOS PRINCIPAIS

### FRONT-END
```App.js:```  
   Componente principal da aplicação React, incluindo a lógica para carregar usuários e renderizar a interface.

```HackerEffect.js:```
   Componente que cria um efeito de estilo hacker usando canvas.

```UserCard.js:```
   Componente que exibe as informações do usuário.

```Footer.js:```
   Componente de rodapé da aplicação.

```App.css:```
   Estilos para a aplicação React.

```HackerEffect.css:``` 
Estilos para o efeito hacker.

### BACK-END
```
UserController.java: Controlador que consome a API RandomUser e salva os dados no banco. 
```
```
UserTestApiService.java: Serviço que contém a lógica de negócio para salvar os dados.
```
```
UserRepositoryTestApi.java: Interface do repositório para realizar operações no banco.
```
```
TesteApiUser.java: Modelo do usuário retornado pela API.
```

## 📦 DEPLOY
O projeto está configurado para ser integrado ao banco de dados PostgreSQL hospedado na Render.com. Verifique as configurações do banco e certifique-se de que o deploy do back-end esteja funcional.

### Conecte-se comigo

[![Linkdln](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/douglas-rodrigues-larré-a59637231/)
[![Outlook](https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white)](dev.larre@outlook.com)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/dev_larre)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DevLarre)

Vamos codar! 🚀

## © Desenvolvido por Dev Larré, 2024
