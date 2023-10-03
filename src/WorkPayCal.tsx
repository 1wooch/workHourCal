import React, {useState,useEffect} from "react";
// import { useNavigate } from 'react-router-dom';
import {
    BrowserRouter,
    Routes,
    Route,
    useParams,
    Link,
    useNavigate
  } from "react-router-dom";
const WorkPayCal: React.FC = () => {

    const testvalue = useParams().testValue;


    return(
        <div>
            <h1>Work Hours Tracker</h1>
            <p>${testvalue}</p>
        </div>
    )

}

export default WorkPayCal;