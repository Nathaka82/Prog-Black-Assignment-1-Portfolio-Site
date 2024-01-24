const port = 8080;

const app = require('./app');
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
 });