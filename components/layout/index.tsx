import Footer from "../footer";

interface MainProps {
    children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-[90vh]">
            <div className="flex-grow flex flex-col justify-between">
                <main className="flex justify-center px-3 sm:px-4 md:px-6 py-10 flex-grow">
                    <div className="w-full max-w-main">
                        {children}
                    </div>
                </main>
            </div>
            <div className="w-full max-w-main mx-auto">
                <Footer />
            </div>
        </div>
    );
}

export default Main;