import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Asap', sans-serif;

}

body, html{
   height: 100%;
   background-color: var(--color-light-gray);
   color: var(--color-text-gray);
}

button, input{
    outline: none;
    background: none;
    border: 0;
    display: block;
}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
}

ul{
    list-style: none;
}

h1, h2, h3, h4, h5, h6{
    color: var(--color-title-gray);
}


:root{
    --color-pink:#f06;
    --color-pink-hover: #d60056;
    --color-white: #fff;
    --color-dark-gray: #1f2429;
    --color-gray: #88969e;
    --color-light-gray: #f8f9fa;
    --color-text-gray: #4a575e;
    --color-title-gray: #1f2429;
    --color-main-box-shadow: rgba(15,42,70,.06);

}

`;
