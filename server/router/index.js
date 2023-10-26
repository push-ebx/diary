const Router = require('express').Router;
const router = new Router();
const noteController = require('../controllers/note-controller');

router.post('/createNote', noteController.createNote)
router.get('/getNote', noteController.getNote)
router.get('/getNotes', noteController.getNotes)
router.get('/getCountNotes', noteController.getCountNotes)

module.exports = router