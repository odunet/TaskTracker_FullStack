var express = require('express');
var router = express.Router();
var {Model, client_A} = require('../model/model');

/* GET users listing. */
router.get('/', function(req, res, next) {

    Model.get_task()
    .then((data) =>{
        if(data){
          // res.json(data)
            res.status(200).json({
                "status": 200,
                "statusMessage": "Ok",
                "message": "The data from the postgres DB will be shown below",
                "external message": JSON.stringify(data)
            })
        }
        else{
            res.status(404).json({
                "status": 404,
                "statusMessage": "Not Found",
                "message": 'Data not found'
            })
        } 
    })
    .catch((err) => console.log(err))
});

module.exports = router;
