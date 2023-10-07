import "core-js/stable";
import "regenerator-runtime/runtime.js";

const state = {
  countries: [],
  chosen: [],
  neighbors: [],
  themeState: true,
};

const obtainCountriesData = async function (purpose, target) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/${purpose}/${target}
    `);

    if (!res.ok)
      throw new Error(`There is something wrong with the Data! ❌❌❌`);

    const data = await res.json();
    return data;
    // state.countries = data;
  } catch (err) {
    throw err;
  }
};

const neighborCountriesNameRedux = async function (neighbors) {
  try {
    const listOfNeighbors = neighbors
      .reduce((acc, value) => acc + `,` + value, ``)
      .slice(1);

    const res = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${listOfNeighbors}`
    );

    if (!res.ok) return;

    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};

const resetData = function () {
  state.chosen = [];
};

const themeStatus = function () {
  state.themeState = !state.themeState;
};

const savingStatus = function () {
  localStorage.setItem(`theme`, JSON.stringify(state.themeState));
};

const rememberStatus = function () {
  state.themeState = JSON.parse(localStorage.getItem(`theme`));
};

export {
  obtainCountriesData,
  state,
  resetData,
  neighborCountriesNameRedux,
  themeStatus,
  savingStatus,
  rememberStatus,
};
