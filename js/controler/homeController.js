import homeView from "/js/view/homeView.js";
import filmService from "/js/service/filmService.js";

export function init() {
  homeView.render(filmService.getFilm);
}
