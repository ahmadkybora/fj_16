import Component from "../../../__FJ__/Component";

class Articles extends Component{
    user = {
        first_name: '',
        last_name: '',
        username: ''
    }
    
    constructor() {
        super();
        this.render();
    }


    login = () => {
        this.user.first_name = (document.getElementById('first-name') as HTMLInputElement).value;
        this.user.last_name = (document.getElementById('last-name') as HTMLInputElement).value;
        this.user.username = (document.getElementById('username') as HTMLInputElement).value;
        console.log(this.user);
    }
    
    render() {
        this.shadowRoot.innerHTML = this.bootstrap + `
        <div class="container">
            <h1>Login Form</h1>
            <form>
                <div class="row">
                    <div class="offset-md-4 col-md-4">
                        <div class="form-group">
                            <input name="first_name" class="form-control" id="first-name" value="${this.user.first_name}" />
                            <input name="last_name" class="form-control" id="last-name" value="${this.user.last_name}" />
                            <input name="username" class="form-control" id="username" value="${this.user.username}" />
                        </div>
                        <button id="login" type="submit" class="btn btn-success">Click</button>
                    </div>
                </div>
            </form>
        </div>
        `
    }

    connectedCallback = () => {
        this.shadowRoot.getElementById('login')
            .addEventListener('click', (e) => {
                e.preventDefault();
                this.login();
            });
    }

    disconnectedCallback() {}

    adoptedCallback = () => {}

    attributeChangedCallback = (name: any, oldVal: any, newVal: any) => {}

    // static get observedAttributes() {}

    observedAttributes = () => {}
}

export default Articles;