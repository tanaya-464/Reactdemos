import React, { useEffect, useState } from 'react'

const  Time : React.FC = () => {
  const [time,setTime] = useState(0);
  useEffect(()=>{
    const interval =setInterval(()=>{
      setTime(prevTime => prevTime+1);
    },1000);
    return ()=> clearInterval(interval);
  },[]);
  return (
    <p>
      Time:{time}
    </p>
  )
};

export default  Time 
