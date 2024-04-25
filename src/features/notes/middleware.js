import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { addNote, editNote, deleteNote } from "./notesSlice.js";

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
    matcher: isAnyOf(addNote, editNote, deleteNote),
    effect: (action, listenerApi) => {
        localStorage.setItem(
            "notes",
            JSON.stringify(listenerApi.getState().notes)
        );
    },
});
