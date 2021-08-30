import { createGlobalStyle } from 'styled-components';

import scOption from '../util/cssOptions';

export default createGlobalStyle`

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body{
 font-family: 'Roboto', sans-serif;
 font-weight: 300;
 background: #181818;
 color: #fff;}

@media (max-width: 768px){
  body{
    overflow: auto;
  }
}

h1, h2, h3, h4, h5, h6 {
 font-weight: 300;
}

li{
list-style-type: none;
}

.primary-btn {
  padding: 0.7rem 1rem;
  height: 2.7rem;
  display: block;
  border: 0;
  border-radius: 2px;
  font-weight: 500;
  background: ${scOption.mainOrange};
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  transition: all 0.5s;
}

.primary-btn:hover {
  background-color: #ff7b39;
}

.secondary-btn {
  padding: 0.7rem 1rem;
  height: 2.7rem;
  display: block;
  border: 1px solid #f4f4f4;
  border-radius: 2px;
  font-weight: 500;
  background: none;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  transition: all 0.5s;
}

.secondary-btn:hover {
  border-color: #ff7b39;
  color: #ff7b39;
}

.sidebarContainer{
display: flex;
}

.menuPages{
  flex: 6;
  margin-top: 10px;
}

`;




