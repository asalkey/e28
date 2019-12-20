describe('posts-page', () => {

    let post = {
            "id": 1,
            "post_title": "My first post",
            "post_content": "This is my very first post!",
            "post_date": "10/12/2019",
            "post_author": "Andrea"
    }
    
    it('shows all posts', () => {

        cy.visit('/posts')
        cy.contains('h2', 'Posts')

        cy.get('[data-test="post-link"]').its('length').should('be.gte', 5);

        cy.contains('[data-test="post-link"]', post.post_title)
        
        cy.get('[data-test="post-link').contains(post.post_title).click();


    })

})
