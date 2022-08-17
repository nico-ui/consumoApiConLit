import { LitElement, html } from 'lit';
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

    firstUpdated() {
        console.log("firstUpdated dm");
        this.getDataApi();
    }

    _getDataService() {
        console.log("_getDataService dm", this.shadowRoot.querySelector('#api_dp'));
        return this.shadowRoot.querySelector('#api_dp');
    }

    _normalizacionResponse(data) {    //5. Normalizacion
        return data;
    }

    getDataApi() {
        const dataProvider = this._getDataService();//1. llamar al dp
        console.log("dataProvider dm: ", dataProvider);
        this.dispatchEvent(new CustomEvent('dm-request-start', {        //2. notificar el inicio del llamado a dp mediante un evento
            bubbles: true,
            composed: true,
            detail: true
        }));
        console.log("getDataApi dm: ");
        dataProvider        //3. ejecucion del dp mediante una promesa con dos estados
            .generarRequest()
            .then((data) => {
                console.log("data dm: ", data);
                const normalizacionResponse = this._normalizacionResponse(data);            //4. se manda llamar el proceso de normalizacion
                console.log("normalizacionResponse dm: ", normalizacionResponse);
                this.dispatchEvent(new CustomEvent('dm-request-success', {            //4a. ejecucion de la promesa cuando sale bien
                    bubbles: true,
                    composed: true,
                    detail: normalizacionResponse
                    }));
                }).catch((error) => {
                    console.log("error dm: ", error);
            });
    }

    render() {
        return html`
        <slot>1</slot>
        <componente-dp host=${this.host} path=${this.path} method=${this.method} id="api_dp">
        </componente-dp>
        `;
    }
}
customElements.define('componente-dm', ComponenteDm);