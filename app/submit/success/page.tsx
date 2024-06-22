import Main from "@/components/layout";
import Link from "next/link";

const Success = () => {
    return (
        <Main>
            <div className="flex items-center justify-center mb-10 md:mb-16">
                <div className="w-4/5 sm:w-2/3 flex flex-col text-center space-y-4">
                    <h1 className="text-3xl text-center drop-shadow-glow">
                        Thank You!
                    </h1>
                    <p className="text-base text-zinc-400 font-light">
                        Your resource has been submitted successfully. We will review it and add it to the list soon.
                    </p>
                    <div className="flex justify-center mt-8">
                        <Link href="/" className="text-zinc-200 underline underline-offset-2 decoration-zinc-700 cursor-pointer transition-colors hover:decoration-zinc-500">
                            Explore more resources
                        </Link>
                        <span className="mx-4 text-zinc-300">or</span>
                        <Link href="/submit" className="text-zinc-200 underline underline-offset-2 decoration-zinc-700 cursor-pointer transition-colors hover:decoration-zinc-500">
                            Add another resource
                        </Link>
                    </div>
                </div>

            </div>
        </Main>
    );
}

export default Success;