import { useStore } from "..";
import { getVehicles } from "../../api/vehicle-service";
import { types } from "../types";
import { vehicleInitialState } from "./vehicle-initial-state";

export const vehicleReducer = (state = vehicleInitialState, action) => {

  if (action.type === types.SET_VEHICLES) {
    return {...state, vehicles: action.payload}
  }
  return state;
};
