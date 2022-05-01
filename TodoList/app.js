const section = document.querySelector('section');
const add = document.querySelector('form button');

add.addEventListener('click', (e) => {
  e.preventDefault();

  const form = e.target.parentElement;
  const todoText = form.children[0].value;
  const todoMonth = form.children[1].value;
  const todoDate = form.children[2].value;

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

    todoItem.addEventListener('animationend', (e) => {
      todoItem.remove();
    });

    todoItem.style.animation = 'scaleDown 0.3s forwards';
  });

  todo.appendChild(completeButton);
  todo.appendChild(trashButton);

  todo.style.animation = 'scaleUp 0.3s forwards';

  section.appendChild(todo);
});
