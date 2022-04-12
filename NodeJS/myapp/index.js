import { Personne } from 'personne.js';

const express = require('express')
const app = express()
const port = 3000
const test = new Personne (Breuil,Nathan,Lorient);

app.get('/', (req, res) => {
  res.send('Hello Work!')
  res.send()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  