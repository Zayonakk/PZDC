let selected = document.querySelector(".container-block-selected");
let optionsContainer = document.querySelector(".container-block-optionslist");
let optionsList = document.querySelectorAll(".block-optionslist-option");
let arrow = document.querySelector(".block-selected-arrow")
let inselected = document.querySelector(".custom-select-selected");
let inoptionsContainer = document.querySelector(".custom-select-optionlist");
let inoptionsList = document.querySelectorAll(".custom-option");
let inarrow = document.querySelector(".arrow")

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
  });

  selected.addEventListener("click", () => {
    arrow.classList.toggle("active");
  });

  arrow.addEventListener("click", () => {
    arrow.classList.toggle("active");
  });

  arrow.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
  });

optionsList.forEach(o => {
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
      arrow.classList.remove("active");
  });
});
;

inselected.addEventListener("click", () => {
    inoptionsContainer.classList.toggle("active");
  });

  inselected.addEventListener("click", () => {
    inarrow.classList.toggle("active");
  });

  inarrow.addEventListener("click", () => {
    inarrow.classList.toggle("active");
  });

  inarrow.addEventListener("click", () => {
    inoptionsContainer.classList.toggle("active");
  });

inoptionsList.forEach(o => {
    o.addEventListener("click", () => {
      inselected.innerHTML = o.querySelector("label").innerHTML;
      inoptionsContainer.classList.remove("active");
      inarrow.classList.remove("active");
  });
});
;