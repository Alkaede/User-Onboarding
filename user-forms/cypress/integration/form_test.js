describe('Page successfully loaded', () => {

  //visits the page for everything i do; avoids having to do cy.visit for each time i do an it statement
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  })

  //const setups
  const fName = () => cy.get('input[name=first_name]');
  const lName = () => cy.get('input[name=last_name]');
  const email = () => cy.get('input[name=email]');
  const pass = () => cy.get('input[name=password');
  const baseRole = () => cy.get('select[name=role]');
  const ckBx = () => cy.get('[type=checkbox]');
  const btn = () => cy.get('button');
  const smry = () => cy.get('summary').contains('Terms of Service');

  describe('Custom inputs', () =>{

    it('Can check inputs', () => {
      // checking to see if our elements are actually existing and the button is disabled
      fName().should('exist');
      lName().should('exist');
      email().should('exist');
      pass().should('exist');
      baseRole().should('exist');
      ckBx().should('exist');
      btn().should('exist').should('be.disabled');
    })
  
    it('Can input into the correct fields, validate, and reset inputs', ()=>{
    // Inputs
      fName()
        .should('have.value', '')
        .type('Jotaro')
        .should('have.value', 'Jotaro')
      lName()
        .should('have.value', '')
        .type('Kujo')
        .should('have.value', 'Kujo')
      email()
        .should('have.value', '')
        .type('bizarre@adventure.com')
        .should('have.value', 'bizarre@adventure.com')
      pass()
        .should('have.value', '')
        .type('12345678')
        .should('have.value', '12345678')
      baseRole()
        .should('have.value', '')
        .select('Student')
        .should('have.value', 'Student')
        .select('Instructor')
        .should('have.value', 'Instructor')
      ckBx()
        .check()
      btn()
        .should('be.enabled')
        .click()

      //This is the container that appears when data is input
      cy.contains('Jotaro Kujo')
      cy.contains('Email: bizarre@adventure.com')
      cy.contains('Role: Instructor')
      
      // after inputs, these values should have reset
      fName().should('have.value', '');
      lName().should('have.value', '');
      email().should('have.value', '');
      baseRole().should('have.value', '');
      ckBx().uncheck();
    })

    describe('ToS should be interactable', () => {
      it('Checking the ToS', () => {
        // opens ToS
        smry().click();
        // Closes ToS
        smry().click();
      })
    })
    
    describe('Multiple inputs w/o refresh', () => {
      it('Can apply multiple inputs', () => {
    // First input
        fName()
        .should('have.value', '')
        .type('Jotaro')
        .should('have.value', 'Jotaro')
      lName()
        .should('have.value', '')
        .type('Kujo')
        .should('have.value', 'Kujo')
      email()
        .should('have.value', '')
        .type('bizarre@adventure.com')
        .should('have.value', 'bizarre@adventure.com')
      pass()
        .should('have.value', '')
        .type('12345678')
        .should('have.value', '12345678')
      baseRole()
        .should('have.value', '')
        .select('Instructor')
        .should('have.value', 'Instructor')
        .select('Student')
        .should('have.value', 'Student')
      ckBx()
        .check()
      btn()
        .should('be.enabled')
        .click()

      //Second input
      fName()
        .should('have.value', '')
        .type('Joseph')
        .should('have.value', 'Joseph')
      lName()
        .should('have.value', '')
        .type('Joestar')
        .should('have.value', 'Joestar')
      email()
        .should('have.value', '')
        .type('bloody@stream.com')
        .should('have.value', 'bloody@stream.com')
      pass()
        .should('have.value', '')
        .type('hamon')
        .should('have.value', 'hamon')
      baseRole()
        .should('have.value', '')
        .select('Student')
        .should('have.value', 'Student')
        .select('Instructor')
        .should('have.value', 'Instructor')
      ckBx()
        .check()
      btn()
        .should('be.enabled')
        .click()
      })
    })
  })
})