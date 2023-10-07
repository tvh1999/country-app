import "core-js/stable";
import "regenerator-runtime/runtime.js";
import View from "./View";

class RegionView extends View {
  _data;
  _curEl = document.querySelector(`.region-list`);
  addHandlerRegion(handler) {
    this._curEl.addEventListener(`click`, function (e) {
      if (e.target.classList.contains(`region`)) {
        const regionLocator = e.target.dataset.region;

        handler(`region`, regionLocator);
      }
    });
  }
}

export default new RegionView();
