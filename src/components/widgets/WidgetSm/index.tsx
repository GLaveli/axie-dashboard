import { MdVisibility } from 'react-icons/md';

import { WidgetSmContainer } from "./styles";


export const WidgetSm = () => {
 return (
  <WidgetSmContainer>
   <span className="widgetSmTitle">My Axies</span>

   <ul className="widgetSmList" >

    <li className="widgetSmListItem">
     <img src="https://i.imgur.com/YgzDD44.png" alt="userPhoto" className="widgetSmImg" />
     <div className="widgetSmUsernameContainer">
      <span className="widgetSmUsernameText">Mr.Eggson</span>
     </div>
     <button className="widgetSmButton">View - <MdVisibility /></button>
    </li>
    <li className="widgetSmListItem">
     <img src="https://i.imgur.com/eOUJoXx.png" alt="userPhoto" className="widgetSmImg" />
     <div className="widgetSmUsernameContainer">
      <span className="widgetSmUsernameText">Herry Botters</span>
     </div>
     <button className="widgetSmButton">View - <MdVisibility /></button>
    </li>
    <li className="widgetSmListItem">
     <img src="https://i.imgur.com/YgzDD44.png" alt="userPhoto" className="widgetSmImg" />
     <div className="widgetSmUsernameContainer">
      <span className="widgetSmUsernameText">Mr.Eggson</span>
     </div>
     <button className="widgetSmButton">View - <MdVisibility /></button>
    </li>

   </ul>
  </WidgetSmContainer>
 )
}
