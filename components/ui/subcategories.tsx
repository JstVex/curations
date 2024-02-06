interface SubcategoriesProps {
    subcategories: string[];
    onSelect: (subcategory: string) => void;
    selectedSubcategory: string;
}

const Subcategories: React.FC<SubcategoriesProps> = ({ subcategories, onSelect, selectedSubcategory }) => {
    return (
        <section className="mb-4">
            <div className="flex items-center text-zinc-400 overflow-x-auto no-scrollbar">
                {subcategories.map((subcategory, index) => (
                    <div
                        key={index}
                        className={`w-auto min-w-max cursor-pointer rounded-full transition-colors px-4 py-2 hover:text-white ${selectedSubcategory === subcategory ? "bg-zinc-800 text-white" : "hover:bg-zinc-900"}`}
                        onClick={() => onSelect(subcategory)}
                    >
                        {subcategory}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Subcategories;