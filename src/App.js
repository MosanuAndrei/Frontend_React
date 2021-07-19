import './App.css';
import React from 'react';
import Homepage from './pages/Homepage'
import AddBooking from './pages/AddBooking'
import BookingList from './pages/BookingList'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/add-booking">
            <AddBooking/>
          </Route>
          <Route path="/booking-list">
            <BookingList/>
          </Route>
          <Route path="/">
            <Homepage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
