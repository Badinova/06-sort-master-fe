import type { Advert } from "../common/types/Advert";

interface Props {
    advert: Advert;
}

export default function AdvertCard({ advert }: Props) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition-all">
            {/* Изображение */}
            {advert.photo && (
                <img
                    src={advert.photo}
                    alt={advert.title}
                    className="w-full h-48 object-cover"
                />
            )}

            {/* Контент */}
            <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">{advert.title}</h3>
                <p className="text-gray-600 text-sm">{advert.description}</p>
            </div>
        </div>
    );
}
