///<reference types="cypress" />

describe('Teste de Automacao UI', () => {
  
  beforeEach(() => {
    cy.login()
  })
  context('Suite 1 - Carrinho de Compras', () => {
    
    it('Cenario 1', () => {
      cy.inclusaoUnicoProdutoCarrinho()
    })

    it('Cenario 2', () => {
      cy.validacaoValorCarrinho()
    })
  })

  context('Suite 2 - Cadastro', () => {
    it('Cenario 1', () => {
      cy.preencherNovoUsuarioCadastro()
    })
  })
})