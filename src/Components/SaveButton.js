import React,  {useContext } from 'react';
import { Link } from 'react-router-dom';
import {CSVDownload} from "react-csv";
import { GlobalContext } from '../context/GlobalState';

export const  HandleInput = () => {
    const { devices } = useContext(GlobalContext);

    return(
        <CSVDownload data={devices} filename={"service-manual.csv"} target="_blank"/>);

    }
