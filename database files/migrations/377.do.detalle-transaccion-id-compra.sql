ALTER TABLE agil_cuenta_transaccion_detalle  add id_compra  INT(11) DEFAULT null;
ALTER TABLE agil_cuenta_transaccion_detalle ADD CONSTRAINT agil_cuenta_transaccion_detalle_ibfk_2 FOREIGN KEY (id_compra) REFERENCES inv_compra(id);