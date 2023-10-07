import "core-js/stable";

import View from "./View";

class SearchView extends View {
  _data;
  _curEl = document.querySelector(`.submit-btn`);
  // document.querySelector(`.options-sort`)
  addHandlerSearch(handler) {
    this._curEl.addEventListener(`click`, function (e) {
      e.preventDefault();
      const inputData = document.querySelector(`.input-field`).value;

      handler(`name`, inputData);
    });
  }
}

export default new SearchView();
