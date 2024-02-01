describe('Requisitions on Card', () => {

    it('POST create card', () => {
            
      cy.api({
        method: 'POST',
        url: 'https://api.trello.com/1/cards',
        qs: {
            idList: '65bac4488ce33d36afc2d3eb',
            key: Cypress.env('APIKey'),
            token: Cypress.env('APIToken'),
            name: "Teste Serasa"
        },
        headers: {
            accept: "application/json"
        }
      }).should((res) => {
        expect(res.status).equal(200)
        expect(res.body).not.empty
        Cypress.env('id_card', res.body.id)
        
    })
})
  
    it('GET this card', () => {
      cy.api({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${Cypress.env('id_card')}`,
        qs: {
          'key': Cypress.env('APIKey'),
          'token': Cypress.env('APIToken')
        },
      }).should((res) => {
        expect(res.status).equal(200)
        expect(res.body).not.empty
        
      })
    })
  
    it('DELETE this board', () => {
      cy.api({
        method: 'DELETE',
        url: `https://api.trello.com/1/cards/${Cypress.env('id_card')}`,
        qs: {
          'key': Cypress.env('APIKey'),
          'token': Cypress.env('APIToken')
        },
      }).should((res) => {
        expect(res.status).equal(200)
      })
    })
  })