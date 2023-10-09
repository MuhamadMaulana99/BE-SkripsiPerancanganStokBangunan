const express = require('express');
const cors = require('cors');
const db = require('./model/index.js')

const userRoute = require('./route/user.js')

const app = express()
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());

// db.sequelize.sync({ force: true }).then(() => console.log('database ready!'))
db.sequelize.sync().then(() => console.log('database ready!'))

app.use(userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
