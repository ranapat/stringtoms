import Parser from '../parser/Parser';
import Analyzer from '../analyzer/Analyzer';
import Converter from './Converter';

/**
 * Converts analyzed string to milliseconds
 *
 * @param {string} string string to analyze
 * @return {int} millisedonds milliseconds
 */
function toms(string) {
  return Converter.toMilliseconds(
    Analyzer.analyze(
      Parser.split(string)
    )
  );
}

export default toms;
