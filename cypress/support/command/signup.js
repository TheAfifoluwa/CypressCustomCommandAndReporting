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

Cypress.Commands.add('typeWebsite', () => { 
    
    cy.get('#website').should('be.visible').type(faker.company.buzzNoun)

})

Cypress.Commands.add('typeInstagram', () => { 
    
    cy.get('#instagramHandle').should('be.visible').type(faker.company.buzzNoun)

})

Cypress.Commands.add('typeTwitter', () => { 
    
    cy.get('#twitterHandle').should('be.visible').type(faker.company.buzzNoun)

})

Cypress.Commands.add('clickMimaAwareness', () => { 
    cy.get('.sc-cPiKLX.iafYdr').should('be.visible').click()
    
    
})

Cypress.Commands.add('clickSelectOption', () => { 
    cy.get('#scrollableDiv > div:nth-child(2)').should('be.visible').click()
    
    
})

Cypress.Commands.add('typePassword', () => { 
    
    cy.get('#password').should('be.visible').type('Password1$')

})

Cypress.Commands.add('clickFinalSignUp', () => { 
    cy.get('div > div.sc-jXbUNg.fvamil > button').should('be.visible').click()
    
    
})
