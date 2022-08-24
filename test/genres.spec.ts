/* eslint-disable @typescript-eslint/unbound-method */
// need it to test if is function

import axios from 'axios';
import { expect } from 'chai';

import { Genres } from '../src/genres';

describe('Genres', function () {
  describe('Class', function () {
    it('should be a function', function () {
      expect(Genres).to.be.a('function');
    });

    it('should be a Genres Class', function () {
      const genres = new Genres({
        client: axios.create(),
        apiUrl: '',
      });

      expect(genres).to.be.instanceOf(Genres);
    });
  });

  describe('#listMovies', function () {
    it('should be a function', function () {
      const genres = new Genres({
        client: axios.create(),
        apiUrl: '',
      });

      expect(genres.listMovies).to.be.a('function');
    });
  });

  describe('#listShows', function () {
    it('should be a function', function () {
      const genres = new Genres({
        client: axios.create(),
        apiUrl: '',
      });
      expect(genres.listShows).to.be.a('function');
    });
  });
});
