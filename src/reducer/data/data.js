import dataTrip from '../../mock/trip-data';

const initialState = {
  dataTripList: dataTrip,
};

const ActionCreator = ({

  'loadTripListData': (data) => ({
    type: `LOAD_DATA`,
    payload: data,
  }),

});

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case `LOAD_DATA`:
      return Object.assign({}, state, {
        data: action.payload,
      });

  }

  return state;
};

export {reducer, ActionCreator};
