import { LitElement, html } from "lit-element"

export class MyFormACuadrado extends LitElement{
    render(){
        return html`
        <div class="contenedor-principal">
            <form method="POST">
                <label>Ingrese el lado del cuadrado:</label>
                <input type="text" name="lado" id="ladoCua">
            </form>
        </div>
        `
    }
}

customElements.define('my-form-a-cuadrado', MyFormACuadrado)