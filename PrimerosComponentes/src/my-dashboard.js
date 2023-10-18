import { LitElement, html } from "lit-element";

export class MyDashboard extends LitElement{
    render(){
        return html `
        <div class="contenedor-dashboard">
            <h1>Dashboard</h1>
            <p>Hola Mundo! Bienvenidos a mi primera pagina web con Lit-Element. Espero les guste, gracias!</p>
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.pngtree.com%2Ffree-backgrounds-photos%2Fdashboard&psig=AOvVaw3-X1WyEsgXLB_FPxmM9KFZ&ust=1697227151395000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCKjzkYWm8YEDFQAAAAAdAAAAABAJ" alt="Imagen Dashboard">
        </div>
        `
    }
}

customElements.define('my-dashboard', MyDashboard)