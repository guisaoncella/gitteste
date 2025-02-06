const express = require ('express')

const app = express()

const port = 3000

app.get ('/', (req, res) => {
  res.send ('hello world')
})

app.get ('/about', (req, res) => {
  res.send ('this is the about page (change)')
})

app.get ('/contact', (req, res) => {
  res.send ('this is the contact page (change)')
})

app.get('/info', (req, res) => {
  res.json({
    server: 'Node.js',
    version: process.version,
    current_time: new Date()
  })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})