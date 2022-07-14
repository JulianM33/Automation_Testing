describe('empty test', () => {
  it('passes', () => {

    const email = 'julian.meijerink@gmail.com'
    const password = 'Ferrari123!'

    // Given we are at the login page:
    cy.visit('https://www.guitar-pro.com/login')
    
    // When entering correct credentials
    cy.get('name="email"')
    .type(email)

    cy.get('name="password"')
    .type(password)

    cy.get('#submit-login').click()
  })
})

