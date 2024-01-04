import React, { useState,ReactNode } from 'react'

type counterProps={
    setCount:React.Dispatch<React.SetStateAction<number>>,
    children:ReactNode,
}


const Counter = ({setCount,children}:counterProps) => {
    // const [count,setCount]=useState<number>(1);

    // but what to do if you inital state is not defined but later it takes number
    // const [count,setCount]=useState<number|null >();;
    
    // const [count,setCount]=useState<number>(1);
    // or if you just leave it TS will infer the type
  return (
    <div>
        <h1>
         {
            children
         }
        </h1>
        <button onClick={()=>setCount(prev=>prev+1)}>
            +
        </button>
        <button onClick={()=>setCount(prev=>prev-1)}>
            -
        </button>
      
    </div>
  )
}

export default Counter
