require('dotenv').config()
const express = require('express')
const app = express()

app.set('views',__dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('*', (req, res) => {
  res.render('error404')
})

app.get('./edit', (req, res) => {
  res.render('Edit')
})

app.listen(process.env.PORT, console.log(`listening on port 3000`))