import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import View from './components/View';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from './components/PageNotFound';
import Admin from './components/Admin';
import Update from './components/Update';
import { ToastContainer } from 'react-toastify';
import Add from './components/Add';
import About from './components/About';
import Navbar from './components/Navbar';



function App() {

  // const stylingComp = {
  //   textDecoration: "none",
  //   color: "white",
  // };

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
          <Routes>
            <Route path='/*' element={<PageNotFound />} />
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/view/:id' element={<View />} />
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
