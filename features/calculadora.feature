Feature: Operacoes basicas da calculadora
    Para realizar calculos simples
    Como um usuario
    Eu quero usar a calculadora para somar, subtrair, multiplicar e dividir

    Scenario: Somar dois numeros
        Given que iniciei a calculadora
        When somo 5 e 3
        Then o resultado deve ser 8

    Scenario: Subtrair dois numeros
        Given que iniciei a calculadora
        When subtraio 4 de 9
        Then o resultado deve ser 5

    Scenario: Multiplicar dois numeros
        Given que iniciei a calculadora
        When multiplico 6 por 7
        Then o resultado deve ser 42

    Scenario: Dividir dois numeros
        Given que iniciei a calculadora
        When divido 8 por 2
        Then o resultado deve ser 4
