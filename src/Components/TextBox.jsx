import { TextBoxComponent } from '@syncfusion/ej2-react-inputs'
import React, { useState } from 'react'
import "../styles/textbox.css"
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
function TextBox() {
 let name;
    function handleAlert(){
      if(!name==""){
alert(`Hello,${name}!!!`)
      }
      else{
        alert(`Hello, Guest!!!`)
      }


    }
    function handleChange(args){
      name=args.value
    }
  return (
    <div className='text_box_parent'>
      <h1>TEXTBOX COMPONENT (Alert With Greet)</h1>
      <div className="text_inner">
        <div className="text_group"> 
          <lable>GreetName: </lable> <TextBoxComponent placeholder="Alpha" change={(args)=>{handleChange(args)}} ></TextBoxComponent>
       
      </div>
      <ButtonComponent cssClass="e-info" onClick={handleAlert}>Alert Name</ButtonComponent> 
      </div>
    </div>
  )
}

export default TextBox