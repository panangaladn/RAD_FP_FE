import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BookDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<{ title: string; author: string } | null>(null);

    useEffect(() => {
        axios.get(`http://localhost:3003/books/${id}`)
            .then(res => setBook(res.data))
            .catch(err => console.error("Error fetching book:", err));
    }, [id]);

    if (!book) return <p>Loading...</p>;

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">{book.title}</h2>
            <p>Author: {book.author}</p>
        </div>
    );
};

export default BookDetails;
