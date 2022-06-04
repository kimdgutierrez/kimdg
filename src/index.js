module.exports = {
  tiny: function (string) {
    if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
    return string.replace(/\s/g, "");
  },
  biggie: function (string) {
    if (typeof string !== "string") throw new TypeError("Biggie wants a string!");
    return string.replace(/\s/g, "");
  }
}