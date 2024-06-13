import React,{useState, useEffect} from 'react';
import Physician from '../components/Physician'

function PhysiciansIndex(){

    const [physicians, setPhysicians] = useState([])

    useEffect(()=>{
        fetch('/api/physicians_index')
        .then(r=>{
            if(r.ok){
                r.json().then(physiciansIndex => setPhysicians(physiciansIndex));
            }
        });
    },[])

    const physiciansList = physicians.map(physician=>{
        return <Physician key={physician.id} physician={physician}/>
    })

    return(
        <div>
            <h2 className="font-bold">A list of our Physicians</h2>
            <div className="text-center">{physiciansList}</div>
        </div>
    )
}

export default PhysiciansIndex