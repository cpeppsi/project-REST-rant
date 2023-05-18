const router = require('express').Router()

router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/restraunt1.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/restraunt2.jpg'
  }]
  
  res.render('places/index', { places })
})

router.post('/', (req, res) => {
  res.send('POST /places')
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  const { places } = req.params
  res.render('places')
})

module.exports = router
