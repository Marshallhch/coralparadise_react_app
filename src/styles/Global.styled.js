import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  .app{
    overflow:hidden;
  }

  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  html, body{
    font-family: 'Noto Sans KR', sans-serif;
  }

  ol, ul{
    list-style:none;
  }

  input, button, select{
    border:none;
    outline:none;
    font-family: 'Noto Sans KR', sans-serif;
  }

  img{
    display:block;
  }

  a{
    text-decoration:none;
    color:#333;
    font-family: 'Noto Sans KR', sans-serif;
  }

  em, strong{
    font-style:normal;
    font-weight:normal;
  }

  .section{
    padding:${({ theme }) => theme.el.sectionPadding};
  }

  @media screen and (max-width:768px) {
   .section {
    padding: ${({ theme }) => theme.el.sectionPaddingM};
   }
  }
`;

export default GlobalStyles;
