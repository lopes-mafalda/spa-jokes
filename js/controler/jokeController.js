import jokeService from "/js/service/jokeService.js";
import jokeView from "/js/view/jokeView.js";

export async function init() {
  const jokes = await jokeService.getJokes(10);
  jokeView.render(jokes);
}
