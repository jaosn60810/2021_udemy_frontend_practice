const section = document.querySelector('section');
const add = document.querySelector('form button');

add.addEventListener('click', (e) => {
  e.preventDefault();

  const form = e.target.parentElement;
  const todoText = form.children[0].value;
  const todoMonth = form.children[1].value;
  const todoDate = form.children[2].value;

  if (todoText === '') {
    alert('Please enter sone text.');
    return;
  }

  const todo = document.createElement('div');
  todo.classList.add('todo');
  const text = document.createElement('p');
  text.classList.add('todo-text');
  text.textContent = todoText;
  const time = document.createElement('p');
  time.classList.add('todo-time');
  time.textContent = `${todoMonth} / ${todoDate}`;
  todo.appendChild(text);
  todo.appendChild(time);

  const completeButton = document.createElement('button');
  completeButton.classList.add('complete');
  completeButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
  completeButton.addEventListener('click', (e) => {
    const todoItem = e.target.parentElement;
    todoItem.classList.toggle('done');
  });

  const trashButton = document.createElement('button');
  trashButton.classList.add('trash');
  trashButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  trashButton.addEventListener('click', (e) => {
    const todoItem = e.target.parentElement;

    todoItem.addEventListener('animationend', () => {
      const text = todoItem.children[0].textContent;
      const myListArray = JSON.parse(localStorage.getItem('list'));
      myListArray.forEach((item, index) => {
        if (item.todoText === text) {
          myListArray.splice(index, 1);
          localStorage.setItem('list', JSON.stringify(myListArray));
        }
      });
      todoItem.remove();
    });

    todoItem.style.animation = 'scaleDown 0.3s forwards';
  });

  todo.appendChild(completeButton);
  todo.appendChild(trashButton);

  todo.style.animation = 'scaleUp 0.3s forwards';

  const myTodo = { todoText, todoMonth, todoDate };

  let myList = localStorage.getItem('list');
  if (!myList) {
    localStorage.setItem('list', JSON.stringify([myTodo]));
  } else {
    let myListArray = JSON.parse(myList);
    myListArray.push(myTodo);
    localStorage.setItem('list', JSON.stringify(myListArray));
  }

  form.children[0].value = '';

  section.appendChild(todo);
});

const myList = localStorage.getItem('list');
if (myList) {
  const myListArray = JSON.parse(myList);

  myListArray.forEach((item) => {
    const todo = document.createElement('div');
    todo.classList.add('todo');
    const text = document.createElement('p');
    text.classList.add('todo-text');
    text.textContent = item.todoText;
    const time = document.createElement('p');
    time.classList.add('todo-time');
    time.textContent = `${item.todoMonth} / ${item.todoDate}`;
    todo.appendChild(text);
    todo.appendChild(time);

    const completeButton = document.createElement('button');
    completeButton.classList.add('complete');
    completeButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
    completeButton.addEventListener('click', (e) => {
      const todoItem = e.target.parentElement;
      todoItem.classList.toggle('done');
    });

    const trashButton = document.createElement('button');
    trashButton.classList.add('trash');
    trashButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    trashButton.addEventListener('click', (e) => {
      const todoItem = e.target.parentElement;
      todoItem.addEventListener('animationend', () => {
        const text = todoItem.children[0].textContent;
        const myListArray = JSON.parse(localStorage.getItem('list'));
        myListArray.forEach((item, index) => {
          if (item.todoText === text) {
            myListArray.splice(index, 1);
            localStorage.setItem('list', JSON.stringify(myListArray));
          }
        });

        todoItem.remove();
      });

      todoItem.style.animation = 'scaleDown 0.3s forwards';
    });

    todo.appendChild(completeButton);
    todo.appendChild(trashButton);

    todo.style.animation = 'scaleUp 0.3s forwards';

    section.appendChild(todo);
  });
}
