"use strict";

const btnNgEl = document.getElementById(`btn--ng`);
const btnResEl = document.getElementById(`btn--res`);
const btnHigherEl = document.querySelector(`.btn--higher`);
const btnLowerEl = document.querySelector(`.btn--lower`);
const btnNewPairEl = document.getElementById(`btn--new-pair`);

const arr = [
  [`Sebastian Vettel`, 53],
  [`Max Verstappen`, 37],
  [`Ayrton Senna`, 41],
  [`Alain Prost`, 51],
  [`Nigel Mansell`, 31],
  [`Juan Fangio`, 24],
  [`James Hunt`, 10],
  [`Niki Lauda`, 25],
  [`Fernando Alonso`, 32],
  [`Charles Leclerc`, 5],
  [`Sergio Perez`, 6],
  [`Valtteri Bottas`, 10],
  [`Lewis Hamilton`, 103],
  [`Kimi Raikkonen`, 21],
  [`Mika Hakkinen`, 20],
  [`Michael Schumacher`, 91],
  [`Pierre Gasly`, 1],
  [`Jim Clark`, 25],
  [`Jackie Stewart`, 27],
  [`Felipe Massa`, 11],
  [`Jenson Button`, 15],
  [`Nico Rosberg`, 23],
  [`Daniel Riccardo`, 8],
  [`Jacques Villneuve`, 11],
  [`Nelson Piquet`, 23],
  [`Emerson Fittipaldi`, 14],
  [`Damon Hill`, 22],
  [`Mario Andretti`, 12],
  [`Rubens Barichello`, 11],
  [`Mark Webber`, 9],
];

let driver1 = Math.trunc(Math.random() * 30 + 1);
let driver2 = Math.trunc(Math.random() * 30 + 1);

btnNgEl.addEventListener(`click`, function () {});

driver1 = Math.trunc(Math.random() * 30 + 1);
driver2 = Math.trunc(Math.random() * 30 + 1);
document.getElementById(`driver1-img`).src = `img/driver-${driver1}.jpg`;
document.getElementById(`driver2-img`).src = `img/driver-${driver2}.jpg`;
document.getElementById(`driver1-name`).textContent = `${arr[driver1 - 1][0]}`;
document.querySelector(`.driver-1--name`).textContent = `${
  arr[driver1 - 1][0]
}`;
document.getElementById(`driver2-name`).textContent = `${arr[driver2 - 1][0]}`;
document.querySelector(`.driver-2--name`).textContent = `${
  arr[driver2 - 1][0]
}`;
