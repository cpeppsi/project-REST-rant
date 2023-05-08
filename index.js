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


// Photo by <a href="https://unsplash.com/@finnwhelen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Finn Whelen</a> on <a href="https://unsplash.com/s/photos/restraunt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@space_launch_system?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andy Wang</a> on <a href="https://unsplash.com/photos/94E53YHCqGU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  