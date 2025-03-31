class ccNumber {
  _storage;
  _numbers = [];
  constructor(elements) {
    this._storage = window.localStorage;
    if (this.numbers !== null && this.numbers.length > 0) return true;
    elements.map((element) => {
      this._numbers.push({
        day: element.dataset.value,
        paid: element.dataset.paid,
      });
    });
    this.save(this._numbers);
  }
  get numbers() {
    return JSON.parse(this._storage.getItem("ccNumbers"));
  }
  save(data) {
    this._storage.setItem("ccNumbers", JSON.stringify(data));
  }
  update(day, payment) {
    const list_numbers = this.numbers;
    const index_number = list_numbers.findIndex((number) => number.day == day);
    list_numbers[index_number].paid = payment;
    this.save(list_numbers);
    console.log(list_numbers);
  }
  load(elements) {
    const list_numbers = this.numbers;
    elements.map((element, index) => {
      element.dataset.paid = list_numbers[index].paid;
    });
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

  list_numbers.addEventListener("click", (ev) => {
    const current = ev.target;
    if (current.tagName !== "BUTTON") return false;
    current.dataset.paid = current.dataset.paid == "false" ? "true" : "false";
    cc.update(current.dataset.value, current.dataset.paid);
  });

  cc.load(numbers_values);
});
