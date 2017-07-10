class Types {
  static HOUR = 'h';
  static MINUTE = 'm';
  static SECOND = 's';
  static MILLISECOND = 'ms';

  static aliases = {
    'h': ['h', 'ho', 'hour', 'hours'],
    'm': ['m', 'mi', 'min', 'minute', 'minutes'],
    's': ['s', 'se', 'sec', 'second', 'seconds'],
    'ms': ['ms', 'mil', 'milli', 'millisecond', 'milliseconds']
  };

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
