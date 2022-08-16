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
        console.log("this.method: ", this.method);
    }

    firstUpdated() {
        this.getData();

    }

    generarRequest() {


    }

    async getData() {
        console.log("getData: ");

        await fetch(this.host + this.path, { method: this.method })
            .then((response) => {
                console.log("response: ", response);
                if(response.ok){
                    return response.json();
                }return Promise.reject(response);
            }).then((data) => {
                console.log("data: ", data);

            }).catch((error) => {
                console.log("error: ", error);

            });
    }

}
customElements.define('componente-dp', ComponenteDp);