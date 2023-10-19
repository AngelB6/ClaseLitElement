import { LitElement, html } from "lit-element"
import formPRectanguloStyle from "../css/form-p-rectanguloStyle";

export class FormPRectangulo extends LitElement{
    static get styles(){
        return [formPRectanguloStyle]
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
            <h1>Calcular Perimetro Del Rectangulo</h1>
            <div class="contenedor-formulario">
                <form>
                    <img src="../templates/Rectangulo.png" alt="Rectangulo">
                    <label>Ingrese la base del rectangulo:</label>
                    <input type="number" name="base" id="baseRec">
                    <label>Ingrese la altura del rectangulo:</label>
                    <input type="number" name="altura" id="alturaRec">
                    <button type="button" @click=${this.calcularPerimetro}>Calcular</button>
                    <p>El perimetro es: ${this.resultado}cm</p>
                </form>
            </div>
        </div>
        `;
    }
    calcularPerimetro(){
        const base = this.shadowRoot.getElementById("baseRec").value;
        const altura = this.shadowRoot.getElementById("alturaRec").value;
        const resultado = ((base*2) + (altura*2));
        this.resultado = resultado;
    }            
}

customElements.define('form-p-rectangulo', FormPRectangulo)