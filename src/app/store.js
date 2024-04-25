import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "../features/notes/notesSlice.js";
import { listenerMiddleware } from "../features/notes/middleware.js";

const notesStored = JSON.parse(localStorage.getItem("notes") || "null");

const store = configureStore({
    preloadedState: {
        notes: notesStored === null ? [] : notesStored,
    },
    reducer: notesSlice,
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        listenerMiddleware.middleware,
    ],
});

export default store;
