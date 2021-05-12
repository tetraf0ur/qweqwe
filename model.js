const mongoose = require('mongoose')

const Schema = mongoose.Schema

let Card = new Schema(
  {
    question: String,
    answer: String,
  },
  { collection: 'Cards' }
)

module.exports = mongoose.model('cards', Card)
