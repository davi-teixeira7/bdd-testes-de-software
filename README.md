# Calculadora com BDD e Interface Web

Este projeto implementa uma calculadora com interface grafica em **React + Vite (TypeScript)** e testes automatizados em **BDD (Behave)**.  
Ele demonstra como validar as regras da calculadora via cenarios Gherkin executados em Python. Os testes E2E em Playwright foram removidos para manter apenas o fluxo Behave.

---

## 1. Backend com Behave (BDD em Python)

### Instalacao
Ative o ambiente virtual e instale o Behave:

```bash
python -m venv venv
source venv/bin/activate
pip install behave
```

### Execucao dos testes BDD

Na raiz do projeto (onde esta `features/`):

```bash
python -m behave
```

### Resultado esperado

```
1 feature passed, 0 failed, 0 skipped
4 scenarios passed, 0 failed, 0 skipped
12 steps passed, 0 failed, 0 skipped
```

---

## 2. Interface Web (React + Vite + TypeScript)

### Instalacao

Entre na pasta `web/`:

```bash
cd web
npm install
npm run dev
```

A aplicacao estara disponivel em:

```
http://localhost:5173
```

---