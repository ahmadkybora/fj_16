import Component from "../../../__FJ__/Component";
// import { http } from '../../../__FJ__/Services/httpService';
// import axios from "axios";

class Products extends Component {
    products = [
        { id: 1, first_name: 'mt1', last_name: 'md1', username: "mu1" },
        { id: 2, first_name: 'mt2', last_name: 'md2', username: "mu2" },
        { id: 3, first_name: 'mt3', last_name: 'md3', username: "mu3" },
        { id: 4, first_name: 'mt4', last_name: 'md4', username: "mu4" },
        { id: 5, first_name: 'mt5', last_name: 'md5', username: "mu5" },
        { id: 6, first_name: 'mt6', last_name: 'md6', username: "mu6" },
    ];

    id: any;

    constructor() {
            super();
            // console.log(this.products);
            this.render();
            this.getProducts();
            this.deleteProducts();
            this.editProducts();
        }
        // getProducts = async () => await (await fetch('https://fakestoreapi.com/products')).json();

    // getProducts = async() => {
    //     return await axios.get('https://fakestoreapi.com/products');
    // };

    getProducts() {
        // let b = (document.getElementById('first-name') as HTMLInputElement).value;
        // const first_name = (document.getElementById("first-name") as HTMLInputElement).value;

        // console.log(document.getElementById('table'));
        // const t = this.shadowRoot.getElementById("first-name").value;
        // console.log(t);
        // let x;
        let productsCount = this.products.length;
        for(let i=0; i<productsCount; i++) {
            // let id = this.products[i].id;
            this.shadowRoot.querySelector('tbody').innerHTML +=
                `
                    <tr data-key="${this.products[i].id}">
                        <td>${this.products[i].first_name}</td>
                        <td>${this.products[i].last_name}</td>
                        <td>${this.products[i].username}</td>
                        <td>
                            <span>

                                <a 
                                    href="#" 
                                    id="delete" 
                                    class="delete text-danger" 
                                    data-type="delete" 
                                    data-id="${this.products[i].id}"
                                >
                                    delete
                                </a>

                                <a 
                                    href="#" 
                                    id="edit" 
                                    class="edit text-primary" 
                                    data-type="edit" 
                                    data-id="${this.products[i].id}"
                                >
                                    edit
                                </a>
                                
                            </span>
                        </td>
                    </tr>
                 `
            ;
        }
        // this.shadowRoot.querySelector('tbody').innerHTML = x;
        // document.addEventListener("DOMContentLoaded", () => {
        //     // اینجا بارگیری کامل صفحه لود میشود
        //     document.body.addEventListener("click", e => {
        //         console.lothis.products[i]
        //     })
        // })
    }

    // اینجا با یک رویداد میتوان به دام دسترسی داشت
    // و آی دی المن مورد نظر را چک کرد 
    // البته ابتدا باید همه المنتهارا گرفت و با یک شرط چک کرد
    deleteProducts = () => {
        this.shadowRoot.addEventListener("click", (e: Event) => {
            e.preventDefault();
            const target = e.target as Element;
            const dataId = target.getAttribute('data-id');
            const dataType = target.getAttribute('data-type');
            if(dataType === 'delete') {
                const deleteIdes = this.shadowRoot.querySelectorAll(".table tbody tr td span a#delete");
                for(let i=0; i<deleteIdes.length; i++){
                    if(deleteIdes[i].attributes["data-id"].value === dataId) {
                        this.id = dataId;
                        break;
                    }
                }
            }
        });
    }

    // اینجا با یک رویداد میتوان به دام دسترسی داشت
    // و آی دی المن مورد نظر را چک کرد 
    // البته ابتدا باید همه المنتهارا گرفت و با یک شرط چک کرد
    editProducts = () => {
        this.shadowRoot.addEventListener("click", (e: Event) => {
            e.preventDefault();
            const target = e.target as Element
            const dataId = target.getAttribute('data-id');
            const dataType = target.getAttribute('data-type');
            if(dataType === 'edit') {
                const editIdes = this.shadowRoot.querySelectorAll(".table tbody tr td span a#edit");
                for(let i=0; i<editIdes.length; i++){
                    if(editIdes[i].attributes["data-id"].value === dataId) {
                        this.id = dataId;
                        break;
                    }
                }
            }
        })
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
                <tbody></tbody>
            </table>
            `;
        // <c-table name="salam"></c-table>


        // let x ="";
        // this.products.map((product: any) => {
        //     x = `<tr><td>${product.title}</td><td>${product.title}</td></tr>`
        // });
        // this.shadowRoot.getElementById('products').innerHTML = x;
        // for (let i = 0; i<=this.products; i++) {
        // x = x + "<h" + i + ">Heading " + i + "</h" + i + ">";
        // }
        // document.getElementById("demo").innerHTML = x;
        // let htmlElements =
        //     this.shadowRoot.getElementsByTagName("p");

        // // Use a regular for-loop
        // for (let i = 0; i < htmlElements.length; i++) {

        //     // Print the current element
        //     console.log(htmlElements[i]);
        // }
    }

    connectedCallback = () => {
        // this.shadowRoot.addEventListener("click", (e: Event) => {
        //     e.preventDefault();
        //     this.deleteProducts(e);
        // });
    }

    disconnectedCallback() {}

    adoptedCallback = () => {}

    attributeChangedCallback = (name, oldVal, newVal) => {}

    // static get observedAttributes() {}

    observedAttributes = () => {}
}

export default Products;




{
    /* <table class="table">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
        </tr>
    </thead>
    <tbody id="products">
    </tbody>
    </table> */
}



{
    /* <div class="row">
    <form>
        <div class="form-group offset-md-4 col-md-4">
            <input class="form-control" type="text" name="first_name" id="first-name" value="${this.first_name}" />
        </div>
        <div class="form-group offset-md-4 col-md-4">
            <button class="btn btn-success" type="submit">Login</button>
        </div>
    </form>
    </div> */
}