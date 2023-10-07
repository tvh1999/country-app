import "core-js/stable";

import View from "./View";

class ThemeToggle extends View {
  _data;
  _curEl = document.querySelector(`.mode-btn`);

  addHandlerReload(handler) {
    window.addEventListener(`load`, handler);
  }

  addHandlerTheme(handler) {
    this._curEl.addEventListener(`click`, handler);
  }

  changeThemeFunctional(theme) {
    const countriesDisplay = document.querySelector(`.countries-display`);
    const optionsL = document.querySelector(`.options`);
    const header = document.querySelector(`.header`);
    const optionsSearch = document.querySelector(`.options-search`);
    const optionsSort = document.querySelector(`.options-sort`);
    const regionList = document.querySelector(`.region-list`);

    const neighborsWrapper = Array.from(
      document.getElementsByClassName(`neighbor`)
    );
    const countryDetail = Array.from(
      document.getElementsByClassName(`country-detail`)
    );

    const closeFormBtn = Array.from(
      document.getElementsByClassName(`close-window-btn`)
    );

    const countryDetailInfo = Array.from(
      document.getElementsByClassName(`country-detailed-info`)
    );

    if (theme) {
      this._curEl.classList.remove(`dark-theme`);
      countriesDisplay.classList.remove(`dark-theme`);

      optionsL.classList.remove(`dark-theme`);
      header.classList.remove(`dark-theme`);
      header.style.borderBottom = `3px solid var(--very-light-gray)`;
      optionsSearch.classList.remove(`dark-theme`);
      optionsSort.classList.remove(`dark-theme`);
      regionList.classList.remove(`dark-theme`);

      closeFormBtn.forEach((value) => value.classList.remove(`dark-theme`));
      neighborsWrapper.forEach((value) => value.classList.remove(`dark-theme`));
      countryDetail.forEach((value) => value.classList.remove(`dark-theme`));
      countryDetailInfo.forEach((value) =>
        value.classList.remove(`dark-theme`)
      );
    } else {
      this._curEl.classList.add(`dark-theme`);
      countriesDisplay.classList.add(`dark-theme`);

      optionsL.classList.add(`dark-theme`);
      header.classList.add(`dark-theme`);
      optionsSearch.classList.add(`dark-theme`);
      optionsSort.classList.add(`dark-theme`);
      regionList.classList.add(`dark-theme`);
      header.style.borderBottom = `3px solid var(--dark-blue)`;

      closeFormBtn.forEach((value) => value.classList.add(`dark-theme`));
      neighborsWrapper.forEach((value) => value.classList.add(`dark-theme`));
      countryDetail.forEach((value) => value.classList.add(`dark-theme`));
      countryDetailInfo.forEach((value) => value.classList.add(`dark-theme`));
    }
  }
}

export default new ThemeToggle();
