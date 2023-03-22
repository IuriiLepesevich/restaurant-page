import createHome from "./home";
import createMenu from "./menu";

function renderContent() {
  const body = document.querySelector("body");
  const arr = Array.from(document.querySelector(".nav-list").childNodes);
  arr.forEach((elem) => {
    if (elem === this) {
      elem.classList.add("selected");
    } else {
      elem.classList.remove("selected");
    }
  });
  const { id } = this;
  if (id === "home") body.firstChild.after(createHome());
  else if (id === "menu") body.firstChild.after(createMenu(15));
}

export default function createNav(...args) {
  document.querySelector("body").appendChild(createHome());
  const nav = document.createElement("nav");

  const navList = document.createElement("ul");
  navList.classList.add("nav-list", "center");

  args.forEach((section) => {
    const li = document.createElement("li");
    li.setAttribute("id", `${section.toLowerCase().split(" ")[0]}`);
    li.textContent = `${section}`;
    li.addEventListener("click", renderContent.bind(li));
    navList.appendChild(li);
  });

  nav.appendChild(navList);

  return nav;
}
