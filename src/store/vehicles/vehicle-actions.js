import { getVehicles } from "../../api/vehicle-service";
import { types } from "../types";

export const setVehicles = async () => {
  try {
    const resp = await getVehicles();

    return {
      type: types.SET_VEHICLES,
      payload: resp.data,
    };
  } catch (error) {
    return {
      type: types.SET_VEHICLES,
      payload: [],
    };
  }
};
