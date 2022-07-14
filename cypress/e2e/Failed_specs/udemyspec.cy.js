describe('empty spec', () => {
  it('passes', () => {

    const email = 'julian.meijerink@gmail.com'
    const password = 'Ferrari123!'

    // Given we are at the login page:
    cy.visit('https://www.udemy.com/join/login-popup/')
    
    // When entering correct credentials
    cy.get('#email--1')
    .type(email)

    cy.get('#form-item-password')
    .type(password)

    // And click login button
    // cy.get('.loge1w6mdco0 gamut-1fal8ry-ResetElement-createButtonComponent e1bhhzie0in-btn').click()

    cy.get('#submit-id-submit').click()
    // We are logged in
    cy.url().should('include', '/dashboard')
  })
})