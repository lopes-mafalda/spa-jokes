function createCard(jokeType, jokeSetup, jokePunchline, imgSrc) {
  const card = document.createElement("div");
  card.setAttribute("class", "flip-card");

  const innerCard = document.createElement("div");
  innerCard.setAttribute("class", "flip-card-inner");

  innerCard.addEventListener("click", () => {
    innerCard.parentNode.classList.toggle("flipped");
  });

  const frontCard = document.createElement("div");
  frontCard.setAttribute("class", "flip-card-front");
  frontCard.style.display = "flex";
  frontCard.style.alignItems = "center";
  frontCard.style.justifyContent = "center";
  frontCard.innerText = "JoKeR";

  const flipedBack = document.createElement("div");
  flipedBack.setAttribute("class", "flip-card-back");

  const type = document.createElement("h1");
  type.innerText = jokeType;

  const setup = document.createElement("p");
  setup.innerText = jokeSetup;

  const punchline = document.createElement("p");
  punchline.innerText = jokePunchline;

  card.appendChild(innerCard);
  innerCard.appendChild(frontCard);
  innerCard.appendChild(flipedBack);
  flipedBack.appendChild(type);
  flipedBack.appendChild(setup);
  flipedBack.appendChild(punchline);

  return card;
}

export default { createCard };
