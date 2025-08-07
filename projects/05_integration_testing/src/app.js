const express = require('express');
const usersRouter = require('./routes/users');

const app = express();
const port = 3012;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running');
});

//get all -> http://localhost:3012 + /api/users + / => http://localhost:3012/api/users/
//get by id -> http://localhost:3012 + /api/users + /:id => http://localhost:3012/api/users/2
//post -> http://localhost:3012 + /api/users + / => http://localhost:3012/api/users/

app.use('/api/users', usersRouter);

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

module.exports = app;