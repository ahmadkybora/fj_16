import Component from "../Component";
import { routes } from "../../src/routes";

class Router extends Component {
    baseUrl = "http://localhost:8080";
    currentPage = "";

    constructor() {
        super();
        // زمانیکه صفحه به طور کامل بار گیری میشود
        // اگر کلیکی انجام شود
        // بوسیله متد مورد نظر چک میشود که یو ار ال
        // لینک مورد نظر ایا با روتهاییی که تعریف کردیم یکی است
        // که به این وسیله کامپوننت ما لود میشود
        document.addEventListener("DOMContentLoaded", () => {
            // console.log(location.hash)
            // if (this.currentPage !== '/') {
            //     console.log("a")
            //     location.replace("http://localhost:8080/posts");
            // }
            // if (window.performance) {
            //     console.info("window.performance works fine on this browser");
            // }
            // console.log(performance.navigation.type);
            // console.log(location.pathname);
            // console.log(history);
            // console.log(window.performance);
            // console.log(performance.navigation.type);
            // console.log(performance.navigation.TYPE_RELOAD)
            //     //check for Navigation Timing API support
            // if (window.performance) {
            //     console.info("window.performance works fine on this browser");
            // }
            // console.info(performance.navigation.type);
            // if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
            //     console.info("This page is reloaded");
            // } else {
            //     console.info("This page is not reloaded");
            // }
            // } else {
            //     console.info("This page is not reloaded");
            // }
            // اینجا بارگیری کامل صفحه لود میشود
            let nameRoute = [];
            // اینجا همه تگ های آ
            // را گرفته وصفت اسم را گرفته و روی آنها حلقه میزنم
            let a = document.querySelectorAll("a");
            for (let i = 0; i < a.length; i++) {
                nameRoute[i] = a[i].getAttribute('name');
            };
            // console.log(nameRoute);
            nameRoute.map(name => {
                document.querySelector(`#${name}`).addEventListener("click", e => {
                    // console.log(window.performance);
                    // console.log(performance.navigation.type);
                    // console.log(performance.navigation.TYPE_RELOAD)
                    //     //check for Navigation Timing API support
                    // if (window.performance) {
                    //     console.info("window.performance works fine on this browser");
                    // }
                    // console.info(performance.navigation.type);
                    // if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
                    //     console.info("This page is reloaded");
                    // } else {
                    //     console.info("This page is not reloaded");
                    // }
                    // window.addEventListener("popstate", (event) => {
                    //     console.log(event.state);
                    // });
                    // window.addEventListener("hashchange", (e) => console.log(e));
                    // window.onpopstate = () => setTimeout(doSomeThing, 0);
                    // window.addEventListener('popstate', (event) => {
                    //     console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
                    // });
                    // window.addEventListener('hashchange', function() {
                    //     console.log('The hash has changed!')
                    // }, false);
                    // اینجا رویداد چک میشود
                    e.preventDefault();
                    console.log(location.href)
                        // console.log(history);
                        // console.log(location.pathname);
                        // window.addEventListener('locationchange', function() {
                        //         console.log('location changed!');
                        //     })
                        // const event = new PopStateEvent("popstate", {});
                        // console.log(event)
                        // console.log(history.getState);
                        // لینک جاری را گرفته
                    this.currentPage = e.target.href;
                    // console.log(this.currentPage);
                    // بوسیله این متد میتوان ناوبری کرد
                    history.pushState(name, null, this.currentPage);
                    // بوسیله روش زیر میتوان یک اسم به سند داد
                    // و زمانیکه شما دکمه عقب و جلو در مرورگر را بزنید
                    // میوتنید روی سند هایتان پیمایش کنید
                    // من به لینک هایم یک صفت دادم به عنوان نام که هر کدام مخصوصو
                    // یک صفحه است
                    // سپس روی نام ها میتوان پیمایش کرد
                    // بوسیله اینکار میتوان رویداد 
                    // OnPopState
                    // را صدا زد
                    document.title = name;
                    // console.log(history);
                    // console.log(location);
                    // اینجا چک میکنیم که آیا روت جاری با روتی
                    // که داریم یکی است که در این صورت
                    // کامپوننت لود میشود
                    routes.map(route => {
                        if ((this.baseUrl + route.path) === this.currentPage) {
                            document.querySelector("#app").innerHTML = route.component;
                        }
                    })
                })
            });

            // window.addEventListener("popstate", e => {
            //     // e.preventDefault();
            //     let url = (this.baseUrl + "/" + e.state);
            //     let name = e.state;
            //     console.log(url);
            //     // console.log(name);
            //     history.pushState(name, null, url);
            //     // history.replaceState({}, name, url)
            //     console.log(history);
            // });
            // window.addEventListener("popstate", e => console.log(e));
        });
        // وقتی روی دکمه عقب و جلوی مرورگر 
        // کلیک میکنید این رویداد فراخوانی میشود
        window.addEventListener("popstate", e => {
            e.preventDefault();
            let url = (this.baseUrl + "/" + e.state);
            let name = e.state;
            console.log(url);
            // console.log(name);
            history.pushState(name, null, url);
            // history.replaceState(name, name, url)
            location.replace(url)
            console.log(history);
        });
    }
}

export default Router;