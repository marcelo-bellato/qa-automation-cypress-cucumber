Feature: Login

  Scenario: Realizar login com sucesso
    Given que o usuário acessa a página de login
    When informar um e-mail e senha válidos
    Then deverá visualizar a página inicial

  Scenario: Realizar login com senha inválida
    Given que o usuário acessa a página de login
    When informar um e-mail válido e senha inválida
    Then deverá visualizar a mensagem de credenciais inválidas