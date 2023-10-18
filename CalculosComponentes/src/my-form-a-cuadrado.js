import { LitElement, html } from "lit-element"
import myFormACuadradoStyle from "./my-form-a-cuadradoStyle"

export class MyFormACuadrado extends LitElement{
    static get styles(){
        return [myFormACuadradoStyle]
    }
    render(){
        return html`
        <div class="contenedor-principal">
            <h1>Calcular Area Del Cuadrado</h1>
            <div class="contenedor-formulario">
                <form method="POST">
                    <img src="https://static.vecteezy.com/system/resources/previews/003/123/180/non_2x/saber-neon-glow-color-flowing-square-background-free-photo.jpg" alt="Cuadrado">
                    <label>Ingrese el lado del cuadrado:</label>
                    <input type="text" name="lado" id="ladoCua">
                    <button>Calcular</button>
                </form>
            </div>
        </div>
        `
    }
}

customElements.define('my-form-a-cuadrado', MyFormACuadrado)