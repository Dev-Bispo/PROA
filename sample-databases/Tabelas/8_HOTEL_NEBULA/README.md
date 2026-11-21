# Hotel Nebula 

A rede de Hotel Nebula está expandindo suas operações e precisa organizar digitalmente seus dados para melhorar reservas, hospedagens, serviços, avaliações de clientes e gestão dos quartos. A empresa quer desenvolver, no futuro, uma API de gestão hoteleira, mas antes disso precisa estruturar corretamente os dados.

### Objetivo geral

Desenvolver um projeto de banco de dados que percorra as etapas de:

- compreensão do problema
- modelagem dos dados
- implementação do banco
- extração e organização de dados

--- 

Crie um repositório no GitHub para o projeto e organize as entregas em três partes:

## Parte 1: Origem do Sistema

Em algum ponto entre a tecnologia, a organização e o caos elegante de um sistema mal planejado, existe o Hotel Nebula.

À primeira vista, ele parece apenas um hotel moderno: quartos confortáveis, reservas acontecendo a todo instante, hóspedes chegando de diferentes lugares, profissionais cuidando da operação, serviços extras sendo solicitados e avaliações aparecendo a cada nova estadia. Mas, por trás da recepção iluminada e das portas automáticas, existe um universo inteiro de dados tentando se organizar.

O problema é que esse universo ainda está disperso. O hotel tem informações sobre seus hóspedes, quartos, reservas, hospedagens, pagamentos, profissionais e avaliações, mas tudo isso está em sistemas diferentes, planilhas soltas ou até mesmo em papéis amassados. A equipe de gestão sabe que precisa colocar ordem nesse caos para melhorar a experiência dos clientes e otimizar a operação, mas não sabe por onde começar.

### Regras gerais do projeto

O sistema do hotel deve contemplar, no mínimo, elementos como:

- hóspedes
- quartos
- reservas
- hospedagens
- pagamentos
- profissionais/funcionários
- avaliações/comentários dos clientes

O que deve ser feito: 

- identificar as entidades principais do sistema
- identificar os relacionamentos entre elas
- levantar regras de negócio
- produzir o modelo conceitual
- transformar o modelo conceitual em um modelo lógico relacional

### Entregáveis:

- diagrama ER (Entidade-Relacionamento)
- descrição das entidades e relacionamentos

## Parte 2: Montagem do Núcleo

Foco: implementação física do banco relacional

Agora O profissional precisa construir a estrutura do banco de dados de forma funcional e consistente.

O que deve ser feito:
- criar o banco de dados
- criar as tabelas
- definir chaves primárias e estrangeiras
- aplicar restrições
- pensar em tipos de dados apropriados
- inserir dados iniciais para testes

Entregáveis: 
- script de criação do banco
- script de inserção de dados
- breve documentação explicando a estrutura criada

## Parte 3: Radar de Comando

Foco: consultas SQL e extração de dados

O hotel agora quer enxergar melhor sua operação. O profissional deve produzir consultas que gerem informações relevantes para gestão.

O que deve ser feito

Criar consultas que respondam perguntas como:

- quais quartos estão disponíveis em determinado período?
- quais hóspedes mais realizaram reservas?

```sql
select h.nome,f.fk_reservas_id_reservas  from hospedes h
join faz f
on h.id_hospede = f.fk_hospedes_id_hospede;
```

- qual foi o faturamento por mês?
```sql
select sum(valor_total) from (select p.fk_hospedes_id_hospede, f.fk_reservas_id_reservas, r.valor_total from pagamentos p
join faz f
on f.fk_hospedes_id_hospede = p.fk_hospedes_id_hospede
join reservas r
on r.id_reservas = f.fk_reservas_id_reservas
where p.status_pagamentos = 'APROVADO') as sub;
```
- quais serviços extras são mais consumidos?
```sql
select max(hs.quantidade) as quantidade, s.nome from hospedes_servicos hs
join servicos s
on s.id_servico = hs.fk_servicos_id_servico
group by s.nome
order by quantidade desc limit 2
```
- quais quartos receberam melhores avaliações?
```sql
select q.tipo_quarto, q.numero_quarto, f.nota from quartos q
join feedbacks f
on q.id_quarto = f.fk_quartos_id_quarto
where f.nota = 5
```
- quais reservas foram canceladas?
```sql
select * from reservas
where status_reserva = 'CANCELADA';
```
- quantas hospedagens cada profissional atendeu?
```sql
select pf.nome,
 count(h.fk_profissionais_funcionarios_id_funcionarios) as hospedagens_atendidas
 from profissionais_funcionarios pf
 join hospedagens h
 on h.fk_profissionais_funcionarios_id_funcionarios = pf.id_funcionarios
 group by pf.nome
```