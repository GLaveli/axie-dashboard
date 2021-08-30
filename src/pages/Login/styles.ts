import styled from 'styled-components';

export const Wrapper = styled.div`
 display: flex;
 flex-direction: row;
`;

export const Left = styled.div`
 display: flex;
 flex-direction: column;
 flex: 1;
 align-items: center;
 justify-content: center;
 height: 100vh;

 @media (max-width: 768px) {
  justify-content: start;
    margin-top: 4vh;
 }
`;

export const Right = styled.div`
 flex: 1;

 @media (max-width: 768px) {
  display: none;
 }
 `;

export const Signin = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 width: 80%;
 padding-bottom: 1rem;

 form{
  width: 80%;
  padding-bottom: 3rem;
 }

 .logo {
 margin-bottom: 8vh;
}

.logo img {
 width: 300px;
}

label {
 font-size: 0.9rem;
 line-height: 2rem;
 font-weight: 500;
}

.text-input {
 margin-bottom: 1.3rem;
 width: 100%;
 border-radius: 2px;
 background: #181818;
 border: 1px solid #555;
 color: #ccc;
 padding: 0.5rem 1rem;
 line-height: 1.3rem;
}

.primary-btn {
 width: 100%;
}


.links a {
 display: block;
 color: #fff;
 text-decoration: none;
 margin-bottom: 1rem;
 text-align: center;
 font-size: 0.9rem;
}

.or {
 display: flex;
 flex-direction: row;
 margin-bottom: 1.2rem;
 align-items: center;
}

.secondary-btn, .or, .links {
 width: 60%;
}
.or .bar {
 flex: auto;
 border: none;
 height: 1px;
 background: #aaa;
}

.or span {
 color: #ccc;
 padding: 0 0.8rem;
}

@media (max-width: 768px) {
#signin .logo {
    margin-bottom: 2vh;
  }

#signin .text-input {
    margin-bottom: 0.7rem;
  }

}

`;

export const Showcase = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 background: url('https://image.ibb.co/cO9Lxq/login-bg.jpg') no-repeat center center / cover;
 height: 100vh;
 text-align: center;

 .showcase-text {
 font-size: 3rem;
 width: 100%;
 color: #fff;
 margin-bottom: 1.5rem;
}

.secondary-btn {
 width: 60%;
 margin: auto;
}
`;

export const MainFooter = styled.div`
  color: #ccc;
  text-align: center;
  font-size: 0.8rem;
  max-width: 80%;
  padding-top: 5rem;

  a {
  color: #f96816;
  text-decoration: underline;
}

@media (max-width: 768px) {
    padding-top: 1rem;
}
`;