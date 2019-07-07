const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const routes = require('./app/routes');

dotenv.config({ path: './.env.local' });

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(routes);

app.listen(3000, () => {
  console.log('Dev app listening on port 3000!');
});
