require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connectDB');
const AppRoutes = require('./routes/index.routes');
const app = express();
app.use(express.json());
const port = 3000;

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
async function main() {
  await connectDB();
  console.log('depois da connect');
  AppRoutes(app);
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}

main();
