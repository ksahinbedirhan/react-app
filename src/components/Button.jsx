import React from 'react'

const Button = ({counter, setCounter}) => {

  return (
    <div>
      {counter.map((item,index)=><div key={index}>{item}</div>)}
      <button onClick={()=>setCounter([...counter, "sadık", "onur", "ali"])}>Arttır</button>
    </div>
  )
}

export default Button
