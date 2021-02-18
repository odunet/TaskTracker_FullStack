var express = require('express');
var router = express.Router();
var {Model, client_A} = require('../model/model');

//verify if we have right data
function isValidTask(task){
    return task.text && task.text.toString().trim() !== '' &&
    task.day && task.day.toString().trim() !== ''
}

/* add to users listing. */
router.post('/', function(req, res, next) {
    if(isValidTask(req.body)){
        // insert into db
        var truthValue
        if(req.body.reminder.toString == "true" || req.body.reminder.toString == "t"){
            truthValue = true
        }
        else{
            truthValue = false
        }
        const task = {
            text: req.body.text.toString(), 
            day: req.body.day.toString(),
            reminder: truthValue
         }
        Model.insert_query(task.day, task.text , task.reminder,(data)=>{
            res.send(data)
        })
    }
    else{
        res.status(422);
        res.json({
            message: 'No data was loaded'
        })
    }

});

module.exports = router;
