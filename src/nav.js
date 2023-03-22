export default function createNav(...args) {
  const nav = document.createElement("nav");

  const navList = document.createElement("ul");
  navList.classList.add("nav-list");

  function addSelected() {
    const arr = Array.from(navList.childNodes);
    arr.forEach((elem) => {
      if (elem === this) {
        elem.classList.add("selected");
      } else {
        elem.classList.remove("selected");
      }
    });
  }

  args.forEach((section) => {
    const li = document.createElement("li");
    li.setAttribute("id", `${section.toLowerCase().split(" ")[0]}`);
    li.textContent = `${section}`;
    li.addEventListener("click", addSelected.bind(li));
    navList.appendChild(li);
  });

  nav.appendChild(navList);

  return nav;
}
