import Link from "next/link";

interface TitleSectionProps {
    title: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title }) => {
    return (
        <section className="flex items-center justify-center mb-16">
            <div className="w-4/5 sm:w-2/3 flex flex-col text-center space-y-4">
                <h1 className="text-3xl text-zinc-300">
                    Curated Resources for {" "}
                    <div className="text-white drop-shadow-glow">
                        {title}
                    </div>
                </h1>
                {title.includes("Burmese") ? (
                    <p className="text-base text-zinc-400 font-light">
                        သင့်၏နည်းပညာခရီးစဉ်တွင် ကူညီပေးမယ့် စီစဉ်ထားတဲ့ အရင်းအမြစ်များ၊ ကိရိယာများ၊ အင်စပရေးရှင်းများနှင့် အခြားအရာများကို စုစည်းထားတဲ့ စုစုပေါင်းကို ရှာဖွေကြည့်ပါ။ အသစ်တစ်ခုရှိပါသလား?{" "}
                        <span className="underline underline-offset-2 decoration-zinc-700 cursor-pointer transition-colors hover:decoration-zinc-500"> ဒီမှာတင်ပြပါ။</span>
                    </p>
                ) : (
                    <p className="text-base text-zinc-400 font-light">
                        Explore a collection of curated resources, tools, inspirations and more that will help you in your tech journey. Got a new one? {" "}
                        <Link href='/submit' className="underline underline-offset-2 decoration-zinc-700 cursor-pointer transition-colors hover:decoration-zinc-500">Submit here</Link>
                    </p>
                )}
            </div>
        </section>
    );
}

export default TitleSection;