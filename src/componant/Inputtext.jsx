import React from 'react'
import '../componant/css file/Inputtext.css'

export default function Inputtext({DispleyVal}) {


  return (
    <div>
      <input className='display'  type="text" value={DispleyVal} readOnly />
    </div>
  )
}
