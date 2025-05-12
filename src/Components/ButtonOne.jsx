import { enableRipple } from "@syncfusion/ej2-base";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import ToggleButton from "./ToggleButton";
import "../styles/button.css"
import ToolTip from "./ToolTip";
function ButtonOne() {

  return (
    <div className="button_parent">
        <h1 style={{textAlign:"center"}}>BUTTON CONTROLS</h1>
      <div className="btn">
        <div className="button_styles">
        <h3>Button Styles</h3>
        <div className="button_group" >
          <ButtonComponent cssClass="e-primary">Primary</ButtonComponent>
          <ButtonComponent cssClass="e-success">Success</ButtonComponent>
          <ButtonComponent cssClass="e-info">Info</ButtonComponent>
          <ButtonComponent cssClass="e-warning">Warning</ButtonComponent>
          <ButtonComponent cssClass="e-danger">Danger</ButtonComponent>
          <ButtonComponent cssClass="e-link">Link</ButtonComponent>
        </div>
      </div>

      <div className="second_child">
        <div className="flat_button">
        <h3>Flat Button</h3>
        <ButtonComponent cssClass="e-flat">flat</ButtonComponent>
      </div>

      <div className="outline_button">
        <h3>Outline Button</h3>
        <ButtonComponent cssClass="e-outline">outline</ButtonComponent>
      </div>

      <div className="round_button">
        <h3>Round Button</h3>
        <ButtonComponent cssClass="e-round">➕</ButtonComponent>
      </div>
      <div className="toogle_button">
        <h3>Toggle Button</h3>
        <ToggleButton />
      </div>

      <div className="icon">
        <h3>Icon</h3>
        <span className="e-icons e-cut"></span>
      </div>

      <div className="tool_tip">
        <h3>Tool Tip</h3>
        <ToolTip/>
      </div>
      </div>
      </div>
    </div>
  );
}
export default ButtonOne;
