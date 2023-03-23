import React, { createContext, useReducer } from 'react';

import AppReducer from './AppReducer';

const initialState = {
  devices: [
    {
      name: "Sammy",
      description: "blaa blaa blaa",
      date: "10.1.2023",
      criticality: "minor",
      state: "open",
      id: 1
    }
  ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function AddDevice(device) {
    dispatch({
      type: "ADD_DEVICE",
      payload: device
    });
  }

  function FindOne (device) {
    dispatch({
        type: "FIND_ONE",
        payload: device
    });

  }
  function SaveButton () {
    dispatch({
        type: "SAVE",
        payload: state.devices
    });

  }
  function EditDevice(device) {
    dispatch({
      type: "EDIT_DEVICE",
      payload: device
    });
  }

  function RemoveDevice(id, device) {
    dispatch({
      type: "REMOVE_DEVICE",
      payload: id
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        devices: state.devices,
        AddDevice,
        EditDevice,
        FindOne,
        SaveButton,
        RemoveDevice
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};