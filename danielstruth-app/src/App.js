import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import Login from './component/Login';
import Shop from './component/Shop';
import ProductData from './component/ProductData';

import { useState } from 'react';

function App() {

  let [data] = useState(ProductData);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} ></Route>
        <Route path='/Login' element={<Login />} ></Route>
        <Route path='/Shop' element={<Shop data={data} />} ></Route>
        <Route path='/*' element={<>404 페이지</>} ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
