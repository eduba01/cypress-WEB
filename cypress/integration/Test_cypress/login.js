/// <reference types="Cypress" />


describe('Validate Tests', () =>{
    
    it('Deve inserir uma conta', () =>{
        cy.visit('https://barrigareact.wcaquino.me/')

        cy.get('[data-test=email]').type('eduardo333@cy.com')
        cy.get('[data-test=passwd]').type('123456')
        cy.get('.btn').click()

        cy.get('.toast-message').should('be.visible')
        .and('contain','Bem vindo, Eduardo Teste!')

        cy.get('[data-test=menu-settings]').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test=nome]').type('Conta aluguel')
        cy.get('.btn').click()
        cy.get('.toast-message').should('be.visible')
        cy.wait(5000)
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > .far').click()

    })
})
 