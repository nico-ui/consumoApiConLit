import { LitElement, html } from 'lit-element';
import './componente-dp.js';

export class ComponenteDm extends LitElement {

    static get properties() {
        return {
            host: { type: String },
            path: { type: String },
            method: { type: String }
        }
    }

    constructor() {
        super();
    }

    render() {
        return html`
        <slot>1</slot>
        <componente-dp 
            host=${this.host} 
            path=${this.path} 
            method=${this.method}>
        </componente-dp>
        `;
    }
}
customElements.define('componente-dm', ComponenteDm);