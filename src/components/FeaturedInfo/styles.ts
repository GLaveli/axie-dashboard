import styled from 'styled-components';

import scOption from "../../util/cssOptions";

export const Featured = styled.div`
width: 100%;
display: flex;
justify-content: space-between;

.featuredItem{
 flex: 1;
 margin: 0 20px;
 padding: 30px;
 border-radius: 10px;
 -webkit-box-shadow: 0px 0px 11px -1px ${scOption.boxShadowLight}; 
 box-shadow: 0px 0px 11px -1px ${scOption.boxShadowLight};
 cursor: pointer;
}

.featuredTitle{
 font-size: 20px;
}

.featuredMoneyContainer{
margin: 10px;
display: flex;
align-items: center;
}

.featuredMoney{
 font-size: 30px;
 font-weight: 600;
 }

 .featuredMoneyRate{
  display: flex;
  align-items: center;
  margin-left: 20px;
 }

.featuredIcon{
 font-size: 25px;
 margin-left: 5px;
 color: ${scOption.secondColorGreen};
}

.featuredIcon.negative{
 color: ${scOption.secondColorRed};
}

.featuredSub{
 font-size: 15px;
 color: ${scOption.txtColorLight};
}
`;