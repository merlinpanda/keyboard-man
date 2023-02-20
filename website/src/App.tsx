import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

interface KeyIndex {

}

function App() {
  const [count, setCount] = useState(0)
  const keyFirstLine = ["Q","W","E","R","T","Y","U","I","O","P","{","}"]
  const keySecondLine = ["A","S","D","F","G","H","J","K","L",";","'"]
  const keyThirdLine = ["Z","X","C","V","B","N","M",",",".","/"]

  const keys = [
    [
      {
        type: '',
      }
    ]
  ];

  const onKeyPress = (e: KeyboardEvent) => {
    console.log('press', e)
  }

  React.useEffect(() => {
    document.addEventListener('keypress', onKeyPress);
    const char = "Ah isisCode";
    console.log('fro', char.charCodeAt(2));
    console.log('68 char code', String.fromCharCode(68));
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className='p-2 text-2xl text-center'>Hi this</div>
      <div className="keyboard flex flex-col gap-1 justify-center">
        <div className="flex flex-row justify-center gap-1">
          <div className="key key-normal">T</div>
          <div className="key key-success key-active">T</div>
          <div className="key key-error key-active">T</div>
          <div className="key key-target">T</div>
          {keyFirstLine.map(key => {
            return <div className="key key-normal">{key}</div>
          })}
        </div>
        <div className="flex flex-row w-full justify-center gap-1">
          {keySecondLine.map(key => {
            return <div className="key key-normal">{key}</div>
          })}
        </div>
        <div className="flex flex-row w-full justify-center gap-1">
          {keyThirdLine.map(key => {
            return <div className="key key-normal">{key}</div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
