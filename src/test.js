import React from "react";
import { useStore } from "./store";

const Test = () => {
  const { vehicleState } = useStore();

  return (
    <div>
      TEST:
      {vehicleState.vehicles.map((vehicle) => (
        <div key={vehicle.id}>{vehicle.model}</div>
      ))}
    </div>
  );
};

export default Test;
