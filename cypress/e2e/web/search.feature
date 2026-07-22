Feature: Pesquisa de Produtos

  Scenario: Pesquisar produto existente
    Given que o usuário acessa a página de produtos
    When pesquisar pelo produto "jeans"
    Then deverá visualizar os produtos pesquisados