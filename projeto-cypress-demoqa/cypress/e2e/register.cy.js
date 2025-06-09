describe('Página de Registro', () => {
  it('Verifica visibilidade dos campos e CAPTCHA bloqueando envio', () => {
    cy.visit('https://demoqa.com/register');
    cy.get('#userName').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('#newUser').should('be.visible');
    cy.get('#register').click();
    cy.get('.recaptcha-checkbox-border').should('exist'); 
  });
});