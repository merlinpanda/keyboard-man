import React, { useState } from 'react'
import UsKeys from './utils/us-keys'
import KeyItem, { PressKeyInterface } from './components/KeyItem'


const WORDS = 'Youth is not a time of life; it is a state of mind; it is not a matter of rosy cheeks, red lips and supple knees; it is a matter of the will, a quality of the imagination, a vigor of the emotions; it is the freshness of the deep springs of life.';

function App() {
  const KeyLine0 = ["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace"]
  const KeyLine1 = ["Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight", "Backslash"]
  const KeyLine2 = ["CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter"]
  const KeyLine3 = ["ShiftLeft","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ShiftRight"]
  const KeyLine4 = ["ControlLeft","MetaLeft","AltLeft","Space","AltRight","MetaRight","ContextMenu","ControlRight"]

  const [ keypress, setKeypress ] = useState<PressKeyInterface | undefined>(undefined)
  const [ timestamp, setTimeStamp ] = useState<number>(0)
  const [ targetKeyCode, setTargetKeyCode ] = useState<number>(WORDS.charCodeAt(0))
  const [ wordIndex, setWordIndex ] = useState<number>(0)

  const onKeyPress = (e: KeyboardEvent) => {
    setKeypress(undefined)
    let code = e.code
    const charCode = e.key.charCodeAt(0)
    const isShift = e.shiftKey
    setKeypress({
      code,
      keyCode: charCode,
      isShift,
      key: e.key
    })
    setTimeStamp((new Date()).getTime())
  }

  React.useEffect(() => {
    document.addEventListener('keypress', onKeyPress);
  }, [])

  const onPressSuccess = () => {
   setTimeout(() => {
    setKeypress(undefined)
    setWordIndex(wordIndex+1)
    setTargetKeyCode(WORDS.charCodeAt(wordIndex))
   }, 100)
  }

  const KeyItemCom = (code: string) => {
    let keyItemData = UsKeys.find(key => {
      return key.code === code
    })
    return keyItemData ? <KeyItem onSuccess={() => {
      onPressSuccess()
    }} key={code} keyData={keyItemData} pressKey={keypress} targetKeyCode={targetKeyCode} timestamp={timestamp} /> : '';
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className='p-2 text-xl mb-6 max-w-4xl mx-auto'>{WORDS}</div>
      <div className="keyboard flex flex-col gap-1 justify-center">
        <div className="flex flex-row justify-center gap-1">
          {KeyLine0.map((key) => {
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
        <div className="flex flex-row w-full justify-center gap-1">
          {KeyLine4.map(key => {
            return KeyItemCom(key)
          })}
        </div>
      </div>
    </div>
  )
}

export default App
