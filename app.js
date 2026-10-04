const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const KEY = 'opencode-todos';

let todos = JSON.parse(localStorage.getItem(KEY) || '[]');

function save() {
  localStorage.setItem(KEY, JSON.stringify(todos));
}

function render() {
  list.innerHTML = '';
  todos.forEach((t, i) => {
    const li = document.createElement('li');
    if (t.done) li.classList.add('done');

    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.checked = !!t.done;
    cb.onchange = () => { todos[i].done = cb.checked; save(); render(); };

    const span = document.createElement('span');
    span.textContent = t.text;

    const del = document.createElement('button');
    del.textContent = 'Xóa';
    del.onclick = () => { todos.splice(i, 1); save(); render(); };

    li.append(cb, span, del);
    list.appendChild(li);
  });
}

form.onsubmit = (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  todos.push({ text, done: false });
  input.value = '';
  save(); render();
};

render();
