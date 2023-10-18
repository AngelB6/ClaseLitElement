import { LitElement, html } from "lit-element"
import myFormACuadradoStyle from "./my-form-a-cuadradoStyle"

export class MyFormACuadrado extends LitElement{
    static get styles(){
        return [myFormACuadradoStyle]
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
                    <img src="https://static.vecteezy.com/system/resources/previews/003/123/180/non_2x/saber-neon-glow-color-flowing-square-background-free-photo.jpg" alt="Cuadrado">
                    <label>Ingrese el lado del cuadrado:</label>
                    <input type="number" name="lado" id="ladoCua">
                    <button type="button" @click=${this.calcularArea}>Calcular</button>
                    <p>El resultado de la operacion es: ${this.lado}</p>
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

customElements.define('my-form-a-cuadrado', MyFormACuadrado)