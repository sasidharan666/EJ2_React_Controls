
import "../styles/button.css"
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import "../styles/avatar.css"
function Avatar() {

      let data = [
        { id: 's_01', text: 'Robert', avatar: '', pic: 'pic04' },
        { id: 's_02', text: 'Nancy', avatar: 'N', pic: '' },
        { id: 's_05', text: 'John', pic: 'pic01', avatar: '' },
        { id: 's_03', text: 'Andrew', avatar: 'A', pic: '' },
        { id: 's_06', text: 'Margaret', avatar: 'M', pic: 'pic02' },
        { id: 's_07', text: 'Steven', pic: 'pic03', avatar: '' },
        { id: 's_08', text: 'Michael', pic: 'pic02', avatar: '' }
    ];
    function template(data) {
        let letterAvatar = <span className='e-avatar e-avatar-small e-avatar-circle'>{data.avatar}</span>;
        let imageAvatar = <span className={`${data.pic} e-avatar e-avatar-small e-avatar-circle`}></span>;
        return (<div className='listWrapper'>
                {data.avatar !== "" ? (letterAvatar) : (imageAvatar)}
                <span className='text'>{data.text}</span>
            </div>);
    }
  return (
    <div className="avatar">
        <h1 style={{textAlign:"center"}}>AVATAR</h1>
     <div className="avatar_parent">
       <div className="avatar__inner">
          <div className="avatar_container">
            <span className="e-avatar e-avatar-xlarge" >
            <img src="https://static.vecteezy.com/system/resources/previews/024/183/502/original/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg" alt="" />
            
        </span>
        <span>Avatar Xlarge</span>
          </div>
          <div className="avatar_container">
        <span className="e-avatar e-avatar-small e-avatar-circle">
            <img src="https://static.vecteezy.com/system/resources/previews/024/183/502/original/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg" alt="" />
        </span>
        <span>Avatar Small</span>
        </div>

      </div>
        <div className="list-view-avatar">
             <div className="sample_container listview">
          
            <ListViewComponent cssClass='letterAvatarList' dataSource={data} headerTitle='Contacts' showHeader={true} sortOrder="Ascending" template={template}></ListViewComponent>
              </div>
        </div>
     </div>
    </div>
  )
}
export default Avatar