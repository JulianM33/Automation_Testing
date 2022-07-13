describe('empty spec', () => {
  it('passes', () => {

    const email = 'j.a.m.meijerink@student.tudelft.nl'
    const password = 'Ferrar123!'

    // Given we are at the login page:
    cy.visit('https://wave-trial.getbynder.com/login/')

    // When entering correct credentials
    cy.get('#inputEmail')
    .type(email)

    cy.get('#inputPassword')
    .type(password)

    // And click login button
    cy.get('.login-btn').click()

    // We are logged in
    cy.url().should('include', '/account/dashboard/')
  })
})