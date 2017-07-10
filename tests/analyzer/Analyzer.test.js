import { expect } from 'chai';
import { Analyzer } from '../../src';
import { Pair } from '../../src';

describe('Test Analyzer', () => {
  it('to combine arrays', () => {
    const array = ['1', 'm', '2', 's', '3', 'ms'];
    expect(Analyzer.analyze(array)).to.deep.equal([
      new Pair(1, 'm'), new Pair(2, 's'), new Pair(3, 'ms')
    ]);
  });

  it('to normalize units arrays', () => {
    const array = ['1', 'min', '2', 'sec', '3', 'mil'];
    expect(Analyzer.analyze(array)).to.deep.equal([
      new Pair(1, 'm'), new Pair(2, 's'), new Pair(3, 'ms')
    ]);
  });

  it('to combine incomplete units arrays', () => {
    const array = ['1', '', '2', 's', '3', 'ms'];
    expect(Analyzer.analyze(array)).to.deep.equal([
      new Pair(1, 'm'), new Pair(2, 's'), new Pair(3, 'ms')
    ]);
  });

  it('to combine incomplete missing units arrays (1)', () => {
    const array = ['1', '2', 's', '3', 'ms'];
    expect(Analyzer.analyze(array)).to.deep.equal([
      new Pair(1, 'm'), new Pair(2, 's'), new Pair(3, 'ms')
    ]);
  });

  it('to combine incomplete missing units arrays (2)', () => {
    const array = ['1', '2', '3', 'ms'];
    expect(Analyzer.analyze(array)).to.deep.equal([
      new Pair(1, 'm'), new Pair(2, 's'), new Pair(3, 'ms')
    ]);
  });

  it('to combine incomplete missing units arrays (3)', () => {
    const array = ['1', '2', '3', 'm'];
    expect(Analyzer.analyze(array)).to.deep.equal([
      new Pair(2, 'h'), new Pair(3, 'm')
    ]);
  });

  it('to combine incomplete missing units arrays (4)', () => {
    const array = ['1', '2', '3', 'h'];
    expect(Analyzer.analyze(array)).to.deep.equal([
      new Pair(3, 'h')
    ]);
  });

  it('to combine incomplete missing units arrays (5)', () => {
    const array = ['1', '2', 's', '3'];
    expect(Analyzer.analyze(array)).to.deep.equal([
      new Pair(1, 'm'), new Pair(2, 's'), new Pair(3, 'ms')
    ]);
  });

  it('to combine incomplete missing units arrays (6)', () => {
    const array = ['1', '2', 'h', '3', '4', '5', '6'];
    expect(Analyzer.analyze(array)).to.deep.equal([
      new Pair(2, 'h'), new Pair(3, 'm'), new Pair(4, 's'), new Pair(5, 'ms')
    ]);
  });

  it('to combine incomplete values arrays', () => {
    const array = ['', 'm', '2', 's', '3', 'ms'];
    expect(Analyzer.analyze(array)).to.deep.equal([
      new Pair(1, 'm'), new Pair(2, 's'), new Pair(3, 'ms')
    ]);
  });

  it('to combine incomplete missing values arrays (1)', () => {
    const array = ['m', '2', 's', '3', 'ms'];
    expect(Analyzer.analyze(array)).to.deep.equal([
      new Pair(1, 'm'), new Pair(2, 's'), new Pair(3, 'ms')
    ]);
  });

  it('to combine incomplete missing values arrays (2)', () => {
    const array = ['m', 's', '3', 'ms'];
    expect(Analyzer.analyze(array)).to.deep.equal([
      new Pair(1, 'm'), new Pair(1, 's'), new Pair(3, 'ms')
    ]);
  });

  it('to combine incomplete missing values arrays (3)', () => {
    const array = ['m', 's', 'ms'];
    expect(Analyzer.analyze(array)).to.deep.equal([
      new Pair(1, 'm'), new Pair(1, 's'), new Pair(1, 'ms')
    ]);
  });

  it('to ignore wrong units (1)', () => {
    const array = ['1', 'manutes', '2', 'sacunds', '3', 'mis'];
    expect(Analyzer.analyze(array)).to.deep.equal([

    ]);
  });

  it('to ignore wrong units (2)', () => {
    const array = ['1', 'm', '2', 'sacunds', '3', 'mis'];
    expect(Analyzer.analyze(array)).to.deep.equal([
      new Pair(1, 'm')
    ]);
  });

  it('to ignore wrong units (3)', () => {
    const array = ['1', 'minutes', '2', 'seconds', '3', 'mis'];
    expect(Analyzer.analyze(array)).to.deep.equal([
      new Pair(1, 'm'), new Pair(2, 's')
    ]);
  });

  it('to ignore wrong units (4)', () => {
    const array = ['1', 'haurs', '2', 'minutes', '3', 's'];
    expect(Analyzer.analyze(array)).to.deep.equal([
      new Pair(2, 'm'), new Pair(3, 's')
    ]);
  });

  it('to ignore undeterminable units (1)', () => {
    const array = ['1', '2', '3'];
    expect(Analyzer.analyze(array)).to.deep.equal([

    ]);
  });

  it('to ignore undeterminable units (2)', () => {
    const array = ['1', 'ms', '2', '3'];
    expect(Analyzer.analyze(array)).to.deep.equal([
      new Pair(1, 'ms')
    ]);
  });

  it('to ignore undeterminable units (3)', () => {
    const array = ['1', '2', 'h', '3'];
    expect(Analyzer.analyze(array)).to.deep.equal([
      new Pair(2, 'h'), new Pair(3, 'm')
    ]);
  });

  it('to ignore undeterminable units (4)', () => {
    const array = ['1', '2', 'h', '3', 'h', '4', 's'];
    expect(Analyzer.analyze(array)).to.deep.equal([
      new Pair(2, 'h'), new Pair(3, 'h'), new Pair(4, 's')
    ]);
  });

  it('to ignore undeterminable units (5)', () => {
    const array = ['1', '2', 'h', '3', '4'];
    expect(Analyzer.analyze(array)).to.deep.equal([
      new Pair(2, 'h'), new Pair(3, 'm'), new Pair(4, 's')
    ]);
  });

  it('to ignore undeterminable units (5)', () => {
    const array = ['1', '2', 'h', '3', '4', '5', '6', '7'];
    expect(Analyzer.analyze(array)).to.deep.equal([
      new Pair(2, 'h'), new Pair(3, 'm'), new Pair(4, 's'), new Pair(5, 'ms')
    ]);
  });

  it('to ignore undeterminable units (6)', () => {
    const array = ['1', '2', '3', 'm', '4', '5', '6', '7', '8'];
    expect(Analyzer.analyze(array)).to.deep.equal([
      new Pair(2, 'h'), new Pair(3, 'm'), new Pair(4, 's'), new Pair(5, 'ms')
    ]);
  });

});
