import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import Footer from '../components/footer';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
            <li><Link to="homepage">Home</Link></li>
            <li><Link to="#">About</Link></li>
        </ul>
      </nav>
      
      <Outlet></Outlet>
      <Footer/>
    </>
  )
}

export default Layout;
