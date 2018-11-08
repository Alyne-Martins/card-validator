# Validador de dados de cartões de crédito: v.1.0.0

**Esta biblioteca se destina à validação de números de um cartão de crédito.**
Implementação de um validador de dados de cartões de crédito. A biblioteca valida o número do cartão de crédito (usando algoritmo de Luhn) e retornar true ou false de acordo com o caso.

## Os métodos utilizados na biblioteca são:

#### **cardValidator(number);**

Exemplo de uso:

```
$node
> let validator = require("validator-card")
> validator.cardValidator(36490102462661);//'true'
```

## versão 1.0.0

funcionalidades: 
- Valida números
- Valida o algoritmo de Luhn
- Restringe a entrada para números


## instalação

- você deverá ter o node + npm instalados. Para guia de instalação, visite [o site oficial](https://www.npmjs.com/get-npm).
- proceda com a instalação com `$npm install validator-card`


## roadmap oficial do projeto

#### versão 3.0.0 (sem previsão)
Valida a expiração de um cartão:
- Valida números
- Valida no futuro
- Suporta taquigrafia por ano

#### versão 2.0.0 (sem previsão)
Formatar números de cartão:
- Inclui um espaço entre cada 4 dígitos
- Limites para 16 números

#### versão 1.0.0 (released)
Valida um número de cartão:
- Valida números
- Valida o algoritmo de Luhn
- Restringe a entrada para números
