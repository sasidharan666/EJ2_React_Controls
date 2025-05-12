import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import React, { useState } from 'react'

function ToggleButton() {
      const [state, setState] = useState({
        content: 'Play',
        iconCss: 'e-btn-sb-icon e-play-icon'
    });
        function btnClick() {
            if (state.content === "Play") {
                setState({ content: 'Pause', iconCss: 'e-btn-sb-icon e-pause-icon' });
            }
            else {
                setState({ content: 'Play', iconCss: 'e-btn-sb-icon e-play-icon' });
            }
        }
  return (
    <div>
<ButtonComponent cssClass='e-flat' iconCss={state.iconCss} content={state.content} isToggle={true} onClick={btnClick}/>
    </div>
  )
}

export default ToggleButton