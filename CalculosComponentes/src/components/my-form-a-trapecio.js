import { LitElement, html } from "lit-element"
import myFormATrapecioStyle from "./my-form-a-trapecioStyle";

export class MyFormATrapecio extends LitElement{
    static get styles(){
        return [myFormATrapecioStyle]
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
            <h1>Calcular Area Del Trapecio</h1>
            <div class="contenedor-formulario">
                <form>
                    <img src="../templates/Trapecio.png" alt="Trapecio">
                    <label>Ingrese la base mayor (B):</label>
                    <input type="number" name="Base" id="Base">
                    <label>Ingrese la base menor (b):</label>
                    <input type="number" name="base" id="base">
                    <label>Ingrese la altura:</label>
                    <input type="number" name="altura" id="altura">
                    <button type="button" @click=${this.calcularArea}>Calcular</button>
                    <p>El area es: ${this.lado}cm²</p>
                </form>
            </div>
        </div>
        `;
    }
    calcularArea(){
        const Base = parseFloat(this.shadowRoot.getElementById("Base").value);
        const base = parseFloat(this.shadowRoot.getElementById("base").value);
        const altura = parseFloat(this.shadowRoot.getElementById("altura").value);
        const resultado = (((Base+base)/2)*altura);
        this.lado = resultado;
    }            
}

customElements.define('my-form-a-trapecio', MyFormATrapecio)