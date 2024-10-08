# JornadaMilhas - Aplicação Vue.js com TypeScript para Venda de Passagens Aéreas

## Descrição

JornadaMilhas é uma aplicação web para venda de passagens aéreas desenvolvida com Vue.js, TypeScript, Vuex, Clean Architecture e Repository Pattern, com foco em escalabilidade, manutenibilidade e testabilidade. O projeto visa proporcionar uma experiência de compra de passagens intuitiva e eficiente para os usuários, ao mesmo tempo em que oferece uma base de código robusta e organizada para desenvolvedores.

## Tecnologias Utilizadas

* **Vue.js:** Framework JavaScript progressivo para construção de interfaces de usuário.
* **TypeScript:** Superset de JavaScript que adiciona tipagem estática para melhorar a qualidade do código.
* **Vuex:** Biblioteca de gerenciamento de estado para aplicações Vue.js, centralizando o estado da aplicação e facilitando o acesso e modificação dos dados.
* **Clean Architecture:** Padrão de arquitetura de software que visa separar as responsabilidades do código em camadas independentes, promovendo a testabilidade e a reutilização.
* **Repository Pattern:** Padrão de design que abstrai a lógica de acesso a dados, permitindo a troca de diferentes fontes de dados sem afetar o restante da aplicação.
* **Vuelidate
* **ResultValue:** Classe para encapsular o resultado de operações, permitindo o tratamento de sucesso e erro de forma consistente.


## Estrutura do Projeto

A estrutura do projeto segue os princípios da Clean Architecture, dividindo o código em camadas:

* **Presentation:** Camada responsável pela interface do usuário, contendo componentes Vue.js e lógica de apresentação.
* **Domain:** Camada que define as regras de negócio da aplicação, contendo entidades, casos de uso e interfaces de repositório.
* **Data:** Camada responsável pelo acesso a dados, contendo implementações de repositórios que se comunicam com APIs externas ou bancos de dados.
