const {Schema, model} = require('mongoose')

const NoteSchema = new Schema({
  id: {type: Number, unique: true, required: true},
  title: {type: String, unique: false, required: true},
  content: {type: String, unique: false, required: true},
  datetime: {type: Number, unique: false, required: true},
})

module.exports = model('Note', NoteSchema)