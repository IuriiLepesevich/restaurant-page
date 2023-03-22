import createHome from "./home.js";

export default function createNav(...args) {
  const body = document.querySelector("body");
  body.appendChild(createHome());
  const nav = document.createElement("nav");

  const navList = document.createElement("ul");
  navList.classList.add("nav-list", "center");

  function renderContent() {
    const arr = Array.from(navList.childNodes);
    arr.forEach((elem) => {
      if (elem === this) {
        elem.classList.add("selected");
      } else {
        elem.classList.remove("selected");
      }
    });
    if (this.id === "home") body.appendChild(createHome());
  }

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
