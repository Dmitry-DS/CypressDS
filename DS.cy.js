describe('Логін на сторінці https://cliniccards.com/', () => {
  it('Помилка при порожньому введенні логіна і пароля', () => {

    cy.visit('https://cliniccards.com/');

    cy.get('#newMenuTopLine #loginButton').click();
    cy.get('.loginFormWrap h2').should('be.visible').should('have.text', 'Вхід')
    
    cy.get('#loginForm').should('be.visible')

    cy.get('#loginForm img').should('be.visible')
    cy.get('.hr').should('be.visible').should('have.text', 'або')

    cy.get('.form-group').should('be.visible')

    cy.get('.input-icon').should('be.visible')
    cy.get('#email').should('be.visible')

    cy.get('.form-group').should('be.visible')
    cy.get('.input-icon').should('be.visible')
    cy.get('#password').should('be.visible')

    cy.get('.form-group.center-block.underFormActions').should('be.visible')
    cy.get('#loginForm > div.form-group.center-block.underFormActions > label').should('be.visible').contains('Запам\'ятати')
    
    cy.get('.form-actions.text-center').should('be.visible').click();

    cy.get('#emailError').should('be.visible').should('have.text', 'Введіть коректний Email')
    cy.get('#loginForm > div:nth-child(10) > span').should('be.visible').should('have.text', 'Введіть пароль')
    
  });
});
