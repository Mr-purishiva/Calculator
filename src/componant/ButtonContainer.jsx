import React, { useState } from 'react'
import '../componant/css file/ButtonContainer.css'

export default function ButtonContainer({onButtonClick}) {

const buttoNames =['C'
    ,'1'
    ,'2'
    ,'+'
    ,'3'
    ,'4'
    ,'-'
    ,'5'
    ,'6'
    ,'*'
    ,'7'
    ,'8'
    ,'/'
    ,'='
    ,'9'
    ,'0'
    ,'.'
]

  return (
    
        <div className="buttons-container"  >
            {buttoNames.map((buttoName) =>( <button  className='buttons' onClick={()=>onButtonClick(buttoName)}>
               {buttoName}  </button>))} 
      
      </div>
      
    
  )
}
