### Exercício 1

- **Resposta A**:
`Chave estrangeira é a chave que uma tabela usa para se relacionar com outra, ficando em contato com a primary key`

- **Resposta B**:

`INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"002",
    "Um bom filme",
    9,
	"001"
);`

- **Resposta C**:
`Não pode adicionar um update a row filha, porque o id do filme não tem`

- **Resposta D**:

ALTER TABLE Movies DROP COLUMN rating;

- **Resposta E**:
`A coluna não existe mais portanto não da pra deletar`

# -- Exercicio 2

- **Resposta A**:
`A tabela de movie cast tem na primeira coluna o id do filme que referência a tabela de filmes, e na segunda o id do ator que faz relação com a tabela actor`

- **Resposta B**:
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"001",
"001"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"001",
"002"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"001",
"003"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"002",
"001"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"003",
"005"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"003",
"004"
);

- **Resposta C**:
`Não pode adicionar um update a row filha, porque o id do filme não tem`

- **Resposta D**:
`Não aceita deletar pois o modo seguro está ativado e que tentei deletar algo sem fazer referência`
DELETE FROM Movies WHERE id = 001;

# -- Exercicio 3

- **Resposta A**:
`Retorna todos os elementos da tabela movies que tem uma relação colocada pela tabela rating, levando em conta o ID, o ON é como se indicasse tudo que tem rating dentro do movies-id`

- **Resposta B**:
SELECT nome, M.id, rate, R.id FROM Movies M 
JOIN Rating R ON M.id = R.movie_id WHERE R.rate > 0; 