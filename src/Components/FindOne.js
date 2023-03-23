import React,  {useContext } from 'react';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

let useri

const ifSame =(device)  =>{

    if(useri ==device.name) {
        return device;
    }
};

export const FindOne = () => {
    useri = prompt('Please Enter Device Name:');
   
    const { devices } = useContext(GlobalContext);
    if(useri) {
    let device = devices.find(ifSame);

    if(device) {
    return(
        <form id = "find">
        <div className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
           <button id = "find">FindOne </button>   
        
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
               
               </div>
              </div>
              </form>
          )
        }
    }
}