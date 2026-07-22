Feature: Carrinho

Scenario: Adicionar produto ao carrinho
    Given que o usuário está autenticado
    When adicionar um produto ao carrinho
    And prosseguir para o checkout
    Then deverá visualizar o produto na tela de pagamento