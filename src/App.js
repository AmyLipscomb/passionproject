import './App.css';
import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';
import MoviesPage from './pages/MoviesPage';
import SelfcarePage from './pages/SelfcarePage';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/selfcare">Selfcare</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
           <Route
            path="/books"
            element={<BookPage />}
          />
          <Route
            path="/movies"
            element={<MoviesPage />}
          />

          <Route
            path="/selfcare"
            element={<SelfcarePage />}
          />
        </Routes>

      </Router>
    </div>
  );
}

export default App;







// function App() {
//   return (
//     <div className="App">
//       <Home />
//       <Books />
//       <Footer />

//      </div>

//   );
// }

// export default App;


{/* // <BrowserRouter>
      //   <Routes>
      //   <Route path="/" element={<Home />} />
      //   <Route path="/books" element={<Books />} /> */}
{/* <Route path="/movies" element={<Movies />} />
      //   <Route path="/selfcare" element={<Selfcare />} /> */}
{/* //    </Routes>
      // </BrowserRouter> */}