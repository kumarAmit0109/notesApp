import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { IoIosClose, IoIosSearch } from "react-icons/io";
import NoNotesFound from "./NoNotesFound.jsx";
import { Link } from "react-router-dom";

function SearchNoteModal({ show, hideModalHandler }) {
    const notes = useSelector((state) => state.notes);
    const [query, setQuery] = useState("");

    const filteredNotes = useMemo(() => {
        return notes.filter((note) =>
            note.noteTitle.toLowerCase().includes(query.toLowerCase())
        );
    }, [notes, query]);

    const closeHandler = () => {
        hideModalHandler();
        setQuery("");
    };

    return (
        <>
            <div
                className={`absolute inset-0 bg-blackWith18 backdrop-blur-md z-10 ${
                    show
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                } transition-opacity duration-300`}
                onClick={closeHandler}
            ></div>
            <div
                className={`w-11/12 md:w-10/12 max-w-xl max-h-sixtyVH flex flex-col gap-y-3 bg-white rounded-xl absolute left-1/2 top-1/2 z-20 -translate-x-1/2 ${
                    show
                        ? "opacity-100 pointer-events-auto -translate-y-1/2"
                        : "opacity-0 pointer-events-none -translate-y-1/4"
                } transition-all duration-300 p-2 sm:p-3`}
            >
                <div className="flex justify-between items-center gap-x-2 border-b border-b-gray-400 px-2">
                    <IoIosSearch className="text-2xl" />
                    <input
                        type="input"
                        placeholder="Search note..."
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        className="w-full text-xl tracking-wide bg-transparent placeholder:text-gray-400 focus:outline-none"
                    />
                    <button
                        type="button"
                        onClick={closeHandler}
                        className="w-12 aspect-square flex justify-center items-center"
                    >
                        <IoIosClose className="text-4xl" />
                    </button>
                </div>
                {filteredNotes.length > 0 ? (
                    <div className="flex flex-col overflow-x-hidden overflow-y-auto">
                        {filteredNotes.map((note) => (
                            <Link
                                key={note.noteID}
                                to={`/edit-note/${note.noteID}`}
                                className="bg-transparent hover:bg-lightGrayishBlue rounded-md transition-colors duration-300 px-3 py-1 mr-1"
                            >
                                <h3 className="text-lg tracking-wider leading-tight">
                                    {note.noteTitle.length > 40
                                        ? note.noteTitle.substring(0, 40) +
                                          "..."
                                        : note.noteTitle}
                                </h3>
                                <p className="text-sm leading-tight">
                                    {note.noteChangedOn}
                                </p>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="overflow-x-hidden overflow-y-auto">
                        <NoNotesFound />
                    </div>
                )}
            </div>
        </>
    );
}

export default SearchNoteModal;
