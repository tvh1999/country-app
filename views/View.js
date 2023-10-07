import "core-js/stable";
import "regenerator-runtime/runtime.js";

export default class View {
  _data;

  render(data, theme) {
    console.log(theme);
    this._data = data;
    this._curEl.innerHTML = ``;
    this._data.forEach((miniData) => {
      return this._generateMarkup(miniData, theme);
    });
    // this.#generateMarkup(this.#data);
  }

  _generateMarkup(data, themeStatus) {
    const markup = `
    <div class="country" data-country="${
      data.name.official || data.name.common
    }">
      <div class="country__flag">
        <img src="${data.flags.svg}" alt="${data.flags.alt}" />
      </div>
      <div class="country-detail ${themeStatus ? `` : `dark-theme`}">
        <h4 class="country-detail__name">${
          data.name.official || data.name.common
        }</h4>
        <p class="population-card">
          Population:<span class="population-info">${data.population}</span>
        </p>
        <p class="region-card">
          Region:<span class="region-info">${data.region}</span>
        </p>
        <p class="capital-card">
          Capital:<span class="capital-info">${data.capital}</span>
        </p>
      </div>
    </div>
    `;

    this._curEl.insertAdjacentHTML(`beforeend`, markup);
  }
}
