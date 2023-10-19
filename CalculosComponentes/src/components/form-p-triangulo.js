import { LitElement, html } from "lit-element"
import formPTrianguloStyle from "../css/form-p-trianguloStyle";

export class FormPTriangulo extends LitElement{
    static get styles(){
        return [formPTrianguloStyle]
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
            <h1>Calcular Perimetro Del Triangulo</h1>
            <div class="contenedor-formulario">
                <form>
                    <img src="../templates/Triangulo.png" alt="Triangulo">
                    <label>Ingrese la base del triangulo:</label>
                    <input type="number" name="base" id="baseTria">
                    <label>Ingrese el lado #1 del triangulo:</label>
                    <input type="number" name="lado1" id="ladoTria1">
                    <label>Ingrese el lado #2 del triangulo:</label>
                    <input type="number" name="lado2" id="ladoTria2">
                    <button type="button" @click=${this.calcularPerimetro}>Calcular</button>
                    <p>El perimetro es: ${this.resultado}cm</p>
                </form>
            </div>
        </div>
        `;
    }
    calcularPerimetro(){
        const base = parseFloat(this.shadowRoot.getElementById("baseTria").value);
        const lado1 = parseFloat(this.shadowRoot.getElementById("ladoTria1").value);
        const lado2 = parseFloat(this.shadowRoot.getElementById("ladoTria2").value);
        const resultado = base + lado1 + lado2;
        this.resultado = resultado;
    }            
}

customElements.define('form-p-triangulo', FormPTriangulo)