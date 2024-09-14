## Api de Lista de Tarefas

### Inicialização

npm install

npm start

`localhost:8080/task`

### funções
GET, POST, PUT e DELETE

### Endpoints GET
`/task/:number`

`/task`

### Endpoint POST

`/task/add`

### Endpoint PUT

`/task/:number`

### Endpoint DELETE

`/task/:number`

### Padrão do corpo das requisições

{
    "task": {
        "id": 0,
        "title": "",
        "desc": "",
        "concluded": false
    }
}
### Padrões de resposta
{
    "tarefas": [
        {
            "id": 0,
            "title": "",
            "desc": "",
            "concluded": false
        },
        {
            "id": 1,
            "title": "",
            "desc": "",
            "concluded": false
        }
    ]
}

{
    "tarefa":{
        "id": 0,
        "title": "",
        "desc": "",
        "concluded": false
    }
}

{
    "erro": ""
}
