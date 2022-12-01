import React, { FC } from 'react'
import ProgressBar from '../ProgressBar'

import './style.css'

type ProgressValueType = { progressValue: number };

const Header: FC<ProgressValueType> = ({progressValue}) => {
  return (
    <header className='header'>
      <h1>Lodgify Grouped Tasks</h1>
      <ProgressBar 
        progressValue={progressValue}
      />
    </header>
  )
}

export default Header