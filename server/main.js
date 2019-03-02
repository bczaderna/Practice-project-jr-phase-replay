'use strict'

const {db} = require('./db')
const app = require('.')
const PORT = 1337

// if you update your db schemas, make sure you drop the tables first and then recreate them

db.sync()
  .then(() => {
    console.log('db synced')
    app.listen(PORT, () => console.log(`studiously serving silly sounds on port ${PORT}`))
  })
