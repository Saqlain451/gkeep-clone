import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import Notes from './Notes';
const App  =()=>{
  return(
    <>
      <Header/>
      <Note/>
      {/* <Notes/> */}
      <Footer/>
    </>
  )
}

export default App;
