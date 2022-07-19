const express = require('express');
const path = require('path');
const cors = require('cors');
const sequelize = require('./src/db');
const routes = require('./src/routes/index');

const app = express();
app.use(cors()); //allows for cross-origin resource sharing

sequelize
  .authenticate()
  .then((res) => console.log('Database is connected'))
  .catch((err) => {
  console.log('There was an error connecting to the database ', err);
  process.exit(1);
});

app.use(express.static(path.join(__dirname, 'src', 'public')));
app.use(express.json());
app.use('/api', routes);

const server = app.listen(8000, () => {
  console.log(`Server is up and running on PORT: 8000`);
});