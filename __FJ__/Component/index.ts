class Component extends HTMLElement{
    bootstrap = '  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">'

    constructor(){
        super();
        this.attachShadow({ mode: "open" });

        // var a = document.querySelector("a");
        // var Func = function(){}
        // var obj = new Func();
        // a.setAttribute("onClick", `${obj}`);
        // a.onclick = function() {};

        // console.log(a);
    }
    // connectedCallback = () => {}

    // adoptedCallback = () => {}

    // attributeChangedCallback = (name: any, oldVal: any, newVal: any) => {}

    // observedAttributes = () => {}

    // static get observedAttributes() {}
    // پارامتر اول برای نام کامپوننت
    // و پارامتر دوم برای کلاس مورد نظر میباشد
    static create = (name, component) => {
        window.customElements.define(name, component);
    }
}

export default Component