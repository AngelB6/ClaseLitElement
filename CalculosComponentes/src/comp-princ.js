import { LitElement, html } from "lit-element";
import compPrinStyle from "./comp-princStyle.js";
// Cuadrado
import { FormACuadrado } from "./components/form-a-cuadrado.js";
import { FormPCuadrado } from "./components/form-p-cuadrado.js";
// Rectangulo
import { FormARectangulo } from "./components/form-a-rectangulo.js";
import { FormPRectangulo } from "./components/form-p-rectangulo.js";
// Triangulo
import { FormATriangulo } from "./components/form-a-triangulo.js";
import { FormPTriangulo } from "./components/form-p-triangulo.js";
// Circulo
import { FormACirculo } from "./components/form-a-circulo.js";
import { FormPCirculo } from "./components/form-p-circulo.js";
// Trapecio
import { FormATrapecio } from "./components/form-a-trapecio.js";
import { FormPTrapecio } from "./components/form-p-trapecio.js";

export class ComponentPrin extends LitElement{
    static get styles(){
        return [compPrinStyle]
    }
    render(){
        return html`
        <div class="contenedor-principal-nav">
        <nav>
            <ul>
                <li><a href="#" @click=${() => this.mostrarComponente('aCuadrado')}>Area Cuadrado</a></li> 
                <li><a href="#" @click=${() => this.mostrarComponente('pCuadrado')}>Perimetro Cuadrado</a></li> 
                <li><a href="#" @click=${() => this.mostrarComponente('aRectangulo')}>Area Rectangulo</a></li>
                <li><a href="#" @click=${() => this.mostrarComponente('pRectangulo')}>Perimetro Rectangulo</a></li>
                <li><a href="#" @click=${() => this.mostrarComponente('aTriangulo')}>Area Triangulo</a></li>
                <li><a href="#" @click=${() => this.mostrarComponente('pTriangulo')}>Perimetro Triangulo</a></li>
                <li><a href="#" @click=${() => this.mostrarComponente('aCirculo')}>Area Circulo</a></li>
                <li><a href="#" @click=${() => this.mostrarComponente('pCirculo')}>Perimetro Circulo</a></li>
                <li><a href="#" @click=${() => this.mostrarComponente('aTrapecio')}>Area Trapecio</a></li>
                <li><a href="#" @click=${() => this.mostrarComponente('pTrapecio')}>Perimetro Trapecio</a></li>
            </ul>
        </nav>
        </div>
        <main>
            <div class="contenedor-principal"></div> 
        </main>
        `
    }
    mostrarComponente(componente){
        const component = this.shadowRoot.querySelector('.contenedor-principal')
        switch (componente) {
            case 'aCuadrado':
                component.innerHTML = '<form-a-cuadrado></form-a-cuadrado>'
                break;
            case 'pCuadrado':
                component.innerHTML = '<form-p-cuadrado></form-p-cuadrado>'
                break;
            case 'aRectangulo':
                component.innerHTML = '<form-a-rectangulo></form-a-rectangulo>'
                break;
            case 'pRectangulo':
                component.innerHTML = '<form-p-rectangulo></form-p-rectangulo>'
                break;    
            case 'aTriangulo':
                component.innerHTML = '<form-a-triangulo></form-a-triangulo>'
                break;    
            case 'pTriangulo':
                component.innerHTML = '<form-p-triangulo></form-p-triangulo>'
                break;    
            case 'aCirculo':
                component.innerHTML = '<form-a-circulo></form-a-circulo>'
                break;
            case 'pCirculo':
                component.innerHTML = '<form-p-circulo></form-p-circulo>'
                break;
            case 'aTrapecio':
                component.innerHTML = '<form-a-trapecio></form-a-trapecio>'
                break;
            case 'pTrapecio':
                component.innerHTML = '<form-p-trapecio></form-p-trapecio>'
                break;               
            default:
                break;
        }
    }
}

customElements.define('component-prin', ComponentPrin)