import { useEffect } from "react";
import { useStore } from "./store";
import { setVehicles } from "./store/vehicles/vehicle-actions";
import Test from "./test";

function App() {
  const { dispatchVehicle } = useStore();

  const loadData = async () => {
    dispatchVehicle(await setVehicles());
  };

  useEffect(() => {
    loadData();
  }, []);

  return <Test />;
}

export default App;
