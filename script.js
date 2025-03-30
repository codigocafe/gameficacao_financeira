class ccNumber {
  _storage;
  _numbers = [];

  constructor(elements) {
    this._storage = window.localStorage;
    elements.map((element) => {
      this._numbers.push({
        day: element.dataset.value,
        paid: element.dataset.paid,
      });
    });
    this.save(JSON.stringify(this._numbers));
  }

  get numbers() {
    return JSON.parse(this._storage.getItem("ccNumbers"));
  }

  save(data) {
    this._storage.setItem("ccNumbers", data);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const TOTAL_DAYS = 365;
  const list_numbers = document.querySelector("div.table-numbers ul");

  for (let day = 1; day <= TOTAL_DAYS; day++) {
    const number_element = document.createElement("LI");
    number_element.innerHTML = `<button type="button" data-value="${day}" data-paid="false">${day}</button>`;
    list_numbers.appendChild(number_element);
  }

  const numbers_values = Array.from(list_numbers.querySelectorAll("li button"));
  const cc = new ccNumber(numbers_values);
  console.log(cc.numbers);
});
