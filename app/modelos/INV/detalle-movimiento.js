module.exports = function (sequelize, Sequelize) {
	var DetalleMovimiento = sequelize.define('inv_detalle_movimiento', {
		id_producto: {
			type: Sequelize.INTEGER,
			field: 'producto'
		},
		id_movimiento: {
			type: Sequelize.INTEGER,
			field: 'movimiento'
		},
		costo_unitario: {
			type: Sequelize.DECIMAL(20, 6),
			field: 'costo_unitario'
		},
		costo_unitario_dolares: {
			type: Sequelize.DECIMAL(20, 6),
			field: 'costo_unitario_dolares'
		},
		cantidad: {
			type: Sequelize.DECIMAL(20, 4),
			field: 'cantidad'
		},
		importe: {
			type: Sequelize.DECIMAL(20, 4),
			field: 'importe'
		},
		importe_dolares: {
			type: Sequelize.DECIMAL(20, 4),
			field: 'importe_dolares'
		},
		descuento: {
			type: Sequelize.DECIMAL(20, 4),
			field: 'descuento'
		},
		recargo: {
			type: Sequelize.DECIMAL(20, 4),
			field: 'recargo'
		},
		ice: {
			type: Sequelize.DECIMAL(20, 4),
			field: 'ice'
		},
		excento: {
			type: Sequelize.DECIMAL(20, 4),
			field: 'excento'
		},
		descuento_dolares: {
			type: Sequelize.DECIMAL(20, 4),
			field: 'descuento_dolares'
		},
		recargo_dolares: {
			type: Sequelize.DECIMAL(20, 4),
			field: 'recargo_dolares'
		},
		ice_dolares: {
			type: Sequelize.DECIMAL(20, 4),
			field: 'ice_dolares'
		},
		excento_dolares: {
			type: Sequelize.DECIMAL(20, 4),
			field: 'excento_dolares'
		},
		tipo_descuento: {
			type: Sequelize.BOOLEAN,
			field: 'tipo_descuento'
		},
		tipo_recargo: {
			type: Sequelize.BOOLEAN,
			field: 'tipo_recargo'
		},
		total: {
			type: Sequelize.DECIMAL(20, 4),
			field: 'total'
		},
		total_dolares: {
			type: Sequelize.DECIMAL(20, 4),
			field: 'total_dolares'
		},
		fecha_vencimiento: {
			type: Sequelize.DATE,
			field: 'fecha_vencimiento'
		},
		lote: {
			type: Sequelize.STRING,
			field: 'lote'
		},
		id_inventario: {
			type: Sequelize.INTEGER,
			field: 'inventario'
		}
	}, {
			freezeTableName: true
		});

	DetalleMovimiento.sync();

	return DetalleMovimiento;
}