import React from 'react';
import TripInfo from '../../components/trip-info'
import {connect} from 'react-redux';
import {getActiveData} from '../../reducer/data/selectors';

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

export {ListTrip};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  dataTrip: getActiveData(state),
});

export default connect(
  mapStateToProps
)(ListTrip);
