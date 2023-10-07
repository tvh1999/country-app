import "core-js/stable";
import "regenerator-runtime/runtime.js";
import View from "./View";

class DisplayCountriesView extends View {
  _data;
  _curEl = document.querySelector(`.countries-display`);

  // addHandlerSearch(handler) {
  //   document
  //     .querySelector(`.region-list`)
  //     .addEventListener(`click`, function (e) {
  //       if (e.target.classList.contains(`region`)) {
  //         const regionLocator = e.target.dataset.region;
  //         console.log(regionLocator);
  //         handler(`region`, regionLocator);
  //       }
  //     });
  // }

  // render(data) {
  //   this.#data = data;
  //   this.#curEl.innerHTML = ``;
  //   this.#data.forEach((miniData) => {
  //     return this.#generateMarkup(miniData);
  //   });
  //   // this.#generateMarkup(this.#data);
  // }

  // #generateMarkup(data) {
  //   const markup = `
  //   <div class="country">
  //     <div class="country__flag">
  //       <img src="${data.flags.png}" alt="country-flag" />
  //     </div>
  //     <div class="country-detail">
  //       <h4 class="country-detail__name">${
  //         data.name.official || data.name.common
  //       }</h4>
  //       <p class="population-card">
  //         Population:<span class="population-info">${data.population}</span>
  //       </p>
  //       <p class="region-card">
  //         Region:<span class="region-info">${data.region}</span>
  //       </p>
  //       <p class="capital-card">
  //         Capital:<span class="capital-info">${data.capital}</span>
  //       </p>
  //     </div>
  //   </div>
  //   `;

  //   this.#curEl.insertAdjacentHTML(`beforeend`, markup);
  // }
}

export default new DisplayCountriesView();
