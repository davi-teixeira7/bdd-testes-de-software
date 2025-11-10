from behave import given, when, then
from src.calculadora import Calculadora


@given("que iniciei a calculadora")
def step_iniciei_calculadora(context):
    context.calc = Calculadora()


@when("somo {a:d} e {b:d}")
def step_somar(context, a, b):
    context.resultado = context.calc.somar(a, b)


@when("subtraio {subtraendo:d} de {minuendo:d}")
def step_subtrair(context, subtraendo, minuendo):
    context.resultado = context.calc.subtrair(minuendo, subtraendo)


@when("multiplico {a:d} por {b:d}")
def step_multiplicar(context, a, b):
    context.resultado = context.calc.multiplicar(a, b)


@when("divido {a:d} por {b:d}")
def step_dividir(context, a, b):
    context.resultado = context.calc.dividir(a, b)


@then("o resultado deve ser {resultado_esperado:d}")
def step_verificar_resultado(context, resultado_esperado):
    assert context.resultado == resultado_esperado, \
        f"Esperado {resultado_esperado}, mas obtido {context.resultado}"
