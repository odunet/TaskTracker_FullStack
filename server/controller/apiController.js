var { Model, client_A } = require('../model/model');
const validation = require('../helper/validation');

//Add to the list of users (Method: POST)
function addUser(req, res, next) {
  if (validation.isValidTaskAdd(req.body)) {
    // insert into db
    var truthValue;
    if (
      req.body.reminder.toString == 'true' ||
      req.body.reminder.toString == 't'
    ) {
      truthValue = true;
    } else {
      truthValue = false;
    }
    const task = {
      text: req.body.text.toString(),
      day: req.body.day.toString(),
      reminder: truthValue,
    };
    Model.insert_query(task.day, task.text, task.reminder, (data) => {
      res.send(data);
    });
  } else {
    res.status(422);
    res.json({
      message: 'No data was loaded',
    });
  }
}

// Delete user (Method: Delete)
function deleteUser(req, res, next) {
  if (validation.isValidTaskDelete(req.body)) {
    // insert into db
    var id = parseInt(req.body.id);
    Model.delete_query(id, (data) => {
      res.send(data);
    });
  } else {
    res.status(422);
    res.json({
      message: 'No data deleted',
    });
  }
}

// Update user (Method: Put)
function updateUser(req, res, next) {
  if (validation.isValidTaskUpdate(req.body)) {
    // insert into db
    var id = parseInt(req.body.id);
    Model.update_query(id, req.body.reminder, (data) => {
      res.send(data);
    });
  } else {
    res.status(422);
    res.json({
      message: 'No data deleted',
    });
  }
}

//Get user (Method: GET)
function getUser(req, res, next) {
  Model.get_task()
    .then((data) => {
      if (data) {
        // res.json(data)
        res.status(200).json({
          status: 200,
          statusMessage: 'Ok',
          message: 'The data from the postgres DB will be shown below',
          'external message': JSON.stringify(data),
        });
      } else {
        res.status(404).json({
          status: 404,
          statusMessage: 'Not Found',
          message: 'Data not found',
        });
      }
    })
    .catch((err) => console.log(err));
}

module.exports = {
  getUser,
  deleteUser,
  updateUser,
  addUser,
};
