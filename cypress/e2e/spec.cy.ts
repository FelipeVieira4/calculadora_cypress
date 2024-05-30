describe('Acessar', () => {
  it('Acessar calculadora', () => {
    cy.visit('http://localhost:5173/')
  })
})

describe('Somar', () => {

  it('1+2', () => {
    cy.visit('http://localhost:5173/')
    cy.get("button").contains("1").click();
    cy.get("button").contains("+").click();
    cy.get("button").contains("2").click();
    cy.get("button").contains("=").click();
    cy.get('.display-container').should("have.text","3");
  })
  
  it('2+2=+2=6', () => {
    cy.visit('http://localhost:5173/')
    cy.get("button").contains("2").click();
    cy.get("button").contains("+").click();
    cy.get("button").contains("2").click();
    cy.get("button").contains("=").click();
    cy.get("button").contains("+").click();
    cy.get("button").contains("2").click();
    cy.get("button").contains("=").click();
    cy.get('.display-container').should("have.text","6");
  })
  

  it('10+0.5', () => {
    cy.visit('http://localhost:5173/')
    cy.get("button").contains("1").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains("+").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains(".").click();
    cy.get("button").contains("5").click();
    cy.get("button").contains("=").click();
    cy.get('.display-container').should("have.text","10.5");
  })

  it('12+12', () => {
    cy.visit('http://localhost:5173/')
    cy.get("button").contains("1").click();
    cy.get("button").contains("2").click();
    cy.get("button").contains("+").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("2").click();
    cy.get("button").contains("=").click();
    cy.get('.display-container').should("have.text","24");
  })

  it('98+99', () => {
    cy.visit('http://localhost:5173/')
    cy.get("button").contains("9").click();
    cy.get("button").contains("9").click();
    cy.get("button").contains("+").click();
    cy.get("button").contains("9").click();
    cy.get("button").contains("8").click();
    cy.get("button").contains("=").click();
    cy.get('.display-container').should("have.text","197");
  })

  it('5+0', () => {
    cy.visit('http://localhost:5173/')
    cy.get("button").contains("5").click();
    cy.get("button").contains("+").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains("=").click();
    cy.get('.display-container').should("have.text","5");
  })
})

describe('Dividir', () => {
  it('5/0', () => {
    cy.visit('http://localhost:5173/')
    cy.get("button").contains("5").click();
    cy.get("button").contains("/").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains("=").click();
    cy.get('.display-container').should("have.text","Infinity");
  })

  it('10/5', () => {
    cy.visit('http://localhost:5173/')
    cy.get("button").contains("1").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains("/").click();
    cy.get("button").contains("5").click();
    cy.get("button").contains("=").click();
    cy.get('.display-container').should("have.text","2");
  })

  it('100/30', () => {
    cy.visit('http://localhost:5173/')
    cy.get("button").contains("1").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains("/").click();
    cy.get("button").contains("3").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains("=").click();
    cy.get('.display-container').should("have.text","3.3333333333333335");
  })
})

describe('Multiplicar', () => {
  it('10x0.5', () => {
    cy.visit('http://localhost:5173/')
    cy.get("button").contains("1").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains("x").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains(".").click();
    cy.get("button").contains("5").click();
    cy.get("button").contains("=").click();
    cy.get('.display-container').should("have.text","5");
  })

  it('20x5', () => {
    cy.visit('http://localhost:5173/')
    cy.get("button").contains("2").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains("x").click();
    cy.get("button").contains("5").click();
    cy.get("button").contains("=").click();
    cy.get('.display-container').should("have.text","100");
  })

  it('2x300', () => {
    cy.visit('http://localhost:5173/')
    cy.get("button").contains("2").click();
    cy.get("button").contains("x").click();
    cy.get("button").contains("3").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains("=").click();
    cy.get('.display-container').should("have.text","600");
  })
  
  it('00.5x2', () => {
    cy.visit('http://localhost:5173/')
    cy.get("button").contains("0").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains(".").click();
    cy.get("button").contains("5").click();
    cy.get("button").contains("x").click();
    cy.get("button").contains("5").click();
    cy.get("button").contains("=").click();
    cy.get('.display-container').should("have.text","2.5");
  })
})

describe('Subtrair', () => {
  it('500-400', () => {
    cy.visit('http://localhost:5173/')
    cy.get("button").contains("5").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains("-").click();
    cy.get("button").contains("4").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains("=").click();
    cy.get('.display-container').should("have.text","100");
  })

  it('5-2.5', () => {
    cy.visit('http://localhost:5173/')
    cy.get("button").contains("5").click();
    cy.get("button").contains("-").click();
    cy.get("button").contains("2").click();
    cy.get("button").contains(".").click();
    cy.get("button").contains("5").click();
    cy.get("button").contains("=").click();
    cy.get('.display-container').should("have.text","2.5");
  })

  it('10-0', () => {
    cy.visit('http://localhost:5173/')
    cy.get("button").contains("1").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains("-").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains("=").click();
    cy.get('.display-container').should("have.text","10");
  })
  
  
})

describe('Calculos', () => {
  it('10x5=+5=55', () => {
    cy.visit('http://localhost:5173/')
    cy.get("button").contains("1").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains("x").click();
    cy.get("button").contains("5").click();
    cy.get("button").contains("=").click();
    cy.get("button").contains("+").click();
    cy.get("button").contains("5").click();
    cy.get("button").contains("=").click();
    cy.get('.display-container').should("have.text","55");
  })

  it('20/2=+10=20', () => {
    cy.visit('http://localhost:5173/')
    cy.get("button").contains("2").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains("/").click();
    cy.get("button").contains("2").click();
    cy.get("button").contains("=").click();
    cy.get("button").contains("+").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains("=").click();
    cy.get('.display-container').should("have.text","20");
  })

  it('8x8=-2=62', () => {
    cy.visit('http://localhost:5173/')
    cy.get("button").contains("8").click();
    cy.get("button").contains("x").click();
    cy.get("button").contains("8").click();
    cy.get("button").contains("=").click();
    cy.get("button").contains("-").click();
    cy.get("button").contains("2").click();
    cy.get("button").contains("=").click();
    cy.get('.display-container').should("have.text","62");
  })

  it('25/5=x10=50', () => {
    cy.visit('http://localhost:5173/')
    cy.get("button").contains("2").click();
    cy.get("button").contains("5").click();
    cy.get("button").contains("/").click();
    cy.get("button").contains("5").click();
    cy.get("button").contains("=").click();
    cy.get("button").contains("x").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains("=").click();
    cy.get('.display-container').should("have.text","50");
  })

  it('99+1=x100=x10=1000', () => {
    cy.visit('http://localhost:5173/')
    cy.get("button").contains("9").click();
    cy.get("button").contains("9").click();
    cy.get("button").contains("+").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("=").click();
    cy.get("button").contains("x").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains("=").click();
    cy.get("button").contains("x").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("0").click();
    cy.get("button").contains("=").click();
    cy.get('.display-container').should("have.text","10000");
  })
})