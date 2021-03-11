import React from 'react'

import {MainChildren, ModalSize} from './shared.types'

export interface Props {
  ariaLabel: string
  btnClassName?: string
  btnContent: React.ReactNode
  center?: boolean
  children: MainChildren
  footerChildren?: MainChildren
  size?: ModalSize
  scrollable?: boolean
  staticBackdrop?: boolean
  title?: string
}
