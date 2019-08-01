import { createGlobalStyle } from 'styled-components';

// import backgroundStars from '../assets/background-stars.svg';
import background from '../assets/background.svg';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    /* background: #191919; */
    /* height: 100vh; */
    /* display: flex; */
    /* flex: 1; */
    background: url(${background}) top center no-repeat
              , #191920;

    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizelegibility !important;
  }

  body, input, button {
    font: 14px 'Montserrat', sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }

`;
