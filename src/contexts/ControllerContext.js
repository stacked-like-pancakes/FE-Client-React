import React, { useReducer, createContext } from 'react';
import { controllerState, controllerReducer } from '../reducers';

export const ControllerStateContext = createContext();
export const ControllerDispatchContext = createContext();

export const ControllerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(controllerReducer, controllerState);
  return (
    <ControllerStateContext.Provider value={state}>
      <ControllerDispatchContext.Provider value={dispatch}>
        {children}
      </ControllerDispatchContext.Provider>
    </ControllerStateContext.Provider>
  );
};
