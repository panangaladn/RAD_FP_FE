import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddBook from "./pages/AddBook";
// import EditBook from "./pages/EditBook";
import BookDetails from "./pages/BookDetails";
import Home from "./pages/Home.tsx";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-book" element={<AddBook />} />
                <Route path="/book/:id" element={<BookDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;




















































// import { useState } from "react";
// import axios from "axios";
//
// function App() {
//     // Define state to capture input values
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//
//     // Handle form submission
//     const handleSubmit = () => {
//         // Create the data object to send to the backend
//         const userData = {
//             name: name,
//             email: email,
//         };
//
//         // Send the data using axios
//         axios.post('http://localhost:3003/admin', userData)
//             .then(res => {
//                 console.log('User added:', res.data);
//                 // Optionally, you can reset the inputs after the submission
//                 setName('');
//                 setEmail('');
//             })
//             .catch(err => console.log('Error:', err));
//     };
//
//     return (
//         <div className="p-4">
//             <h1 className="text-2xl font-bold mb-4">User Management</h1>
//             <h3 className="text-3xl font-bold underline mb-2">Add User</h3>
//
//             <input
//                 type="text"
//                 className="w-[200px] h-[30px] border border-gray-300 rounded-lg px-2 m-[10px]"
//                 placeholder="Enter Name"
//                 value={name}  // Bind input to state
//                 onChange={(e) => setName(e.target.value)}  // Update state on change
//             />
//             <br />
//
//             <input
//                 type="text"
//                 className="w-[200px] h-[30px] border border-gray-300 rounded-lg px-2 m-[10px]"
//                 placeholder="Enter Email"
//                 value={email}  // Bind input to state
//                 onChange={(e) => setEmail(e.target.value)}  // Update state on change
//             />
//             <br />
//
//             <button
//                 type="button"  // Change to type="button" so it doesn't submit a form
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
//                 onClick={handleSubmit}  // Call handleSubmit when clicked
//             >
//                 Submit
//             </button>
//         </div>
//     );
// }
//
// export default App;


