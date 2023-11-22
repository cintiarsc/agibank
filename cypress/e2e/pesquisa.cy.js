describe('Testes Agibank FrontEnd', function () {
    const THREE_SECONDS_IN_MS = 3000
    beforeEach(function () {
        cy.visit('https://blogdoagi.com.br/')
    })

     it('Cenário 1 - Validar comportamento da lupa', function () {
        cy.get('#search-open').click()
        cy.get('.desktop-search > .search-form > label > .search-field').type('Teste')
        cy.get('.desktop-search > .search-form > .search-submit').click()
        cy.url().should('be.equal', 'https://blogdoagi.com.br/?s=Teste')
    })
    
    it('Cenário 2 - Validar pesquisa sem preenchimento', function () {
        cy.get('#search-open').click()
        cy.get('.desktop-search > .search-form > label > .search-field')
        cy.get('.desktop-search > .search-form > .search-submit').click()
        cy.url().should('be.equal', 'https://blogdoagi.com.br/?s=')
    })
 
 
 


  

   

  



 

   



   

 

 



 



 

  

 


  

 
})


