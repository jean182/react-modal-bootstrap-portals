import React from 'react'

import { BtnRef } from '../shared.types';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonRef: BtnRef
}
