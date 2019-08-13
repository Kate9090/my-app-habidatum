import React from 'react';
import PropTypes from 'prop-types';
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

ListTrip.propTypes = {
  dataTrip:  PropTypes.arrayOf(
    PropTypes.shape({
      tripduration: PropTypes.number,
      starttime: PropTypes.string,
      stoptime: PropTypes.string,
      startStationName: PropTypes.string,
      startStationLatitude: PropTypes.number,
      startStationLongitude: PropTypes.number,
      endStationName: PropTypes.string,
      endStationLatitude: PropTypes.number,
      endStationLongitude: PropTypes.number,
      bikeid: PropTypes.number,
    })
  ),
  onTripClick: PropTypes.func,
}

export default ListTrip;
