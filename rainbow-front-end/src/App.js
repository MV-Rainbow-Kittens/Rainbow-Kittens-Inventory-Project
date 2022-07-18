// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import View from './components/View';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PageNotFound from './components/PageNotFound';
import Admin from './components/Admin';
import Update from './components/Update';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/*' element={<PageNotFound />} />
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/view' element={<View />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/update/:id' element={<Update />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
