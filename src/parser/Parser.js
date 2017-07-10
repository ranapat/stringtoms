class Parser {
  static digit = /[0-9]/;
  static letter = /[a-zA-Z]/;
  static delimiter = /\W/;

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
        pushed = Parser.push(symbol, current, parts);
        symbol = pushed.symbol; current = pushed.current; parts = pushed.parts;
      } else if (current !== '') {
        if (
          (Parser.digit.test(current[0]) && Parser.digit.test(symbol))
          || (Parser.letter.test(current[0]) && Parser.letter.test(symbol))
        ) {
          current += symbol;
        } else {
          pushed = Parser.push(symbol, current, parts);
          symbol = pushed.symbol; current = pushed.current; parts = pushed.parts;
        }
      } else {
        current += symbol;
      }
    }

    pushed = Parser.push(symbol, current, parts);
    symbol = pushed.symbol; current = pushed.current; parts = pushed.parts;

    return parts;
  }

  static push(symbol, current, parts) {
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
