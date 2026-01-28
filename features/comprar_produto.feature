Feature: Fluxo de Compra

    Scenario Outline: Adicionar um produto no carrinho
        Given que estou na tela de Produtos
        And seleciono a categoria laptops
        When seleciono o "<produto>"
        Then verifico o "<produto>" e o "<preco>"
        When adiciono o produto no carrinho
        Then exibe o numero 1 no icone do carrinho
        When clico no carrinho
        Then verifico o "<produto>" e o "<preco>" no carrinho

    Examples:
    | produto                       | preco   |
    | HP ENVY - 17t Touch Laptop    | $849.99 |
    | HP Pavilion 15z Laptop        | $549.99 |