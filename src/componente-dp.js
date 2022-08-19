import { LitElement, html } from 'lit';

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
    /* 
        firstUpdated() {
            console.log("firstUpdated dp: ");
            this.generarRequest();

        } */

    async generarRequest() {
        console.log("generarRequest dp: ");
        const urlApi = this.host + this.path;
        console.log("generarRequest dp: urlApi: ", urlApi);
        var a = await fetch(urlApi, { method: this.method })
            .then((response) => {
                if (response.ok) {
                    console.log("generarRequest dp: response.json() dp: ", response);
                    return response.json();
                }
                console.log("generarRequest dp: Promise.reject(response): ", Promise.reject(response));
                return Promise.reject(response);
            });
        return a;
    }

    async getData() {
        await fetch(this.host + this.path, { method: this.method })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } return Promise.reject(response);
            }).then((data) => {
                console.log("data dp: ", data);
            }).catch((error) => {
                console.log("error dp: ", error);
            });
    }

}
customElements.define('componente-dp', ComponenteDp);