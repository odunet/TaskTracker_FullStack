var express = require('express');
var router = express.Router();
var {Model, client_A} = require('../model/model');

//verify if we have right data
function isValidTask(req){
    var temp = req.id
    return temp;
}

/* delete users from listing. */
router.delete('/', function(req, res, next) {
    if(isValidTask(req.body)){
        // insert into db
        var id = parseInt(req.body.id)
        Model.delete_query(id,(data)=>{
            res.send(data)
        })
    }
    else{
        res.status(422);
        res.json({
            message: 'No data deleted'
        })
    }

});

module.exports = router;
