import "./style/style.css";
import createNav from "./modules/nav";
// import createHome from "./modules/home";
// import createMenu from "./modules/menu";
import createContact from "./modules/contact";

const body = document.querySelector("body");

body.firstChild.before(createNav("Home", "Menu", "Contact Us"));

body.appendChild(createContact());
