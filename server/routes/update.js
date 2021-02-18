var express = require('express');
var router = express.Router();
var {Model, client_A} = require('../model/model');

//verify if we have right data
function isValidTask(req){
    return req.id.toString().trim() !== '' && req.reminder.toString().trim() !== '';
}

/* Update user listing. */
router.put('/', function(req, res, next) {
    if(isValidTask(req.body)){
        // insert into db
        var id = parseInt(req.body.id)
        Model.update_query(id, req.body.reminder, (data)=>{
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
