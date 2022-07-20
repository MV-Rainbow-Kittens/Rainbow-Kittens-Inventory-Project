import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import View from './components/View';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PageNotFound from './components/PageNotFound';
import Admin from './components/Admin';
import Update from './components/Update';
import { ToastContainer } from 'react-toastify';
import Add from './components/Add';
import About from './components/About';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/Search"> Search </Link>
          <Link to="/Admin"> Admin </Link>
        </nav>
          <Routes>
            <Route path='/*' element={<PageNotFound />} />
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/view' element={<View />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/update/:id' element={<Update />} />
            <Route path='/add' element={<Add />} />
            <Route path='/about' element={<About />} />
          </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
