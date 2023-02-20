import React from 'react'
import classnames from 'classnames'

export interface KeyItemInterface {
  code: string;
  key: string;
  keyCode: number;
  shiftKey: boolean;
}

interface KeyItemProps {
  key: KeyItemInterface;
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
    const { key, isActive, isRight, isError, isTarget } = this.props

    return (
      <>
        <div className={classnames({
          key: true,
          keyActive: isActive,
          keyTarget: isTarget,
          keyRight: isRight,
          keyError: !isRight && isError,
        })}>{key.key}</div>
      </>
    )
  }
}

export default KeyItem
