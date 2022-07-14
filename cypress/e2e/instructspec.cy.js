describe('empty test', () => {
  it('passes', () => {

    const email = 'user_instruct_4949'
    const password = 'Ferrari123!'

    // Given we are at the home page:
    cy.visit('https://www.instructables.com/account/login/')
    cy.wait(500)
    
    cy.get('.input-large').first()
    .type(email, {force: true})

    cy.get('.input-large').eq(1)
    .type(password, {force: true})

    cy.get('.btn.btn-large.btn-primary.btn-yellow.auth-action.login').click({force: true})
    
    cy.get('#you-image').click({force: true})

    cy.get('.btn.btn-default.btn-logout').click({force: true})
    
  })
})

