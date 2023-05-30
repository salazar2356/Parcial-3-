import "./components/export"
import { addObserver } from "../src/store";


class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        addObserver (this)
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot) this.shadowRoot.innerHTML = `
        <h1>Upload your recepies here<h1>`
        const something = this.ownerDocument.createElement('my-form');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-container', AppContainer)