describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })


  it.only('preenche os campos obrigatórios e envia o formulário', () => {
    const longText = Cypress._.repeat('olá Mundo !!!', 100)
    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Guilherme')
    cy.get('#email').type('jg@gui.com')
    cy.get('#open-text-area').type(longText, { delay: 0 })
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Guilherme')
    cy.get('#email').type('jggui.ll')
    cy.get('#open-text-area').type('óla mundo!!!')
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })

  it('mantém o campo telefone vazio ao digitar valor não numérico', () => {
    cy.get('#phone')
      .type('abcdef')
      .should('be.visible', '')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Guilherme')
    cy.get('#email').type('jg@gui.com')
    cy.get('input[type="checkbox"][value="phone"]')
      .check()
      .should('be.checked')
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    // Nome
    cy.get('#firstName')
      .type('João')
      .should('have.value', 'João')
      .clear()
      .should('have.value', '')

    // Sobrenome
    cy.get('#lastName')
      .type('Guilherme')
      .should('have.value', 'Guilherme')
      .clear()
      .should('have.value', '')

    // Email
    cy.get('#email')
      .type('jg@gui.com')
      .should('have.value', 'jg@gui.com')
      .clear()
      .should('have.value', '')

    // Telefone
    cy.get('#phone')
      .type('11999999999')
      .should('have.value', '11999999999')
      .clear()
      .should('have.value', '')
  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })

  it('envia o formuário com sucesso usando um comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success').should('be.visible')

  })

  it('Usando cy.contains', () => {
    cy.contains('Nome').type('João')
    cy.contains('Sobrenome').type('Guilherme')
    cy.contains('E-mail').type('jg@gui.com')
    cy.get('#open-text-area').type('óla mundo!!!')
    cy.contains('Enviar').click()

  })

  it('seleciona um produto (YouTube) por seu texto', () => {
    cy.get('#product')
      .select('youtube')
      .should('have.value', 'youtube')
  })

  it('seleciona um produto (Mentoria) por seu valor (value)', () => {
    cy.get('#product')
      .select('mentoria')
      .should('have.value', 'mentoria')
  })

  it('seleciona um produto (Blog) por seu índice', () => {
    cy.get('#product')
      .select(1)
      .should('have.value', 'blog')
  })

  it('marca o tipo de atendimento "Feedback"', () => {
    cy.get('input[type="radio"][value="feedback"]').check()
      .should('be.checked')

  })

  it('marca cada tipo de atendimento', () => {
    cy.get('input[type="radio"]').each(($radio) => {
      cy.wrap($radio)
        .check()
        .should('be.checked')
    })
  })

  it('marca ambos checkboxes, depois desmarca o último', () => {
    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')

      .last()
      .uncheck()
      .should('not.be.checked')
  })

  it(' seleciona um arquivo da pasta fixtures', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json')
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')

      })

  })

  it('seleciona um arquivo simulando um drag-and-drop', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
      .should(input => {
        expect(input[0].files[0].name).to.eq('example.json')

      })
  })

  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
    cy.fixture("example.json").as('sampleFile')
    cy.get('#file-upload')
      .selectFile('@sampleFile')
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })

  })

  it.only('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    cy.contains('a', 'Política de Privacidade')
      .should('have.attr', 'href', 'privacy.html')
      .and('have.attr', 'target', '_blank')
  })

  it.only('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    cy.contains('a', 'Política de Privacidade')
      .invoke('removeAttr', 'target')
      .click()

    cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
  })



  
})


 







