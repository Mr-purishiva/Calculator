import React, { useState } from 'react'
import './App.css'
import Inputtext from './componant/Inputtext'
import ButtonContainer from './componant/ButtonContainer'


export default function App() {

const [calVal, setcalVal]=useState('');

const onButtonClick =(ButtonText) =>
{
  console.log(ButtonText);
  if(ButtonText==='C')
  {
    setcalVal('');
  }else if(ButtonText==='=')
  {
    let Result = eval(calVal);
    setcalVal(Result);
  }
  else{
    let newDisplayVal=calVal + ButtonText;
    setcalVal(newDisplayVal);
  }

}

  return (
    <div className='calculator'>
      <Inputtext DispleyVal={calVal} />
      <ButtonContainer onButtonClick={onButtonClick}/>
      
      </div>

      )
}
