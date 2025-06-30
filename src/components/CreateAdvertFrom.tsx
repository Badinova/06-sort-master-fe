import React, {useState} from "react";

const CreateAdvertFrom = ()=> {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!title.trim() || !description.trim() || !photo.trim()) {
            setError("Please fill in all fields.");
            return;
        }
        try {
            const res = await fetch("/api/adverts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({title, description, photo})
            });

            if (!res.ok) throw new Error("Error creating advert.");
            setMessage("Advert created successfully.");
            setTitle("");
            setDescription("");
            setPhoto("");
            setError(null);
        }catch(err) {
            setError("Error creating advert.");
        }
    };
    return (
        <div className="max-w-md mx-auto mt-6 bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Create Advert</h2>

            {error && <p className="text-red-500 mb-2">{error}</p>}
            {message && <p className="text-green-500 mb-2">{message}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border px-3 py-2 rounded text-black"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border px-3 py-2 rounded text-black"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Photo (URL)</label>
                    <input
                        type="text"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                        className="w-full border px-3 py-2 rounded text-black"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-black text-white px-4 py-2 rounded hover:bg-zinc-800"
                >
                    Create Advert
                </button>
            </form>
        </div>

    );
};
export default CreateAdvertFrom