create table temp_id_historial_comensales_a select id from agil_comensales_historial_comida_cliente_empresa where fecha > '2018-1-1 00:00:00' and fecha < '2018-12-31 22:59:59' and concat('2000-1-1 ', substring(fecha,12)) < '2000-1-1 04:00:00' and concat('2000-1-1 ',substring(fecha,12)) > ' 2000-1-1 22:59:59';
update agil_comensales_historial_comida_cliente_empresa set fecha = case fecha when fecha then fecha + interval 4 hour else fecha end where id in (select id from temp_id_historial_comensales_a);
create table temp_id_historial_comensales_b select id from agil_comensales_historial_comida_cliente_empresa where fecha > '2018-1-1 00:00:00' and fecha < '2018-12-31 22:59:59' and concat('2000-1-1 ', substring(fecha,12)) < '2000-1-1 04:00:00' and concat('2000-1-1 ',substring(fecha,12)) > ' 2000-1-1 22:59:59';
update agil_comensales_historial_comida_cliente_empresa set fecha = case fecha when fecha then fecha + interval 4 hour else fecha end where id in (select id from temp_id_historial_comensales_b);