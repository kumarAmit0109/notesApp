import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../features/notes/notesSlice.js";
import toast from "react-hot-toast";
import { FaExclamationCircle } from "react-icons/fa";

function CreateNote() {
    const [noteData, setNoteData] = useState({
        noteTitle: "",
        noteDescription: "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const inputChangeHandler = (event) => {
        const { name, value } = event.target;
        setNoteData((previousNoteData) => {
            return { ...previousNoteData, [name]: value };
        });
    };

    const saveHandler = () => {
        if (noteData.noteTitle && noteData.noteDescription) {
            dispatch(addNote(noteData));
            toast.success("Note added successfully");
            navigate("/");
        } else {
            const { noteTitle, noteDescription } = noteData;
            const messages = {
                both: "Add note title and description",
                title: "Add note title",
                description: "Add note description",
            };
            const message = noteTitle
                ? messages.description
                : noteDescription
                ? messages.title
                : messages.both;
            toast(message, {
                icon: <FaExclamationCircle className="text-xl text-red-600" />,
            });
        }
    };

    const descriptionBoxRef = useRef();

    useEffect(() => {
        descriptionBoxRef.current.style.height = `auto`;
        descriptionBoxRef.current.style.height = `${descriptionBoxRef.current.scrollHeight}px`;
    }, [noteData.noteDescription]);

    return (
        <div className="w-full min-h-screen overflow-x-hidden overflow-y-auto font-rubik">
            <header className="w-11/12 md:w-10/12 max-w-7xl mx-auto flex justify-between items-center py-6">
                <Link
                    to={"/"}
                    className="w-10 aspect-square border border-gray-400 rounded-full flex justify-center items-center"
                >
                    <IoIosArrowRoundBack className="text-3xl" />
                </Link>
                <button
                    type="button"
                    onClick={saveHandler}
                    className="text-xl text-white tracking-wider bg-green-600 border-2 border-green-600 rounded-lg hover:text-green-600 hover:bg-white transition-colors duration-300 px-4 py-1"
                >
                    Save
                </button>
            </header>
            <div className="w-11/12 md:w-10/12 max-w-7xl mx-auto flex flex-col gap-y-4 pb-6">
                <input
                    type="text"
                    placeholder="Title"
                    value={noteData.noteTitle}
                    name="noteTitle"
                    onChange={inputChangeHandler}
                    className="text-2xl tracking-wider placeholder:text-gray-400 focus:outline-none border-b border-b-gray-400"
                />
                <textarea
                    placeholder="Description"
                    value={noteData.noteDescription}
                    name="noteDescription"
                    onChange={inputChangeHandler}
                    ref={descriptionBoxRef}
                    className="text-lg tracking-wide placeholder:text-gray-400 focus:outline-none overflow-y-hidden resize-none"
                ></textarea>
            </div>
        </div>
    );
}

export default CreateNote;
