import { Link } from "react-router-dom";
import { IoIosAdd, IoIosSearch } from "react-icons/io";
import { useSelector } from "react-redux";
import NoteItem from "../components/NoteItem.jsx";
import NoNotesFound from "../components/NoNotesFound.jsx";
import SearchNoteModal from "../components/SearchNoteModal.jsx";
import { useState } from "react";

function Home() {
    const notes = useSelector((state) => state.notes);
    const [showSearchNoteModal, setshowSearchNoteModal] = useState(false);

    const getNoteColor = (index) => {
        const colors = ["#fec970", "#fe9b71", "#b592fc", "#00d4fe", "#e3ee8e"];
        const colorIndex = index % colors.length;
        return colors[colorIndex];
    };

    return (
        <div
            className={`w-full overflow-x-hidden font-rubik relative ${
                showSearchNoteModal
                    ? "h-screen overflow-y-hidden"
                    : "min-h-screen overflow-y-auto"
            }`}
        >
            <header className="w-11/12 md:w-10/12 max-w-7xl mx-auto flex justify-between items-center py-6">
                <h1 className="font-bold text-3xl tracking-wider uppercase">
                    Notes
                </h1>
                <div className="flex items-center gap-x-4">
                    <button
                        type="button"
                        onClick={() => setshowSearchNoteModal(true)}
                        className="w-10 aspect-square border border-black rounded-full flex justify-center items-center hover:bg-black transition-colors duration-300 group"
                    >
                        <IoIosSearch className="text-xl group-hover:text-white transition-colors duration-300" />
                    </button>
                    <Link
                        to={"/create-note"}
                        className="w-10 aspect-square rounded-full bg-black border border-black flex justify-center items-center hover:bg-white transition-colors duration-300 group"
                    >
                        <IoIosAdd className="text-3xl text-white group-hover:text-black transition-colors duration-300" />
                    </Link>
                </div>
            </header>
            {notes.length > 0 ? (
                <div className="w-11/12 md:w-10/12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-6">
                    {notes.map((note, index) => (
                        <NoteItem
                            key={note.noteID}
                            note={note}
                            noteItemColor={getNoteColor(index)}
                        />
                    ))}
                </div>
            ) : (
                <div className="w-11/12 md:w-10/12 max-w-7xl mx-auto py-6">
                    <NoNotesFound />
                </div>
            )}
            <SearchNoteModal
                show={showSearchNoteModal}
                hideModalHandler={() => setshowSearchNoteModal(false)}
            />
        </div>
    );
}

export default Home;
