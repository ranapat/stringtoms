/**
 * Parser
 *
 * Parses string into array of meaningful values.
 * Usually it's value, unit, value, unit, but might be
 * only value, value or unit, unit or completely mixed
 *
 * @static
 * @internal
 */
class Parser {
  /**
   * digit
   *
   * @param {RegExp} digit regular expression for digit
   * @static
   */
  static digit = /[0-9]/;

  /**
   * letter
   *
   * @param {RegExp} leter regular expression for leter
   * @static
   */
  static letter = /[a-zA-Z]/;

  /**
   * delimiter
   *
   * @param {RegExp} delimiter regular expression for delimiter
   * @static
   */
  static delimiter = /\W/;

  /**
   * Split string into parts
   *
   * @param {string} string string to split
   * @return {Array<string>} array value unit parts
   * @static
   */
  static split(string) {
    const length = string.length;

    let parts = [];
    let i;
    let current = '';
    let symbol;
    let pushed;

    for (i = 0; i < length; ++i) {
      symbol = string[i];

      if (Parser.delimiter.test(symbol)) {
        pushed = Parser._push(symbol, current, parts);
        symbol = pushed.symbol; current = pushed.current; parts = pushed.parts;
      } else if (current !== '') {
        if (
          (Parser.digit.test(current[0]) && Parser.digit.test(symbol))
          || (Parser.letter.test(current[0]) && Parser.letter.test(symbol))
        ) {
          current += symbol;
        } else {
          pushed = Parser._push(symbol, current, parts);
          symbol = pushed.symbol; current = pushed.current; parts = pushed.parts;
        }
      } else {
        current += symbol;
      }
    }

    pushed = Parser._push(symbol, current, parts);
    symbol = pushed.symbol; current = pushed.current; parts = pushed.parts;

    return parts;
  }

  /**
   * Pushes current symbol to the parts
   *
   * @param {string} symbol current symbol
   * @param {string} current current part item
   * @param {Array<string>} parts parts of value units
   * @return {Object} object all the parameters
   * @static
   * @private
   */
  static _push(symbol, current, parts) {
    if (current !== '') {
      parts.push(current);
      current = '';
    }
    if (symbol && !Parser.delimiter.test(symbol)) {
      current = symbol;
    }

    return { symbol, current, parts };
  }
}

export default Parser;
