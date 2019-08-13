import React from 'react';
import PropTypes from 'prop-types';
import TripInfo from '../../components/trip-info'
import {connect} from 'react-redux';
import {getActiveData} from '../../reducer/data/selectors';

import './style.scss'

const ListTrip = (props) =>  {

  const {dataTrip} = props;

  return <div className="list">
    {dataTrip.map((item, i) => (
      <TripInfo data={dataTrip[i]} key={`trip-`+ i}/>
    )
    )};
  </div>;
}

ListTrip.propTypes = {
  tripList: PropTypes.arrayOf(
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
}

export {ListTrip};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  dataTrip: getActiveData(state),
});

export default connect(
  mapStateToProps
)(ListTrip);
