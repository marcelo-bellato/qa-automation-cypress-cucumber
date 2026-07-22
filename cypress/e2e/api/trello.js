import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TrelloService from "../../services/TrelloService";

let response;

Given("que a API do Trello está disponível", () => {

});

When("enviar uma requisição GET para a action do Trello", () => {

    TrelloService.consultarAction().then((res) => {
        response = res;
    });

});

Then("deve retornar status 200 e o nome da lista", () => {

    expect(response.status).to.eq(200);

    const nomeLista = response.body.data.list.name;

    cy.log(`Nome da lista: ${nomeLista}`);

    expect(nomeLista).to.eq("Professional");

});