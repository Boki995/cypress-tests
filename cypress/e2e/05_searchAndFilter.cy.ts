describe('Search and Filter Tickets', () => {
    it('should search for "Angular", apply filters, and verify exactly two issues', () => {
      cy.visit('/');
        
      //Get Input fileds
      cy.get('.input')
        .type('Angular')
        .should('have.value', 'Angular');
        
        //Enable filter for my issue
        cy.get(':nth-child(3) > .btn')
        .click();
        //Enable filter to ignore resolved
        cy.get(':nth-child(4) > .btn')
        .click();
  
        //Check if there are only 2 issues left
        cy.get('.issue-wrap')
        .should('have.length', 2);
    });
  });
  