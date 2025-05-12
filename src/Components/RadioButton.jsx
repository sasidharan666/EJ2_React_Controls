import { CheckBoxComponent, RadioButtonComponent } from '@syncfusion/ej2-react-buttons'
import React from 'react'

import "../styles/radio.css"

function RadioButton() {
  return (
    <div className='radio_parent'> 
        <h1>RADIO BUTTON</h1>
       <div className="radio">
         <span>USing Before LablePosition &nbsp;&nbsp;
          </span><RadioButtonComponent labelPosition="Before"  label="Men" className='e-radio-wrapper ' />
       </div>
        <div className="radio">
        <span>USing Default LablePosition&nbsp;&nbsp;</span><RadioButtonComponent   label="Women" className='e-radio-wrapper '/>
        </div>
        
    </div>
  )
}

export default RadioButton