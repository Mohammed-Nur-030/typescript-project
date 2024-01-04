import Heading from "./components/Heading"
import Section from "./components/Section"
import './App.css'
import Counter from "./components/Counter"
import { useState,ReactNode } from "react"
import List from "./components/List"



function App(){

  const render=(item:string):ReactNode=>{
    return(
      <span>
        {item}
      </span>
    )
  }

  const [count,SetCount]=useState<number>(1);
  return (
    <div>
     <Heading title={`Hello Guys !!!`}/>
     <Section title={'Section Title'} children={<div className="child">Children of Section</div>}/>
     <Counter setCount={SetCount}>Count is:{count}</Counter>
     {/* <List items={["Coffee","Pizza","Code"]} render={render}/> */}
     <List items={["Coffee","Pizza","Code"]} render={(item:string):ReactNode=>(<span>{item}</span>)}/>
    </div>
  )
}

export default App