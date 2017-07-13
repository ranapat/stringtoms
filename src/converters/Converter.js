import Types from '../types/Types';
import Pair from '../analyzer/Pair';

/**
 * Converter
 *
 * Converts analyzed array to int
 *
 * @static
 * @internal
 */
class Converter {
  /**
   * Converts analyzed array to milliseconds
   *
   * @param {Array<Pair>} array analyzed array
   * @return {int} millisedonds milliseconds
   * @static
   */
  static toMilliseconds(array) {
    let sum = 0;
    let pair;
    let i;
    const length = array.length;

    for (i = 0; i < length; ++i) {
      pair = array[i];
      if (pair.unit === Types.MILLISECOND) {
        sum += pair.value;
      } else if (pair.unit === Types.SECOND) {
        sum += pair.value * 1000;
      } else if (pair.unit === Types.MINUTE) {
        sum += pair.value * 1000 * 60;
      } else if (pair.unit === Types.HOUR) {
        sum += pair.value * 1000 * 60 * 60;
      }
    }

    return sum;
  }
}

export default Converter;
