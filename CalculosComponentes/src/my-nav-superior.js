import { LitElement, html } from "lit-element";
import myNavSuperiorStyle from "./my-nav-superiorStyle";

export class MyNavSuperior extends LitElement{
    static get styles(){
        return [myNavSuperiorStyle]
    }
    render(){
        return html`
        <div class="contenedor-principal-nav">
        <nav>
            <ul>
                <li><a href="#">Area Cuadrado</a></li> 
                <li><a href="#">Perimetro Cuadrado</a></li> 
                <li><a href="#">Area Rectangulo</a></li>
                <li><a href="#">Perimetro Rectangulo</a></li>
                <li><a href="#">Area Triangulo</a></li>
                <li><a href="#">Perimetro Triangulo</a></li>
                <li><a href="#">Area Circulo</a></li>
                <li><a href="#">Perimetro Circulo</a></li>
                <li><a href="#">Area Trapecio</a></li>
                <li><a href="#">Perimetro Trapecio</a></li>
            </ul>
        </nav>
        </div>
        `
    }
}

customElements.define('my-nav-superior', MyNavSuperior)