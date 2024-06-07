
Cypress.Commands.add('clickSignUpHomePageButton', () => { 
    
        cy.get('.Header2_header__nav__btn__wRKfY div:nth-child(2) button').should('be.visible').click()

    
 })

 Cypress.Commands.add('clickLoginHomePageButton', () => { 
    
    cy.get('.Header2_header__nav__btn__wRKfY div:nth-child(1) button').should('be.visible').click()


})