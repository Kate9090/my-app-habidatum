import React from 'react';
import TripInfo from '../../components/trip-info'

import './style.scss'

const ListTrip = (props) =>  {

  const {dataTrip, onTripClick} = props;

  return <div className="list">
    {dataTrip.map((item, i) => (
      <TripInfo onTripClick={onTripClick} data={dataTrip[i]} key={`trip-`+ i}/>
    )
    )};
  </div>;
}

export default ListTrip;
