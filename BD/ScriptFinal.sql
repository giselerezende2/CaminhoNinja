create database CaminhoNinja;
drop database CaminhoNinja;
use CaminhoNinja;

create table usuario (
	id int primary key auto_increment,
	nome varchar(50),
	email varchar(50),
	senha varchar(50)
);

select * from usuario;

create table quiz(
id int primary key,
nome varchar(45));

insert into quiz value
(1, 'Personagens'),
(2, 'Lugares');

select * from quiz;

create table resposta(
id int primary key auto_increment,
acertos int, 
erros int,
fkUsuario int,
fkQuiz int,
foreign key (fkUsuario) REFERENCES usuario(id),
foreign key (fkQuiz) REFERENCES quiz(id));

select * from resposta; 		

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

select * from aviso;

SELECT nome, acertos from resposta join usuario on usuario.id = fkUsuario order by acertos desc limit 3;	
SELECT nome, acertos FROM resposta JOIN usuario ON fkUsuario = usuario.id ORDER BY acertos DESC;
        
select * from usuario;
        
SELECT nome, acertos, fkQuiz FROM resposta JOIN usuario ON resposta.fkUsuario = usuario.id WHERE usuario.id = 2  LIMIT 5;