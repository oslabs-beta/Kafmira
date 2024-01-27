import * as types from "../constants/actionTypes.js";

export const addPortAction = (userPort) => {
  return {
    type: types.ADD_PORT,
    payload: userPort,
  };
};

export const addConnectionTimeAction = (timestamp) => {
  return {
    type: types.ADD_CONNECTION_TIME,
    payload: timestamp,
  };
};

export const updateDataAction = (data) => {
  return {
    type: types.UPDATE_DATA,
    payload: data,
  };
};