import React,{useState, useEffect} from React;
import Physician from '../components/Physician'

function PhysiciansIndex(){

    const [physicians, setPhysicians] = useState([])

    useEffect(()=>{
        fetch('/physicians_index')
        .then(r=>{
            if(r.ok){
                r.json().then(physiciansIndex => setPhysicians(physiciansIndex));
            }
        });
    },[])

    const physiciansList = physicians.map(physicians=>{
        return <Physician/>
    })

    return(
        <>
            {physiciansList}
        </>
    )
}

export default PhysiciansIndex