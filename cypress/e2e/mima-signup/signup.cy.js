import {faker} from '@faker-js/faker'

describe('Signup Test Scenarios', () => {
  it.only('user should be able to successfully signup filling all fields', () => {
    cy.fixture('selectors').then((data) => {
    cy.clickAnyElement(data.landingSignUpButton)
    cy.typeInAField(data.fullName, faker.person.fullName())
    cy.typeInAField(data.businessName, faker.company.buzzNoun())
    cy.typeInAField(data.businessEmail, faker.internet.email())
    cy.typeInAField(data.phoneNumber, faker.phone.number('+23456########'))
    cy.typeInAField(data.businessRegNum, 'NG-3828221')
    cy.clickAnyElement(data.nextButton)

// Custom action  using the command folder created in supprot
    // cy.clickSignUpHomePageButton()
    // cy.typeFullName()
    // cy.typeBusinessName()
    // cy.typeBusinessEmail()
    // cy.typephoneNumber()
    // cy.typebuzRegNum()
    // cy.clickNextButton()
    
    // cy.get('#website').should('be.visible').type('fiyinherecypress.com')

    // cy.get('#instagramHandle').should('be.visible').type('theafifoluwa')

    // cy.get('#twitterHandle').should('be.visible').type('theafifoluwa')

    // cy.get('.sc-cPiKLX.iafYdr').should('be.visible').click()

    // cy.get('#scrollableDiv > div:nth-child(2)').should('be.visible').click()

    // cy.get('#password').should('be.visible').type('Password1$')


  })
})
})