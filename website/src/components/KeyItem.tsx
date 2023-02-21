import React, { RefObject } from 'react'
import classnames from 'classnames'

export interface PressKeyInterface {
  code: string;
  key: string;
  keyCode: number;
  isShift: boolean;
}

interface KeyItemProps {
  keyData: {
    code: string;
    key: string;
    keyCode: number;
    shift?: {
      key: string;
      keyCode: number;
    };
    showShift: boolean;
    flexWidth?: number;
  };
  timestamp: number;
  targetKeyCode: number;
  pressKey?: PressKeyInterface,
  onSuccess: Function
}

class KeyItem extends React.Component<KeyItemProps, any> {
  public keyDom: RefObject<HTMLDivElement> | undefined

  constructor(props: KeyItemProps) {
    super(props)

    this.keyDom = React.createRef<HTMLDivElement>()
  }

  /**
   * PressKey == KeyData
   */
  get isActive(): boolean {
    const { keyData, pressKey } = this.props
    if (pressKey?.isShift) {
      return (
        keyData.shift?.key === pressKey.key
        && keyData.shift.keyCode === pressKey.keyCode
        && keyData.code === pressKey.code
      )
    } else {
      return (
        keyData.key === pressKey?.key
        && keyData.keyCode === pressKey.keyCode
        && keyData.code === pressKey.code
      )
    }
  }

  /**
   * PressKey == KeyData , and PressKey == Target
   */
  get isRight(): boolean {
    const { keyData, pressKey, targetKeyCode } = this.props
    if (pressKey?.isShift) {
      return (
        keyData.shift?.key === pressKey.key
        && keyData.shift.keyCode === pressKey.keyCode
        && keyData.code === pressKey.code
        && pressKey.keyCode === targetKeyCode
      )
    } else {
      return (
        keyData.key === pressKey?.key
        && keyData.keyCode === pressKey.keyCode
        && keyData.code === pressKey.code
        && pressKey.keyCode === targetKeyCode
      )
    }
  }

  /**
   * PressKey == KeyData , but PressKey != Target
   */
  get isError(): boolean {
    const { keyData, pressKey, targetKeyCode } = this.props
    if (pressKey?.isShift) {
      return (
        keyData.shift?.key === pressKey.key
        && keyData.shift.keyCode === pressKey.keyCode
        && keyData.code === pressKey.code
        && pressKey.keyCode !== targetKeyCode
      )
    } else {
      return (
        keyData.key === pressKey?.key
        && keyData.keyCode === pressKey.keyCode
        && keyData.code === pressKey.code
        && pressKey.keyCode !== targetKeyCode
      )
    }
  }

  /**
   * KeyData == Target
   */
  get isTarget(): boolean {
    const { keyData, targetKeyCode } = this.props
    return keyData.keyCode === targetKeyCode || keyData.shift?.keyCode === targetKeyCode;
  }

  componentDidUpdate(): void {
    if (this.isActive) {
      this.keyDom?.current?.classList.remove('key-active')
      window.requestAnimationFrame(() => {
        this.keyDom?.current?.classList.add('key-active')
      })
    }
    if (this.isRight) {
      this.props.onSuccess()
    }
  }

  render() {
    const { keyData } = this.props
    const { isActive, isRight, isError, isTarget } = this

    return (
      <>
        <div ref={this.keyDom} className={classnames({
          key: true,
          'key-target': isTarget,
          'key-right': isActive && isRight,
          'key-error': isActive && isError,
          'key-pointer': keyData.code == 'KeyF' || keyData.code == 'KeyJ'
        })} style={{
          flex: keyData?.flexWidth || 1,
        }}>
          {keyData.showShift && (
            <div>{keyData.shift?.key}</div>
          )}
          <div>{keyData.key.toUpperCase()}</div>
        </div>
      </>
    )
  }
}

export default KeyItem
