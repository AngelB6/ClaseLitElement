import { css } from "lit-element";

export default css`
*{
    padding: 0;
    margin: 0;
}
.contenedor-principal-nav{
    display: flex;
    background-color: background: #7F7FD5;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */;
    max-height: 10vh;
    min-width: 100vh;
    padding: 10px;
    align-items: center;
    justify-content: center;
}
ul > li > a{
    text-decoration: none;
    color: white;
}
li{
    display: inline;
    padding: 10px;
    border-radius: 5px;
}
li:hover{
    background-color: #84B8D9;
}
`