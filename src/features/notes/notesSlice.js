import { createSlice, nanoid } from "@reduxjs/toolkit";
import useDate from "../../hooks/useDate.js";

const initialState = {
    notes: [],
};

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote: (state, action) => {
            const [rareDate, formattedDate] = useDate();
            const newNote = {
                noteID: nanoid(),
                rareDate: rareDate,
                noteTitle: action.payload.noteTitle,
                noteDescription: action.payload.noteDescription,
                noteChangedOn: formattedDate,
            };
            state.notes.unshift(newNote);
        },
        editNote: (state, action) => {
            const [rareDate, formattedDate] = useDate();
            state.notes = state.notes.map((note) =>
                note.noteID === action.payload.noteID
                    ? {
                          ...note,
                          rareDate: rareDate,
                          noteTitle: action.payload.noteTitle,
                          noteDescription: action.payload.noteDescription,
                          noteChangedOn: formattedDate,
                      }
                    : note
            );
            state.notes.sort(
                (noteOne, noteTwo) => noteTwo.rareDate - noteOne.rareDate
            );
        },
        deleteNote: (state, action) => {
            state.notes = state.notes.filter(
                (note) => note.noteID !== action.payload.noteID
            );
        },
    },
});

export const { addNote, editNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;
