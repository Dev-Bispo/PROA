select count(funcionario_id) from funcionarios;
select * from funcionarios order by funcionario_id asc;

select departamentos.departamento_nome,
count(funcionarios.departamento_id) as total_funcionarios
 from funcionarios 
 inner join departamentos
 on funcionarios.departamento_id = departamentos.departamento_id
where departamentos.departamento_nome like 'Tecnologia%'
group by departamentos.departamento_nome;

select departamentos.departamento_nome from departamentos;
select count(departamentos.departamento_id) as toat_departamentos from departamentos;

select count(escritorios.escritorio_id) as total_escritorio from escritorios;
select count(escritorios.escritorio_nome) as total_escritorio, paises.pais_nome  from escritorios left join paises on escritorios.pais_id = paises.pais_id group by  paises.pais_nome;

select departamentos.departamento_nome, sum(funcionarios.salario) as total_custo_salario
from funcionarios 
inner join departamentos
on funcionarios.departamento_id = departamentos.departamento_id
where departamentos.departamento_nome like 'Venda%'
group by departamentos.departamento_nome;

select round(avg(funcionarios.salario), 4) as total_custo_salario
from funcionarios 
join cargos
on funcionarios.cargo_id = cargos.cargo_id
where cargos.cargo_nome not like 'CEO%' and cargos.cargo_nome not like 'CMO%' and cargos.cargo_nome not like 'CFO%';

select round(avg(funcionarios.salario), 4), departamentos.departamento_nome as departamento from funcionarios
join departamentos 
on funcionarios.departamento_id = departamentos.departamento_id
where departamentos.departamento_nome like 'Tecnologia%' 
group by departamentos.departamento_nome;

select round(avg(funcionarios.salario), 4) as salario, departamentos.departamento_nome as departamento from funcionarios
join departamentos 
on funcionarios.departamento_id = departamentos.departamento_id
group by departamentos.departamento_nome 
order by round(avg(funcionarios.salario), 4) desc limit 2;


select count(funcionarios.funcionario_id) as funcionarios_quantidade, departamentos.departamento_nome as departamento from funcionarios
join departamentos 
on funcionarios.departamento_id = departamentos.departamento_id
group by departamentos.departamento_nome 
order by funcionarios_quantidade desc limit 2;

select count(dependentes.funcionario_id) as dependente from dependentes
where dependentes.relacionamento like 'conjuge%';

select count(dependentes.funcionario_id) as dependente from dependentes
where dependentes.relacionamento like 'filh%';

select concat(funcionarios.primeiro_nome,' ',funcionarios.sobrenome) as nome, funcionarios.data_contratacao from funcionarios
order by  funcionarios.data_contratacao asc limit 1;

select concat(funcionarios.primeiro_nome,' ',funcionarios.sobrenome) as nome, funcionarios.data_contratacao from funcionarios
order by  funcionarios.data_contratacao desc limit 2;

select concat(funcionarios.primeiro_nome,' ',funcionarios.sobrenome) as nome, funcionarios.data_contratacao from funcionarios
order by  funcionarios.data_contratacao asc limit 5;

select count(funcionarios.funcionario_id) as funcionarios_contratados from funcionarios
where extract(year from funcionarios.data_contratacao) <= 1999;

select round(avg(funcionarios.salario)) as media_salario, extract(year from funcionarios.data_contratacao) as data_contratacao from funcionarios
group by data_contratacao;

select sum(suprimentos.custo) as custo, escritorios.escritorio_nome from suprimentos
join escritorios
on suprimentos.escritorio_id = escritorios.escritorio_id
group by escritorios.escritorio_nome 
order by custo desc;

select count(distinct suprimentos.suprimento_nome) as suprimentos_diferentes, escritorios.escritorio_nome as nome_escritorio from suprimentos
join escritorios
on suprimentos.escritorio_id = escritorios.escritorio_id
group by nome_escritorio
order by suprimentos_diferentes desc limit 4;


select suprimentos.suprimento_nome, (suprimentos.custo / suprimentos.quantidade_comprada) as valor_unitario from suprimentos
order by valor_unitario desc;

select  sum(suprimentos.custo / suprimentos.quantidade_comprada) as valor_unitario from suprimentos;

select produtos.produto_nome, vendas.produto_id from produtos
join vendas
on produtos.produto_id = vendas.produto_id
group by vendas.produto_id;


--- corrigir
select sum(vendas.quantidade_vendida) as quantidade_venda, produtos.produto_nome from vendas
join produtos
on vendas.produto_id = produtos.produto_id
group by produtos.produto_nome
order by quantidade_venda desc limit 1;


select sum(vendas.quantidade_vendida) as quantidade_venda, produtos.produto_nome from vendas
join produtos
on vendas.produto_id = produtos.produto_id
group by produtos.produto_nome
order by quantidade_venda asc limit 1;

select produtos.produto_nome as produtos, max(vendas.quantidade_vendida * produtos.produto_price) as receita from vendas
join produtos	
on produtos.produto_id = vendas.produto_id
group by produtos.produto_nome
order by receita desc limit 1;

select produtos.produto_nome as produto, produtos.produto_price as valor_unitario from produtos
order by valor_unitario desc limit 1;

select sum(vendas.quantidade_vendida * produtos.produto_price) as faturamento_vendas from vendas
join produtos
on vendas.produto_id = produtos.produto_id;

select count(vendas.venda_id) as quantia_vendas, concat(extract(month from vendas.venda_data),'/',extract(year from vendas.venda_data)) as periodo_vendas from vendas
where extract(month from vendas.venda_data) = 6 and
extract(year from vendas.venda_data) = 2023
group by concat(extract(month from vendas.venda_data),'/',extract(year from vendas.venda_data));

select funcionarios.funcionario_id, concat(funcionarios.primeiro_nome,' ', funcionarios.sobrenome) as nome, count(vendas.quantidade_vendida) as total_vendido from funcionarios
join vendas
on funcionarios.funcionario_id = vendas.funcionario_id
group by funcionarios.funcionario_id 
order by total_vendido desc;

select funcionarios.funcionario_id, concat(funcionarios.primeiro_nome,' ', funcionarios.sobrenome) as nome, count(vendas.quantidade_vendida) as total_vendido, round(sum(vendas.quantidade_vendida * produtos.produto_price), 4) as receita from funcionarios
join vendas
on funcionarios.funcionario_id = vendas.funcionario_id
join produtos
on vendas.produto_id = produtos.produto_id
group by funcionarios.funcionario_id 
order by receita desc ;

select concat(funcionarios.primeiro_nome,' ',funcionarios.sobrenome) as nome, funcionarios.data_contratacao from funcionarios
where extract(year from funcionarios.data_contratacao) < 1990;

select departamentos.departamento_nome as departamentos, count( funcionarios.funcionario_id) as quantidade_funcionarios, sum(funcionarios.salario) as salario_total, round(avg(funcionarios.salario), 4) as media_salarial from departamentos
join funcionarios
on funcionarios.departamento_id = departamentos.departamento_id
group by departamentos.departamento_nome
order by salario_total desc;

select cargos.cargo_nome as cargos, count(funcionarios.funcionario_id) as quantidade_funcionarios from cargos
join funcionarios
on cargos.cargo_id = funcionarios.cargo_id
group by cargos
order by quantidade_funcionarios desc limit 3;

with media_funcionario as (
select departamentos.departamento_nome as departamento,
 concat(funcionarios.primeiro_nome,' ',funcionarios.sobrenome) as funcionario,
 funcionarios.salario as salario,
 round(avg(funcionarios.salario) OVER(partition by departamentos.departamento_id), 4) as media_salarial
 from funcionarios
join departamentos
on funcionarios.departamento_id = departamentos.departamento_id)

select departamento, funcionario, salario, round(media_salarial, 4) as media_salarial from media_funcionario
where salario > media_salarial;

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

with equipe_vendas as (
select funcionarios.funcionario_id as id_funcionarios,
 concat(funcionarios.primeiro_nome,' ',funcionarios.sobrenome) as nome_funcionario from funcionarios
 where funcionarios.departamento_id in (select departamento_id from departamentos where departamento_nome like 'vendas%')),
 
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
 on vendedores.id_produto = produtos_unicos.id_produto;
 
 with equipe_vendas as (
select funcionarios.funcionario_id as id_funcionarios,
 concat(funcionarios.primeiro_nome,' ',funcionarios.sobrenome) as nome_funcionario from funcionarios
 where funcionarios.departamento_id in (select departamento_id from departamentos where departamento_nome like 'vendas%'))
 

select id_funcionarios, concat(dependentes.primeiro_nome,' ',dependentes.sobrenome) as nome_dependentes,
dependentes.relacionamento as relacionamento from dependentes
join equipe_vendas
on id_funcionarios = dependentes.funcionario_id;

with escritorio_escolhido as(
select escritorios.escritorio_id as escritorio_id,
 escritorios.escritorio_nome as escritorio_nome,
 paises.pais_nome as pais  from escritorios
join paises
on paises.pais_id = escritorios.pais_id
where escritorios.escritorio_nome like 'stark tower%'
),

consulta_departamentos as (
select escritorio_escolhido.escritorio_id, 
escritorio_escolhido.escritorio_nome, 
count(departamentos.departamento_id) as quantidade_departamentos, 
count(funcionarios.funcionario_id) as quantidade_funcionarios from escritorio_escolhido
join departamentos
on departamentos.escritorio_id = escritorio_escolhido.escritorio_id
join funcionarios
on funcionarios.departamento_id = departamentos.departamento_id
group by escritorio_escolhido.escritorio_id
)

select escritorio_escolhido.escritorio_nome,
 escritorio_escolhido.pais,
 consulta_departamentos.quantidade_departamentos,
 consulta_departamentos.quantidade_funcionarios from escritorio_escolhido
 join consulta_departamentos
 on consulta_departamentos.escritorio_id = escritorio_escolhido.escritorio_id
