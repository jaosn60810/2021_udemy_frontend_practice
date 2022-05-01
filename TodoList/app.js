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

  section.appendChild(todo);
});
