const SequelizeAuto = require('sequelize-auto');
const dotenv = require('dotenv');

const TABLES = ['titles', 'directors', 'titles_directors'];

dotenv.config({ path: '../../.env.local' });

const auto = new SequelizeAuto(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    port: parseInt(process.env.DB_PORT, 10),
    tables: TABLES,
  },
);

auto.run((err) => {
  if (err) throw err;
});
