# 🍦 Sorveteria Moray

Site institucional e vitrine de produtos de uma sorveteria fictícia, desenvolvido como projeto de Front-End (CP5) com **React**, **Vite** e **Tailwind CSS**. O site é uma *Single Page Application* com navegação entre páginas, carrossel de destaques, catálogo com filtro e busca, formulário de contato e tela de login.

---

## 👥 Integrantes

| Nome | RM |
| ---- | -- |
| Matheus Medeiros da Cunha     | RM 572780 |
| Gustavo Ferreira Silva        | RM 571675 |
| Felipe Ricardo Moreira Aguiar | RM 573410 |  TEACH LEAD ELE ESTÀ SEM O GITHUB DEU O ULTIMO COMMIT

---

## 📋 Sumário

- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Rotas](#-rotas)
- [Como executar](#-como-executar)
- [Scripts disponíveis](#-scripts-disponíveis)
- [Instalação das dependências (passo a passo)](#-instalação-das-dependências-passo-a-passo)
- [Paleta de cores](#-paleta-de-cores)
- [Como adicionar um novo sorvete](#-como-adicionar-um-novo-sorvete)
- [Melhorias futuras](#-melhorias-futuras)

---

## ✨ Funcionalidades

- **Home:** carrossel com 3 slides (troca automática a cada 4 segundos, setas e indicadores) e seção "Sorvetes em Destaque".
- **Sorvetes:** catálogo completo com filtro por categoria (Todos, Cremosos, Chocolate, Frutas) e busca por nome.
- **Contato:** informações da sorveteria (endereço, horário, telefone, e-mail) e formulário com nome, e-mail, assunto e mensagem.
- **Login:** formulário com e-mail e senha, botão para mostrar/ocultar senha, opção "Lembrar de mim" e redirecionamento para a Home após entrar.
- **Página 404:** tela de erro personalizada para rotas inexistentes.
- **Layout reutilizável:** `Header` com navegação e `Footer` presentes em todas as páginas.
- **Animações:** `fadeIn` e `fadeInUp` nos títulos e cards, além de efeitos de *hover* nos botões e cards.
- **Componentização:** o componente `Card` é reaproveitado na Home e na página de Sorvetes.

> ⚠️ O login e o formulário de contato são apenas demonstrativos (front-end). Ainda não há integração com back-end: os dados são exibidos em um `alert` e não são salvos.

---

## 🛠 Tecnologias

| Tecnologia | Versão | Uso |
| ---------- | ------ | --- |
| [React](https://react.dev/) | 19 | Interface e componentes |
| [Vite](https://vite.dev/) | 8 | Servidor de desenvolvimento e build |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Estilização com classes utilitárias |
| [React Router DOM](https://reactrouter.com/) | 7 | Rotas e navegação |
| [ESLint](https://eslint.org/) | 10 | Padronização e análise do código |

Hooks utilizados: `useState`, `useEffect` e `useNavigate`.

---

## 📁 Estrutura do projeto

```
TesteCP5FrontEnd/
├── index.html              # Página base (título e ponto de montagem do React)
├── package.json            # Dependências e scripts
├── vite.config.js          # Configuração do Vite (plugins React e Tailwind)
├── eslint.config.js        # Configuração do ESLint
└── src/
    ├── main.jsx            # Ponto de entrada da aplicação
    ├── App.jsx             # Layout principal e definição das rotas
    ├── index.css           # Importa o Tailwind e o estilo.css
    ├── assets/             # Imagens dos sorvetes
    │   ├── baunilha.jpg
    │   ├── belga.jpg
    │   ├── flocos.jpg
    │   └── frutas.jpg
    ├── components/
    │   ├── Card.jsx        # Card de produto (imagem, nome, preço e botão)
    │   ├── Carrossel.jsx   # Carrossel de slides da Home
    │   ├── Footer.jsx      # Rodapé
    │   └── Header.jsx      # Cabeçalho com menu de navegação
    ├── css/
    │   └── estilo.css      # Variáveis de cor, animações e estilos globais
    └── pages/
        ├── Home.jsx        # Página inicial
        ├── Sorvetes.jsx    # Catálogo com filtro e busca
        ├── Contato.jsx     # Informações e formulário de contato
        ├── Login.jsx       # Tela de login
        └── Error.jsx       # Página 404
```

---

## 🧭 Rotas

| Caminho | Página | Descrição |
| ------- | ------ | --------- |
| `/` | Home | Carrossel e sorvetes em destaque |
| `/sorvetes` | Sorvetes | Catálogo com filtro e busca |
| `/contato` | Contato | Informações e formulário |
| `/login` | Login | Acesso à conta |
| `*` | Error | Página 404 para rotas inexistentes |

---

## 🚀 Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 20 ou superior recomendada)
- npm (já vem com o Node.js)
- [Git](https://git-scm.com/) (opcional, para clonar o repositório)

### Passo a passo

```bash
# 1. Clone o repositório
git clone <url-do-repositorio>

# 2. Acesse a pasta do projeto
cd TesteCP5FrontEnd-main

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Depois, abra no navegador o endereço exibido no terminal (por padrão, **http://localhost:5173**).

---

## 📜 Scripts disponíveis


---

## 📦 Instalação das dependências (passo a passo)

Comandos usados na criação do projeto, caso seja necessário instalar manualmente:

```bash
# tailwindcss
npm install tailwindcss @tailwindcss/vite

# router
npm install react-router-dom

# routes
npm install react-router-routes
```

---

## 🎨 Paleta de cores

| Cor | Hex | Uso |
| --- | --- | --- |
| Bege claro | `#F7F3EB` | Fundo do header, footer e cards |
| Bege | `#E5D5C3` | Fundo principal do site |
| Marrom claro | `#A88970` | Botões, preços e destaques |
| Marrom escuro | `#5C493B` | Textos e títulos |
| Marrom hover | `#8F7059` | Estado de *hover* dos botões |
| Rosa | `#FF4F8B` | Destaques nas páginas de Contato e Login |

---

## ➕ Como adicionar um novo sorvete

1. Coloque a foto em `src/assets/` (ex.: `morango.jpg`).
2. Em `src/pages/Sorvetes.jsx`, importe a imagem e adicione um objeto ao array `sorvetes`:

```jsx
import morango from '../assets/morango.jpg'

{ id: 5, titulo: "Sorvete de Morango", preco: "R$ 32,90", imagem: morango, categoria: "Frutas" },
```

3. Para que ele também apareça em destaque, repita o processo no array de `src/pages/Home.jsx`.

---


