const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

// http logger
app.use(morgan('combined'));


//template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'resources/views'));


app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port  http://localhost:${port}`)
})
// git remote add origin https://github.com/kelvin04nhan/nodejs.git