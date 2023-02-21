import React, { RefObject } from 'react'
import classnames from 'classnames'

export interface KeyItemInterface {
  code: string;
  key: string;
  keyCode: number;
  shift?: {
    key: string;
    keyCode: number;
  };
  showShift: boolean;
}

interface KeyItemProps {
  keyitem: {
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
  isActive: boolean;
  isRight: boolean;
  isError: boolean;
  isTarget: boolean;
  timestamp: number;
}

class KeyItem extends React.Component<KeyItemProps, any> {

  public isActive: boolean = false

  public keyDom: RefObject<HTMLDivElement> | undefined

  constructor(props: KeyItemProps) {
    super(props)

    this.keyDom = React.createRef<HTMLDivElement>()
  }

  componentDidUpdate(): void {
    if (this.props.isActive) {
      this.keyDom?.current?.classList.remove('key-active')
      window.requestAnimationFrame(() => {
        this.keyDom?.current?.classList.add('key-active')
      })
    }
  }

  render() {
    const { keyitem, isActive, isError, isTarget } = this.props

    return (
      <>
        <div ref={this.keyDom} className={classnames({
          key: true,
          'key-target': isTarget,
          'key-right': isActive,
          'key-error': !isActive && isError,
          'key-pointer': keyitem.code == 'KeyF' || keyitem.code == 'KeyJ'
        })} style={{
          flex: keyitem?.flexWidth || 1,
        }}>
          {keyitem.showShift && (
            <div>{keyitem.shift?.key}</div>
          )}
          <div>{keyitem.key.toUpperCase()}</div>
        </div>
      </>
    )
  }
}

export default KeyItem
