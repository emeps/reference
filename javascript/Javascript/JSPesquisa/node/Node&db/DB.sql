CREATE TABLE users(
    nome VARCHAR(100),
    email VARCHAR(100),
    idade INT 
);


INSERT INTO users ( nome, email, idade)VALUES(
    "Bigoin finin",
    "bigodin7@outlook.com",
    56
);

select * from user; 

SELECT * FROM users WHERE idade = 8;

SELECT * FROM users WHERE idade >= 8;

DELETE  FROM users WHERE nome = "Emerson Patryck da Silva";

UPDATE users SET nome = "NodeJs", email = "nodejs@outlook.com" WHERE nome=""