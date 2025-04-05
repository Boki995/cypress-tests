import { expect } from 'chai';


describe('Add and Verify Comment on Ticket', () => {
    it('should add a comment and verify who left it, when, and the comment value', () => {
      cy.visit('/');
  
      cy.get('.issue-wrap')
        .contains('Task-9631')
        .click();
  
      const commentText = 'Comment text';
      cy.get('textarea[placeholder="Add a comment"]')
        .type(commentText)
        .should('have.value', commentText);
  
      cy.get('button').contains('Save').click();
  
      cy.get('issue-comment.ng-star-inserted > .relative > .pl-10')
        .should('contain', commentText)
        .and('contain', 'Trung Vo');

        cy.get('.pl-10 > .pb-2')
        .should('exist')
        .then(($time) => {
          const commentDate = new Date($time.text());
          const today = new Date();
          
          // Check if the comment date is today
          expect(commentDate.toDateString()).to.equal(today.toDateString());
        });
  
  
      cy.screenshot(); // Take a screenshot when the test is done
    });
  });
  