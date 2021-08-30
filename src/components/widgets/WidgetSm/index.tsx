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
     <button className="widgetSmButton">View<MdVisibility className="widgetSmIcon" /></button>
    </li>
    <li className="widgetSmListItem">
     <img src="https://i.imgur.com/eOUJoXx.png" alt="userPhoto" className="widgetSmImg" />
     <div className="widgetSmUsernameContainer">
      <span className="widgetSmUsernameText">Herry Botters</span>
     </div>
     <button className="widgetSmButton">View<MdVisibility className="widgetSmIcon" /></button>
    </li>
    <li className="widgetSmListItem">
     <img src="https://i.imgur.com/Cu7woHn.png" alt="userPhoto" className="widgetSmImg" />
     <div className="widgetSmUsernameContainer">
      <span className="widgetSmUsernameText">Onnerb</span>
     </div>
     <button className="widgetSmButton">View<MdVisibility className="widgetSmIcon" /></button>
    </li>
    <li className="widgetSmListItem">
     <img src="https://i.imgur.com/2Ivcssn.png" alt="userPhoto" className="widgetSmImg" />
     <div className="widgetSmUsernameContainer">
      <span className="widgetSmUsernameText">Caramelison</span>
     </div>
     <button className="widgetSmButton">View<MdVisibility className="widgetSmIcon" /></button>
    </li>
    <li className="widgetSmListItem">
     <img src="https://i.imgur.com/pAjOIRB.png" alt="userPhoto" className="widgetSmImg" />
     <div className="widgetSmUsernameContainer">
      <span className="widgetSmUsernameText">Carajujo</span>
     </div>
     <button className="widgetSmButton">View<MdVisibility className="widgetSmIcon" /></button>
    </li>
    <li className="widgetSmListItem">
     <img src="https://i.imgur.com/xBbiMyg.png" alt="userPhoto" className="widgetSmImg" />
     <div className="widgetSmUsernameContainer">
      <span className="widgetSmUsernameText">Pedro bala</span>
     </div>
     <button className="widgetSmButton">View<MdVisibility className="widgetSmIcon" /></button>
    </li>

   </ul>
  </WidgetSmContainer>
 )
}
