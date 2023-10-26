const NoteSchema = require("../models/Note");

class NoteService {
  async createNote(datetime, title, content) {
    const count = await NoteSchema.countDocuments();

    const note = new NoteSchema({
      id: count + 1,
      datetime,
      title,
      content
    });
    note.save().then(() => console.log(`note successfully create with id: ${count + 1}`));
    return note
  }

  async getNote(id) {
    return NoteSchema.findOne({id})
  }

  async getNotes(offset=0, count=10, latest=1) {
    const notes = await NoteSchema.find()

    if (+latest === 1) return notes.sort((a, b) => b.datetime - a.datetime).slice(offset, count + offset)
    else return notes.sort((a, b) => a.datetime - b.datetime).slice(offset, count + offset)
  }

  async getCountNotes() {
    return NoteSchema.count()
  }
}

module.exports = new NoteService();