import React from 'react'
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
}

class KeyItem extends React.Component<KeyItemProps, any> {
  constructor(props: KeyItemProps) {
    super(props)
  }

  render() {
    const { keyitem, isActive, isRight, isError, isTarget } = this.props

    return (
      <>
        <div className={classnames({
          key: true,
          'key-active': isActive,
          'key-target': isTarget,
          'key-right': isRight,
          'key-error': !isRight && isError,
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
