import { LitElement, html} from "lit-element";

export class MyLogin extends LitElement{
    render(){
        return html`
        <div class="contenedor-principal">
            <h1>Login</h1>
            <form method="#">
                <label>Nombre Usuario:</label>
                <input type="text">
                <label>Contraseña:</label>
                <input type="text">
                <input type="button" value="Ingresar">
            </form>
        </div>
        `;
    }
}

customElements.define('my-login', MyLogin)