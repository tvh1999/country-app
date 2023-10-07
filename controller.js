import "core-js/stable";
import "regenerator-runtime/runtime.js";

import * as model from "./model";
import mainView from "./views/mainView";
import regionView from "./views/regionView";
import searchView from "./views/searchView";
import detailedView from "./views/detailedView";
import toggleTheme from "./views/toggleTheme";

const searchCountryController = async function (purpose = `name`, target) {
  try {
    const dataToProcess = await model.obtainCountriesData(
      purpose,
      `${target}?fullText=true`
    );
    model.state.countries = dataToProcess;

    mainView.render(model.state.countries, model.state.themeState);
  } catch (err) {
    console.error(err);
  }
};

const detailedCountryController = async function (purpose = `name`, target) {
  try {
    const dataToProcess = await model.obtainCountriesData(
      purpose,
      `${target}?fullText=true`
    );

    model.state.chosen = dataToProcess;
    const [details] = model.state.chosen;
    console.log(details);
    if (details.borders) {
      // console.log(details.borders);
      const neighborsData = await model.neighborCountriesNameRedux(
        details.borders
      );

      model.state.neighbors = neighborsData;
      const neighborNamesArr = model.state.neighbors.map(
        (value) => value.name.common
      );
      detailedView.displayInfoForm(
        details,
        neighborNamesArr,
        model.state.themeState
      );
    } else {
      detailedView.displayInfoForm(details, undefined, model.state.themeState);
    }
  } catch (err) {
    console.error(err);
  }
};

const eraseAndCloseForm = function () {
  model.resetData();
};

const regionCountriesController = async function (
  purpose = `region`,
  target = ``
) {
  try {
    const dataToProcess = await model.obtainCountriesData(purpose, target);
    model.state.countries = dataToProcess;
    mainView.render(model.state.countries, model.state.themeState);
  } catch (err) {
    console.error(err);
  }
};

const displayCountriesController = async function (
  purpose = `all`,
  target = ``
) {
  try {
    const dataToProcess = await model.obtainCountriesData(purpose, target);
    model.state.countries = dataToProcess;
    mainView.render(model.state.countries, model.state.themeState);
  } catch (err) {
    console.error(err);
  }
};

const displayNeighborsController = async function (purpose, target) {
  try {
    const dataToProcess = await model.obtainCountriesData(purpose, target);
    model.state.chosen = dataToProcess;
    const [details] = model.state.chosen;

    console.log(details.borders);
    const neighborsData = await model.neighborCountriesNameRedux(
      details.borders
    );

    model.state.neighbors = neighborsData;
    const neighborNamesArr = model.state.neighbors.map(
      (value) => value.name.common
    );

    detailedView.displayInfoForm(
      details,
      neighborNamesArr,
      model.state.themeState
    );
  } catch (err) {
    console.error(err);
  }
};

const toggleThemeController = function () {
  model.themeStatus();

  model.savingStatus();
  toggleTheme.changeThemeFunctional(model.state.themeState);
};

const reloadAppController = function () {
  model.rememberStatus();
  // console.log(model.state.themeState);
  toggleTheme.changeThemeFunctional(model.state.themeState);
};

(function () {
  displayCountriesController();
  // Bug
  toggleTheme.addHandlerReload(reloadAppController);
  // console.log(model.state.themeState);
  regionView.addHandlerRegion(regionCountriesController);
  searchView.addHandlerSearch(searchCountryController);
  detailedView.addHandlerDetailed(detailedCountryController);
  detailedView.addHandlerClose(eraseAndCloseForm);
  detailedView.addHandlerNeighbors(displayNeighborsController);
  toggleTheme.addHandlerTheme(toggleThemeController);
})();
