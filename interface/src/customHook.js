import {useEffect, useState} from 'react';

const useFetchCalc = (result) => {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/numbers')
        .then(r=>r.json())
        .then(r=>setData(r)).catch(e=>console.log(e))
    }, [result])

    return data
}

export default useFetchCalc