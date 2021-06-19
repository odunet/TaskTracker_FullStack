//verify if we have right data
module.exports = function isValidTaskAdd(task) {
  return (
    task.text &&
    task.text.toString().trim() !== '' &&
    task.day &&
    task.day.toString().trim() !== ''
  );
};

//verify if we have right data
module.exports = function isValidTaskDelete(req) {
  var temp = req.id;
  return temp;
};

//verify if we have right data
module.exports = function isValidTaskUpdate(req) {
  return (
    req.id.toString().trim() !== '' && req.reminder.toString().trim() !== ''
  );
};
