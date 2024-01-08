import React from 'react'
import style from'./Header.module.scss'
import Searchbox from '../Searchbox/Searchbox'

function Header({title}) {
  return (
    <div className={style.header}>
        <div className='title'>{title}</div>
        <Searchbox />
    </div>
  )
}

export default Header