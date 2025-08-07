const express = require('express');
const router = express.Router();

let todos = [
  { id: 1, title: 'Learn Node.js', completed: false },
  { id: 2, title: 'Write unit tests', completed: false },
];

let nextId = 3;

// GET all todos
router.get('/', (req, res) => {
  res.json(todos);
});

// GET a single todo
router.get('/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ message: 'Todo not found' });
  res.json(todo);
});

// POST a new todo
router.post('/', (req, res) => {
  const newTodo = {
    id: nextId++,
    title: req.body.title,
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT update todo
router.put('/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ message: 'Todo not found' });

  todo.title = req.body.title ?? todo.title;
  todo.completed = req.body.completed ?? todo.completed;

  res.json(todo);
});

// DELETE todo
router.delete('/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Todo not found' });

  const deleted = todos.splice(index, 1);
  res.json(deleted[0]);
});

module.exports = router;
