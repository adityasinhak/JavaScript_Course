// localStorage.setItem('name', 'John');

// // sessionStorage.setItem('name', 'aditya')


// // localStorage.removeItem('name');
// // get frm storage
// const name = localStorage.getItem('name');
// console.log(name);

document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;

  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('Task saved');

  e.preventDefault();
})