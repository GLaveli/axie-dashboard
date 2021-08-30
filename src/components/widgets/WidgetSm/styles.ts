import styled from "styled-components";
import scOption from "../../../util/cssOptions";

export const WidgetSmContainer = styled.div`
flex: 1;
-webkit-box-shadow: 0px 0px 11px -1px ${scOption.boxShadowLight}; 
 box-shadow: 0px 0px 11px -1px ${scOption.boxShadowLight};
 padding: 20px;
 margin: 20px;

 .widgetSmTitle{
  font-size: 32px;
  font-weight: 600;
 }

 .widgetSmImg{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
 }

 .widgetSmList{
  margin: 0;
  padding: 0;
 }

 .widgetSmListItem{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
 }

 .widgetSmUsernameContainer{
 display: flex;
 flex-direction: column;
 }

.widgetSmUsernameText{
 font-weight: 600;
}

.widgetSmButton{
 display: flex;
 align-items: center;
 border: none;
 border-radius: 10px;
 padding: 7px 10px;
 background-color: ${scOption.mainBg};
 cursor: pointer;
}

`;