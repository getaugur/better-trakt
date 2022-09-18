// Say you only want to use the Networks api namespace.
// You can choose to import only that namespace and not use the rest.
// Make sure to use es6 syntax though like:

// import { Networks } from "better-trakt;
// or
// import { Networks } from 'better-trakt/networks';

// for better results.

const trakt = require('../dist/index');
const Networks = trakt.Networks;

// you will need to provide the networks class with some different info from the Trakt class however
// you need to make a new axios instance

const axiosInstance = axios.create({
  // please see https://github.com/getaugur/better-trakt/blob/main/src/client.ts#L149
  // this has the settings you should use
});

// now, we need to supply the trakt api url
// if its different for your use case, change it as needed
const apiUrl = 'https://api.trakt.tv';

// now just plug that into the class
const networkClient = new Networks({
  client: axiosInstance,
  apiUrl: apiUrl,
});
// and the namespace is useable like normal
// all of this is the same between all the namespaces
// you can see the docs for the namespace constructor
// here https://getaugur.github.io/better-trakt/classes/Networks.html#constructor

(async () => {
  // see, just like normal, except we arn't using the entire trakt sdk
  const networks = networkClient.list();
})();
