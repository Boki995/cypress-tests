describe('Ticket Resizing and deleting', () => {
  it('should expand opened ticket', () => {
    cy.visit('/');
    cy.contains('Task-9631').click();  // Select a ticket

    
    cy.get('[icon="expand"] > .btn').click();
    cy.get('.overlay').click(); // Simulate dragging
    cy.get('[icon="trash"] > .btn > .ng-star-inserted > svg').click(); 

    cy.contains('Delete').click();

    //Check if ticket does not exist anymore
    cy.contains('Task-9631').should('not.exist'); 
  });
});