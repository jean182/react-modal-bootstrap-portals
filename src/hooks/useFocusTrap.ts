import React from 'react'

const KEYCODE_TAB = 9

const FOCUSABLE_ELEMENTS =
  'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'

export function useFocusTrap() {
  const ref = React.useRef<HTMLDivElement>(null)

  function handleFocus(event: KeyboardEvent) {
    const focusableEls = [
      ...ref.current!.querySelectorAll(FOCUSABLE_ELEMENTS),
    ].filter((el) => !el.hasAttribute('disabled')) as HTMLElement[]
    const firstFocusableEl = focusableEls[0]
    const lastFocusableEl = focusableEls[focusableEls.length - 1]

    const isTabPressed = event.key === 'Tab' || event.keyCode === KEYCODE_TAB

    if (!isTabPressed) {
      return
    }

    if (event.shiftKey) {
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus()
        event.preventDefault()
      }
    } else if (document.activeElement === lastFocusableEl) {
      firstFocusableEl.focus()
      event.preventDefault()
    }
  }

  React.useEffect(() => {
    const currentRef = ref.current!
    currentRef.addEventListener('keydown', handleFocus)

    return () => {
      currentRef.removeEventListener('keydown', handleFocus)
    }
  }, [])

  return ref
}
