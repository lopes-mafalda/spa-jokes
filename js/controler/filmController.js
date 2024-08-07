import filmService from "/js/service/filmService.js";
import filmView from "/js/view/filmView.js";

export async function init() {
  const films = await filmService.getFilms();
  filmView.render(films);
}
