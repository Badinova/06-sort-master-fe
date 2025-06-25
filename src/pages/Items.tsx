import {useEffect, useState} from "react";
import ItemCard from "../components/ItemCard.tsx";


type Item = {
    id: number;
    name: string;
    description: string;
    containerId: number;
};

export default function Items() {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/items')
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);

    return (
        <div className="p-4">
            <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold mb-4">All Items</h1>

            </div>
            <div className="grid grid-cols-3 gap-4">
                {items.map((item) => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}
