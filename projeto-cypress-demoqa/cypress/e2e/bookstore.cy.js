describe('Página Book Store', () => {
  it('Lista de livros deve aparecer', () => {
    cy.visit('https://demoqa.com/books');
    cy.get('.rt-table').should('be.visible');
    cy.get('.rt-tbody .rt-tr-group').should('have.length.greaterThan', 0);
  });

  it('Detalhes de um livro devem ser exibidos ao clicar', () => {
    cy.get('.rt-tbody .rt-tr-group').first().click();
    cy.get('#title-wrapper').should('contain.text', 'Title');
    cy.get('#isbn-wrapper').should('contain.text', 'ISBN');
  });
});