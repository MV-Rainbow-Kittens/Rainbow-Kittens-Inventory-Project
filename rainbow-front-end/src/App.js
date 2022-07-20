// import logo from './logo.svg';
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



function App() {

  const stylingComp = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div id='main-nav'>
          <Link to='/' style={stylingComp}> <p id='logo'>logo</p> </Link>
          <ul className='parent' >
            <Link to='/' style={stylingComp}><li className='children'>Home</li></Link>
            <Link to='/search' style={stylingComp}><li className='children'>Search</li></Link>
            <Link to='admin' style={stylingComp}><li className='children'>Admin</li></Link>
          </ul>
        </div>
        <Routes>
          <Route path='/*' element={<PageNotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/view/:id' element={<View />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/update/:id' element={<Update />} />
          <Route path='/add' element={<Add />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
