angular.module('agil.servicios')
    .factory('ActivosPaginador',['$resource',function ($resource) {
        return $resource(restServer + "activos/empresa/:id_empresa/pagina/:pagina/items-pagina/:items_pagina/subgrupo/:subgrupo/mes/:mes/year/:anio/codigo/:codigo/activo/:activo/vida/:vida_util/:tipoMes/:tipoAnio/gestion/:mes_gestion/:anio_gestion");
    }])

    .factory('ActivosFijosEmpresa', ['ActivosPaginador', '$q', function (ActivosPaginador, $q) {
        var res = function (idEmpresa, paginador) {
            var delay = $q.defer();
            ActivosPaginador.get({
                id_empresa: idEmpresa,
                pagina: paginador.currentPage,
                items_pagina: paginador.itemsPerPage,
                texto_busqueda: paginador.search,
                mes: paginador.filter.mes.id,
                anio: paginador.filter.anio.id,
                subgrupo: paginador.filter.subgrupo.id ? paginador.filter.subgrupo.id : 0 ,
                codigo: paginador.filter.codigo,
                activo: paginador.filter.activo,
                vida_util: paginador.filter.vida_util,
                tipoMes: paginador.filter.tipoMes,
                tipoAnio: paginador.filter.tipoAnio,
                mes_gestion: paginador.filter.mes_gestion,
                anio_gestion: paginador.filter.anio_gestion
            }, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('ConfiguracionActivos', ['$resource',function ($resource) {
        return $resource(restServer + "activos/configuracion/empresa/:id_empresa/:id_usuario");
    }])

    .factory('GuardarConfiguracionActivosFijos', ['ConfiguracionActivos', '$q', function (ConfiguracionActivos, $q) {
        var res = function (idEmpresa, usuario, configuracion) {
            var delay = $q.defer();
            ConfiguracionActivos.save({ id_empresa: idEmpresa, id_usuario: usuario }, configuracion, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('ObtenerConfiguracionActivosFijos', ['ConfiguracionActivos', '$q', function (ConfiguracionActivos, $q) {
        var res = function (idEmpresa, usuario) {
            var delay = $q.defer();
            ConfiguracionActivos.get({ id_empresa: idEmpresa, id_usuario: usuario }, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('Revaluacion', ['$resource',function ($resource) {
        return $resource(restServer + "activos/revaluacion/:id_empresa/user/:id_usuario", null,
            {
                'update': { method: 'PUT' }
            });
    }])

    .factory('RevaluarActivo', ['Revaluacion', '$q', function (Revaluacion, $q) {
        var res = function (activo, idEmpresa, usuario) {
            var delay = $q.defer();
            Revaluacion.update({ id_empresa: idEmpresa, id_usuario: usuario }, activo, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('SubGruposProductoEmpresaActivos', ['$resource', function ($resource) {
		return $resource(restServer + "activos/subgrupos/empresa/:id_empresa", null,
			{
				'update': { method: 'PUT' }
			});
	}])

	.factory('ListaSubGruposActivosEmpresa', ['SubGruposProductoEmpresaActivos', '$q', function (SubGruposProductoEmpresaActivos, $q) {
		var res = function (id_empresa) {
			var delay = $q.defer();
			SubGruposProductoEmpresaActivos.query({ id_empresa: id_empresa }, function (entidades) {
				delay.resolve(entidades);
			}, function (error) {
					delay.reject(error);
				});
			return delay.promise;
		};
		return res;
	}])

    .factory('ActualizacionMensualActivos', ['$resource',function ($resource) {
        return $resource(restServer + "activos/mensual/:id_empresa", null,
            {
                'update': { method: 'PUT' }
            });
    }])

    .factory('VerificacionMensualActivos', ['ActualizacionMensualActivos', '$q', function (ActualizacionMensualActivos, $q) {
        var res = function (idEmpresa) {
            var delay = $q.defer();
            ActualizacionMensualActivos.get({ id_empresa: idEmpresa }, function (entidades) {
                delay.resolve(entidades);
            }, function (error) {
                delay.reject(error);
            });
            return delay.promise;
        };
        return res;
    }])

    .factory('ConfiguracionGestionEmpresa',  ['$resource',function ($resource) {
        return $resource(restServer+"configuracion-gestion/:id_empresa", null,
        {
            'update': { method:'PUT' }
        });
    }])
    
    .factory('ObtenerConfiguracionGestion', ['ConfiguracionGestionEmpresa','$q',function(ConfiguracionGestionEmpresa, $q) 
    {
        var res = function(idEmpresa) 
        {
            var delay = $q.defer();
            ConfiguracionGestionEmpresa.get({id_empresa:idEmpresa},function(entidad) 
            {        
                delay.resolve(entidad);
            }, function(error) 
                {
                    delay.reject(error);
                });
            return delay.promise;
        };
        return res;
    }])