/* eslint-disable @typescript-eslint/unbound-method */
// need it to test if is function

import axios from 'axios';
import { expect } from 'chai';

import { Countries } from '../src/countries';

describe('Certifications', function () {
  describe('Class', function () {
    it('should be a function', function () {
      expect(Countries).to.be.a('function');
    });

    it('should be a Certifications Class', function () {
      const countries = new Countries({
        client: axios.create(),
        apiUrl: '',
      });

      expect(countries).to.be.instanceOf(Countries);
    });
  });

  describe('#listMovies', function () {
    it('should be a function', function () {
      const countries = new Countries({
        client: axios.create(),
        apiUrl: '',
      });

      expect(countries.listMovies).to.be.a('function');
    });
  });

  describe('#listShows', function () {
    it('should be a function', function () {
      const countries = new Countries({
        client: axios.create(),
        apiUrl: '',
      });
      expect(countries.listShows).to.be.a('function');
    });
  });
});
