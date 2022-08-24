/* eslint-disable @typescript-eslint/unbound-method */
// need it to test if is function

import axios from 'axios';
import { expect } from 'chai';

import { Languages } from '../src/languages';

describe('Languages', function () {
  describe('Class', function () {
    it('should be a function', function () {
      expect(Languages).to.be.a('function');
    });

    it('should be a Languages Class', function () {
      const lang = new Languages({
        client: axios.create(),
        apiUrl: '',
      });

      expect(lang).to.be.instanceOf(Languages);
    });
  });

  describe('#listMovies', function () {
    it('should be a function', function () {
      const lang = new Languages({
        client: axios.create(),
        apiUrl: '',
      });

      expect(lang.listMovies).to.be.a('function');
    });
  });

  describe('#listShows', function () {
    it('should be a function', function () {
      const lang = new Languages({
        client: axios.create(),
        apiUrl: '',
      });
      expect(lang.listShows).to.be.a('function');
    });
  });
});
