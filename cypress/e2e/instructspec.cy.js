describe('empty test', () => {
  it('passes', () => {

    const email = 'user_instruct_4949'
    const password = 'Ferrari123!'

    cy.wait(1000)
    // Given we are at the home page:
    cy.visit('https://www.instructables.com/account/login/')
    cy.wait(5000)
    
    // When filling in correct credentials
    cy.get('.input-large').first()
    .type(email, {force: true})

    cy.get('.input-large').eq(1)
    .type(password, {force: true})

    // And login button is clicked
    cy.get('.btn.btn-large.btn-primary.btn-yellow.auth-action.login').click({force: true})
    cy.wait(5000)
    
    // Then we end up on the home page
    cy.url().should('eq', 'https://www.instructables.com/')


    // When we click on our profile
    cy.get('#you-image').click({force: true})
    
    // And we click on logout text 
    cy.get('.btn.btn-default.btn-logout').click({force: true})

    cy.wait(5000)
    
    // Then we end up on the home page
    cy.url().should('eq', 'https://www.instructables.com/')

    // And Then we are logged out
    cy.contains('Log In')    
    
    cy.get('a[href*="login"]').click()

    // When filling in incorrect credentials
    cy.get('.input-large').first()
    .type('email', {force: true})

    cy.get('.input-large').eq(1)
    .type('password', {force: true})

    // And login button is clicked
    cy.get('.btn.btn-large.btn-primary.btn-yellow.auth-action.login').click({force: true})
    cy.wait(2000)
    
    // Then we obtain error message
    cy.contains('Sorry, we can\'t find that account, or your password didn\'t match. Please try again!')
    
  })
})

