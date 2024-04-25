import notFoundImg from "../assets/notFoundImg.png";

function PageNotFound() {
    return (
        <div className="w-full h-screen overflow-hidden font-rubik flex justify-center items-center">
            <div className="w-11/12 md:w-10/12 max-w-7xl mx-auto flex flex-col items-center gap-y-4">
                <img src={notFoundImg} alt="PageNotFoundImage" />
                <p className="text-2xl text-center">Page Not Found</p>
            </div>
        </div>
    );
}

export default PageNotFound;
