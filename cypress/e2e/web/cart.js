import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CartPage from "../../pages/CartPage";
import LoginPage from "../../pages/LoginPage";

Given("que o usuário está autenticado", () => {

    cy.fixture("user").then((user) => {

        LoginPage.acessarLogin();

        LoginPage.preencherLogin(
            user.email,
            user.password
        );

        LoginPage.validarLoginSucesso();

        CartPage.acessarProdutos();

    });

});

When("adicionar um produto ao carrinho", () => {
    CartPage.adicionarProduto();
});

When("prosseguir para o checkout", () => {
    CartPage.prosseguirCheckout();
});

Then("deverá visualizar o produto na tela de pagamento", () => {
    CartPage.validarProdutoCheckout();
});