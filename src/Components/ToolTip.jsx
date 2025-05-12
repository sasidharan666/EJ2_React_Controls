import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import "../styles/button.css"

function ToolTip() {
    let btn;
    let btnTwo;

    function onCreated() {
        // console.log(btn)
        btn.element.setAttribute('title', 'Primary Button');
    }
    function onCreatedTwo() {
        // console.log(btn)
        btnTwo.element.setAttribute('title', 'Primary Button 2');
    }
    return (<div  className='button_group'>
            <ButtonComponent id='btn' ref={(scope) => { btn = scope; }} created={onCreated} isPrimary={true}>Button</ButtonComponent>
            <ButtonComponent id='btn' ref={(scope) => { btnTwo = scope; }} created={onCreatedTwo} isPrimary={true} >Button 2</ButtonComponent>
        </div>);
}
export default ToolTip;
