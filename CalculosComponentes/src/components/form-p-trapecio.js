import { LitElement, html } from "lit-element"
import formPTrapecioStyle from "../css/form-p-trapecioStyle.js";

export class FormPTrapecio extends LitElement{
    static get styles(){
        return [formPTrapecioStyle]
    }
    static properties = {
        lado: {
            type: Number
        }
    }
    constructor(){
        super();
        this.lado = 0;
    }
    render(){
        return html`
        <div class="contenedor-principal">
            <h1>Calcular Perimetro Del Trapecio</h1>
            <div class="contenedor-formulario">
                <form>
                    <img src="../templates/Trapecio.png" alt="Trapecio">
                    <label>Ingrese la base mayor (B):</label>
                    <input type="number" name="Base" id="Base">
                    <label>Ingrese la base menor (b):</label>
                    <input type="number" name="base" id="base">
                    <label>Ingrese un lado:</label>
                    <input type="number" name="lado" id="lado">
                    <button type="button" @click=${this.calcularPerimetro}>Calcular</button>
                    <p>El perimetro es: ${this.lado}cm</p>
                </form>
            </div>
        </div>
        `;
    }
    calcularPerimetro(){
        const Base = parseFloat(this.shadowRoot.getElementById("Base").value);
        const base = parseFloat(this.shadowRoot.getElementById("base").value);
        const lado = parseFloat(this.shadowRoot.getElementById("lado").value);
        const resultado = Base+base+(lado*2);
        this.lado = resultado;
    }            
}

customElements.define('form-p-trapecio', FormPTrapecio)