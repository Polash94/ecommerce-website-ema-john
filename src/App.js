import './App.css';
import Header from './components/Header/Header';
import Header_menu from './components/Header_Menu/Header_menu';
import Search_bar from './components/Search_bar/Search_bar';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Manage from './components/Manage/Manage';
import Notfound from './components/Notfound/Notfound';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ProductDetail from './components/ProductDetail/ProductDetail';
import { useState } from 'react';
import Auth from './components/Auth/Authentication';
import Authentication from './components/Auth/Authentication';


function App() {

  //Recieving product data from Shop
  const [product,setProduct]=useState([]);
  


  return (
    <div className="App">
      <Header></Header>
      <Header_menu ></Header_menu>
      <Search_bar></Search_bar>
      
      
      <BrowserRouter>
        <Routes>
          <Route path='/review' element={<Review/>}></Route>
          <Route path='/manage' element={<Authentication/>}></Route>
          <Route path='/shop' element={<Shop setProduct={setProduct}></Shop>}></Route>
          
          <Route index element={<Shop setProduct={setProduct}></Shop>}></Route>
          <Route path='/products/:id' element={<ProductDetail/>}></Route>
          <Route path='*' element={<Notfound/>}></Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
