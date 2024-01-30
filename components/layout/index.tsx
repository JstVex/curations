interface MainProps {
    children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <>
            <main className="flex justify-center px-20 py-6">
                <div className="w-full max-w-main grow">
                    {children}
                </div>
            </main>
        </>
    );
}

export default Main;