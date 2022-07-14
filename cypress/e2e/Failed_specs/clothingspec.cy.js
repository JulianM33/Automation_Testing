describe('empty test', () => {
  it('passes', () => {

    const email = 'julian.meijerink@gmail.com'
    const password = 'Ferrari123!'

    // Given we are at the login page:
    cy.visit('https://my.asos.com/identity/login')
    
    // When entering correct credentials
    cy.get('#EmailAddress')
    .type(email)

    cy.get('#Password')
    .type(password)

    cy.get('#signin').first().click()
  })
})

