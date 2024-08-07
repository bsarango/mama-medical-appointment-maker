import React,{useState, useEffect} from 'react';
import Physician from '../components/Physician'
import PhysicianForm from '../components/PhysicianForm';

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

    function addPhysicianToList(newPhysician){
        const newPhysicianList = [...physicians, newPhysician]
        setPhysicians(newPhysicianList)
    }

    return(
        <div className="bg-yellow-100">
            <h2>Add any of your outside Physicians to manage any other appointments</h2>
            <PhysicianForm onAddPhysician={addPhysicianToList}/>
            <br></br>
            <h2 className="font-bold text-center">A list of our Physicians</h2>
            <div className="inset-x-1/2 text-center">{physiciansList}</div>
        </div>
    )
}

export default PhysiciansIndex