//faker only works on the file you want to use it
import {faker} from '@faker-js/faker'

Cypress.Commands.add('typeFullName', () => { 
    
    cy.get('#fullname').should('be.visible').type(faker.person.fullName())


})

Cypress.Commands.add('typeBusinessName', () => { 
    
    cy.get('#businessname').should('be.visible').type(faker.company.buzzNoun)


})

Cypress.Commands.add('typeBusinessEmail', () => { 
    
    cy.get('#businessemail').should('be.visible').type(faker.internet.email)
    
})

Cypress.Commands.add('typephoneNumber', () => { 
    
    cy.get('#businessphonenumber').should('be.visible').type(faker.phone.number('+23456########'))
    
})

Cypress.Commands.add('typebuzRegNum', () => { 
    
    cy.get('#businessRegNum').should('be.visible').type('NG-3828221')
    
    
})

Cypress.Commands.add('clickNextButton', () => { 
    cy.get('button:nth-child(1)').should('be.visible').click()
    
    
})

