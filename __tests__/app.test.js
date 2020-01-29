
'use strict';

const upperCase = require('../app.js').converter;

describe('app module testing', () => {
  it('passes the test', () => {
    expect(true).toBeTruthy();
  });
});

describe('uppercase', () => {
  xit('should return a string uppercased', () => {
    let str = 'testing';
  
    str = upperCase(str);
    expect(str).toBe('TESTING');
  });
});

