# Desafio: Criar um ambiente com Docker, que suporte NodeJS com MySQL.

```
Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.

* A linguagem de programação para este desafio é Node/JavaScript.

```

## Resultado:

```
➜ docker-compose ps
NAME                IMAGE                       COMMAND                  SERVICE             CREATED              STATUS                        PORTS
app                 joaoluizcadore/nodejs-app   "docker-entrypoint.s…"   app                 About a minute ago   Up About a minute             3000/tcp
db                  mysql/mysql-server:latest   "/entrypoint.sh --in…"   db                  About a minute ago   Up About a minute (healthy)   3306/tcp, 33060-33061/tcp
nginx               joaoluizcadore/nginx        "/docker-entrypoint.…"   nginx               About a minute ago   Up About a minute             80/tcp, 0.0.0.0:8080->8080/tcp
```
