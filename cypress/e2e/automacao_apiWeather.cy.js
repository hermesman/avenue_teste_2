///<reference types="cypress" />

import { formatCityName } from "../helpers/formatCityName"

describe('Teste de Automacao API', () => {
    let cidades = require("../fixtures/cidadesData.json")

    context('Suite 1 - Busca por ID',{ tags: '@api_id'}, () => {

        it("Deve retornar Status Code 200", () => {
            for (let i = 0; i < cidades.length; i++) {
                cy.buscaPorID(cidades[i].id).then((response) => {
                    expect(response.status).to.eq(200);
                })
            }
        })

        it("Deve retornar o ID e o Name correto", () => {
            for (let i = 0; i < cidades.length; i++) {
                cy.buscaPorID(cidades[i].id).then((response) => {
                    expect(response.body.id).to.eql(cidades[i].id);
                    expect(response.body.name).to.eql(formatCityName(cidades[i].name));
                })
            }
        })

        it("Deve retornar um schema valido", () => {
            for (let i = 0; i < cidades.length; i++) {
                cy.buscaPorID(cidades[i].id).then((response) => {
                    expect(response.body).have.property("coord").to.be.an("object");
                    expect(response.body)
                        .have.property("weather")
                        .to.be.an("array");
                    expect(response.body).have.property("wind").to.be.an("object");
                    expect(response.body)
                        .have.property("clouds")
                        .to.be.an("object");
                    expect(response.body).have.property("name").to.be.a("string");
                    expect(response.body).have.property("id").to.be.a("number");
                })
            }
        })

        it("Deve retornar Status Code 400 para ID Invalido", () => {
            cy.buscaPorIDInvalida().then((response) => {
                expect(response.status).to.eq(400);
                expect(response.body.message).to.eq(Cypress.env('messagem_body_error400'));
                expect(response.isOkStatusCode).to.eq(false);
                expect(response.statusText).to.eq(Cypress.env('messagem_text_error400'))
            })
        })

        it("Deve retornar Status Code 401 para Api Key Invalida", () => {
            cy.buscaPorApiKeyInvalida().then((response) => {
                expect(response.status).to.eq(401);
                expect(response.body.message).to.eq(
                  Cypress.env('messagem_body_error401')
                )
                expect(response.isOkStatusCode).to.eq(false);
                expect(response.statusText).to.eq(Cypress.env('messagem_status_error401'))
            })
        })

        it("Deve retornar Status Code 404", () => {
            cy.buscaPorIDInexistente().then((response) => {
                expect(response.status).to.eq(404)
                expect(response.body.message).to.eq(Cypress.env('messagem_body_error404'))
                expect(response.isOkStatusCode).to.eq(false)
                expect(response.statusText).to.eq(Cypress.env('messagem_status_error404'))
            })
        })
    })

    context('Suite 2 - Busca por Nome de Cidade',{ tags: '@api_name'}, () => {

        it("Deve retornar Status Code 200", () => {
            for (let i = 0; i < cidades.length; i++) {
                cy.buscaPorNomeCidade(cidades[i].name).then((response) => {
                    expect(response.status).to.eq(200);
                })
            }
        })

        it("Deve retornar o ID e o Nome correto", () => {
            for (let i = 0; i < cidades.length; i++) {
                cy.buscaPorNomeCidade(cidades[i].name).then((response) => {
                    expect(response.body.id).to.eql(cidades[i].id);
                    expect(response.body.name).to.eql(formatCityName(cidades[i].name));
                })
            }
        })

        it("Deve retornar um schema valido", () => {
            for (let i = 0; i < cidades.length; i++) {
                cy.buscaPorNomeCidade(cidades[i].name).then((response) => {
                    expect(response.body).have.property("coord").to.be.an("object");
                    expect(response.body)
                        .have.property("weather")
                        .to.be.an("array");
                    expect(response.body).have.property("wind").to.be.an("object");
                    expect(response.body)
                        .have.property("clouds")
                        .to.be.an("object");
                    expect(response.body).have.property("name").to.be.a("string");
                    expect(response.body).have.property("id").to.be.a("number");
                })
            }
        })

        it("Deve retornar Status Code 400 para Nome Invalido", () => {
            cy.buscaPorNomeCidadeInvalida().then((response) => {
                expect(response.status).to.eq(400);
                expect(response.body.message).to.eq(Cypress.env('messagem_body_error400'));
                expect(response.isOkStatusCode).to.eq(false);
                expect(response.statusText).to.eq(Cypress.env('messagem_text_error400'))
            })
        })

        it("Deve retornar Status Code 401 para Api Key Invalida", () => {
            cy.buscaPorNomeCidadeAppIdInvalido().then((response) => {
                expect(response.status).to.eq(401);
                expect(response.body.message).to.eq(
                  Cypress.env('messagem_body_error401')
                )
                expect(response.isOkStatusCode).to.eq(false);
                expect(response.statusText).to.eq(Cypress.env('messagem_status_error401'))
            })
        })

        it("Deve retornar Status Code 404", () => {
            cy.buscaPorNomeCidadeInexistente().then((response) => {
                expect(response.status).to.eq(404)
                expect(response.body.message).to.eq(Cypress.env('messagem_body_error404'))
                expect(response.isOkStatusCode).to.eq(false)
                expect(response.statusText).to.eq(Cypress.env('messagem_status_error404'))
            })
        })
    })
})