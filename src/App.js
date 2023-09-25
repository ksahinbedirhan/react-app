import './App.css';
import { useState } from 'react'

const App = () => {
  const [visible, setVisible] = useState(false)
  const [color, setColor] = useState("pink")

  const toggleColor = () => {
    setColor(color === "pink" ? "lightblue" : "pink")
    if (!visible) {
      setVisible(true) 
    }
  }

  return (
    <div>
      <div>
        <button style={{ border: "1px solid black", marginLeft: 5, marginTop: 5, padding: 10 }} onClick={() => setVisible(!visible)}>Aç/Kapat</button>
        <br />
        <br />
        <button style={{ border: "1px solid black", marginLeft: 5, marginTop: 5, padding: 10 }} onClick={toggleColor}>Pembe/Mavi</button>
        <br />
        <br />
      </div>
      <div className="card-group">
        {visible && (
          <div>
            <div style={{ backgroundColor: color, border: "1px solid black", marginLeft: 5, marginTop: 5, padding: 10 }}>
              <div>
                <p>Ad: Sadık</p>
                <p>Soyad: Bey</p>
                <p>Yaş: Değişkenlik Gösteriyor</p>
                <p>Cinsiyet: Erkek</p>
                <p>Memleket: Çorum</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
