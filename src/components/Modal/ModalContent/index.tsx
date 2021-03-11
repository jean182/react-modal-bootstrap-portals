import kebabCase from 'lodash.kebabcase'
import React from 'react'

import { useFocusTrap } from '../../../hooks'

import { MainChildren } from '../shared.types'

import { Props } from './ModalContent.interfaces'

const TIMEOUT_VALUE = 300

export default function ModalContent({
  ariaLabel,
  buttonRef,
  center,
  footerChildren,
  mainChildren,
  modalRef,
  onClickAway,
  onClose,
  onKeyDown,
  open,
  size,
  scrollable,
  staticBackdrop,
  title,
}: Props) {
  const [staticAnimation, setStaticAnimation] = React.useState(false)
  const [staticClass, setStaticClass] = React.useState('')
  const [openClass, setOpenClass] = React.useState('')
  const dialogRef = useFocusTrap()
  const scrollClass = scrollable ? ' modal-dialog-scrollable' : ''
  const verticalCenterClass = center ? ' modal-dialog-centered' : ''

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setOpenClass(open ? ' show' : '')
    }, TIMEOUT_VALUE);
    return () => clearTimeout(timer);
  }, [open]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setStaticClass(staticAnimation ? ' modal-static' : '')
    }, TIMEOUT_VALUE);
    return () => clearTimeout(timer);
  }, [staticAnimation]);

  const staticOnClick = () => setStaticAnimation(!staticAnimation)

  const render = (content: MainChildren) =>
    typeof content === 'function' ? content(onClose) : content

  return (
    <div
      ref={dialogRef}
      className={`modal fade${staticClass}${openClass}`}
      aria-labelledby={kebabCase(ariaLabel)}
      tabIndex={-1}
      onClick={staticBackdrop ? staticOnClick : onClickAway}
      onKeyDown={onKeyDown}
      style={{
        display: open ? 'block' : 'none',
        ...(openClass && {paddingRight: '15px'}),
        ...(staticAnimation && {overflow: 'hidden'})
      }}
      {...(open ? {'aria-modal': true, role: 'dialog'} : {'aria-hidden': true})}
    >
      <div
        className={`modal-dialog modal-${size}${scrollClass}${verticalCenterClass}`}
        ref={modalRef}
      >
        <div className='modal-content'>
          <div className='modal-header'>
            {title && <h5>{title}</h5>}
            <button
              type='button'
              className='btn-close'
              aria-label='close-modal'
              onClick={onClose}
              ref={buttonRef}
            />
          </div>
          <div className='modal-body'>{render(mainChildren)}</div>
          {footerChildren && (
            <div className='modal-footer'>{render(footerChildren)}</div>
          )}
        </div>
      </div>
    </div>
  )
}
