// در این قسمت روت های مورد نظر را ارسال میکنیم
// بدینوسیله هر روتی که به آن برویم
// کامپوننت مورد نظر در آن روت لود میشود

export const routes = [
    { path: "/", name: "dashboard" },
    { path: "/users", name: "users", component: "<c-articles />" },
    { path: "/products", name: "products", component: "<c-products />" },
    { path: "/posts", name: "posts", component: "<c-articles />" },
]