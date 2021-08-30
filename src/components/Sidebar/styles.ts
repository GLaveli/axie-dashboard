import styled from 'styled-components';

import scOption from '../../util/cssOptions';

export const SidebarMenu = styled.div`
flex: 1;
height: calc(100vh - 50px);
background-color: ${scOption.secondBg};
position: sticky;
top: 50px;

.sidebarWrapper{
 padding: 20px;
 color: ${scOption.txtColorDark};
}

.sidebarMenu{
 margin-bottom: 10px;
}

.siderbarList{
 list-style: none;
 padding: 5px;
}

.sidebarListItem{
padding: 5px;
cursor: pointer;
display: flex;
align-items: center;
border-radius: 10px;
}

.sidebarListItem.active, .sidebarListItem:hover{
background-color: rgba(228,228,250);
}
`;