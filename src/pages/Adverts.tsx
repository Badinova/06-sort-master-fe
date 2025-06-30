import { useEffect, useState } from "react";
import AdvertCard from "../components/AdvertCard.tsx";

type Advert = {
    id: number;
    title: string;
    description: string;
    photo: string;
};

export default function Adverts() {
    const [adverts, setAdverts] = useState<Advert[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("http://localhost:8080/api/adverts")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch adverts");
                return res.json();
            })
            .then(setAdverts)
            .catch((err) => setError(err.message));
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Advertisements</h1>

            {error && (
                <p className="text-red-500 mb-2">Error: {error}</p>
            )}

            <div className="grid grid-cols-2 gap-4">
                {adverts.map((advert) => (
                    <AdvertCard key={advert.id} advert={advert} />
                ))}
            </div>
        </div>
    );
}
