interface MainProps {
    children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <>
            <main className="flex justify-center sm:px-4 py-10">
                <div className="w-full max-w-main grow">
                    {children}
                </div>
            </main>
        </>
    );
}

export default Main;