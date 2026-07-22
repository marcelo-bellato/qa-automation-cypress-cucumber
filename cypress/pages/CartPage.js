class CartPage {

    acessarProdutos() {
        cy.visit("/products");
    }

    adicionarProduto() {

        cy.contains("View Product")
            .first()
            .click();

        cy.get(".product-information h2")
            .invoke("text")
            .then((nomeProduto) => {
                Cypress.env("produto", nomeProduto.trim());
            });

        cy.contains("Add to cart")
            .click();

        cy.contains("View Cart")
            .click();

    }

    prosseguirCheckout() {

        cy.contains("Proceed To Checkout")
            .should("be.visible")
            .click();

    }

    validarProdutoCheckout() {

        cy.url().should("include", "/checkout");

        cy.contains("Review Your Order")
            .should("be.visible");

        cy.get("#cart_info tbody tr")
            .should("have.length.greaterThan", 0);

        cy.contains(Cypress.env("produto"))
            .should("exist");

    }

}

export default new CartPage();