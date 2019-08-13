import {combineReducers} from "redux";
import {reducer as data} from "./data/data";
import {reducer as user} from "./user/user";
import NameSpace from "./name-spaces";

export default combineReducers({
  [NameSpace.USER]: data,
  [NameSpace.USER]: user,
});
