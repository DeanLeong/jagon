import React from 'react';
import './Layout.css'
import Header from '../shared/Header'
import Footer from '../shared/Footer'

function Layout(props) {
  return (
    <div className="Layout">
      <Header />
        <div className='layout'>
          {props.children}
        </div>
      <Footer />
    </div>
  );
}

export default Layout;