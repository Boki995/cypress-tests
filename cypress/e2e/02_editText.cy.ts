describe('Edit Ticket', () => {

    it('Store text', function () {
  
      cy.visit('/');

      cy.get('#Backlog > :nth-child(1) > .issue-wrap > .issue > .pb-3')
      .invoke('text') 
      .then((text) => {
        
        cy.writeFile('cypress/fixtures/data.json', { text });
    });
});

it('Edit Ticket Text', function () {
      cy.visit('/');

      cy.contains('Each issue has a single reporter but can have multiple assignees.').click();
  
      cy.get('issue-title > .cdk-textarea-autosize')
        .focus()
        .clear()  
        .type('Updated Ticket Name')
        .should('have.value', 'Updated Ticket Name');
        

       cy.fixture('data.json').then((data) => {
      const extractedText = data.text;  // Get the stored text

      // Input the extracted text into a form field
      cy.get('.ql-editor').click();
        cy.wait(500)

        cy.get('.ql-editor')
        .type(extractedText) 
        .should('contain', extractedText);
     
        cy.get('.mr-2 > .btn')
        .click();
    
    });
    });

});