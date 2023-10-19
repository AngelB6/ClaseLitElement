import { css } from "lit-element";

export default css`
.contenedor-principal{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 94.9vh;
    min-width: 100vh;
    flex-direction: column;
    font-family: monospace;
    margin-top: -3vh;
}
.contenedor-formulario > form{ 
    display: flex;
    flex-direction: column;
    padding: 5vh 10vh;
    border: 0.2rem solid #84B8D9;
    border-radius: 20px;
    gap: 5vh;
    text-align: center
}
img{   
    margin-left: 1%;
    height: 150px;
    width: 250px;
}
button{
    background-color: #84B8D9;
    border-radius: 5px;
    padding: 5px;
    border: 0;
    color: white;
    cursor: pointer;
}
input{
    border-top: 0;
    border-right: 0;
    border-color: black;
    border-radius: 4px;
    padding: 0 15px;
    outline: none;
}
p{
    font-weight: bolder;
    font-size: 20px;
}
`