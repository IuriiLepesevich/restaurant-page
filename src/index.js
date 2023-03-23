import "./style/style.css";
import createNav from "./modules/nav";

import createHome from "./modules/home";

import createFooter from "./modules/footer";

const body = document.querySelector("body");

body.firstChild.before(createNav("Home", "Menu", "Contact Us"));

body.appendChild(createHome());

body.lastChild.after(createFooter());
