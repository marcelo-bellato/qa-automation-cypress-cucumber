class SearchPage {

    acessarProdutos() {
        cy.visit("/");
        cy.get('a[href="/products"]').click();
    }

    pesquisarProduto(produto) {
        cy.get('#search_product').type(produto);
        cy.get('#submit_search').click();
    }

    validarResultadoPesquisa(produto) {
    cy.url().should("include", produto);

    cy.get(".product-image-wrapper")
      .its("length")
      .should("be.greaterThan", 0);
}

}

export default new SearchPage();