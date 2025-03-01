import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4 text-white flex justify-between">
            <h1 className="text-lg font-bold">📖 Library Management System</h1>
            <div>
                <Link className="mr-4" to="/">📚 Home</Link>
                <Link className="mr-4" to="/add-book">➕ Add Book</Link>
                <Link to="/add-member" className="hover:underline">🆕 Add Member</Link>
                <Link to="/borrow-book" className="hover:underline">📥 Borrow Book</Link>
                <Link to="/return-book" className="hover:underline">📤 Return Book</Link>
            </div>
        </nav>
    );
};

export default Navbar;