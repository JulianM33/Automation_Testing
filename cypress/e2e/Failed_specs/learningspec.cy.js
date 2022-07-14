describe('empty test', () => {
  it('passes', () => {

    const email = 'julian.meijerink@gmail.com'
    const password = 'Ferrari123!'

    // Given we are at the login page:
    cy.visit('https://www.martinguitar.com/login')
    
    // When entering correct credentials
    cy.get('#login-form-email')
    .type(email)

    cy.get('#login-form-password')
    .type(password)

    cy.get('.btn.btn-block.btn-primary').first().click()
  })
})

