# Momento 

Bem-vindo à base de dados da empresa **Momento**!

A Momento é uma empresa inovadora do setor de tecnologia e vendas de produtos temáticos de super-heróis e cultura pop. Fundada em 1980, a empresa começou como uma pequena loja em Gotham City e hoje possui escritórios em diversos países, com departamentos especializados em Vendas, Tecnologia, Recursos Humanos, Marketing, Financeiro e Dados.

Nestes exercícios, você vai explorar o banco de dados da empresa e responder perguntas que revelam insights importantes sobre o negócio. Prepare-se para usar queries básicas, agregações complexas, e operações avançadas!

---

## Nível 1: Conhecendo a Empresa

### Seu Primeiro Dia na Momento

**1.1** Você acabou de ser contratado pela Momento! Vamos começar incluindo você no sistema.

**1.2** Agora que você faz parte da equipe, quantos funcionários temos ao total na empresa?
```sql
   select count(funcionario_id) from funcionarios;
```
R: 42

**1.3** Quantos funcionários trabalham especificamente no Departamento de Tecnologia?
```sql
select departamentos.departamento_nome,
count(funcionarios.departamento_id)
 from funcionarios 
 inner join departamentos
 on funcionarios.departamento_id = departamentos.departamento_id
where funcionarios.departamento_id like 13 
or departamentos.departamento_nome like 'Tecnologia'
group by departamentos.departamento_nome

```
R:Tecnologia	5
Tecnologias Avançadas	2

**1.4** Liste todos os departamentos que existem na empresa. Quantos são?
```sql
select departamentos.departamento_nome from departamentos
select count(departamentos.departamento_id) as toat_departamentos from departamentos
```
R:Administração
Marketing
Suprimentos
Recursos Humanos
Transportes
Tecnologia
Relações Públicas
Vendas
Executivo
Finanças
Contabilidade
Biotecnologia
Tecnologias Avançadas

quantidade:13
**1.5** Quantos escritórios a Momento possui? Em quais países?
```sql
select count(escritorios.escritorio_id) as total_escritorio from escritorios;
select count(escritorios.escritorio_nome) as total_escritorio, paises.pais_nome  from escritorios left join paises on escritorios.pais_id = paises.pais_id group by  paises.pais_nome
```

---

## Nível 2: Análise Financeira Básica

O CFO precisa de relatórios urgentes sobre os custos da empresa.

**2.1** Quantos funcionários trabalham no Departamento de Vendas?
```sql

select departamentos.departamento_nome, count(funcionarios.funcionario_id) as total_funcionarios 
from funcionarios 
inner join departamentos
on funcionarios.departamento_id = departamentos.departamento_id
where departamentos.departamento_nome like 'Venda%'
group by departamentos.departamento_nome
```
R:Vendas	5

**2.2** Qual é o custo total com salários do Departamento de Vendas?
```sql
select departamentos.departamento_nome, sum(funcionarios.salario) as total_custo_salario
from funcionarios 
inner join departamentos
on funcionarios.departamento_id = departamentos.departamento_id
where departamentos.departamento_nome like 'Venda%'
group by departamentos.departamento_nome
```
R:Vendas	51500.00

**2.3** Qual é a média salarial da empresa, excluindo os cargos de CEO, CMO e CFO?
```sql
select round(avg(funcionarios.salario), 4) as total_custo_salario
from funcionarios 
join cargos
on funcionarios.cargo_id = cargos.cargo_id
where cargos.cargo_nome not like 'CEO%' and cargos.cargo_nome not like 'CMO%' and cargos.cargo_nome not like 'CFO%'
```
R:8431.5387

**2.4** Qual é a média salarial do Departamento de Tecnologia?
```sql
select round(avg(funcionarios.salario), 4), departamentos.departamento_nome as departamento from funcionarios
join departamentos 
on funcionarios.departamento_id = departamentos.departamento_id
where departamentos.departamento_nome like 'Tecnologia%' 
group by departamentos.departamento_nome
```
R: 5760.0000	Tecnologia
21815.0000	Tecnologias Avançadas

**2.5** Qual departamento possui a maior média salarial?
```sql
select round(avg(funcionarios.salario), 4) as salario, departamentos.departamento_nome as departamento from funcionarios
join departamentos 
on funcionarios.departamento_id = departamentos.departamento_id
group by departamentos.departamento_nome 
order by round(avg(funcionarios.salario), 4) desc limit 1
```
R:21815.0000	Tecnologias Avançadas

**2.6** Qual departamento possui o menor número de funcionários?
```sql
select round(avg(funcionarios.salario), 4) as salario, departamentos.departamento_nome as departamento from funcionarios
join departamentos 
on funcionarios.departamento_id = departamentos.departamento_id
group by departamentos.departamento_nome 
order by round(avg(funcionarios.salario), 4) desc limit 1
```
R:7	Transportes
7	Finanças
---

## Nível 3: Recursos Humanos

O RH está fazendo uma análise demográfica da empresa.

**3.1** Quantos funcionários da empresa Momento possuem cônjuges?
```sql
select count(dependentes.funcionario_id) as dependente from dependentes
where dependentes.relacionamento like 'conjuge%'
```
R:4
**3.2** Quantos funcionários possuem filhos registrados?
```sql 
select count(dependentes.funcionario_id) as dependente from dependentes
where dependentes.relacionamento like 'filh%'
```
R: 32
**3.3** Qual funcionário foi contratado há mais tempo na empresa?
```sql
select concat(funcionarios.primeiro_nome,' ',funcionarios.sobrenome) as nome, funcionarios.data_contratacao from funcionarios
order by  funcionarios.data_contratacao asc limit 1
```
R:Steven Wayne	1987-06-17
**3.4** Qual funcionário foi contratado há menos tempo na empresa?
```sql
select concat(funcionarios.primeiro_nome,' ',funcionarios.sobrenome) as nome, funcionarios.data_contratacao from funcionarios
order by  funcionarios.data_contratacao desc limit 1
```
R:Sabrina Portela Spellman	2024-10-28
**3.5** Liste os 5 funcionários com mais tempo de casa, ordenados pela data de contratação.
```sql
select concat(funcionarios.primeiro_nome,' ',funcionarios.sobrenome) as nome, funcionarios.data_contratacao from funcionarios
order by  funcionarios.data_contratacao asc limit 5;
```
R:Steven Wayne	1987-06-17
Jennifer Whalen	1987-09-17
Neena Kochhar	1989-09-21
Alexander Hunold	1990-01-03
Bruce Ernst	1991-05-21
**3.6** Quantos funcionários foram contratados na década de 1990 (entre 1990-1999)?
```sql
select count(funcionarios.funcionario_id) as funcionarios_contratados from funcionarios
where extract(year from data_contratacao) <= 1999
```
R:40
**3.7** Como a média salarial da Momento evoluiu ao longo dos anos? Agrupe por ano de contratação e calcule a média salarial.
```sql
select round(avg(funcionarios.salario)) as media_salario, extract(year from funcionarios.data_contratacao) as data_contratacao from funcionarios
group by data_contratacao
```
R:24000	1987
17000	1989
17000	1993
9000	1990
6000	1991
4800	1997
4800	1998
4200	1999
17990	1994
9000	1994
8200	1997
7700	1997
7800	1998
6900	1999
11000	1994
3100	1995
2900	1997
2800	1997
2600	1998
2500	1999
8000	1996
8200	1997
7900	1995
6500	1997
2700	1998
14000	1996
13500	1997
8600	1998
8400	1998
7000	1999
19650	2000
4000	1996
3900	1997
4400	1987
13000	1996
6000	1997
11700	1994
8000	2024
---

## Nível 4: Operações e Escritórios

**4.1** Qual é o custo total de suprimentos em cada escritório? Ordene do mais caro ao mais barato.
```sql
select sum(suprimentos.custo) as custo, escritorios.escritorio_nome from suprimentos
join escritorios
on suprimentos.escritorio_id = escritorios.escritorio_id
group by escritorios.escritorio_nome 
order by custo desc 
```
R:405000.00	Umbrella Corp
403752.85	Baxter Building
148000.00	Wayne Offices
5505.70	Shuri's Palace
5050.07	Sala Winter
4000.00	House of Mystery escritorios
2000.00	Arkham Base
**4.2** Qual escritório possui a maior quantidade de diferentes tipos de suprimentos?
```sql
select count(distinct suprimentos.suprimento_nome) as suprimentos_diferentes, escritorios.escritorio_nome as nome_escritorio from suprimentos
join escritorios
on suprimentos.escritorio_id = escritorios.escritorio_id
group by nome_escritorio
order by suprimentos_diferentes desc limit 4
```
R:4	Baxter Building
4	Shuri's Palace
4	Umbrella Corp
4	Wayne Offices
**4.3** Qual é o suprimento mais caro (considerando preço unitário) em toda a empresa?
```sql
select suprimentos.suprimento_nome, (suprimentos.custo / suprimentos.quantidade_comprada) as valor_unitario from suprimentos
order by valor_unitario desc
```
R:Computers	13333.333333
**4.4** Calcule o valor total do inventário de suprimentos da empresa (quantidade × preço unitário de todos os itens em todos os escritórios).
```sql
select  sum(suprimentos.custo / suprimentos.quantidade_comprada) as valor_unitario from suprimentos
```
R:46669.832256
---

## Nível 5: Produtos e Vendas

**5.1** Quais produtos foram vendidos pela Momento? Liste todos os produtos únicos.
```sql
select produtos.produto_nome, vendas.produto_id from produtos
join vendas
on produtos.produto_id = vendas.produto_id
group by vendas.produto_id;
```
R:Uniforme do Superman	1
Fake Batarang	2
Lança-Teias	3
Capacete do Homem-Formiga	4
Nulificador Total	5
Laço da Verdade	6
Sabre de Luz (Mace Windu)	8
Sentinelas do Bolivar Trask	9
Uniforme de Moléculas Instáveis	10
Laço da Honestidade	11
Batarangs Oficiais	12

**5.2** Qual é o produto mais vendido (maior quantidade total)?
```sql
select sum(vendas.quantidade_vendida) as quantidade_venda, produtos.produto_nome from vendas
join produtos
on vendas.produto_id = produtos.produto_id
group by produtos.produto_nome
order by quantidade_venda desc limit 1
```
R:177	Uniforme do Superman

**5.3** Qual é o produto menos vendido?
```sql
select sum(vendas.quantidade_vendida) as quantidade_venda, produtos.produto_nome from vendas
join produtos
on vendas.produto_id = produtos.produto_id
group by produtos.produto_nome
order by quantidade_venda asc limit 1
```
R:3	Batarangs Oficiais

**5.4** Pensando na relação quantidade × valor unitário, qual produto gerou mais receita para a empresa?
```sql
select produtos.produto_nome as produtos, max(vendas.quantidade_vendida * produtos.produto_price) as receita from vendas
join produtos	
on produtos.produto_id = vendas.produto_id
group by produtos.produto_nome
order by receita desc limit 1
```
R:Uniforme do Superman	50121.71
**5.5** Qual é o produto mais caro (maior preço unitário) no catálogo?
```sql
select produtos.produto_nome as produto, produtos.produto_price as valor_unitario from produtos
order by valor_unitario desc limit 1
```
R:Sabre de Luz (Mace Windu)	990.29
**5.6** Qual foi o faturamento total da empresa em vendas?
```sql
select sum(vendas.quantidade_vendida * produtos.produto_price) as faturamento_vendas from vendas
join produtos
on vendas.produto_id = produtos.produto_id;
```
R:159186.48
**5.7** Quantas vendas foram realizadas no mês de junho de 2023?
```sql
select count(vendas.venda_id) as quantia_vendas, concat(extract(month from vendas.venda_data),'/',extract(year from vendas.venda_data)) as periodo_vendas from vendas
where extract(month from vendas.venda_data) = 6 and
extract(year from vendas.venda_data) = 2023
group by concat(extract(month from vendas.venda_data),'/',extract(year from vendas.venda_data));
```
R:9	6/2023
**5.8** Qual vendedor realizou mais vendas (em quantidade de transações)?
```sql
select funcionarios.funcionario_id, concat(funcionarios.primeiro_nome,' ', funcionarios.sobrenome) as nome, count(vendas.quantidade_vendida) as total_vendido from funcionarios
join vendas
on funcionarios.funcionario_id = vendas.funcionario_id
group by funcionarios.funcionario_id 
order by total_vendido desc 
```
R:145	John Russell	4
146	Karen Partners	4
176	Jonathon Taylor	4
178	Kimberly Grant	3
177	Jack Livingston	2
**5.9** Qual vendedor gerou mais receita para a empresa?
```sql
select funcionarios.funcionario_id, concat(funcionarios.primeiro_nome,' ', funcionarios.sobrenome) as nome, count(vendas.quantidade_vendida) as total_vendido, round(sum(vendas.quantidade_vendida * produtos.produto_price), 4) as receita from funcionarios
join vendas
on funcionarios.funcionario_id = vendas.funcionario_id
join produtos
on vendas.produto_id = produtos.produto_id
group by funcionarios.funcionario_id 
order by receita desc 
```
R:176	Jonathon Taylor	4	71582.8
146	Karen Partners	4	30563.65
178	Kimberly Grant	3	27238.26
145	John Russell	4	22552.92
177	Jack Livingston	2	7248.85
---

## Nível 6: Operações de Atualização

A empresa está crescendo e mudanças precisam acontecer!

**6.1** Um novo departamento foi criado: **Inovações**. Ele será alocado no escritório "Wayne Offices". Adicione-o ao banco de dados.
```sql
INSERT INTO departamentos(departamento_id,departamento_nome,escritorio_id) VALUES (14, 'Inovações', 1400); 
```
**6.2** O departamento de Inovações está sem funcionários. Transfira 2 funcionários do departamento de Tecnologia para Inovações.
```sql
   update funcionarios
set funcionarios.departamento_id = 14
where funcionarios.funcionario_id = 103 
or funcionarios.funcionario_id = 107 
```
**6.3** A empresa decidiu dar um aumento de 10% para todos os funcionários do departamento de Tecnologia. Atualize os salários.
```sql
update funcionarios
set funcionarios.salario = funcionarios.salario + (0.1 * funcionarios.salario)
where funcionarios.departamento_id = 6;
```
**6.4** O funcionário "Bruce Ernst" foi promovido a "Senior Web Developer" e recebeu um aumento para $5.000. Atualize suas informações.
```sql
INSERT INTO cargos(cargo_id,cargo_nome,min_salario,max_salario) VALUES (22,'Senior Web Developer', 5000.00, 20000.00);

update funcionarios
set funcionarios.salario = 5000,
funcionarios.cargo_id = 22
where funcionarios.funcionario_id = 104;
```
**6.5** Adicione um novo suprimento ao escritório "Wayne Offices": 15 unidades de "Headsets" com preço unitário de $150 cada.
```sql
INSERT INTO suprimentos (suprimento_nome,quantidade_comprada,custo,escritorio_id) VALUES ('Headsets',15, (15*150),1400);

```
**6.6** Todos os funcionários contratados antes de 1990 estão aposentando. Remova-os do banco de dados (CUIDADO: execute um **SELECT** antes para ver quantos serão afetados!).
```sql
update funcionarios
set gerente_id = null
where gerente_id in (select funcionario_id from (select funcionario_id from funcionarios
where extract(year from data_contratacao) < 1990) as tabela_atualizar); 

SET sql_safe_updates = 0;
delete from funcionarios 
where extract(year from funcionarios.data_contratacao) < 1990;
SET sql_safe_updates = 1;
```

---

## Nível 7: Análise Avançada com Agregações

**7.1** Crie um relatório mostrando cada departamento com: nome do departamento, número de funcionários, salário total e média salarial.
```sql
select departamentos.departamento_nome as departamentos, count( funcionarios.funcionario_id) as quantidade_funcionarios, sum(funcionarios.salario) as salario_total, round(avg(funcionarios.salario), 4) as media_salarial from departamentos
join funcionarios
on funcionarios.departamento_id = departamentos.departamento_id
group by departamentos.departamento_nome
```
R:Marketing	2	19000.00	9500.0000
Suprimentos	6	24900.00	4150.0000
Recursos Humanos	1	6500.00	6500.0000
Transportes	7	41200.00	5885.7143
Tecnologia	3	14504.00	4834.6667
Relações Públicas	1	10000.00	10000.0000
Vendas	5	51500.00	10300.0000
Executivo	1	17000.00	17000.0000
Finanças	7	59600.01	8514.2871
Contabilidade	1	12000.00	12000.0000
Biotecnologia	1	18300.00	18300.0000
Tecnologias Avançadas	2	43630.00	21815.0000
Inovações	2	13200.00	6600.0000

**7.2** Liste os 3 cargos mais comuns na empresa e quantos funcionários ocupam cada cargo.
```sql
select cargos.cargo_nome as cargos, count(funcionarios.funcionario_id) as quantidade_funcionarios from cargos
join funcionarios
on cargos.cargo_id = funcionarios.cargo_id
group by cargos
order by quantidade_funcionarios desc limit 3
```
R:Purchasing Clerk	5
Contabilidade	5
Web Developer	5
**7.3** Encontre todos os funcionários que ganham acima da média salarial de seus respectivos departamentos.
```sql

with media_funcionario as (
select departamentos.departamento_nome as departamento,
 concat(funcionarios.primeiro_nome,' ',funcionarios.sobrenome) as funcionario,
 funcionarios.salario as salario,
 round(avg(funcionarios.salario) OVER(partition by departamentos.departamento_id), 4) as media_salarial
 from funcionarios
join departamentos
on funcionarios.departamento_id = departamentos.departamento_id)

select departamento, funcionario, salario, round(media_salarial, 4) as media_salarial from media_funcionario
where salario > media_salarial


```
R:Marketing	Elisabeth Braddock	13000.00	9500.0000
Suprimentos	Den Raphaely	11000.00	4150.0000
Transportes	Adam Fripp	8200.00	5885.7143
Transportes	Shanta Vollman	6500.00	5885.7143
Transportes	Payam Kaufling	7900.00	5885.7143
Transportes	Matthew Weiss	8000.00	5885.7143
Tecnologia	Bruce Ernst	5000.00	4834.6667
Vendas	Karen Partners	13500.00	10300.0000
Vendas	John Russell	14000.00	10300.0000
Finanças	Daniel Faviet	9000.00	8514.2871
Finanças	Lucius Fox	12000.00	8514.2871
Tecnologias Avançadas	Nancy Constantine	23980.00	21815.0000
Inovações	Alexander Hunold	9000.00	6600.0000

**7.4** Calcule a taxa de crescimento da empresa por ano (quantos funcionários foram contratados a cada ano).
```sql

with contratacao_anual as (
select count(funcionarios.funcionario_id) as numero_funcionarios,
 extract(year from funcionarios.data_contratacao) as ano_contratacao from funcionarios
 group by ano_contratacao),
 
 crescimento as (
 select contratacao_anual.numero_funcionarios,
 contratacao_anual.ano_contratacao,
 lag(contratacao_anual.numero_funcionarios) over(order by contratacao_anual.ano_contratacao) as contratacao_anual_anterior from contratacao_anual)
 
select crescimento.ano_contratacao,
crescimento.numero_funcionarios,
concat(round(((crescimento.numero_funcionarios - crescimento.contratacao_anual_anterior) / crescimento.contratacao_anual_anterior )* 100, 2), '%') as taxa_de_crescimento
from crescimento;

 R:1990	1	
1991	1	0.00%
1993	1	0.00%
1994	8	700.00%
1995	2	-75.00%
1996	4	100.00%
1997	10	150.00%
1998	6	-40.00%
1999	4	-33.33%
```
**7.5** Crie um ranking dos vendedores, mostrando: nome do vendedor, número de vendas realizadas e receita total gerada.
```sql
with equipe_vendas as (
select funcionarios.funcionario_id as id_funcionarios,
 concat(funcionarios.primeiro_nome,' ',funcionarios.sobrenome) as nome_funcionario from funcionarios
 where funcionarios.departamento_id in (select departamento_id from departamentos)),
 
 receitas as (
 select nome_funcionario,
 count(vendas.funcionario_id) as quantidade_vendas, 
 round(sum(produtos.produto_price * vendas.quantidade_vendida), 4)  as receita
 from equipe_vendas
 join vendas
 on vendas.funcionario_id = id_funcionarios
 join produtos
 on produtos.produto_id = vendas.produto_id
 group by nome_funcionario
 )
 
select rank() over(order by receita desc) as ranking, nome_funcionario,
quantidade_vendas,
receita from receitas
order by receita desc;
 

 
```
R:
1  Jonathon Taylor 4	71582.8
2  Karen Partners	4	30563.65
3  Kimberly Grant	3	27238.26
4  John Russell	4	22552.92
5  Jack Livingston	2	7248.85

**7.6** Encontre os produtos que foram vendidos por apenas um vendedor.
```sql

 with produtos_unicos as (
 select 
 count(distinct vendas.funcionario_id) as quantidade_vendedores,
 vendas.produto_id as id_produto, produtos.produto_nome as produtos_nome from vendas
 join produtos
 on produtos.produto_id = vendas.produto_id
 group by vendas.produto_id
 having quantidade_vendedores = 1
 ),
 
 vendedores as (
 select concat(funcionarios.primeiro_nome,' ',funcionarios.sobrenome) as nome_funcionario, funcionarios.funcionario_id as id_funcionario,
 vendas.produto_id as id_produto from funcionarios
 join vendas
 on vendas.funcionario_id = funcionarios.funcionario_id
 group by id_funcionario, nome_funcionario, id_produto
 
 )
 
 select nome_funcionario, produtos_nome, vendedores.id_produto from produtos_unicos 
 join vendedores
 on vendedores.id_produto = produtos_unicos.id_produto
 
 
```
R:Kimberly Grant	Fake Batarang	2
Kimberly Grant	Sabre de Luz (Mace Windu)	8
Kimberly Grant	Sentinelas do Bolivar Trask	9
John Russell	Uniforme de Moléculas Instáveis	10
Karen Partners	Laço da Honestidade	11
Jonathon Taylor	Batarangs Oficiais	12
---

## Nível 8: Desafios e Otimização

**8.1** **Desafio de Performance**: Encontre todos os funcionários do departamento de Vendas que possuem dependentes (cônjuge OU filhos). Quantas formas diferentes você consegue resolver isso?
```sql
with equipe_vendas as (
select funcionarios.funcionario_id as id_funcionarios,
 concat(funcionarios.primeiro_nome,' ',funcionarios.sobrenome) as nome_funcionario from funcionarios
 where funcionarios.departamento_id in (select departamento_id from departamentos where departamento_nome like 'vendas%'))
 

select id_funcionarios, concat(dependentes.primeiro_nome,' ',dependentes.sobrenome) as nome_dependentes,
dependentes.relacionamento as relacionamento from dependentes
join equipe_vendas
on id_funcionarios = dependentes.funcionario_id


```
**8.2** **Desafio de Lógica**: Encontre funcionários que trabalham em escritórios diferentes do escritório associado ao seu departamento (se houver alguma inconsistência).
```sql```
R: Não é possível resolver pois a tabela funcionarios não possui uma conexão direta com a tabela escritorios, logo não é possivel encontrar uma inconsistência que o banco não registra nem a informação
**8.3** **Consulta Complexa**: Crie um relatório completo de um escritório mostrando:
   - Nome do escritório
   - País
   - Número de departamentos naquele escritório
   - Número total de funcionários
   - Custo total com salários
   - Custo total com suprimentos

```sql
with consulta_escritorio as(
select e.escritorio_id as escritorio_id,
e.escritorio_nome,
p.pais_nome from escritorios e
join paises p
on p.pais_id = e.pais_id
 

),

consulta_departamento as (
select d.escritorio_id,
count(d.departamento_id) as quantidade_departamentos from departamentos d
group by d.escritorio_id
),

consulta_funcionario as (
select d.escritorio_id,
count(f.funcionario_id) as quantidade_funcionarios from departamentos d
join funcionarios f
on f.departamento_id = d.departamento_id
group by d.escritorio_id


),

consulta_salario as (
select d.escritorio_id,
sum(f.salario) as total_salario from  departamentos d
join funcionarios f
on f.departamento_id = d.departamento_id
group by d.escritorio_id

),

consulta_suprimento as (
select e.escritorio_id,
sum(s.custo) as total_suprimento from escritorios e
join suprimentos s
on s.escritorio_id = e.escritorio_id
group by e.escritorio_id

)

select ce.escritorio_nome,
ce.pais_nome,
cd.quantidade_departamentos,
cf.quantidade_funcionarios,
cs.total_salario,
csp.total_suprimento from consulta_escritorio ce
join consulta_departamento cd
on cd.escritorio_id = ce.escritorio_id
join consulta_funcionario cf
on cf.escritorio_id = ce.escritorio_id
join consulta_salario cs
on cs.escritorio_id = ce.escritorio_id
join consulta_suprimento csp
on csp.escritorio_id = ce.escritorio_id

```
**8.4** **Desafio de Agregação**: Encontre o "departamento mais equilibrado" - aquele com a menor diferença entre o maior e menor salário.
```sql
select d.departamento_id,
d.departamento_nome,
coalesce(max(f.salario) - min(f.salario), 0) as diferenca_salario from departamentos d
join funcionarios f
on d.departamento_id = f.departamento_id
group by  d.departamento_id,
d.departamento_nome
having count(f.funcionario_id) > 1
order by diferenca_salario asc limit 1
```
**8.5** **Text Search**: Encontre todos os produtos que contêm a palavra "Uniforme" no nome.
```sql```
**8.6** **Date Range**: Encontre todas as vendas que ocorreram no segundo trimestre de 2023 (abril-junho).
```sql```
## Nível 9: Desafios Ninja

**9.1** **Múltiplas Soluções**: Encontre todos os funcionários cujo salário está entre $6.000 e $10.000. Resolva de 3 formas diferentes.
```sql```
**9.2** **Data Quality**: Encontre todos os funcionários que NÃO possuem email ou telefone cadastrado.
```sql```
**9.2** **Desafio de Lógica Avançada**: Crie uma query que encontre "funcionários solitários" - aqueles que são os únicos em seu cargo dentro de seu departamento.
```sql```
**9.2* **Pipeline Complexo**: Crie um relatório que mostre, para cada país:
   - Nome do país
   - Número de escritórios
   - Número de departamentos
   - Número de funcionários
   - Receita total (soma dos salários + custo de suprimentos)
```sql```
---

## Nível 10: Casos Práticos e Simulações

### Cenário 1: Expansão Internacional
A Momento quer abrir um novo escritório no Brasil.

**10.1** Crie o novo escritório "Momento Brasil" em São Paulo com suprimentos iniciais de sua escolha.
```sql```
**10.2** Crie um novo departamento "Operações LATAM" vinculado a este escritório.
```sql```
**10.3** Contrate 5 novos funcionários para este departamento (você e 4 colegas de turma).
```sql```
### Cenário 2: Crise Financeira

A empresa precisa reduzir custos!

**10.4** Identifique os 3 escritórios com maiores custos de suprimentos.
```sql```
**10.5** Sugira onde cortar custos: liste suprimentos com quantidade acima de 50 unidades.
```sql```
**10.6** Calcule quanto a empresa economizaria se reduzisse 20% dos salários acima de $15.000 (apenas calcule, não execute).
```sql```
### Cenário 3: Auditoria de Vendas

O departamento financeiro suspeita de irregularidades.

**10.7** Encontre vendas que não possuem vendedor associado.
```sql```
**10.8** Verifique se há vendedores registrados nas vendas que não existem na coleção de funcionários.
```sql```
**10.9** Identifique produtos que aparecem nas vendas mas com preços unitários muito diferentes entre transações (variação > 10%).
```sql```
### Cenário 4: Relatório Executivo

O CEO pediu um dashboard completo.

**10.10** Crie UMA ÚNICA query de agregação que retorne:
   - Total de funcionários
   - Custo total com salários
   - Número de departamentos
   - Número de escritórios
   - Receita total de vendas
   - Produto mais vendido
```sql```
---

## Dicas Gerais

- Sempre verifique os dados antes de executar operações de atualização ou remoção.
- Utilize índices para otimizar consultas frequentes.
- Documente suas queries para facilitar a revisão futura.
- Divida consultas complexas em etapas menores para facilitar o entendimento.
- Pratique a criação de backups antes de fazer alterações significativas no banco de dados.
- Explore a documentação oficial do MongoDB para aprofundar seu conhecimento sobre operadores e agregações.

--- 

