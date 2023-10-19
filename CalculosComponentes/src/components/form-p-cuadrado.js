import { LitElement, html } from "lit-element"
import formPCuadradoStyle from "../css/form-p-cuadradoStyle.js"

export class FormPCuadrado extends LitElement{
    static get styles(){
        return [formPCuadradoStyle]
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
            <h1>Calcular Primetro Del Cuadrado</h1>
            <div class="contenedor-formulario">
                <form>
                    <img src="../templates/Cuadrado.png" alt="Cuadrado">
                    <label>Ingrese un lado del cuadrado:</label>
                    <input type="number" name="lado" id="ladoCua">
                    <button type="button" @click=${this.calcularPerimetro}>Calcular</button>
                    <p>El perimetro es: ${this.lado}cm</p>
                </form>
            </div>
        </div>
        `;
    }
    calcularPerimetro(){
        const l = this.shadowRoot.getElementById("ladoCua").value;
        const resultado = l*4;
        this.lado = resultado;
    }            
}

customElements.define('form-p-cuadrado', FormPCuadrado)