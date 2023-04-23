// import React from "react";
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Books from './components/Books/books';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home />
      <Books />
   
     </div>

  );
}

export default App;


   {/* // <BrowserRouter>
      //   <Routes>
      //   <Route path="/" element={<Home />} />
      //   <Route path="/books" element={<Books />} /> */}
       {/* <Route path="/movies" element={<Movies />} />
      //   <Route path="/selfcare" element={<Selfcare />} /> */}
      {/* //    </Routes>
      // </BrowserRouter> */}