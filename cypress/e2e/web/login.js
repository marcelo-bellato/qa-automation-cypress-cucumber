import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";

let user;

Given("que o usuário acessa a página de login", () => {
  cy.fixture("user").then((dados) => {
    user = dados;
  });

  LoginPage.acessarLogin();
});

When("informar um e-mail e senha válidos", () => {
  LoginPage.preencherLogin(user.email, user.password);
});

Then("deverá visualizar a página inicial", () => {
  LoginPage.validarLoginSucesso();
});

When("informar um e-mail válido e senha inválida", () => {
    LoginPage.preencherLogin(
        user.email,
        user.invalidPassword
    );
});

Then("deverá visualizar a mensagem de credenciais inválidas", () => {
    LoginPage.validarMensagemErro();
});