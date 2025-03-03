document.addEventListener("DOMContentLoaded", () => {
  const TOTAL_DAYS = 365;
  const list_numbers = document.querySelector("div.table-numbers ul");
  for (let day = 1; day <= TOTAL_DAYS; day++) {
    const number_element = document.createElement("LI");
    number_element.innerHTML = `<button type="button">${day}</button>`;
    list_numbers.appendChild(number_element);
  }
});
