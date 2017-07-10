import Parser from '../parser/Parser';
import Analyzer from '../analyzer/Analyzer';
import Converter from './Converter';

function toms(string) {
  return Converter.toMilliseconds(
    Analyzer.analyze(
      Parser.split(string)
    )
  );
}

export default toms;
