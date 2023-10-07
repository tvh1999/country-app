import "core-js/stable";
import "regenerator-runtime/runtime.js";
import View from "./View";

class DetailedView extends View {
  _data;
  _curEl = document.querySelector(`.countries-display`);

  addHandlerDetailed(handler) {
    this._curEl.addEventListener(`click`, function (e) {
      const eventCreator = e.target.closest(`.country`);
      if (!eventCreator) return;
      const countryLocator = eventCreator.dataset.country;
      handler(`name`, countryLocator);
    });
  }

  addHandlerNeighbors(handler) {
    this._curEl.addEventListener(`click`, function (e) {
      const eventCreator = e.target.closest(`.neighbor`);
      if (!eventCreator) return;
      const countryLocator = eventCreator.dataset.neighbor;

      handler(`alpha`, countryLocator);
    });
  }

  addHandlerClose(handler) {
    this._curEl.closest(`.main`).addEventListener(`click`, function (e) {
      if (e.target.classList.contains(`close-window-btn`)) {
        const daddyEl = document.querySelector(`.countries-display`);
        if (!daddyEl.lastElementChild) return;
        daddyEl.removeChild(daddyEl.lastElementChild);
        handler();
      }
    });
  }

  displayInfoForm(data, neighborsListNames = ``, themeStatus = true) {
    this._data = data;
    this._data.neighborsNames = neighborsListNames;

    // console.log(this._data);
    const currenciesConfig = Object.values(this._data.currencies)
      .map((value) => value.name)
      .reduce((acc, value) => acc + `, ` + value, ``)
      .slice(1);

    const languagesConfig = Object.values(this._data.languages)
      .map((value) => value)
      .reduce((acc, value) => acc + `, ` + value, ``)
      .slice(1);

    const neighborsConfig =
      this._data.neighborsNames.length > 0
        ? this._data.borders
            .sort((a, b) => a - b)
            .reduce(
              (acc, value, index) =>
                acc +
                `<li class="neighbor ${
                  themeStatus ? `` : `dark-theme`
                }" data-neighbor="${value}" ">${
                  neighborsListNames.sort()[index]
                }</li>`,
              ``
            )
        : `<li class="neighbor" data-neighbor="none">None</li>`;

    const htmlForm = `
    <div class="country-detailed-info ${themeStatus ? `` : `dark-theme`}">
    <button class="close-window-btn ${themeStatus ? `` : `dark-theme`}">
      <i class="fa-solid fa-arrow-left"></i>
      Back
    </button>
    <div class="detailed-container">
      <div class="img">
        <img src="${this._data.flags.svg}" alt="${this._data.flags.alt}" />
      </div>
      <div class="detailed-info">
        <h5 class="country-name">${
          this._data.name.common || this._data.name.official
        }</h5>
        <ul class="country-info-1">
          <li>
            Native name:
            <span class="country-info__native-name">${
              this._data.demonyms.eng.f || this._data.demonyms.eng.m
            }</span>
          </li>
          <li>
            Population:
            <span class="country-info__population">${
              this._data.population
            }</span>
          </li>
          <li>
            Region:
            <span class="country-info__region">${this._data.region}</span>
          </p>
          <li>
            Sub region:
            <span class="country-info__sub-region">${
              this._data.subregion
            }</span>
          </li>
          <li>
            Capital:
            <span class="country-info__capital">${this._data.capital}</span>
          </li>
        </ul>
        <ul class="country-info-2">
          <li>
            Top Level Domain:
            <span class="country-info__web-domain">${this._data.tld[0]}</span>
          </li>
          <li>
            Currencies:
            <span class="country-info__currencies">
              ${currenciesConfig}
            </span>
          </li>
          <li>
            Languages:
            <span class="country-info__languages"
              >${languagesConfig}</span
            >
          </li>
        </ul>
        <ul class="neighbor-countries">
          <span>Border countries:</span>
          ${neighborsConfig}
        </ul>
      </div>
      </div>
    </div>
    `;
    this._curEl.insertAdjacentHTML(`beforeend`, htmlForm);
  }
}

export default new DetailedView();
