export default function createFooter() {
  const footer = document.createElement("div");
  footer.classList.add("footer", "center");
  footer.innerHTML = `Created by&nbsp`;

  const gitLink = document.createElement("a");
  gitLink.classList.add("git-link");
  gitLink.setAttribute("href", "https://github.com/IuriiLepesevich");
  gitLink.textContent = "Iurii Lepesevich";

  footer.appendChild(gitLink);

  return footer;
}
