import { expect } from 'chai';
import { toms } from '../../src';

describe('Test toms', () => {
  it('to generate ms (1)', () => {
    const string = '1ms';
    expect(toms(string)).to.equal(1);
  });

  it('to generate ms (2)', () => {
    const string = '2ms';
    expect(toms(string)).to.equal(2);
  });

  it('to generate ms (3)', () => {
    const string = 'ms';
    expect(toms(string)).to.equal(1);
  });

  it('to generate ms (4)', () => {
    const string = '4 ms';
    expect(toms(string)).to.equal(4);
  });

  it('to generate ms (5)', () => {
    const string = '5 milliseconds';
    expect(toms(string)).to.equal(5);
  });

  it('to generate ms (6)', () => {
    expect(toms('s ms')).to.equal(1001);
    expect(toms('s 2ms')).to.equal(1002);
    expect(toms('1 2')).to.equal(0);
    expect(toms('m s ms')).to.equal(61001);
    expect(toms('1s')).to.equal(1000);
    expect(toms('1ms 1 ms')).to.equal(2);
    expect(toms('1ms 1')).to.equal(1);
    expect(toms('1ms 1s')).to.equal(1001);
    expect(toms('m')).to.equal(60000);
    expect(toms('1m1s')).to.equal(61000);
    expect(toms('1s1ms')).to.equal(1001);
    expect(toms('1 s1 ms')).to.equal(1001);
    expect(toms('1 1s 1')).to.equal(61001);
    expect(toms('1m 1s 1ms')).to.equal(61001);
    expect(toms('m 1s ms')).to.equal(61001);
  });
});
