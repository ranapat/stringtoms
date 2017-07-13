/**
 * Pair
 *
 * Collection of value and unit
 *
 * @param {int} value value of the pair
 * @param {string} unit unit of the pair
 *
 * @internal
 */
class Pair {
  /**
   * Pair constructor
   *
   * @param {int} value value of the pair
   * @param {string} unit unit of the pair
   */
  constructor(value, unit) {
    this.value = value;
    this.unit = unit;
  }
}

export default Pair;
