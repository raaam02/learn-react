const Note = require("../models/Note");

// Controller function for creating a note
exports.createNote = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newNote = new Note({
      title,
      content,
    });
    await newNote.save();
    res.status(201).json({ message: "Note created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to create note" });
  }
};

// Controller function for getting all notes
exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch notes" });
  }
};
