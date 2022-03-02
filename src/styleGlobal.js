import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {margin: 0;
padding: 0;
box-sizing: border-box;
outline: 0;}

button {
    cursor: pointer;
    border: unset;
    font-size: 12px;
    box-sizing: border-box;
    border-radius: 4.06066px;

}

body, input, button {
    font-family: inter;
    color: white;
}

a {
    text-decoration: none;
}

:root {
    --color-primaty:#FF577F;
    --color-primary-Focus:#FF427F;
    --color-primary-Negative:#59323F;
    --grey-4:#121214;
    --grey-3:#212529;
    --grey-2:#343B41;
    --grey-1:#868E96;
    --grey-0:#F8F9FA;
    --sucess:#3FE864;
    --negative:#E83F5B;
}

span {
    color: var(--grey-1);
}

h1, h2 ,h3 {
    font-weight: bold;
    color: #F8F9FA;}

h1 {
    font-size: 18.273px;
}

h2{
    font-size: 16.2426px;

}

h3 {
    font-size: 14.2123px;

}
input {
    border-radius: 3px;
    background-color: #343b41;
    color: #F8F9FA;
    padding: 0px 12px 0px 12px;
    border: unset;
}
select {
    border-radius: 3px;
    background-color: #343b41;
    border: unset;
    color: #F8F9FA;
    padding: 0px 12px 0px 12px;
}
`;
