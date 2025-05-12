import { useState } from 'react'

import './App.css'
import ButtonOne from './Components/ButtonOne'
import Badge from './Components/Badge'
import Avatar from './Components/Avatar'
import RadioButton from './Components/RadioButton'
import TextBox from './Components/TextBox'
import DataGrid from './Components/DataGrid'

function App() {


  return (
    <div className='parent' >
  
     <ButtonOne/>
     <Badge />
     <Avatar/>
     <RadioButton  />
     <TextBox/>
     <DataGrid/>
    </div>
  )
}

export default App
