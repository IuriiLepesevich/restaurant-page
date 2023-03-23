const dishArray = [];

function DishCard(title, ingredients, price) {
  const cardTitle = title;
  const cardIngredients = ingredients.join(" / ");
  const cardPrice = `$${price}`;

  const getTitle = () => cardTitle;

  const getIngredients = () => cardIngredients;

  const getPrice = () => cardPrice;

  return {
    getTitle,
    getIngredients,
    getPrice,
  };
}

function fillMenu(numberOfCards) {
  dishArray.splice(0, dishArray.length);
  for (let i = 0; i < numberOfCards; i += 1) {
    dishArray.push(
      DishCard(
        "Fancy Sushi",
        ["salmon", "nori", "rice", "avocado", "cheese"],
        "24.00"
      )
    );
  }
}

function createCard(dish, container) {
  const dishCard = document.createElement("div");
  dishCard.classList.add("dish-card");

  const dishImage = document.createElement("div");
  dishImage.classList.add("dish-image");
  dishCard.appendChild(dishImage);

  const dishInfo = document.createElement("div");
  dishInfo.classList.add("dish-info");

  const dishTitle = document.createElement("div");
  dishTitle.classList.add("dish-title");
  dishTitle.textContent = dish.getTitle();
  dishInfo.appendChild(dishTitle);

  const dishIngredients = document.createElement("div");
  dishIngredients.classList.add("dish-ingredients");
  dishIngredients.textContent = dish.getIngredients();
  dishInfo.appendChild(dishIngredients);

  const dishPrice = document.createElement("div");
  dishPrice.classList.add("dish-price");
  dishPrice.textContent = dish.getPrice();
  dishInfo.appendChild(dishPrice);

  dishCard.appendChild(dishInfo);

  const buttonAdd = document.createElement("button");
  buttonAdd.classList.add("add");
  buttonAdd.textContent = "Add to Cart";
  dishCard.appendChild(buttonAdd);

  container.appendChild(dishCard);
}

export default function createMenu(numberOfDishes) {
  if (document.querySelector("#content")) {
    document.querySelector("#content").remove();
  }
  const content = document.createElement("div");
  content.setAttribute("id", "content");

  const menuGrid = document.createElement("div");
  menuGrid.classList.add("menu-grid");

  fillMenu(numberOfDishes || 15);

  dishArray.forEach((dish) => createCard(dish, menuGrid));

  content.appendChild(menuGrid);

  return content;
}
