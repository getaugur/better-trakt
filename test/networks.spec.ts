/* eslint-disable @typescript-eslint/unbound-method */
// need it to test if is function

import axios from 'axios';
import { expect } from 'chai';

import { Networks } from '../src/networks';

describe('Genres', function () {
  describe('Class', function () {
    it('should be a function', function () {
      expect(Networks).to.be.a('function');
    });

    it('should be a Networks Class', function () {
      const networks = new Networks({
        client: axios.create(),
        apiUrl: '',
      });

      expect(networks).to.be.instanceOf(Networks);
    });
  });

  describe('#list', function () {
    it('should be a function', function () {
      const networks = new Networks({
        client: axios.create(),
        apiUrl: '',
      });

      expect(networks.list).to.be.a('function');
    });
  });
});
