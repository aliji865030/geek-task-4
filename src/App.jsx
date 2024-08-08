import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
      
  const [pName,setPName]=useState("")
  const [pPrice,setPPrice]=useState("")
  const [data,setData]=useState([])
  const [expence,setExpence]=useState(0)

  const Add=()=>{
    let product={
      name:pName,
      price:pPrice
    }

    setExpence(pre=>pre+Number(pPrice))

    setData([...data,product])

    setPName("")
    setPPrice("")
  }

  return (
    <>
    <h1>Task 4</h1>
    <input type="text" placeholder='Product name' value={pName} onChange={(e)=>setPName(e.target.value)}/>
    <input type="number" placeholder='Product Price' value={pPrice} onChange={(e)=>setPPrice(e.target.value)} />
    <button onClick={Add}>Add</button>

    <div>
      <ul>
        {data.map((item,index)=>{
          return (
            <li key={index}>{item.name} {item.price}</li>
          )
        })}
      </ul>

      <hr />
      <h2>Expence</h2>
      {expence}
    </div>
      
   
    </>
  )
}

export default App
