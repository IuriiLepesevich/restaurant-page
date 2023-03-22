import "./style.css";
import createNav from "./nav";

const body = document.querySelector("body");

body.firstChild.before(createNav("Home", "Menu", "Contact Us"));
