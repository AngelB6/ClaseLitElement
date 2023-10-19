import { LitElement, html } from "lit-element"
import formARectanguloStyle from "../css/form-a-rectanguloStyle.js";

export class FormARectangulo extends LitElement{
    static get styles(){
        return [formARectanguloStyle]
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
            <h1>Calcular Area Del Rectangulo</h1>
            <div class="contenedor-formulario">
                <form>
                    <img src="../templates/Rectangulo.png" alt="Rectangulo">
                    <label>Ingrese la base del rectangulo:</label>
                    <input type="number" name="base" id="baseRec">
                    <label>Ingrese la altura del rectangulo:</label>
                    <input type="number" name="altura" id="alturaRec">
                    <button type="button" @click=${this.calcularArea}>Calcular</button>
                    <p>El area es: ${this.resultado}cm²</p>
                </form>
            </div>
        </div>
        `;
    }
    calcularArea(){
        const base = this.shadowRoot.getElementById("baseRec").value;
        const altura = this.shadowRoot.getElementById("alturaRec").value;
        const resultado = base * altura;
        this.resultado = resultado;
    }            
}

customElements.define('form-a-rectangulo', FormARectangulo)