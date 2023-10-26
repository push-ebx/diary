const noteService = require('../services/note-service');

class NoteController {
  async createNote(req, res) {
    try {
      const {datetime, title, content} = req.body
      if (title.length > 200) return res.json('The length of the title must be less or equal than 200')
      if (content.length > 2000) return res.json('The length of the content must be less or equal than 200')
      if (datetime <= 0) return res.json('Invalid date')

      const note = await noteService.createNote(datetime, title, content);
      return res.json(note);
    } catch (e) {
      console.log(e)
      return res.json('Sever error')
    }
  }

  async getNote(req, res) {
    const {id} = req.query

    try {
      const note = await noteService.getNote(id);
      return res.json(note);
    } catch (e) {
      console.log(e)
      return res.json('Sever error')
    }
  }

  async getNotes(req, res) {
    let {offset, count, latest} = req.query

    if (latest && (!isFinite(latest) || (+latest !== 1 && +latest !== 0))) return res.json('Invalid latest param')
    if (!isFinite(offset || 1)) return res.json('Invalid offset param')
    if (!isFinite(count || 1)) return res.json('Invalid count param')

    offset = +offset
    count = +count
    latest = +latest

    try {
      const notes = await noteService.getNotes(offset, count, latest);
      return res.json(notes);
    } catch (e) {
      console.log(e)
      return res.json('Sever error')
    }
  }

  async getCountNotes(req, res) {
    try {
      const count = await noteService.getCountNotes();
      return res.json(count);
    } catch (e) {
      console.log(e)
      return res.json('Sever error')
    }
  }
}

module.exports = new NoteController();