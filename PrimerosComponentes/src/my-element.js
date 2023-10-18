import { LitElement, html} from "lit-element";
import styleScss from "./my-elementStyle";

export class MyElement extends LitElement{
    static get styles(){
        return [styleScss]
    }
    render(){
        return html`
        <h2 class="titulo">Hola Mundo</h2>
        `;
    }
}

customElements.define('my-element', MyElement)