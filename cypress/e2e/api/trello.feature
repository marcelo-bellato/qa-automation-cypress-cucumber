Feature: API Trello

    Scenario: Validar action do Trello
        Given que a API do Trello está disponível
        When enviar uma requisição GET para a action do Trello
        Then deve retornar status 200 e o nome da lista