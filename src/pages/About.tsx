export default function About() {
    return (
        <div className="p-10 px-5 max-w-3xl mx-auto font-serif text-gray-800 leading-relaxed bg-gray-300 rounded-4xl border-2 border-gray-400 shadow-lg">
            <h1 className="text-5xl font-bold text-teal-500 mb-6">About SortMeister</h1>

            <p>
                <strong className="text-teal-600">SortMeister</strong> is an interactive app that helps users learn how to properly sort waste and take better care of the environment.
            </p>

            <h2 className="text-xl font-semibold text-teal-600 mt-8"> Why Is Waste Sorting Important?</h2>
            <ul className="list-disc pl-6 mt-2">
                <li>Reduces pollution and environmental harm</li>
                <li>Decreases landfill waste</li>
                <li>Allows for recycling and reuse of materials</li>
            </ul>

            <h2 className="text-xl font-semibold text-teal-600 mt-8"> How to Use the App</h2>
            <ol className="list-decimal pl-6 mt-2">
                <li>Select a type of waste</li>
                <li>Drag it into the correct bin</li>
                <li>Get feedback on whether you sorted it correctly</li>
                <li>Repeat and improve your sorting skills!</li>
            </ol>

            <h2 className="text-xl font-semibold text-teal-600 mt-8 right-2"> Who Is It For?</h2>
            <p className="mt-3">
                Students, teachers, families — anyone who wants to make a positive impact on the planet. A simple habit like sorting waste can make a big difference!
            </p>

            <div className="bg-teal-100 border-y-4 border-teal-500 p-4 mt-9 rounded-2xl">
                 Together, we can make the planet cleaner. Start sorting waste today!
            </div>
        </div>
    );
}
