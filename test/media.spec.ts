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

      it('should be a Shows Class', function () {
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

      it('should throw a TypeError', function () {
        const shows = new Shows({
          client: axios.create(),
          apiUrl: '',
        });

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(shows.summary).to.throw(TypeError);
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

      it('should throw a TypeError', function () {
        const shows = new Shows({
          client: axios.create(),
          apiUrl: '',
        });

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(shows.people).to.throw(TypeError);
      });
    });
  });

  describe('Movies', function () {
    describe('Class', function () {
      it('should be a function', function () {
        expect(Movies).to.be.a('function');
      });

      it('should be a Movies Class', function () {
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

      it('should throw a TypeError', function () {
        const movies = new Movies({
          client: axios.create(),
          apiUrl: '',
        });

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(movies.summary).to.throw(TypeError);
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

      it('should throw a TypeError', function () {
        const movies = new Movies({
          client: axios.create(),
          apiUrl: '',
        });

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(movies.people).to.throw(TypeError);
      });
    });
  });
});
