import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import Navbar from './component/navbar/Navbar.jsx';
import AddItemForm from './pages/AddItem.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [receivedData, setReceivedData] = useState([]);

  const handleData = (data) => {
    setReceivedData((prevData) => [...prevData, data]);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar data={receivedData} /> {/* Pass the received data to the Navbar component */}
        <Routes>
          <Route
            path="/"
            element={<Home onData={handleData} />} // Pass the handleData function as a prop to Home component
          />
          <Route path="/cart" element={<Cart data={receivedData} />} /> {/* Pass the received data to the Card component */}
          <Route path="/additem" element={<AddItemForm />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}
