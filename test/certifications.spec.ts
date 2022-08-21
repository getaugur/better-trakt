/* eslint-disable @typescript-eslint/unbound-method */
// need it to test if is function

import axios from 'axios';
import { expect } from 'chai';

import { Certifications } from '../src/certifications';

describe('Certifications', function () {
  describe('Class', function () {
    it('should be a function', function () {
      expect(Certifications).to.be.a('function');
    });

    it('should be a Certifications Class', function () {
      const cert = new Certifications({
        client: axios.create(),
        apiUrl: '',
      });

      expect(cert).to.be.instanceOf(Certifications);
    });
  });

  describe('#listMovies', function () {
    it('should be a function', function () {
      const cert = new Certifications({
        client: axios.create(),
        apiUrl: '',
      });
      expect(cert.listMovies).to.be.a('function');
    });
  });

  describe('#listShows', function () {
    it('should be a function', function () {
      const cert = new Certifications({
        client: axios.create(),
        apiUrl: '',
      });
      expect(cert.listShows).to.be.a('function');
    });
  });
});
