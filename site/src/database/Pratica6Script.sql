-- EXERCICIO 1

create database AlunoProjeto;
use AlunoProjeto;

create table projeto(
idProjeto int primary key auto_increment,
nome varchar (45),
descricao varchar (80));

insert into projeto values
(default, 'FungiTech', 'Monitoramento de Temperatura e Umidade'),
(default, 'PharmaTemp', 'Monitoramento de Temperatura');

select * from projeto;

create table aluno(
ra int primary key auto_increment,
nome varchar (45),
telefone varchar(45),
fkProjeto int,
fkRepresentante int,
constraint fkRepreAluno foreign key (fkRepresentante) references aluno(ra),
constraint fkProjAluno foreign key (fkProjeto) references projeto(idProjeto));

insert into aluno  values
(default, 'Martinez', '11 94002-8922', 1, null),
(default, 'Ana', '11 94002-8922', 2, null);

update aluno set fkRepresentante = 2 where ra = 1;
update aluno set fkRepresentante = 1 where ra = 2;

select * from aluno;

create table acompanhante(
idAcompanhante int auto_increment,
fkAluno int,
constraint pkComposta primary key (idAcompanhante, fkAluno),
nome varchar (45),
parentesco varchar (45));

insert into acompanhante values
(default, 1, 'Gisele', 'prima'),
(default, 1, 'Leroy', 'irmão'),
(default, 2, 'Sarah', 'irmã'),
(default, 2, 'João', 'marido');

select * from acompanhante;

select * from projeto join aluno on ra = fkProjeto;

select * from aluno join acompanhante on ra = fkAluno;

select * from aluno join aluno as Representante on Representante.ra = aluno.fkRepresentante;

select * from projeto join aluno on ra = fkProjeto where projeto.nome = 'FungiTech';

select * from aluno join aluno as Representante on Representante.ra = aluno.fkRepresentante join acompanhante on aluno.ra = acompanhante.fkAluno;


-- EXERCICIO 2

create table organizador(
idOrganizador int primary key auto_increment,
nome varchar(45),
logradouro varchar(45),
bairro varchar(45),
email varchar(80),
fkExperiente int,
constraint fkExperienteOrg foreign key (fkExperiente) references organizador(idOrganizador)
)auto_increment = 30;

insert into organizador values
(default, 'Martinez', 'Rua São Paulo', 'Morumbi', 'martinez@gmail.com', null),
(default, 'Gisele', 'Rua Parque do Sol', 'Vila Madalena', 'gisele@gmail.com', null),
(default, 'Ana', 'Rua Alvaro Alvim', 'Pinheiros', 'ana@gmail.com', null);

update organizador set fkExperiente = 1 where idOrganizador = 2;
update organizador set fkExperiente = 1 where idOrganizador = 3;
update organizador set fkExperiente = 2 where idOrganizador = 1;

select * from organizador;

create table doacao (
    idDoacao int primary key auto_increment,
    categoria varchar(45),
    instituicao varchar(45),
    dtFinal date,
    fkOrganizador int,
    constraint chkInst check (instituicao in ('Educar para Transformar', 'Comunitário Esperança')),
    constraint fkOrgDoacao foreign key (fkOrganizador) references organizador(idOrganizador)
) auto_increment = 500;

insert into doacao values
(default, 'Livros', 'Educar para Transformar', '2024-01-01', 1),
(default, 'Material Escolar', 'Educar para Transformar', '2024-01-01', 2),
(default, ' Produto de Higiene', 'Comunitário Esperança', '2024-02-02', 3);

select * from doacao;

select * from organizador join doacao on idOrganizador = fkOrganizador;

select * from organizador join doacao on idOrganizador = fkOrganizador where organizador.nome = 'Gisele';

select * from organizador join organizador as Experiente  on experiente.idOrganizador = organizador.fkExperiente;

select * from organizador join organizador as Experiente  on experiente.idOrganizador = organizador.fkExperiente where experiente.nome = 'Martinez';

select * from organizador join organizador as Experiente  on experiente.idOrganizador = organizador.fkExperiente join doacao on organizador.idOrganizador = doacao.fkOrganizador;

