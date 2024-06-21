'use client'
import Main from "@/components/layout";
import { useState } from "react";

interface FormData {
    title: string;
    link: string;
    category: string;
    subcat: string;
    additionalInfo: string;
}

const Submit = () => {
    const [formData, setFormData] = useState<FormData>({
        title: '',
        link: '',
        category: '',
        subcat: '',
        additionalInfo: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('https://formspree.io/f/xeojjozq', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Resource submitted successfully!');
                setFormData({
                    title: '',
                    link: '',
                    category: '',
                    subcat: '',
                    additionalInfo: ''
                });
            } else {
                console.error('Error submitting form:', response);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <Main>
            {/* <h1 className="text-3xl text-center drop-shadow-glow">
                Submit a resource
            </h1>
            <p className="text-center my-4 max-w-[800px] mx-auto font-light">
                Please fill out the form below to submit a resource to the site. It will take a few days for the resource to be reviewed and published.
            </p> */}
            <div className="flex items-center justify-center mb-10 md:mb-16">
                <div className="w-4/5 sm:w-2/3 flex flex-col text-center space-y-4">
                    <h1 className="text-3xl text-center drop-shadow-glow">
                        Submit a resource
                    </h1>
                    <p className="text-base text-zinc-400 font-light">
                        Please fill out the form below to submit a resource to the site. It will take a few days for the resource to be reviewed and published.
                    </p>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="flex gap-x-6 flex-col md:flex-row">
                    <div className="flex flex-col gap-y-4 mt-6 flex-1">
                        <label htmlFor="title" className="text-md">
                            Title <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            id="title"
                            className="p-2 border border-zinc-800 rounded-md bg-black focus:outline-none focus:border-zinc-400 placeholder:text-zinc-400 placeholder:text-sm" placeholder="Name/Title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-y-4 mt-6 flex-1">
                        <label htmlFor="link" className="text-md">
                            Link <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            id="link"
                            className="p-2 border border-zinc-800 rounded-md bg-black focus:outline-none focus:border-zinc-400 placeholder:text-zinc-400 placeholder:text-sm" placeholder="Url/Link"
                            value={formData.link}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex gap-x-6 flex-col md:flex-row">
                    <div className="flex flex-col gap-y-4 mt-6 flex-1">
                        <label htmlFor="category" className="text-md">
                            Category
                        </label>
                        <input
                            type="text"
                            id="category"
                            className="p-2 border border-zinc-800 rounded-md bg-black focus:outline-none focus:border-zinc-400 placeholder:text-zinc-400 placeholder:text-sm" placeholder="Eg. Web"
                            value={formData.category}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-y-4 mt-6 flex-1">
                        <label htmlFor="subcat" className="text-md">
                            Subcategories
                        </label>
                        <input
                            type="text"
                            id="subcat"
                            className="p-2 border border-zinc-800 rounded-md bg-black focus:outline-none focus:border-zinc-400 placeholder:text-zinc-400 placeholder:text-sm" placeholder="Enter any relevant subcategories"
                            value={formData.subcat}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-y-4 mt-6">
                    <label htmlFor="additionalInfo" className="text-md">
                        Additional Information
                    </label>
                    <textarea
                        id="additionalInfo"
                        className="p-2 border border-zinc-800 rounded-md bg-black focus:outline-none focus:border-zinc-400 placeholder:text-zinc-400 placeholder:text-sm" placeholder="Anything else you would like to add"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex md:justify-end mt-3">
                    <button className="bg-white text-black rounded-md px-8 py-2 mt-6 transition-colors w-full md:w-auto hover:opacity-90">
                        Submit
                    </button>
                </div>
            </form>
        </Main>
    );
}

export default Submit;