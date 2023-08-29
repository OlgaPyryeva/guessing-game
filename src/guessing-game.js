class GuessingGame {
  constructor(number) {
    this.number = number;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
    let middle = this.min + Math.round((this.max - this.min) / 2);
    this.middle = middle;
    return this.middle;
  }

  guess() {
    console.log(this.middle);
    return this.middle;
  }

  lower() {
    this.max = this.middle;
    console.log(this.min, this.max, "lower");
    return this.setRange(this.min, this.max);
  }

  greater() {
    this.min = this.middle;
    console.log(this.min, this.max, "greater");
    return this.setRange(this.min, this.max);
  }
}

module.exports = GuessingGame;
