import React from 'react'
import KeyItem, { KeyItemInterface } from './KeyItem'

const keys: KeyItemInterface[] = [
  {
    key: 'a',
    code: 'KeyA',
    keyCode: 97,
    shiftKey: false
  },
  {
    key: 'b',
    code: 'KeyB',
    keyCode: 98,
    shiftKey: false
  }
]

class Keyboard extends React.Component<any, any> {
  constructor(props: any) {
    super(props)

    this.onKeyPress = this.onKeyPress.bind(this)
  }

  onKeyPress(e: KeyboardEvent) {
    console.log(e)
  }

  componentDidMount(): void {
    document.addEventListener('keypress', this.onKeyPress)
  }

  render() {
    return (
      <>
        <KeyItem key={} isActive={} isError={} isRight={} isTarget={} />
      </>
    );
  }
}

export default Keyboard
