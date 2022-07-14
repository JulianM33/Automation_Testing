describe('empty spec', () => {
  it('passes', () => {

    const email = 'julian.meijerink@gmail.com'
    const password = 'Ferrari123!'

    // Given we are at the login page:
    cy.visit('https://exercism.org/users/sign_in')
    cy.clearCookies()
    
    // When entering correct credentials
    cy.get('#user_email')
    .type(email)

    cy.get('#user_password')
    .type(password)

    // And click login button
    // cy.get('.loge1w6mdco0 gamut-1fal8ry-ResetElement-createButtonComponent e1bhhzie0in-btn').click()

    cy.get('.btn-primary.btn-l').first().click()
    // We are logged in
    cy.url().should('include', '/dashboard')
  })
})