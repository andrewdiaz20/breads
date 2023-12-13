// breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// bakers 
const bakersController = require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)

// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})
baker.get('/data/seed', (req, res) => {
  Baker.insertMany(bakerSeedData)
      .then(res.redirect('/breads'))
})
