const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
  res.render('places/index', { places })
})

router.post('/', (req, res) => {
  if (!req.body.pic) {
    //Default image
    req.body.pic = '/images/restraunt2.jpg'
  }
  
  if (!req.body.city) {
    //Default city
    req.body.city = 'SomewhereVille'
  }

  if (!req.body.state) {
    //Default state
    req.body.state = 'United States'
  }
  places.push(req.body)
  res.redirect('/places')
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  const { places } = req.params
  res.render('places')
})

module.exports = router
