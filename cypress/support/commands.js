///<reference types="cypress" />

import loc from '../support/locators'
import { faker } from '@faker-js/faker'

Cypress.Commands.add('login', () => {
    cy.visit('')
    cy.get(loc.CARRINHO.LOGO).as('Validacao Pagina').should('be.visible')
    cy.title().as('Validacao Titulo').should('eq', Cypress.env('titulo_aba'))    
})

Cypress.Commands.add('inclusaoUnicoProdutoCarrinho', () => {
    cy.get(loc.CARRINHO.CAMPO_TEXTO_BUSCA).type(Cypress.env('produto_1'))
    cy.get(loc.CARRINHO.BOTAO_BUSCAR).click()
    cy.get(loc.CARRINHO.PRODUTO).contains(Cypress.env('produto_1')).click()
    cy.get(loc.CARRINHO.TITULO_PRODUTO).as('Validacao Produto Correto').should('contain.text', Cypress.env('produto_1'))
    cy.get(loc.CARRINHO.BOTAO_ADICIONAR_CARRINHO).click()
    cy.get(loc.CARRINHO.CAMPO_MENSAGEM_CARRINHO).as('Validacao Inclusao Carrinho').should('contain.text', Cypress.env('texto_adicao_carrinho'))
    cy.get(loc.CARRINHO.CAMPO_PRODUTO_ADICIONADO).as('Validacao Produto Carrinho').should('contain', Cypress.env('produto_1'))
})

Cypress.Commands.add('validacaoValorCarrinho', () => {
    cy.get(loc.CARRINHO.CAMPO_TEXTO_BUSCA).type(Cypress.env('produto_1'))
    cy.get(loc.CARRINHO.BOTAO_BUSCAR).click()
    cy.get(loc.CARRINHO.PRODUTO).contains(Cypress.env('produto_1')).click()
    cy.get(loc.CARRINHO.TITULO_PRODUTO).as('Validacao Produto 1').should('contain.text', Cypress.env('produto_1'))
    cy.get(loc.CARRINHO.BOTAO_ADICIONAR_CARRINHO).click()
    cy.get(loc.CARRINHO.CAMPO_TEXTO_BUSCA).type(Cypress.env('produto_2'))
    cy.get(loc.CARRINHO.BOTAO_BUSCAR).click()
    cy.get(loc.CARRINHO.PRODUTO).contains(Cypress.env('produto_2')).click()
    cy.get(loc.CARRINHO.TITULO_PRODUTO).as('Validacao Produto 2').should('contain.text', Cypress.env('produto_2'))
    cy.get(loc.CARRINHO.BOTAO_ADICIONAR_CARRINHO).click()
    cy.get(loc.CARRINHO.CAMPO_TEXTO_BUSCA).type(Cypress.env('produto_3'))
    cy.get(loc.CARRINHO.BOTAO_BUSCAR).click()
    cy.get(loc.CARRINHO.PRODUTO).contains(Cypress.env('produto_3')).click()
    cy.get(loc.CARRINHO.TITULO_PRODUTO).as('Validacao Produto 3').should('contain.text', Cypress.env('produto_3'))
    cy.get(loc.CARRINHO.BOTAO_ADICIONAR_CARRINHO).click()
    cy.get(loc.CARRINHO.VALIDACAO_TOTAL_CORRETO).as('Validacao Soma Produtos').should('contain', Cypress.env('valor_total_carrinho'))
})

Cypress.Commands.add('preencherNovoUsuarioCadastro', () => {
    const user = {
        name: faker.name.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password()
      }

    cy.get(loc.CADASTRO.BOTAO_CONTAS).click()
    cy.get(loc.CADASTRO.TITULO_FORM).as('Validacao Tela Login').should('contain.text', Cypress.env('titulo_login'))
    cy.get(loc.CADASTRO.BOTAO_CRIAR_CONTA).click()
    cy.get(loc.CADASTRO.TITULO_FORM).as('Validacao Criar Conta').should('contain.text', Cypress.env('titulo_criar_conta'))
    cy.get(loc.CADASTRO.CAMPO_NOME_COMPLETO).type(user.name)
    cy.get(loc.CADASTRO.CAMPO_EMAIL).type(user.email)
    cy.get(loc.CADASTRO.CAMPO_SENHA).type(user.password)
    cy.get(loc.CADASTRO.CAMPO_SENHA_VALIDACAO).type(user.password)
})

Cypress.Commands.add("buscaPorNomeCidade", (query) => {
    cy.request({
        url: Cypress.env('url_API'),
        qs: {
            q: query,
            units: "metric",
            appid: Cypress.env('API_Key_Weather')
        }
    })
})

Cypress.Commands.add("buscaPorNomeCidadeInvalida", (query) => {
    cy.request({
        url: Cypress.env('url_API'),
        qs: {
            q: query,
            units: "metric",
            appid: Cypress.env('API_Key_Weather')
        },
        failOnStatusCode: false
    })
})

Cypress.Commands.add("buscaPorNomeCidadeAppIdInvalido", (query) => {
    cy.request({
        url: Cypress.env('url_API'),
        qs: {
            q: query,
            units: "metric",
            appid: null
        },
        failOnStatusCode: false
    })
})

Cypress.Commands.add("buscaPorNomeCidadeInexistente", (query) => {
    cy.request({
        url: Cypress.env('url_API'),
        qs: {
            q: "Cidade Inexistente",
            units: "metric",
            appid: Cypress.env('API_Key_Weather')
        },
        failOnStatusCode: false
    })
})

Cypress.Commands.add("buscaPorID", (id) => {
    cy.request({
        url: Cypress.env('url_API'),
        qs: {
            id: id,
            units: "metric",
            appid: Cypress.env('API_Key_Weather')
        }
    })
})

Cypress.Commands.add("buscaPorIDInvalida", (id) => {
    cy.request({
        url: Cypress.env('url_API'),
        qs: {
            id: id,
            units: "metric",
            appid: Cypress.env('API_Key_Weather')
        },
        failOnStatusCode: false
    })
})

Cypress.Commands.add("buscaPorApiKeyInvalida", (id) => {
    cy.request({
        url: Cypress.env('url_API'),
        qs: {
            id: id,
            units: "metric",
            appid: null
        },
        failOnStatusCode: false
    })
})

Cypress.Commands.add("buscaPorIDInexistente", (id) => {
    cy.request({
        url: Cypress.env('url_API'),
        qs: {
            id: '999999999999999',
            units: "metric",
            appid: Cypress.env('API_Key_Weather')
        },
        failOnStatusCode: false
    })
})