const subcategories = [
    "All",
    "Frontend",
    "Backend",
    "Portfolio",
    "Inspiration",
    "Repositories",
    "Tools",
    "Libraries",
    "Frameworks",
    "UI Kits",
    "Typography",
    "Icons",
    "Repositories",
    "Tools",
    "Libraries",
    "Frameworks",
    "UI Kits",
    "Typography",
    "Icons"
]

const Subcategories = () => {
    return (
        <section className="mt-16 mb-4">
            <div className="flex items-center text-zinc-400 overflow-x-auto no-scrollbar">
                {subcategories.map((subcategory, index) => (
                    <div key={index} className="w-auto min-w-max cursor-pointer rounded-full transition-colors px-4 py-2 hover:bg-zinc-900 hover:text-white">
                        {subcategory}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Subcategories;