import { LitElement, html } from "lit-element"
import myFormACirculoStyle from "./my-form-a-circuloStyle"

export class MyFormACirculo extends LitElement{
    static get styles(){
        return [myFormACirculoStyle]
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

customElements.define('my-form-a-circulo', MyFormACirculo)