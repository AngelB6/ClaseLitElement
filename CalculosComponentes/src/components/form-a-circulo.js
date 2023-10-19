import { LitElement, html } from "lit-element"
import formACirculoStyle from "../css/form-a-circuloStyle"

export class FormACirculo extends LitElement{
    static get styles(){
        return [formACirculoStyle]
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
            <h1>Calcular Area Del Circulo</h1>
            <div class="contenedor-formulario">
                <form>
                    <img src="../templates/Circulo.png" alt="Circulo">
                        <label>Ingrese el radio del circulo:</label>
                        <input type="number" name="radio" id="radioCir">
                        <button type="button" @click=${this.calcularArea}>Calcular</button>
                        <p>El area es: ${this.resultado}m²</p>
                </form>
            </div>
        </div>
        `;
    }
    calcularArea(){
        const radio = this.shadowRoot.getElementById("radioCir").value;
        const resultadoLarge = Math.PI*(radio*radio);
        const resultado = resultadoLarge.toFixed(2)
        this.resultado = resultado;
    }            
}

customElements.define('form-a-circulo', FormACirculo)