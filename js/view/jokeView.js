import cardFactory from "/js/factory/card.js";

const img = "/resources/pikachu.png";

function render(jokes) {
  const cards = jokes.map(({ type, setup, punchline }) => {
    return cardFactory.createCard(type, setup, punchline, img);
  });

  const container = document.querySelector("#container");
  container.innerHTML = "";

  cards.forEach((card) => container.appendChild(card));
}

export default { render };
