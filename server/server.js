const express = require('express')
const app = express()
const PORT = 7777

app.get('/', (req, res) => {
  res.send('node + express + nginx')
})

app.listen(PORT, () => {
  console.log(`Server runs on PORT: ${PORT}`)
})