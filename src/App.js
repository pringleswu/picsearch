import React from 'react'
import { BrowserRouter, Routes, Route} from'react-router-dom';
import Layout from './pages/layout';
import Homepage from './pages/Homepage';
import Page404 from './pages/page404';
import './style.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="homepage" element={<Homepage />}>Homepage</Route>
        <Route path="page404" element={<Page404/>}></Route>
        <Route></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}



export default App;
