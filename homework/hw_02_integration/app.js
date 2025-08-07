const express = require('express');
const todosRouter = require('');

const app = express();
app.use(express.json());

app.use('/todos', todosRouter);

// move below lines into server.js
app.listen(3000, () => {
  console.log('Todo app listening on port 3000');
});
