




export default function appReducer(state, action) {
    switch (action.type) {
      case "ADD_DEVICE":
        return {
          ...state,
          devices: [...state.devices, action.payload],
        };
  
      case "EDIT_DEVICE":
        const updateddevice = action.payload;
  
        const updateddevices = state.devices.map((device) => {
          if (device.id === updateddevice.id) {
            return updateddevice;
          }
          return device;
        });
  
        return {
          ...state,
          devices: updateddevices,
        };
      case "FIND_ONE":
        const onedevice = action.payload;

        const findone =state.devices.find((device) => {
            if(findone.name === onedevice.name) {
                return onedevice;
            }
            return device;
        });
        return state;
      case "SAVE":
        
            return state;
      case "REMOVE_DEVICE":
        return {
          ...state,
          devices: state.devices.filter(
            (device) => device.id !== action.payload
          ),
        };
     
      default:
        return state;
    }
  };