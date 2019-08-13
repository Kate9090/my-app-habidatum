import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/user/user';

const TripInfo = (props) =>  {

  const _handleMouseEnter = (data) => {
    props.onTripClick(data);
  }
  const {data} = props;

  return <div className="trip-block" onMouseEnter={() => _handleMouseEnter(data)}>
    <ul>
      <li>Начало поездки: {data.starttime}</li>
      <li>Конец поездки: {data.stoptime}</li>
      <li>Продолжительности поездки: {data.tripduration}</li>
      <li className="start-color">Начальная точка поездки: {data.startStationLatitude},{data.startStationLongitude}</li>
      <li className="finish-color">Конечная точка поездки: {data.endStationLatitude}, {data.endStationLongitude}</li>
    </ul>
  </div>;
}

TripInfo.propTypes = {
  data: PropTypes.shape({
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
  }),
}

export {TripInfo};

const mapDispatchToProps = (dispatch) => ({
  onTripClick: (trip) => {
    dispatch(ActionCreator.showActiveTrip(trip));
  },
});

export default connect(null, mapDispatchToProps)(TripInfo);
