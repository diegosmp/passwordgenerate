import { useState } from "react"
import Input from "./components/input"

function App() {

  const [password, setPassword] = useState('')
  const [copyText, setCopyText] = useState('Copiar')
  const [creator, setCreator] = useState('Diêgo Sampaio')
  const [passwordSize, setPasswordSize] = useState(12)
  const [showInput, setShowInput] = useState(false)
  

  function generate() {
    const characters = "1234567890$&abcdefghaijlmneopqrstuvxzwyABCDEFGHIJKLAMNOPQRSTUVXZWY"

    let newPassword = ''
    for(let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }

    setPassword(newPassword)
    setCopyText("Copiar")
  }

  function copyToClipBoard () {
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado")
  }

  return (
    <div className="app">
      <h1>Gerardor de senhas</h1>
      <div>
        <label className="span-pass" htmlFor="showInput">Customizar tamanho da senha:</label>
        <input 
          type="checkbox" 
          id="showInput" 
          value={showInput}
          onChange={() => setShowInput(currentState => !currentState)}
        />
      </div>
      {
        showInput ? <div>
        <label htmlFor="passwordSize" className="span-pass">Tamanho:</label>
        <Input 
          passwordSize={passwordSize} 
          setPasswordSize={setPasswordSize} 
          min={1} 
          type={"number"}
          id={"passwordSize"}
        />
      </div>
      : null
      }
      <button onClick={generate}>Gerar</button>
      {
        password ? <button onClick={copyToClipBoard}>{copyText}</button> 
          : <button className="btn-disable">Copiar</button>
      }
      
      <div><span className="span-pass">{password} </span></div>
      <div className="span-content">
      <Input 
        setPasswordSize={setCreator} 
        type={"text"} 
        className={"span"}
        id={"nameCreator"}
        placeholder={`Criado por ${creator}`}
      />
        <span className="span">
          Criado por <span className="span color-span">{creator}</span>
        </span>
      </div>
    </div>
  )
}

export default App
