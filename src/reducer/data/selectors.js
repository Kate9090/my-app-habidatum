import NameSpace from "../name-spaces";

const NAME_SPACE = NameSpace.DATA;

export const getActiveData = (state) => {
  return state[NAME_SPACE].dataTripList;
};

