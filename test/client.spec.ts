// import 'mocha';
import { expect } from 'chai';

// test.expect;

import trakt, { Trakt } from '../src/index';

describe('SDK', function () {
  it('default export should be a function', function () {
    expect(trakt).to.be.a('function');
  });

  it('should export Trakt class', function () {
    const client = new Trakt({ clientId: '' });

    expect(client).to.be.instanceOf(Trakt);
  });
});
