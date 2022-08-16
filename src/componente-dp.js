import { LitElement, html } from 'lit-element';

export class ComponenteDp extends LitElement {

    static get properties() {
        return {
            host: { type: String },
            path: { type: String },
            method: { type: String }
        }
    }

    constructor() {
        super();
        this.host = "";
        this.path = "";
        this.method = "GET";
    }

    firstUpdated() {
        this.generarRequest();

    }

    async generarRequest() {
        const urlApi = this.host + this.path;
        await fetch(urlApi, { method: this.method })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } return Promise.reject(response);
            });
    }

    async getData() {
        await fetch(this.host + this.path, { method: this.method })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } return Promise.reject(response);
            }).then((data) => {
                console.log("data: ", data);
            }).catch((error) => {
                console.log("error: ", error);
            });
    }

}
customElements.define('componente-dp', ComponenteDp);