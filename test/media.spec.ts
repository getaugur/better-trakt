/* eslint-disable @typescript-eslint/unbound-method */
// need it to test if is function

import axios from 'axios';
import { expect } from 'chai';

import { Shows, Movies } from '../src/media';

describe('Media', function () {
  describe('Shows', function () {
    describe('Class', function () {
      it('should be a function', function () {
        expect(Shows).to.be.a('function');
      });

      it('should be a Certifications Class', function () {
        const shows = new Shows({
          client: axios.create(),
          apiUrl: '',
        });

        expect(shows).to.be.instanceOf(Shows);
      });
    });

    describe('#summary', function () {
      it('should be a function', function () {
        const shows = new Shows({
          client: axios.create(),
          apiUrl: '',
        });
        expect(shows.summary).to.be.a('function');
      });
    });

    describe('#people', function () {
      it('should be a function', function () {
        const shows = new Shows({
          client: axios.create(),
          apiUrl: '',
        });
        expect(shows.people).to.be.a('function');
      });
    });
  });

  describe('Movies', function () {
    describe('Class', function () {
      it('should be a function', function () {
        expect(Movies).to.be.a('function');
      });

      it('should be a Certifications Class', function () {
        const movies = new Movies({
          client: axios.create(),
          apiUrl: '',
        });

        expect(movies).to.be.instanceOf(Movies);
      });
    });

    describe('#summary', function () {
      it('should be a function', function () {
        const movies = new Movies({
          client: axios.create(),
          apiUrl: '',
        });
        expect(movies.summary).to.be.a('function');
      });
    });

    describe('#people', function () {
      it('should be a function', function () {
        const movies = new Movies({
          client: axios.create(),
          apiUrl: '',
        });
        expect(movies.people).to.be.a('function');
      });
    });
  });
});
