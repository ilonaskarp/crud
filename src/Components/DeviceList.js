import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
const compareStrings = (a, b) => {
    return (a < b) ? -1 : (a > b) ? 1 : 0;
  }
/*function display(num) {
    if (num > 0) {
        return num;
    }
    else {
        return "null";
    }
}*/

export const DeviceList = () => {


 
  const { devices, RemoveDevice } = useContext(GlobalContext);
  devices.sort((a, b) => compareStrings(a.criticality, b.criticality));
  devices.sort((a, b) => compareStrings(a.date, b.date));
  return (
    <React.Fragment>
      {devices.length > 0 ? (
        <React.Fragment>
         
          {devices.map((device) => (
            <div
              className="flex items-center bg-gray-100 mb-10 shadow"
              key={device.name}
            >
              <div className="flex-auto text-left px-4 py-2 m-2">
                <p className="text-gray-900 leading-none">
                  {device.name}
                </p>
                <p className="text-gray-600">
                  {device.description}
                </p>
                <p className="text-gray-600">
                  {device.state}
                </p>
                <span className="inline-block text-sm font-semibold mt-1">
                  {device.criticality}
                </span>
                <p className="text-gray-600">
                  {device.date}
                </p>
              </div>
              <div className="flex-auto text-right px-4 py-2 m-2">
                <Link
                  to={`/edit/${device.id}`}
                  title="Edit Device"
                >
                  <div className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold mr-3 py-2 px-4 rounded-full inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                  </div>
                </Link>
                <button
                  onClick={() => RemoveDevice(device.id, device)}

                  className="block bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center"
                  title="Remove Employee"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                </button>
              </div>
            </div>
          ))}
        </React.Fragment>
      ) : (
        <p className="text-center bg-gray-100 text-gray-500 py-5">No data.</p>
      )}
    </React.Fragment>
  );
};