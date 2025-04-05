
describe('Change Assignee and Status of a Ticket', () => {

 

it('Change status of ticket', function () {

  cy.visit('/');
  
    cy.contains('Who is the author of Angular Jira clone').click();

    // Change status
    cy.get('issue-status > .ant-dropdown-trigger > .btn').click();
    cy.get('.ant-dropdown > .mt-3 > :nth-child(1)').click()
    cy.get('issue-status > .ant-dropdown-trigger > .btn > span')
    .should('contain',' Selected for Development');

    cy.wait(1000);
    // Checking if assinge existis already
    cy.get('svg-icon[title="Remove user"]', { timeout: 10000 }).then($icon => {
      if ($icon.length > 0) {
        
        cy.wrap($icon).click({ force: true });

        cy.wait(500);  
      }
    });

    // Add new assignee
    cy.get('.ant-dropdown-link').click(); 
    cy.contains('Thor').click(); 

    
    cy.get('button').contains('Thor').should('be.visible');

    cy.get('[icon="times"] > .btn').click();
    
    cy.get('#Selected') 
    .find('.issue') 
    .contains('Task-9554') 
    .should('exist');
  });

});