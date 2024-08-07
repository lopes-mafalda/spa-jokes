const URL_BASE = "https://official-joke-api.appspot.com";
const END_JOKES = "/jokes/random";

const MOCK_URL = "";

async function getJokes(num) {
  const response = await fetch(
    "https://official-joke-api.appspot.com/jokes/random/" + num,
  );
  return response.json();
}

export default { getJokes };
