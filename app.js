const submitBtn = document.getElementById("submit-btn");
const planetText = document.querySelectorAll("h4");

const earthWeight = document.getElementById("w-earth");
const moonWeight = document.getElementById("w-moon");
const sunWeight = document.getElementById("w-sun");
const marsWeight = document.getElementById("w-mars");
const venusWeight = document.getElementById("w-venus");
const mercuryWeight = document.getElementById("w-mercury");
const jupiterWeight = document.getElementById("w-jupiter");
const neptuneWeight = document.getElementById("w-neptune");
const saturnWeight = document.getElementById("w-saturn");
const uranusWeight = document.getElementById("w-uranus");
const plutoWeight = document.getElementById("w-pluto");

const initialWeight = document.getElementById("input-field");

function weightConvert() {
  const weight = Number(initialWeight.value);

  const earth = Number((weight * 1).toFixed(2));
  const moon = Number((weight * 0.166).toFixed(2));
  const sun = Number((weight * 27.01).toFixed(2));
  const venus = Number((weight * 0.91).toFixed(2));
  const jupiter = Number((weight * 2.34).toFixed(2));
  const saturn = Number((weight * 1.06).toFixed(2));
  const mars = Number((weight * 0.38).toFixed(2));
  const mercury = Number((weight * 0.38).toFixed(2));
  const neptune = Number((weight * 1.19).toFixed(2));
  const pluto = Number((weight * 0.06).toFixed(2));
  const uranus = Number((weight * 0.92).toFixed(2));

  console.log(earth);

  moonWeight.textContent = `${moon}`;
  earthWeight.textContent = `${earth}`;
  sunWeight.textContent = `${sun}`;
  venusWeight.textContent = `${venus}`;
  jupiterWeight.textContent = `${jupiter}`;
  saturnWeight.textContent = `${saturn}`;
  marsWeight.textContent = `${mars}`;
  mercuryWeight.textContent = `${mercury}`;
  neptuneWeight.textContent = `${neptune}`;
  plutoWeight.textContent = `${pluto}`;
  uranusWeight.textContent = `${uranus}`;
}

submitBtn.addEventListener("click", weightConvert, keyfunction);

initialWeight.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    keyfunction();
    weightConvert();
    blink();
  }
});

function keyfunction() {
  document.querySelectorAll("h4").forEach((h4) => {
    h4.style.visibility = "visible";
  });
  document.querySelectorAll("img").forEach((img) => {
    img.style.filter = "none";
  });
  document.querySelector(".item-rocket").style.animation =
    "rocket-animation 3s infinite";
  document.querySelector(".sun-img").style.animation =
    "sun-animation 5s infinite";
}

document.addEventListener("keypress", keyfunction, false);

function blink() {
  initialWeight.classList.remove("blink");
}
