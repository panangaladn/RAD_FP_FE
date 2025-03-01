import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Book {
    id: string;
    title: string;
    author: string;
    publisher: string;
    price: string;
    category: string;
}

const AddBook = () => {
    useNavigate();
// State for form fields
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publisher, setPublisher] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    const [books, setBooks] = useState<Book[]>([]); // Explicit type


    useEffect(() => {
        fetchBooks();
    }, []);



    const fetchBooks = async () => {
        try {
            const response = await axios.get("http://localhost:3003/books");
            setBooks(response.data);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };


    const addBook = async (e: React.FormEvent) => {
        e.preventDefault();

        const newBook = {
            id,
            title,
            author,
            publisher,
            price: parseFloat(price),
            category
        };

        try {
            await axios.post("http://localhost:3003/books", newBook);
            alert("Book added successfully!");
            clearForm();
            fetchBooks(); // Refresh book list after adding
        } catch (error) {
            console.error("Error adding book:", error);
            alert("Failed to add book.");
        }
    };

    const clearForm = () => {
        setId("");
        setTitle("");
        setAuthor("");
        setPublisher("");
        setPrice("");
        setCategory("");
    };

    return (
        <div className="container mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4 text-center">Add New Book</h2>


            <div className="grid grid-cols-2 gap-6">
                {/* Left Side - Image */}
                <div className="flex justify-center items-center">
                    <img
                        src="/image/book.jpg"
                        alt="Book"
                        className="w-3/4 rounded-lg shadow-md"
                    />
                </div>

                {/* Right Side - Form */}
                <div className="bg-white p-6 shadow-md rounded">
                    <form onSubmit={addBook}>
                        {/* Book ID (Remove if auto-generated) */}
                        <div className="mb-4">
                            <label className="block text-gray-700">Book ID:</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                            />
                        </div>

                        {/* Title */}
                        <div className="mb-4">
                            <label className="block text-gray-700">Book Title:</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>

                        {/* Author */}
                        <div className="mb-4">
                            <label className="block text-gray-700">Author:</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                required
                            />
                        </div>

                        {/* Publisher */}
                        <div className="mb-4">
                            <label className="block text-gray-700">Publisher:</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                value={publisher}
                                onChange={(e) => setPublisher(e.target.value)}
                                required
                            />
                        </div>

                        {/* Price */}
                        <div className="mb-4">
                            <label className="block text-gray-700">Book Price:</label>
                            <input
                                type="number"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </div>

                        {/* Category */}
                        <div className="mb-4">
                            <label className="block text-gray-700">Category:</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
                        >
                            Add Book
                        </button>
                    </form>
                </div>
            </div>

            {/* Book List Table */}
            <div className="mt-10">
                <h2 className="text-xl font-bold mb-4 text-center">Book List</h2>
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2">Book ID</th>
                        <th className="border border-gray-300 px-4 py-2">Title</th>
                        <th className="border border-gray-300 px-4 py-2">Author</th>
                        <th className="border border-gray-300 px-4 py-2">Publisher</th>
                        <th className="border border-gray-300 px-4 py-2">Price</th>
                        <th className="border border-gray-300 px-4 py-2">Category</th>
                        <th className="border border-gray-300 px-4 py-2"></th>
                        <th className="border border-gray-300 px-4 py-2"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.length > 0 ? (
                        books.map((book) => (
                            <tr key={book.id}>
                                <td className="border border-gray-300 px-4 py-2">{book.id}</td>
                                <td className="border border-gray-300 px-4 py-2">{book.title}</td>
                                <td className="border border-gray-300 px-4 py-2">{book.author}</td>
                                <td className="border border-gray-300 px-4 py-2">{book.publisher}</td>
                                <td className="border border-gray-300 px-4 py-2">{book.price}</td>
                                <td className="border border-gray-300 px-4 py-2">{book.category}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <button
                                        className="bg-yellow-500 text-white px-3 py-1 rounded-md mr-2"
                                    >Update
                                    </button>
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <button
                                        className="bg-red-500 text-white px-3 py-1 rounded-md"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6}className="text-center py-4">
                                No books available.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AddBook;
