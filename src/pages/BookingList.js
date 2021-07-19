import React from 'react';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import TableList from '../components/TableList.js';

function BookingList(){
  return(
    <div>
      <Header/>
      <TableList/>
      <Footer/>
    </div>
  )
}

export default BookingList;