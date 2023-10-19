import { LitElement, html } from "lit-element"
import formATrianguloStyle from "../css/form-a-trianguloStyle.js"

export class FormATriangulo extends LitElement{
    static get styles(){
        return [formATrianguloStyle]
    }
    static properties = {
        resultado: {
            type: Number
        },
    }
    constructor(){
        super();
        this.resultado = 0
    }
    render(){
        return html`
        <div class="contenedor-principal">
            <h1>Calcular Area Del Triangulo</h1>
            <div class="contenedor-formulario">
                <form>
                    <img src="../templates/Triangulo.png" alt="Triangulo">
                    <label>Ingrese la base del triangulo:</label>
                    <input type="number" name="base" id="baseTria">
                    <label>Ingrese la altura del triangulo:</label>
                    <input type="number" name="altura" id="alturaTria">
                    <button type="button" @click=${this.calcularArea}>Calcular</button>
                    <p>El area es: ${this.resultado}cm²</p>
                </form>
            </div>
        </div>
        `;
    }
    calcularArea(){
        const base = this.shadowRoot.getElementById("baseTria").value;
        const altura = this.shadowRoot.getElementById("alturaTria").value;
        const resultado = (base * altura)/2;
        this.resultado = resultado;
    }            
}

customElements.define('form-a-triangulo', FormATriangulo)