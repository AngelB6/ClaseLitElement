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
                <li><a href="#">Login</a></li>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Volver</a></li>
            </ul>
        </nav>
        </div>
        `
    }
}

customElements.define('my-nav-superior', MyNavSuperior)