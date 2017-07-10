import { expect } from 'chai';
import { Types } from '../../src';

describe('Test Types', () => {
  it('to correct h values', () => {
    expect(Types.validate('h')).to.equal('h');
    expect(Types.validate('ho')).to.equal('h');
    expect(Types.validate('hour')).to.equal('h');
    expect(Types.validate('hours')).to.equal('h');
  });

  it('to correct m values', () => {
    expect(Types.validate('m')).to.equal('m');
    expect(Types.validate('mi')).to.equal('m');
    expect(Types.validate('min')).to.equal('m');
    expect(Types.validate('minute')).to.equal('m');
    expect(Types.validate('minutes')).to.equal('m');
  });

  it('to correct s values', () => {
    expect(Types.validate('s')).to.equal('s');
    expect(Types.validate('se')).to.equal('s');
    expect(Types.validate('sec')).to.equal('s');
    expect(Types.validate('second')).to.equal('s');
    expect(Types.validate('seconds')).to.equal('s');
  });

  it('to correct ms values', () => {
    expect(Types.validate('ms')).to.equal('ms');
    expect(Types.validate('mil')).to.equal('ms');
    expect(Types.validate('milli')).to.equal('ms');
    expect(Types.validate('millisecond')).to.equal('ms');
    expect(Types.validate('milliseconds')).to.equal('ms');
  });

  it('to not correct undefined values', () => {
    expect(Types.validate('invalid')).to.equal(undefined);
  });

  it('to return greater values', () => {
    expect(Types.greater('h')).to.equal(undefined);
    expect(Types.greater('m')).to.equal('h');
    expect(Types.greater('s')).to.equal('m');
    expect(Types.greater('ms')).to.equal('s');
  });

  it('to return lesser values', () => {
    expect(Types.lesser('h')).to.equal('m');
    expect(Types.lesser('m')).to.equal('s');
    expect(Types.lesser('s')).to.equal('ms');
    expect(Types.lesser('ms')).to.equal(undefined);
  });

});
