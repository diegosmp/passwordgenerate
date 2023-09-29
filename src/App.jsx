import { useState } from "react"

function App() {

  const [password, setPassword] = useState('')
  const [copyText, setCopyText] = useState('Copiar')
  const [creator, setCreator] = useState('Diêgo Sampaio')

  function generate() {
    const characters = "1234567890#@$%&*()abcdefghaijlmneopqrstuvxzwyABCDEFGHIJKLAMNOPQRSTUVXZWY_-+/![]"
    const length = 12

    let newPassword = ''
    for(let i = 0; i < length; i++) {
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
      <button onClick={generate}>Gerar</button>
      <button onClick={copyToClipBoard}>{copyText}</button>
      <div><span className="span-pass">{password} </span></div>
      <div className="span-content">
        <span className="span">
          Criado por <span className="span color-span">{creator}</span>
        </span>
      </div>
    </div>
  )
}

export default App
