const express = require("express");
const router = express.Router();
const { createNote, getNotes } = require("../controllers/noteController");

// Route to create a new note
router.post("/createNote", createNote);

// Route to get all notes
router.get("/notes", getNotes);

module.exports = router;
