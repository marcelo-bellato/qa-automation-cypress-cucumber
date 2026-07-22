import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SearchPage from "../../pages/SearchPage";

let produtoPesquisado;

Given("que o usuário acessa a página de produtos", () => {
    SearchPage.acessarProdutos();
});

When("pesquisar pelo produto {string}", (produto) => {
    produtoPesquisado = produto;
    SearchPage.pesquisarProduto(produto);
});

Then("deverá visualizar os produtos pesquisados", () => {
    SearchPage.validarResultadoPesquisa(produtoPesquisado);
});