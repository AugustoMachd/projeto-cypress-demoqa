describe('Página de Login', () => {
  it('Login com dados inválidos deve exibir mensagem de erro', () => {
    cy.visit('https://demoqa.com/login');
    cy.get('#userName').type('usuario_falso');
    cy.get('#password').type('senha_falsa');
    cy.get('#login').click();
    cy.get('#name').should('contain.text', 'Invalid username or password!');
  });
});