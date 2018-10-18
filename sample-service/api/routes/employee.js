/**
 * Created by Carlos Leonardo Camilo Vargas HUuamán on 12/3/16.
 */

var express = require('express');
var router = express.Router();
var DataBaseHandler = require("../config/DataBaseHandler");
var dataBaseHandler = new DataBaseHandler();

var db_query = process.env.DATABASE_QUERY || 'CALL sp_GetEmployee();'
var connection = dataBaseHandler.createConnection();

router.get('/', function (req, res, next) {
    connection.query(db_query, function (error, result, fields) {
        if (error) throw error;

        if(result[0].length== 0){
            res.status(404).send({
                status : "ERROR",
                message: "No existe usuario en Base de Datos"
            });
        }else{
            res.status(202).send({
                status : "SUCCESS",
                data : result[0]
            });
        }
    });
});

module.exports = router;