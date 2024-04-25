import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CreateNote from "./pages/CreateNote.jsx";
import EditNote from "./pages/EditNote.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-note" element={<CreateNote />} />
                <Route path="/edit-note/:id" element={<EditNote />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Toaster />
        </>
    );
}

export default App;
