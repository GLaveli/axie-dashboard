import styled from "styled-components";
import scOption from "../../../util/cssOptions";

export const WidgetLgContainer = styled.div`
flex: 2;
-webkit-box-shadow: 0px 0px 11px -1px ${scOption.boxShadowLight}; 
 box-shadow: 0px 0px 11px -1px ${scOption.boxShadowLight};
 padding: 20px;
 margin: 20px;

.widgetLgTitle{
 font-size: 30px;
 font-weight: 700;
}

.widgetLgTable{
 width: 100%;
 border-spacing: 20px;
}

.widgetLgTh{
 text-align: left;
}

.widgetLgTdUser{
 display: flex;
 align-items: center;
font-weight: 600;
}

.widgetLgImg{
width: 40px;
height: 40px;
border-radius: 50%;
margin-right: 10px;
object-fit: cover;
}


.widgetLgButton{
 width: 100px;
 padding: 5px 7px;
 border: none;
 border-radius: 10px;
 font-size: 14px;
 font-weight: 700;
}

.widgetLgTeam,
.widgetLgMeta,
.widgetLgAmount{
 font-weight: 600;
}

.widgetLgButton.ok{
 background-color: ${scOption.mainColorWithGreen};
 color: ${scOption.mainColorGreen};
}
.widgetLgButton.progress{
 background-color: #ebf1fe;
 color: ${scOption.thirdColorBlue};
}
.widgetLgButton.out{
 background-color: ${scOption.mainColorWithRed};
 color: ${scOption.mystic};
}



`;