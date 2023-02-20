import React, { useState } from 'react'
import './App.css'
import UsKeys from './utils/us-keys'
import KeyItem from './components/KeyItem'

function App() {
  const KeyLine0 = ["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal"]
  const KeyLine1 = ["KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight", "Backslash"]
  const KeyLine2 = ["KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote"]
  const KeyLine3 = ["KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash"]

  const [ keypress, setKeypress ] = useState<string>('')

  const onKeyPress = (e: KeyboardEvent) => {
    setKeypress('')
    let code = e.code
    const charCode = e.key.charCodeAt(0)
    const isShift = e.shiftKey
    setKeypress(code)
  }

  React.useEffect(() => {
    document.addEventListener('keypress', onKeyPress);
    // const char = "[]\\;',./1234567890-=`";
    // const uppers = '{}|:"<>?!@#$%^&*()_+~';
    // // let keys = [];
    // if (navigator.keyboard) {

    //   const keyboard = '';
    // }
    // for(var i = 0; i < char.length; i ++) {
    //   console.log(i,char[i],char.charCodeAt(i))
    //   // let lowercode = char.charCodeAt(i);
    //   // let uppercode = uppers.charCodeAt(i);
      // let key = {
      //   code: 'Key' + char[i].toUpperCase(),
      //   key: char[i],
      //   keyCode: lowercode,
      //   shift: {
      //     key: uppers[i],
      //     keyCode: uppercode
      //   },
      //   showShift: false,
      // }

    //   // keys.push(key)
    // }
    // // console.log(keys)
    // // console.log('68 char code', String.fromCharCode(68));
  }, [])

  const printThis = () => {

  }

  const KeyItemCom = (code: string) => {
    let keyTarget = UsKeys.find(key => {
      return key.code === code
    })
    const isRight = keypress === code
    let isActive = keypress == code
    return keyTarget ? <KeyItem keyitem={keyTarget} isActive={isActive} isError={false} isRight={false} isTarget={false}  /> : '';
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className='p-2 text-2xl text-center'>Hi this</div>
      <div className="my-4">
        <button className="bg-slate-100 hover:bg-red-200 px-3 py-2 rounded" onClick={printThis}>print</button>
      </div>
      <div className="keyboard flex flex-col gap-1 justify-center">
        <div className="flex flex-row justify-center gap-1">
          {KeyLine0.map(key => {
            return KeyItemCom(key)
          })}
        </div>
        <div className="flex flex-row w-full justify-center gap-1">
          {KeyLine1.map(key => {
            return KeyItemCom(key)
          })}
        </div>
        <div className="flex flex-row w-full justify-center gap-1">
          {KeyLine2.map(key => {
            return KeyItemCom(key)
          })}
        </div>
        <div className="flex flex-row w-full justify-center gap-1">
          {KeyLine3.map(key => {
            return KeyItemCom(key)
          })}
        </div>
      </div>
    </div>
  )
}

export default App
