import { css } from "lit-element";

export default css`
*{
    padding: 0;
    margin: 0;
}
.contenedor-principal-nav{
    display: flex;
    background-color: #5A8EF0;
    max-height: 10vh;
    min-width: 100vh;
    padding: 10px;
    // border: 1px solid red;
}
ul > li > a{
    text-decoration: none;
    color: white;
}
li{
    display: inline;
    margin-right: 12px;
}
`