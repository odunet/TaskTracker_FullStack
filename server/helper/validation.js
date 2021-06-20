//verify if we have right data
function isValidTaskAdd(task) {
  return (
    task.text &&
    task.text.toString().trim() !== '' &&
    task.day &&
    task.day.toString().trim() !== ''
  );
}

//verify if we have right data
function isValidTaskDelete(req) {
  var temp = req.id;
  return temp;
}

//verify if we have right data
function isValidTaskUpdate(req) {
  return (
    req.id.toString().trim() !== '' && req.reminder.toString().trim() !== ''
  );
}

module.exports = {
  isValidTaskAdd,
  isValidTaskDelete,
  isValidTaskUpdate,
};
