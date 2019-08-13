import React from 'react';
import dataTrip from './mock/trip-data';
import ListTrip from './components/list-trip';
import Map from './components/map';
import './App.css';

const App = () => {

  const data = dataTrip;
  return (
    <div className="App">
      <ListTrip dataTrip={data} />
      <Map tripList={data}
       />
    </div>
  );
}

export default App;
