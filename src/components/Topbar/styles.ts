import styled from "styled-components";


import scOption from "../../util/cssOptions";

export const TopbarContainer = styled.div`
width: 100%;
height: 50px;
background-color: ${scOption.mainBg};
color: black;
position: sticky;
top: 0;
z-index: 999;
`;

export const TopbarWrapper = styled.div`
height: 50px;
padding: 0px 20px;
display: flex;
align-items: center;
justify-content: space-between;

`;

export const TopLeft = styled.div`
.logo{
 font-weight: bold;
font-size: 30px;
color: darkblue;
cursor: pointer;
}
`;

export const TopRight = styled.div`
display: flex;
align-items: center;


.topbarIconContainer{
position: relative;
font-size: 28px;
cursor: pointer;
color: ${scOption.txtColor};
}

.topIconBadge{
 width: 16px;
 height: 16px;
 position: absolute;
 font-size: 12px;
 font-weight: 700;
 top: -5px;
 right: 0px;
 background-color: ${scOption.mainOrange};
 color: white;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
}

.topAvatar{
 width: 40px;
 height: 40px;
 border-radius: 50%;
 cursor: pointer;
}
`;