/* eslint-disable @typescript-eslint/unbound-method */
// need it to test if is function

import axios from 'axios';
import { expect } from 'chai';

import { Users } from '../src/users';

describe('Users', function () {
  describe('Class', function () {
    it('should be a function', function () {
      expect(Users).to.be.a('function');
    });

    it('should be a Certifications Class', function () {
      const users = new Users({
        client: axios.create(),
        apiUrl: '',
      });

      expect(users).to.be.instanceOf(Users);
    });
  });

  describe('#watchedMovies', function () {
    it('should be a function', function () {
      const users = new Users({
        client: axios.create(),
        apiUrl: '',
      });
      expect(users.watchedMovies).to.be.a('function');
    });
  });

  describe('#watchedShows', function () {
    it('should be a function', function () {
      const users = new Users({
        client: axios.create(),
        apiUrl: '',
      });
      expect(users.watchedShows).to.be.a('function');
    });
  });
});
