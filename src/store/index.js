import { createContext, useContext, useReducer } from "react";
import { vehicleInitialState } from "./vehicles/vehicle-initial-state";
import { vehicleReducer } from "./vehicles/vehicle-reducer";

/* Boş merkezi state oluşturuluyor */
const StoreContext = createContext();

/* Componnetlerde state e erişimi kolaylaştırmak için yapıldı */
export const useStore = () => useContext(StoreContext);

/* Uygulamayı sarmallayacak Store Provider oluşturuluyor */
export const StoreProvider = ({ children }) => {
  /* useReducer hook u iki parametre alır. İlk parametre reducer, diğeri inital state tir 
       useReducer geriye iki yapı döndürür. İlki  getter methodu, diğeri ise setter methodu (dispatch)
    */
  //      getter       setter
  const [vehicleState, dispatchVehicle] = useReducer(
    vehicleReducer,
    vehicleInitialState
  );

  return (
    <StoreContext.Provider value={{ vehicleState, dispatchVehicle }}>
      {/* Tüm uygulama children üzerinden buraya alınıp merkezi state ile sarmallanır */}
      {children}
    </StoreContext.Provider>
  );
};
