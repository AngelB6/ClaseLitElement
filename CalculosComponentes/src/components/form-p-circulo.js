import { LitElement, html } from "lit-element"
import formPCirculoStyle from "../css/form-p-circuloStyle"

export class FormPCirculo extends LitElement{
    static get styles(){
        return [formPCirculoStyle]
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
            <h1>Calcular Perimetro Del Circulo</h1>
            <div class="contenedor-formulario">
                <form>
                    <img src="../templates/Circulo.png" alt="Circulo">
                    <label>Ingrese el radio del circulo:</label>
                    <input type="number" name="radio" id="radioCir">
                    <button type="button" @click=${this.calcularPerimetro}>Calcular</button>
                    <p>El perimetro es: ${this.resultado}m²</p>
                </form>
            </div>
        </div>
        `;
    }
    calcularPerimetro(){
        const radio = this.shadowRoot.getElementById("radioCir").value;
        const resultadoLarge = 2*Math.PI*radio;
        const resultado = resultadoLarge.toFixed(1)
        this.resultado = resultado;
    }            
}

customElements.define('form-p-circulo', FormPCirculo)