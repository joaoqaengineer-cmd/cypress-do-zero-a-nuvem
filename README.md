# 🧪 Projeto de Testes Automatizados com Cypress — Do Zero à Nuvem

## 📌 Descrição do Projeto

Este projeto tem como objetivo demonstrar a criação e manutenção de **testes automatizados end‑to‑end (E2E)** utilizando o **Cypress**, seguindo boas práticas de qualidade de software.

Ele faz parte de um **projeto de estudo/curso**, mas foi estruturado com padrões profissionais para que qualquer pessoa possa clonar o repositório, entender rapidamente o contexto e contribuir com novos testes.

Os testes simulam cenários reais de uso da aplicação, incluindo execução em **viewport desktop e mobile**, validações funcionais e boas práticas de automação.

---

## 🚀 Tecnologias Utilizadas

* **Node.js**: 18.x (LTS)
* **npm**: 9.x ou superior
* **Cypress**: 13.x
* JavaScript (ES6+)
* Git & GitHub

---

## ✅ Pré-requisitos

> ⚠️ **Importante:** as versões abaixo foram utilizadas durante o desenvolvimento do projeto. Outras versões podem funcionar, mas não são garantidas.

Antes de começar, você precisará ter instalado em sua máquina:

* **Node.js** (versão LTS)
* **npm** (instalado junto com o Node.js)
* **Git**
* Um editor de código (recomendado: **VS Code**)

Para verificar se tudo está instalado corretamente:

```bash
node -v
npm -v
git -v
```

---

## 📦 Instalação do Projeto

1. Clone o repositório:

```bash
git clone https://github.com/joaoqaengineer-cmd/cypress-do-zero-a-nuvem.git
```

2. Acesse a pasta do projeto:

```bash
cd cypress-do-zero-a-nuvem

```

3. Instale as dependências:

```bash
npm install
```

---

## ▶️ Executando os Testes

### 🔹 Abrir o Cypress Runner (modo interativo)

```bash
npx cypress open
```

Ou utilizando script:

```bash
npm run cy:open
```

---

### 🔹 Executar os testes em modo headless

```bash
npx cypress run
```

Ou utilizando script:

```bash
npm run cy:run
```

---

## 📱 Execução em Viewport Mobile

O projeto possui scripts específicos para simular a execução dos testes em **dispositivos móveis** (410x860):

### Abrir o Cypress Runner em viewport mobile

```bash
npm run cy:open:mobile
```

### Executar os testes em modo headless (mobile)

```bash
npm run cy:run:mobile
```

Esses scripts são ideais para simular testes mobile localmente ou em pipelines de CI/CD.

---

## 🗂️ Estrutura do Projeto

```bash
cypress/
├── e2e/            # Casos de teste E2E
├── fixtures/       # Massa de dados
├── support/        # Comandos customizados e configurações
package.json
cypress.config.js
README.md
```

---

## 🧠 Boas Práticas Aplicadas

* Testes independentes
* Uso de fixtures para dados
* Scripts reutilizáveis
* Execução em diferentes viewports (desktop e mobile)
* Estrutura organizada e escalável
* Documentação clara e objetiva

---

## 🤝 Contribuição

Contribuições são bem-vindas!

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas alterações (`git commit -m 'feat: nova feature'`)
4. Faça o push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

---

## 👨‍💻 Autor


João Guilherme  
QA Engineer | Testes Automatizados & Manuais | Cypress | CI/CD  

QA Engineer apaixonado por testes automatizados e manuais, focado em excelência em software. Sempre aprendendo e buscando novos desafios.

🔗 GitHub: https://github.com/joaoqaengineer-cmd  
🔗 LinkedIn: https://www.linkedin.com/in/joão-guilherme-silva-b57bb2383

---

⭐ Se este projeto te ajudou de alguma forma, considere deixar uma estrela no repositório!
