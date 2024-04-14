
# Requisitos para a API
## Rota pra criação de tarefas
> POST /tasks

payload

    {
      "descricao": "String",
      "dataInicial": "String",
      "dataFim": "String"
    }

response

    {
      "id": "UUID",
      "descricao": "String",
      "dataInicial": "String",
      "dataFim": "String"
    }

### Validar 
- descrição maior que 5 letras;
- data inicial igual ou maior do que data corrente;
- data inicial menor que data final;

## Rota para edição de tarefas
> PUT /tasks/:id

payload

    {
      "descricao": "String",
      "dataInicial": "String",
      "dataFim": "String"
    }

response

    {
      "id": "UUID",
      "descricao": "String",
      "dataInicial": "String",
      "dataFim": "String"
    }

### Validar 
- descrição maior que 5 letras;
- data inicial igual ou maior do que data corrente;
- data inicial menor que data final;

## Rota para remoção de tarefas
> DELETE /tasks/:id

response

    {
      "id": "UUID",
      "descricao": "String",
      "dataInicial": "String",
      "dataFim": "String"
    }

## Rota para listagem de tarefas
> GET /tasks

response

    [
       {
          "id":"8d56049a-f0fc-4d6a-8d82-84c56f957ec1",
          "descricao":"Estudar JavaScript",
          "dataInicio":"2024-04-15",
          "dataFim":"2024-04-20"
       },
       {
          "id":"d5b78c7e-6fe7-413d-b5fc-730c3e819fea",
          "descricao":"Estudar Algoritmos",
          "dataInicio":"2024-04-18",
          "dataFim":"2024-04-18"
       },
       {
          "id":"f3047cf3-22e5-431d-91e6-7937baf0b197",
          "descricao":"Estudar ED",
          "dataInicio":"2024-04-19",
          "dataFim":"2024-04-20"
       },
       {
          "id":"d784bdc0-3eb4-4a4e-9857-3e8848af290f",
          "descricao":"Estudar Regex",
          "dataInicio":"2024-04-16",
          "dataFim":"2024-04-18"
       },
       {
          "id":"e1a5b447-2ab5-41e6-85f3-50960a7fde94",
          "descricao":"Estudar UI",
          "dataInicio":"2024-04-14",
          "dataFim":"2024-04-17"
       },
       {
          "id":"7c40a26b-72e8-4e90-8981-989bb30c5b87",
          "descricao":"Estudar Produto",
          "dataInicio":"2024-04-18",
          "dataFim":"2024-04-19"
       },
       {
          "id":"b92d441d-fd67-4dc7-8819-b5d0ddcfb8cc",
          "descricao":"Estudar Design",
          "dataInicio":"2024-04-20",
          "dataFim":"2024-04-20"
       },
       {
          "id":"f7da6e37-3a08-4040-91d4-1af6b68e0d16",
          "descricao":"Estudar OOP",
          "dataInicio":"2024-04-16",
          "dataFim":"2024-04-16"
       },
       {
          "id":"ebfb5d8b-96a2-486a-8636-ded05ccfc9f1",
          "descricao":"Estudar PF",
          "dataInicio":"2024-04-15",
          "dataFim":"2024-04-15"
       },
       {
          "id":"c6cf5890-93db-48a9-bbdf-b5a9f3f30ad7",
          "descricao":"Estudar Mobile",
          "dataInicio":"2024-04-17",
          "dataFim":"2024-04-17"
       }
    ]

## Escopo

 - Talvez, precise corrigir pequenos problemas no frontend para tudo funcionar;    
  - Use o mínimo de bibliotecas possíveis na implementação da API;
  - O que não foi explicado pode ser interpretado e uma proposta deverá ser apresentada;
  - A API deverá validar os dados.
