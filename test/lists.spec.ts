/* eslint-disable @typescript-eslint/unbound-method */
// need it to test if is function

import axios from 'axios';
import { expect } from 'chai';

import { Lists } from '../src/lists';

describe('Lists', function () {
  describe('Class', function () {
    it('should be a function', function () {
      expect(Lists).to.be.a('function');
    });

    it('should be a Lists Class', function () {
      const lists = new Lists({
        client: axios.create(),
        apiUrl: '',
      });

      expect(lists).to.be.instanceOf(Lists);
    });
  });

  describe('#trending', function () {
    it('should be a function', function () {
      const lists = new Lists({
        client: axios.create(),
        apiUrl: '',
      });
      expect(lists.trending).to.be.a('function');
    });

    it('should throw a TypeError', function () {
      const lists = new Lists({
        client: axios.create(),
        apiUrl: '',
      });

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(lists.trending).to.throw(TypeError);
    });
  });

  describe('#popular', function () {
    it('should be a function', function () {
      const lists = new Lists({
        client: axios.create(),
        apiUrl: '',
      });
      expect(lists.popular).to.be.a('function');
    });

    it('should throw a TypeError', function () {
      const lists = new Lists({
        client: axios.create(),
        apiUrl: '',
      });

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(lists.popular).to.throw(TypeError);
    });
  });

  describe('#getList', function () {
    it('should be a function', function () {
      const lists = new Lists({
        client: axios.create(),
        apiUrl: '',
      });
      expect(lists.getList).to.be.a('function');
    });

    it('should throw a TypeError', function () {
      const lists = new Lists({
        client: axios.create(),
        apiUrl: '',
      });

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(lists.getList).to.throw(TypeError);
    });
  });

  describe('#getLikes', function () {
    it('should be a function', function () {
      const lists = new Lists({
        client: axios.create(),
        apiUrl: '',
      });
      expect(lists.getLikes).to.be.a('function');
    });

    it('should throw a TypeError', function () {
      const lists = new Lists({
        client: axios.create(),
        apiUrl: '',
      });

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(lists.getLikes).to.throw(TypeError);
    });
  });

  describe('#getItems', function () {
    it('should be a function', function () {
      const lists = new Lists({
        client: axios.create(),
        apiUrl: '',
      });
      expect(lists.getItems).to.be.a('function');
    });

    it('should throw a TypeError', function () {
      const lists = new Lists({
        client: axios.create(),
        apiUrl: '',
      });

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(lists.getItems).to.throw(TypeError);
    });
  });

  describe('#getComments', function () {
    it('should be a function', function () {
      const lists = new Lists({
        client: axios.create(),
        apiUrl: '',
      });
      expect(lists.getComments).to.be.a('function');
    });

    it('should throw a TypeError', function () {
      const lists = new Lists({
        client: axios.create(),
        apiUrl: '',
      });

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(lists.getComments).to.throw(TypeError);
    });
  });
});
