1.
<!-- A
`CREATE TABLE` Actor => cria uma tabela chamada Actor.
`id` => primeira coluna com valor de um id
`VARCHAR(255)` => string com limite de 255 
`PRIMARY KEY` => chave principal
`name` => segunda coluna com nome
`NOT NULL` => indica que o campo não pode ser vazio
`salary` = terceira coluna salário
`birth_date` => quarta coluna aniversário
`DATE` => data dd/mm/aaaa
`gender` => quinta coluna sobre gênero -->

<!-- B
Show Databases - mostra o banco de dado que criei da labenu
Show Tables - mostra as tabelas criadas em uso, no momento só a actor -->

<!-- C
Describe - mostra o tipo das variaveis, qual é a key primaria, quais são obrigatorias e sem elas tem um valor ou não. -->

2
<!-- B Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
   Indica que o id é igual a de outro elemento, da erro porque a chave primary deve ser única pra cada elemento -->

<!-- C Error Code: 1136. Column count doesn't match value count at row 1
    A quantidade de colunas não bate com a que tem na tabela
>     INSERT INTO Actor (id, name, salary, birth_date, gender)
>     VALUES("003", "Fernanda Montenegro", 300000, "1929-10-19", "female"); -->

<!-- D Error Code: 1364. Field 'name' doesn't have a default value
    Falta o nome, e ele não tem um valor padrão quando é passado sem ele
>     INSERT INTO Actor (id, name, salary, birth_date, gender)
>         VALUES("004", "Antonio Bandeiras", 400000, "1949-04-18", "male"); -->

<!-- E Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
    Valor da data está incorreto, ele é passado como número, mas deveria ser uma string 
>     INSERT INTO Actor (id, name, salary, birth_date, gender)
>         VALUES("005", "Juliana Paes", 719333.33, "1979-03-26", "female"); -->

3
<!-- SELECT * FROM Actor WHERE gender = "female";
SELECT salary FROM Actor WHERE name = "Tony Ramos";
SELECT * from Actor WHERE gender = "invalid"; - resposta vazia já que não tem nenhum item na tabela com esse gênero
SELECT id, name, salary FROM Actor WHERE salary <= 500000;
SELECT id, nome from Actor WHERE id = "002" - foi passado "nome" e não name por isso o erro -->

4
<!-- SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000; - selecione da tabela actor os itens que tiverem o nome começando com A ou J e também um salario abaixo de 300000 -->

<!-- SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000; -->

<!-- SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%"; -->

<!-- SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000; -->

5
<!-- CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    titulo VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_lancamento DATE NOT NULL,
    nota INT NOT NULL
); -->

<!-- INSERT INTO Movies (id, titulo, sinopse, data_lancamento, nota) 
VALUES ("001",
 "Se Eu Fosse Você",
 "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
 "2006-01-06",
 7); -->

<!-- INSERT INTO Movies (id, titulo, sinopse, data_lancamento, nota) 
VALUES ("002",
 "Doce de Mãe",
 "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
 "2012-12-27",
 10); -->

<!-- INSERT INTO Movies (id, titulo, sinopse, data_lancamento, nota) 
VALUES ("003",
 "Dona Flor e Seus Dois Maridos",
 "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
 "2017-11-02",
 8); -->

6
<!-- SELECT id, titulo, nota FROM Movies WHERE id = "003" -->

<!-- SELECT * FROM Movies WHERE titulo = "Se Eu Fosse Você" -->

<!-- SELECT * FROM Movies WHERE nota >= 7 -->

7
<!-- SELECT * FROM Movies WHERE titulo LIKE "%vida%";

SELECT * FROM Movies WHERE titulo LIKE "%dona%" OR sinopse LIKE "%dona%";

SELECT * FROM Movies WHERE data_lancamento < "2022-11-08";

SELECT * FROM Movies WHERE data_lancamento < "2022-11-08" AND titulo LIKE "%dona%" OR sinopse LIKE "%dona%" AND nota >= 7; -->

