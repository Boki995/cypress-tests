describe('Create Issue and Verify', () => {
    it('should create a new issue and save title to fixture', () => {
      cy.visit('/');
  
      const now = new Date();
      const formattedDate = now.toLocaleDateString('en-GB').replace(/\//g, '-');
      const formattedTime = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }); 

      const issueTitle = `Cypress Test Ticket ${formattedDate} ${formattedTime}`;
  
      cy.get('[data-icon="plus"]').click();

      cy.get('issue-type-select > .ant-select > .ant-select-selector').click(); 
      cy.get('.ant-select-item-option-content span')
      .contains('Bug')
      .click();

      cy.get('issue-priority-select > .ant-select > .ant-select-selector').click();
      cy.get('.ant-select-item-option-content')
      .last() 
      .click();


      cy.get(':nth-child(3) > .form-input').type(issueTitle);
      cy.get('.ql-editor')
      .type('This issue was created automatically during a test.');
      
      
      cy.get('issue-assignees-select > .ant-select > .ant-select-selector').click();
      cy.contains('Thor').click();
      cy.get('button[type="submit"]').contains('Create').click();
  
      cy.get('.issue-wrap').contains(issueTitle).should('be.visible');
  
      cy.writeFile('cypress/fixtures/data.json', { issueTitle });
    });
  });
  