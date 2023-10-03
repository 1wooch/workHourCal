import React, {useState,useEffect} from "react";
// import { useNavigate } from 'react-router-dom';

const WorkPayCal: React.FC = () => {
    // const location = useLocation();
    // const navigate = useNavigate();
    //const queryParams = new URLSearchParams(location.search);

    // const [hours1, setHours1] = useState<string>(queryParams.get('hours1') || '');
    // const [hours2, setHours2] = useState<string>(queryParams.get('hours2') || '');



    // useEffect(() => {
    //     // Update the URL whenever the state changes
    //     // const newSearchParams = new URLSearchParams();
    //     // if (hours1) newSearchParams.set('hours1', hours1);
    //     // if (hours2) newSearchParams.set('hours2', hours2);
    //     // navigate({ search: newSearchParams.toString() });
    //   }, [hours1, hours2, navigate]);

      
    return(
        <div>
            <h1>Work Hours Tracker</h1>
            {/* <div>
                <input
                type="text"
                placeholder="Enter hours for task 1"
                value={hours1}
                onChange={(e) => setHours1(e.target.value)}
                />
                <input
                type="text"
                placeholder="Enter hours for task 2"
                value={hours2}
                onChange={(e) => setHours2(e.target.value)}
                />
            </div>
            <div>
                <p>Hours for Task 1: {hours1}</p>
                <p>Hours for Task 2: {hours2}</p>
            </div> */}
        </div>
    )

}

export default WorkPayCal;