import React from 'react'

import { BtnRef, MainChildren, ModalSize } from '../shared.types'

export interface Props {
  ariaLabel?: string
  buttonRef: BtnRef
  center: boolean
  footerChildren?: MainChildren
  open: boolean
  mainChildren: MainChildren
  modalRef: React.RefObject<HTMLDivElement>
  onClickAway: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onClose: () => void
  onKeyDown: ((event: React.KeyboardEvent<HTMLDivElement>) => void) | undefined
  size: ModalSize
  scrollable: boolean
  staticBackdrop: boolean
  title?: string
}
