const locators ={

    CARRINHO : {
        LOGO: '#nav-logo-sprites',
        CAMPO_TEXTO_BUSCA: '#twotabsearchtextbox',
        CAMPO_MENSAGEM_CARRINHO: 'span[class="a-size-medium-plus a-color-base sw-atc-text a-text-bold"]',
        CAMPO_PRODUTO_ADICIONADO: '[class="aok-offscreen"]',
        VALIDACAO_TOTAL_CORRETO: '[class="a-size-base a-color-price a-text-bold"]', 
        BOTAO_BUSCAR: '#nav-search-submit-button',
        BOTAO_ADICIONAR_CARRINHO: '#add-to-cart-button',
        PRODUTO: 'span[class="a-size-base-plus a-color-base a-text-normal"]',
        TITULO_PRODUTO: '#productTitle'
    },

    CADASTRO : {
        LOGO: '#nav-logo-sprites',
        BOTAO_CONTAS: '#nav-link-accountList',
        BOTAO_CRIAR_CONTA: '#createAccountSubmit',
        TITULO_FORM: 'h1[class="a-spacing-small"]',
        CAMPO_NOME_COMPLETO: '#ap_customer_name',
        CAMPO_EMAIL: '#ap_email',
        CAMPO_SENHA: '#ap_password',
        CAMPO_SENHA_VALIDACAO: '#ap_password_check'
    }
}

export default locators;