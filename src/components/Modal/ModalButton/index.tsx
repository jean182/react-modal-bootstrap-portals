import React from 'react'

import {Props} from './ModalButton.interfaces'

export default function ModalButton({
  buttonRef,
  children,
  type = 'button',
  ...rest
}: Props) {
  return (
    <button ref={buttonRef} type={type} {...rest}>
      {children}
    </button>
  )
}
