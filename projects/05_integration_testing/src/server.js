const app = require('./app');

const port = 3012;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});