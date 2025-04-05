describe('Search and Filter Tickets', () => {
    it('should search for "Angular", apply filters, and verify exactly two issues', () => {
      cy.visit('/');
  
      cy.get('.input')
        .type('Angular')
        .should('have.value', 'Angular');
  
        cy.get(':nth-child(3) > .btn')
        .click();
  
        cy.get(':nth-child(4) > .btn')
        .click();
  
      cy.get('.issue-wrap')
        .should('have.length', 2);
    });
  });
  