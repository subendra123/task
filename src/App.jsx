import React from 'react';
import "./App.css"
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from "./Components/NavBar/NavBar"
import Home from './Components/Home/Home';
import SingleProduct from "./Components/Pages/SingleProduct"
import Cart from "./Components/Pages/Cart"


function App() {
  return (
    <div className="App">
      <Router>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products/:id" element={<SingleProduct />}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
         
        
        </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;