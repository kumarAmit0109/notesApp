import { Link } from "react-router-dom";

function NoteItem({ note, noteItemColor }) {
    return (
        <Link
            to={`/edit-note/${note.noteID}`}
            style={{ backgroundColor: noteItemColor }}
            className="flex flex-col justify-between gap-y-5 rounded-lg hover:scale-105 transition-transform duration-300 p-4"
        >
            <h2 className="text-2xl">
                {note.noteTitle.length > 40
                    ? note.noteTitle.substring(0, 40) + "..."
                    : note.noteTitle}
            </h2>
            <p>{note.noteChangedOn}</p>
        </Link>
    );
}

export default NoteItem;
