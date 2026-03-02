# 🎭 Playwright + Cucumber BDD - Advantage Online Shopping

Este projeto implementa uma automação de testes de ponta a ponta (E2E) para o e-commerce **Advantage Online Shopping**. A arquitetura combina o poder de execução do **Playwright** com a legibilidade do **Cucumber (Gherkin)**, utilizando o padrão **Page Object Model (POM)** para garantir escalabilidade e fácil manutenção.

---

## 📋 Funcionalidades Automatizadas

### 🛒 Fluxo de Seleção e Compra

* **Navegação por Categorias:** Acesso dinâmico à seção de Laptops através de seletores semânticos.
* **Seleção Parametrizada:** O script identifica e clica no produto correto baseado no nome passado via `Scenario Outline`, permitindo testar múltiplos itens com o mesmo código.
* **Validação de Carrinho:** Verificação do *badge* de contagem de itens e conferência de nome e preço no resumo do checkout.
* **Isolamento de Contexto:** Uso de `Before` e `After` hooks para garantir que cada teste comece em uma sessão de navegador limpa.

---

## 🛠️ Tecnologias Utilizadas

* **Playwright (v1.58)** — Framework de automação de alta performance.
* **Cucumber JS (v12)** — Implementação nativa de BDD em JavaScript.
* **Node.js** — Ambiente de execução.
* **ES Modules (import/export)** — Padrão moderno de organização de código.

---

## 🏗️ Estrutura de Page Objects

O projeto divide as responsabilidades em páginas específicas para evitar scripts gigantes e difíceis de manter:

* **HomePage & LoginPage:** Gestão de acesso e autenticação.
* **CategoryPage:** Navegação entre os departamentos da loja.
* **ProductPage:** Listagem de produtos de uma categoria.
* **ProductDetailPage:** Validação de especificações e adição ao carrinho.
* **CartPage:** Validação final e fluxo de checkout.

---

## 📁 Estrutura de Pastas

```text
├── features/
│   ├── fluxo_compra.feature      # Especificações em BDD
│   ├── step_definitions/
│   │   └── steps.js              # Implementação dos passos
│   └── support/
│       └── hooks.js              # Configuração de Browser e Contexto
├── pages/
│   ├── HomePage.js               # Locators e ações da Home
│   ├── CategoryPage.js           # Navegação de categorias
│   ├── ProductPage.js            # Filtros e seleção de lista
│   ├── ProductDetailPage.js      # Detalhes do item selecionado
│   └── CartPage.js               # Checkout e validações
├── package.json                  # Dependências e scripts
└── cucumber.js                   # Configuração global do Cucumber

```

---

## 🚀 Como Executar

1. **Instale as dependências:**
```bash
npm install

```


2. **Execute os testes:**
```bash
npm test

```



---

## 💡 Diferenciais Técnicos

* **Locators Resilientes:** Uso de `this.page.locator(selector, { hasText: value })` para encontrar elementos de forma precisa em listas dinâmicas.
* **Assertions de Tela:** Uso do `expect(page).toHaveURL()` para garantir que a navegação ocorreu com sucesso antes de interagir com os elementos.
* **Configuração de Timeout:** `setDefaultTimeout(60000)` configurado nos hooks para lidar com a latência natural de sites de demonstração.
