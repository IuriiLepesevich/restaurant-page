export default function createHome() {
  if (document.querySelector("#content")) {
    document.querySelector("#content").remove();
  }
  const content = document.createElement("div");
  content.setAttribute("id", "content");

  const hero = document.createElement("div");
  hero.setAttribute("id", "hero");
  content.appendChild(hero);

  const storyGrid = document.createElement("div");
  storyGrid.classList.add("story-grid");

  const text1 =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur odit commodi facere quaerat, temporibus error magni tempora ut consequuntur autem praesentium atque corporis quo, illum labore in quis incidunt? Obcaecati.";

  const text2 =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur odit commodi facere quaerat, temporibus error magni";

  for (let i = 1; i <= 3; i += 1) {
    const storyImage = document.createElement("div");
    storyImage.classList.add("story-image", "center");

    const imageHolder = document.createElement("div");
    imageHolder.classList.add("image-holder");
    imageHolder.setAttribute("id", `image-${i}`);
    storyImage.appendChild(imageHolder);
    storyGrid.appendChild(storyImage);

    const storyText = document.createElement("div");
    storyText.classList.add("story-text", "center");

    const textHolder = document.createElement("div");
    textHolder.classList.add("text-holder", "center");

    const para1 = document.createElement("p");
    para1.textContent = text1;
    textHolder.appendChild(para1);
    const para2 = document.createElement("p");
    para2.textContent = text2;
    textHolder.appendChild(para2);

    storyText.appendChild(textHolder);
    storyGrid.appendChild(storyText);
  }

  content.appendChild(storyGrid);

  return content;
}
