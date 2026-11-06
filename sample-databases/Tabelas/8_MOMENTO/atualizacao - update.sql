update funcionarios
set funcionarios.departamento_id = 14
where funcionarios.funcionario_id = 103 
or funcionarios.funcionario_id = 107;

update funcionarios
set funcionarios.salario = funcionarios.salario - (0.1 * funcionarios.salario)
where funcionarios.departamento_id = 6;

update funcionarios
set funcionarios.salario = 5000,
funcionarios.cargo_id = 22
where funcionarios.funcionario_id = 104;

















