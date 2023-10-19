import { LitElement, html } from "lit-element"
import formACuadradoStyle from "../css/form-a-cuadradoStyle"

export class FormACuadrado extends LitElement{
    static get styles(){
        return [formACuadradoStyle]
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
            <h1>Calcular Area Del Cuadrado</h1>
            <div class="contenedor-formulario">
                <form>
                    <img alt="Cuadrado" src="../templates/Cuadrado.png">
                    <label>Ingrese el lado del cuadrado:</label>
                    <input type="number" name="lado" id="ladoCua">
                    <button type="button" @click=${this.calcularArea}>Calcular</button>
                    <p>El area es: ${this.lado}cm²</p>
                </form>
            </div>
        </div>
        `;
    }
    calcularArea(){
        const l = this.shadowRoot.getElementById("ladoCua").value;
        const resultado = l*l;
        this.lado = resultado;
    }            
}

customElements.define('form-a-cuadrado', FormACuadrado)