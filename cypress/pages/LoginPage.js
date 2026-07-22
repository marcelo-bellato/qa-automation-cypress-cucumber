class LoginPage {

  acessarLogin() {
    cy.visit("/");
    cy.get('a[href="/login"]').click();
    // ou simplesmente: cy.visit("/login");
  }

  preencherLogin(email, senha) {
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(senha);
    cy.get('[data-qa="login-button"]').click();
  }

  validarLoginSucesso() {
    cy.contains("Logged in as").should("be.visible");
  }

  validarMensagemErro() {
    cy.contains("Your email or password is incorrect!")
      .should("be.visible");
  }
}

export default new LoginPage();