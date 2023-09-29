import { expect } from 'chai';
import { Users, Certifications, Movies, Shows, Countries, Genres, Languages, Lists, Networks } from '../src';

import { Trakt } from '../src/client';

describe('Client', function () {
  it('should be a function', function () {
    expect(Trakt).to.be.a('function');
  });

  it('should be a class', function () {
    const client = new Trakt({ clientId: '' });

    expect(client).to.be.instanceOf(Trakt);
  });

  describe('default settings', function () {
    it('should exist', function () {
      const client = new Trakt({ clientId: '' });

      expect(client.settings).to.not.equal(undefined);
    });

    it('should set clientId', function () {
      const clientId = 'test-client-id';
      const client = new Trakt({ clientId });

      expect(client.settings.clientId).to.equal(clientId);
    });

    it('should not set clientSecret', function () {
      const client = new Trakt({ clientId: '' });

      expect(client.settings.clientSecret).to.equal(undefined);
    });

    it('should use default redirectUri', function () {
      const client = new Trakt({ clientId: '' });

      expect(client.settings.redirectUri).to.equal('urn:ietf:wg:oauth:2.0:oob');
    });

    it('should use prod api url', function () {
      const client = new Trakt({ clientId: '' });

      expect(client.settings.apiUrl).to.equal('https://api.trakt.tv');
    });

    it('should define userAgent', function () {
      const client = new Trakt({ clientId: '' });

      expect(client.settings.userAgent).to.be.a('string');
    });
  });

  describe('#certifications', function () {
    it('should be a class', function () {
      const client = new Trakt({ clientId: '' });

      expect(client.certifications).to.be.instanceOf(Certifications);
    });
  });

  describe('#users', function () {
    it('should be a class', function () {
      const client = new Trakt({ clientId: '' });

      expect(client.users).to.be.instanceOf(Users);
    });
  });

  describe('#movies', function () {
    it('should be a class', function () {
      const client = new Trakt({ clientId: '' });

      expect(client.movies).to.be.instanceOf(Movies);
    });
  });

  describe('#shows', function () {
    it('should be a class', function () {
      const client = new Trakt({ clientId: '' });

      expect(client.shows).to.be.instanceOf(Shows);
    });
  });

  describe('#countries', function () {
    it('should be a class', function () {
      const client = new Trakt({ clientId: '' });

      expect(client.countries).to.be.instanceOf(Countries);
    });
  });

  describe('#genres', function () {
    it('should be a class', function () {
      const client = new Trakt({ clientId: '' });

      expect(client.genres).to.be.instanceOf(Genres);
    });
  });

  describe('#languages', function () {
    it('should be a class', function () {
      const client = new Trakt({ clientId: '' });

      expect(client.languages).to.be.instanceOf(Languages);
    });
  });

  describe('#networks', function () {
    it('should be a class', function () {
      const client = new Trakt({ clientId: '' });

      expect(client.networks).to.be.instanceOf(Networks);
    });
  });

  describe('#lists', function () {
    it('should be a class', function () {
      const client = new Trakt({ clientId: '' });

      expect(client.lists).to.be.instanceOf(Lists);
    });
  });
});
