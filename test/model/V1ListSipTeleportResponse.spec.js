/**
 * Subspace Product API
 * # Introduction  The Subspace API is based on REST, has resource-oriented URLs, returns JSON-encoded responses, and returns standardHTTP response codes.  The base URL for the API is `https://api.subspace.com/`  # Naming Convention  **EARLY ACCESS NOTE:** There is no “stable” version yet.  Once there is, the version name **stable** will be used to access the latest stable API version.   * Example: `https://api.subspace.com/stable` * Version name currently in use is: *v1*   * Example: `https://api.subspace.com/v1`  # Authentication  ## API Tokens  Subspace authenticates your API requests using JWT Bearer tokens.  The provided client library requires this JWT to be set before it can be used, by setting the local access token in the local configuration.  This is done by updating the configuration line marked \"YOUR ACCESS TOKEN\" by replacing the text \"YOUR ACCESS TOKEN\" with your JWT Bearer token.  Bearer tokens are granted by requesting one (as noted below) and presenting your publishable (client_id) and secret (client_secret) tokens.     Subspace provides two types of API tokens: publishable (client_id) and secret (client_secret).  These are available in the Subspace console.   * **Publishable** API tokens (client_id) are meant solely to identify your account with Subspace, they aren’t secret. They can be published in places like your website JavaScript code, or in an iPhone or Android app.   * **Secret** API tokens (client_secret) should be kept confidential and only stored on your own servers. Your account’s secret API token will allow you to acquire a valid JWT token authorized to perform any API request to Subspace.  ## Getting a JWT Bearer Token  Subspace uses auth0 for JWT token management.  You can acquire a JWT token by utilizing `https://id.subspace.com` and following the instructions in the curl example below.  ## Protecting Your API Tokens    * **JWT tokens have a expiration time of 24 hours.**  Once expired, you will have to use your Subspace private API and public token to request a new one.   * The Subspace private token can be rotated from within the Subspace console.  Rotation may take up to 10 minutes for all systems to update state to invalidate the older token and enable the new one. * **Keep your secret token safe.** Your secret token can make any API call on behalf of your account, including changes that may impact billing such as enabling pay-as-you-go charges. Do not store your secret token in your version control system. Do not use your secret token outside your web server, such as a browser, mobile app, or distributed file.   * **You may use the Subspace console to acquire an API token.**  * **You may use the Subspace console to disable pay-as-you-go.** This may prevent unexpected charges due to unauthorized or abnormal usage.  **Acquiring a valid JWT**  Command line example: ``` curl --request POST           --url 'https://id.subspace.com/oauth/token'           --header 'content-type: application/json'           --data '{ \"client_id\": YOURCLIENTID, \"client_secret\": YOURCLIENTSECRET, \"audience\": \"https://api.subspace.com/\", \"grant_type\": \"client_credentials\" }' ``` 
 *
 * The version of the OpenAPI document: 1.0
 * Contact: sales@subspace.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SubspaceProductApi);
  }
}(this, function(expect, SubspaceProductApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SubspaceProductApi.V1ListSipTeleportResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('V1ListSipTeleportResponse', function() {
    it('should create an instance of V1ListSipTeleportResponse', function() {
      // uncomment below and update the code to test V1ListSipTeleportResponse
      //var instane = new SubspaceProductApi.V1ListSipTeleportResponse();
      //expect(instance).to.be.a(SubspaceProductApi.V1ListSipTeleportResponse);
    });

    it('should have the property nextPage (base name: "nextPage")', function() {
      // uncomment below and update the code to test the property nextPage
      //var instance = new SubspaceProductApi.V1ListSipTeleportResponse();
      //expect(instance).to.be();
    });

    it('should have the property sipTeleports (base name: "sipTeleports")', function() {
      // uncomment below and update the code to test the property sipTeleports
      //var instance = new SubspaceProductApi.V1ListSipTeleportResponse();
      //expect(instance).to.be();
    });

  });

}));
