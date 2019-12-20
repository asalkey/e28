describe('post-page', () => {

    let post = {
            "id": 1,
            "post_title": "My first post",
            "post_content": "This is my very first post!",
            "post_date": "10/12/2019",
            "post_author": "Andrea"
    }
    
    let rating = {
            "comment": "This is my very first review!It's a very long review to meet the minimum. This review belongs to the first post",
            "score":1,
            "author": "Andrea"
    }
    
    it('shows post', () => {
        cy.visit('/post/' + post.id);
        cy.contains('[data-test="post-title"]', post.post_title);
        cy.contains('[data-test="post-date"]', post.post_date);
        cy.contains('[data-test="post-content"]', post.post_title);
        cy.contains('[data-test="post-author"]', post.post_author);
    })

    it('add to faves', () => {
        cy.visit('/post/' + post.post_id);
        cy.get('[data-test="faves-button"]').click();
        cy.get('[data-test="faves-confirmation"]').should('exist');
        
        cy.visit('/faves');
        cy.contains('[data-test="faves"]', post.post_title);

        cy.get('[data-test="remove-fave"]').click();
        cy.contains('[data-test="faves"]', 'No faves');
    })
    
    
    it('add review', () => {
        cy.visit('/post/' + post.post_id);
        cy.get('[data-test="rating-author"]').type(rating.author);
        cy.get('[data-test="rating-comment"]').type(rating.comment);
        cy.get('[data-test="rating-score"]').type(rating.score);
        cy.get('[data-test="rating-button"]').click();
        cy.get('[data-test="rating-confirmation"]').should('exist');
        
        cy.visit('/ratings');
        cy.contains('[data-test="rating-page-author"]', rating.author);
        cy.contains('[data-test="rating-page-comment"]', rating.comment);
        cy.contains('[data-test="rating-page-score"]', rating.score);
        cy.contains('[data-test="rating-page-post"]', post.post_title);
    });
})
