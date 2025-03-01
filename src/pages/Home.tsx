const Home = () => {
    return (
        <>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4 text-center">PUBLIC LIBRARY - GALLE</h1>
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white shadow-md rounded-lg">
                        <div className="overflow-hidden">
                            <img
                                src="/image/1.jpg"
                                alt="Image 1"
                                className="w-full h-80 object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">NEWS PAPER</h2>
                            <p className="text-gray-600">You Can Read Daily & Weekly News Papers</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg">
                        <div className="overflow-hidden">
                            <img
                                src="/image/2.jpg"
                                alt="Image 2"
                                className="w-full h-80 object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">LARGE BOOK STOCK</h2>
                            <p className="text-gray-600">Large Book Stock With Differnt Type</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg">
                        <div className="overflow-hidden">
                            <img
                                src="/image/3.jpg"
                                alt="Image 3"
                                className="w-full h-80 object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">FRIENDLY SERVICE</h2>
                            <p className="text-gray-600">Friendly Staff</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg">
                        <div className="overflow-hidden">
                            <img
                                src="/image/4.jpg"
                                alt="Image 4"
                                className="w-full h-80 object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">RELIGIOUS BOOK CORNER</h2>
                            <p className="text-gray-600">Suitable for Elderst</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg">
                        <div className="overflow-hidden">
                            <img
                                src="/image/5.jpg"
                                alt="Image 5"
                                className="w-full h-80 object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">CHILD BOOK CORNER</h2>
                            <p className="text-gray-600">Suitable for Kids</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg">
                        <div className="overflow-hidden">
                            <img
                                src="/image/6.jpg"
                                alt="Image 6"
                                className="w-full h-80 object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">Novel & Translation</h2>
                            <p className="text-gray-600">Suitable for Young</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;