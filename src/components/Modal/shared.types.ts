import React from 'react'

export type BtnRef =
  | string
  | ((instance: HTMLButtonElement | null) => void)
  | React.RefObject<HTMLButtonElement>
  | null
  | undefined

type CallbackChildren = (close: () => void) => React.ReactNode

export type MainChildren = React.ReactNode | CallbackChildren

export type ModalSize = '' | 'sm' | 'lg' | 'xl'
