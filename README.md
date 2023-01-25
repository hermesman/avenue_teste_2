# avenue_teste_2
Testes de automação de UI e API

# Pré-requisitos
É necessário ter Node.js e npm instalados para executar este projeto.

Usei as versões v16.13.2 e 8.19.2 de Node.js e npm, respectivamente. Sugiro que você use as mesmas versões LTS ou posteriores.

# Instalação
Execute 'npm install' (ou npm i para a versão curta) para instalar as dependências de desenvolvimento.

# Testes
Execute 'npm run cy:run' para executar o teste no modo headless.

Ou execute 'npm run cy:open' para abrir o aplicativo Cypress e executar os testes no modo interativo.

# Comandos com Tags

Execute 'npm run cy:run:ui' para executar todos os testes com a tag:@ui ( referentes a automação UI)
Execute 'npm run cy:run:api_id' para executar todos os testes com a tag:@api_id ( referentes a automação de API)
Execute 'npm run cy:run:api_name' para executar todos os testes com a tag:@api_id ( referentes a automação de API)


# Mapeando Cenários ( Questão 01 do Desafio Técnico - Avenue )

1: Cadastro de Usuário
  Este cenário é importante pois é a porta de entrada de novos clientes, onde deve ser mapeado todos os testes para que não haja impacto na captação de novos clientes, assim como bugs e comportamentos erráticos.
  
2: Acessar a conta
  Há destaque para este cenário devido a criticidade, pois é a feature onde os clientes já captadas acessam a plataforma Avenue para realizar suas atividades.
  
3: Fale a gente
  Este cenário ganha destaque pois tanto possiveis clientes como clientes podem tirar suas duvidas, além de ter esse contato direto com a corretora, evitando falhas de comunicação.
