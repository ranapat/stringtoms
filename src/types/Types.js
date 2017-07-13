/**
 * Types
 *
 * Supported units.
 *
 * @static
 * @internal
 */
class Types {
  /**
   * Hour
   *
   * @param {string} HOUR predefined hour
   * @static
   */
  static HOUR = 'h';

  /**
   * Minute
   *
   * @param {string} MINUTE predefined minute
   * @static
   */
  static MINUTE = 'm';

  /**
   * SECOND
   *
   * @param {string} SECOND predefined second
   * @static
   */
  static SECOND = 's';

  /**
   * MILLISECOND
   *
   * @param {string} MILLISECOND predefined millisecond
   * @static
   */
  static MILLISECOND = 'ms';

  /**
   * Aliases
   *
   * @param {Object<Array<string>>} aliases unit aliases
   * @static
   */
  static aliases = {
    'h': ['h', 'ho', 'hour', 'hours'],
    'm': ['m', 'mi', 'min', 'minute', 'minutes'],
    's': ['s', 'se', 'sec', 'second', 'seconds'],
    'ms': ['ms', 'mil', 'milli', 'millisecond', 'milliseconds']
  };

  /**
   * Validate unit
   *
   * @param {string} symbol symbol to validate
   * @return {string} symbol validated symbol
   * @static
   */
  static validate(symbol) {
    for (let key of Object.keys(Types.aliases)) {
      const array = Types.aliases[key];
      const length = array.length;

      for (let i = 0; i < length; ++i) {
        if (array[i] === symbol) {
          return key;
        }
      }
    }

    return undefined;
  }

  /**
   * Gets greater unit
   *
   * @param {string} symbol symbol to use as a base
   * @return {string} symbol greater unit
   * @static
   */
  static greater(symbol) {
    if (symbol === Types.MINUTE) {
      return Types.HOUR;
    } else if (symbol === Types.SECOND) {
      return Types.MINUTE;
    } else if (symbol === Types.MILLISECOND) {
      return Types.SECOND;
    } else {
      return undefined;
    }
  }

  /**
   * Gets lesser unit
   *
   * @param {string} symbol symbol to use as a base
   * @return {string} symbol lesser unit
   * @static
   */
  static lesser(symbol) {
    if (symbol === Types.HOUR) {
      return Types.MINUTE;
    } else if (symbol === Types.MINUTE) {
      return Types.SECOND;
    } else if (symbol === Types.SECOND) {
      return Types.MILLISECOND;
    } else {
      return undefined;
    }
  }
}

export default Types;
