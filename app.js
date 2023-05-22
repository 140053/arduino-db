const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api', (req, res) => {
    res.send(req.body)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})