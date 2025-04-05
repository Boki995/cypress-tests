import '@4tw/cypress-drag-drop';

describe('Drag and Drop Ticket', () => {
    it('should drag the ticket from one column to another', () => {
      
      cy.visit('/');
  
      // Get the ticket
      cy.get('.issue-wrap')
        .contains('Task-9631') 
        .should('be.visible') 
        .as('ticket'); 
  
      // Get the column Selected for Development
      cy.get('#Selected')
        .should('be.visible')
        .as('sourceColumn'); // Alias the source column
  
      // Get the column In Progress
      cy.get('#InProgress')
        .should('be.visible')
        .as('destinationColumn'); 
  
      // Perform the drag-and-drop action
      cy.get('@ticket').drag('@destinationColumn', { force: true });
  
      /*
      cy.get('@destinationColumn')
        .contains('Task-9631')
        .should('exist');
  
      // Optionally, verify the ticket has been removed from the original column
      cy.get('@sourceColumn')
        .should('not.contain', 'Task-9631');
*/
        });
  });
  