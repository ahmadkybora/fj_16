import Component from "../../../__FJ__/Component";

class Table extends Component {
    constructor() {
            super();
            this.render();
            this.innerHTML = this.getAttribute('name');
        }

    render() {
        this.shadowRoot.innerHTML = this.bootstrap + `
            <table class="table">
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>UserName</th>
                        <th>Option</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        `;
    }

    connectedCallback = () => {}

    disconnectedCallback() {}

    adoptedCallback = () => {}

    attributeChangedCallback = (name, oldVal, newVal) => {}

    // static get observedAttributes() {}

    observedAttributes = () => {}
}

export default Table;