import { expect } from 'chai';
import { Parser } from '../../src';

describe('Test Parser', () => {
  it('to split space separated ints', () => {
    const string = '1 2 3';
    expect(Parser.split(string)).to.deep.equal(['1', '2', '3']);
  });

  it('to split space separated chars', () => {
    const string = 'a b c';
    expect(Parser.split(string)).to.deep.equal(['a', 'b', 'c']);
  });

  it('to split space separated ints and chars', () => {
    const string = '1 a 2 b 3 c';
    expect(Parser.split(string)).to.deep.equal(['1', 'a', '2', 'b', '3', 'c']);
  });

  it('to split no-space separated ints and chars', () => {
    const string = '1a 2b 3c';
    expect(Parser.split(string)).to.deep.equal(['1', 'a', '2', 'b', '3', 'c']);
  });

  it('to split coma separated ints', () => {
    const string = '1,2,3';
    expect(Parser.split(string)).to.deep.equal(['1', '2', '3']);
  });

  it('to split coma separated chars', () => {
    const string = 'a,b,c';
    expect(Parser.split(string)).to.deep.equal(['a', 'b', 'c']);
  });

  it('to split coma separated ints and chars', () => {
    const string = '1, a,2 ,b, 3, c';
    expect(Parser.split(string)).to.deep.equal(['1', 'a', '2', 'b', '3', 'c']);
  });

  it('to split no-coma separated ints and chars', () => {
    const string = '1a, 2b,3c';
    expect(Parser.split(string)).to.deep.equal(['1', 'a', '2', 'b', '3', 'c']);
  });

  it('to split all \W separated ints', () => {
    const string = '1!2@3#4$5%6^7&8*9(0)';
    expect(Parser.split(string)).to.deep.equal(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
  });

  it('to ignore aritmetic operations separated ints', () => {
    const string = '1+2-3*4/5=6';
    expect(Parser.split(string)).to.deep.equal(['1', '2', '3', '4', '5', '6']);
  });

  it('to split no-space-at-all separated ints and chars', () => {
    const string = '1a2b3c';
    expect(Parser.split(string)).to.deep.equal(['1', 'a', '2', 'b', '3', 'c']);
  });

});
