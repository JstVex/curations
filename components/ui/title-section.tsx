interface TitleSectionProps {
    title: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title }) => {
    return (
        <section className="flex items-center justify-center">
            <div className="w-2/3 flex flex-col text-center space-y-4">
                <h1 className="text-3xl text-zinc-300">
                    Curated resources & tools for {" "}
                    <div className="text-white drop-shadow-glow">
                        {title}
                    </div>
                </h1>
                <p className="text-zinc-400 font-light">
                    Explore a collection of curated resources, tools, inspirations and more that will help you in your tech journey. Got a new one? Submit here
                </p>
            </div>
        </section>
    );
}

export default TitleSection;