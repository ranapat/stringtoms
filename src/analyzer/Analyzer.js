import Pair from './Pair';
import Types from '../types/Types';

class Analyzer {
  static digit = /[0-9]+/;
  static letter = /[a-zA-Z]+/;
  static MODE_INVALID = 0;
  static MODE_VALUE = 1;
  static MODE_UNIT = 2;

  static analyze(array) {
    return Analyzer.complete(array);
  }

  static complete(array) {
    const modified = Analyzer.normalize(array);

    let skipped = false;
    for (let i = 0; i < modified.length; ++i) {
      const pair = modified[i];
      if (pair.unit && skipped) {
        skipped = false;

        for (let j = i - 1; j >= 0; --j) {
          const leftPair = modified[j];
          const rightPair = modified[j + 1];
          if (!leftPair.unit) {
            leftPair.unit = Types.greater(rightPair.unit);
            if (!leftPair.unit) {
              modified.splice(j, 1);
              --i;
            }
          } else {
            break;
          }
        }
      } else if (!pair.unit) {
        if (i > 0) {
          const leftPair = modified[i - 1];
          if (leftPair.unit) {
            const lesser = Types.lesser(leftPair.unit);
            if (lesser) {
              pair.unit = lesser;
            } else {
              skipped = true;
            }
          } else {
            skipped = true;
          }
        } else {
          skipped = true;
        }
      }
    }

    while (modified.length > 0 && !modified[modified.length - 1].unit) {
      modified.splice(modified.length - 1, 1);
    }

    return modified;
  }

  static normalize(array) {
    const modified =  Analyzer.group(array);

    for (let i = 0; i < modified.length; ++i) {
      const pair = modified[i];
      if (pair.unit) {
        const validated = Types.validate(pair.unit);
        if (validated !== undefined) {
          pair.unit = validated;
        } else {
          modified.splice(i, 1);
          --i;
        }
      }
    }

    return modified;
  }

  static group(array) {
    const length = array.length;

    let parts = [];
    let i;
    let symbol;
    let current;
    let mode;

    for (i = 0; i < length; ++i) {
      symbol = array[i];

      if (current === undefined) {
        current = new Pair();
      }

      if (Analyzer.digit.test(symbol)) {
        mode = Analyzer.MODE_VALUE;
      } else if (Analyzer.letter.test(symbol)) {
        mode = Analyzer.MODE_UNIT;
      } else {
        mode = Analyzer.MODE_INVALID;
      }

      if (mode === Analyzer.MODE_INVALID) {
        //
      } else if (mode === Analyzer.MODE_VALUE) {
        if (current.value === undefined) {
          current.value = parseInt(symbol);
        } else {
          parts.push(current);
          current = new Pair(parseInt(symbol));
        }
      } else if (mode === Analyzer.MODE_UNIT) {
        current.unit = symbol;

        if (current.value === undefined) {
          current.value = 1;
        }
      }

      if (current.unit !== undefined) {
        parts.push(current);
        current = undefined;
      }
    }

    if (current !== undefined) {
      parts.push(current);
      current = undefined;
    }

    return parts;
  }
}

export default Analyzer;
