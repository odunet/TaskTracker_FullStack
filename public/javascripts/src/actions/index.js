//Add item to list
const updateTodo = (todoList, data) => {
  let res = [...todoList, data];
  //Implement updating of the DB via fetch post here.
  const API_URL = '/api/add';
  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => {
      console.log('Completed!');
    })
    .catch((err) => {
      console.log('Error saving file in PostgreSQL');
      return [];
    });
  return res;
};

//Delete item from list
const deleteTodo = (todoList, id) => {
  //Implement updating of the DB via fetch post here.
  const API_URL = '/api/delete';
  fetch(API_URL, {
    method: 'DELETE',
    body: JSON.stringify({ id: id }),
    headers: {
      'content-type': 'application/json',
      accept: 'application/json plain/text */*',
    },
  })
    .then((response) => response.json())
    .then((createMew) => {
      console.log('Completed!');
    });

  return todoList.filter((task) => task.id != id);
};

//Function implements double clicking tast
const changeReminder = (todoList, id) => {
  // Update reminder
  todoList = todoList.map((task) =>
    task.id === id ? { ...task, reminder: !task.reminder } : task
  );

  //Implement updating of the DB via fetch post here.
  //find task with same ID
  var actual_task = todoList.filter((task) => task.id === id);
  const API_URL = '/api/update';
  fetch(API_URL, {
    method: 'PUT',
    body: JSON.stringify({ id: id, reminder: actual_task[0].reminder }),
    headers: {
      'content-type': 'application/json',
      accept: 'application/json plain/text */*',
    },
  })
    .then((response) => response.json())
    .then((createMew) => {
      console.log('Completed!');
    });

  return [...todoList];
};

export { deleteTodo, updateTodo, changeReminder };
