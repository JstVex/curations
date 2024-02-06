'use client'

import { useState } from "react";

interface DescriptionLanguageProps {
    title: string,
    description: string,
    burmeseDescription: string
}

const LanguageSwitch: React.FC<DescriptionLanguageProps> = ({ title, description, burmeseDescription }) => {
    const [language, setLanguage] = useState('english');
    const [loading, setLoading] = useState(false);

    const switchLanguage = () => {
        setLoading(true);
        setTimeout(() => {
            setLanguage(prev => prev === 'english' ? 'burmese' : 'english');
            setLoading(false);
        }, 1000);
    };

    description = language === 'english' ? description : burmeseDescription;
    return (
        <>
            <div className="flex items-center justify-between mb-2">
                <h1 className="text-2xl font-bold">
                    {title}
                </h1>
                <button onClick={switchLanguage} className="bg-zinc-800 rounded-full px-2.5 py-1 text-sm text-zinc-100 transition-colors hover:bg-zinc-700 hover:text-white" disabled={loading}>
                    {language === 'english' ? 'Read in Burmese' : 'Read in English'}
                </button>
            </div>
            <div className="min-h-[6.5rem]">
                {loading ? (
                    <div className="flex flex-col gap-y-2">
                        <div className="bg-zinc-700 h-4 w-11/12 rounded-md animate-pulse"></div>
                        <div className="bg-zinc-700 h-4 w-3/4 rounded-md animate-pulse"></div>
                        <div className="bg-zinc-700 h-4 w-5/6 rounded-md animate-pulse"></div>
                        <div className="bg-zinc-700 h-4 w-11/12 rounded-md animate-pulse"></div>
                    </div>

                ) : (
                    <p className="text-sm font-light text-zinc-300 sm:text-[0.925rem]">
                        {description}
                    </p>
                )}
            </div>

        </>

    );
}

export default LanguageSwitch;