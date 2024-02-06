import Footer from "../footer";

interface MainProps {
    children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <>
            <main className="flex justify-center px-3 sm:px-4 md:px-6 py-10">
                <div className="w-full max-w-main grow">
                    {children}
                    <Footer />
                </div>
            </main>
        </>
    );
}

export default Main;