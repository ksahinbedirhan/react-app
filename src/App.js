
import './App.css';
import Card from './components/Card';
import { useState } from 'react'

// const App = () => {

//   const [visible, setVisible] = useState(true)
//   const [color, setColor] = useState("white")

//   return (
//     <div>
//       <div>
//         <button className="sagda-goster" onClick={() => setVisible(!visible)}>Aç/Kapat</button>
//         <button className="sagda-goster" onClick={() => setColor(color === "white" ? "red" :"white")}>Kırmızı/Beyaz</button>
//       </div>
//       <div className="card-group">
//         {visible && <div >
//           <div style={{ backgroundColor: color, border: "1px solid black", marginLeft: 5, marginTop: 5, padding: 10 }}>
//             <div>
//               <p>Ad: Sadik</p>
//               <p>Soyad: KRAL</p>
//               <p>Yaş: Bilinmiyor</p>
//               <p>Cinsiyet: Söylemeye gerek dahi yok ERKEKKK</p>
//               <p>Memleket: Yiğidin harman olduğu yer</p>
//             </div>
//           </div>
//         </div>}
//       </div>
//     </div>
//   )
// }

// export default App;


 const App = () => {
 const [todo, setTodo] = useState([])
 const [value, setValue] = useState('')
console.log(todo)
 return (     <div>
       <input type='text' value={value} onChange={(e) => setValue(e.target.value)}></input>      <button onClick={() => setTodo([...todo, value])}>
        Ekle
      </button>
    {todo.map((item, index)=><div key={index}>{item}</div>)}
    </div>
  )
 }

export default App

