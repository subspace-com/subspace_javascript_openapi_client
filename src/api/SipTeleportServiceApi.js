/**
 * Subspace Product API
 * # Introduction  The Subspace API is based on REST, has resource-oriented URLs, returns JSON-encoded responses, and returns standard HTTP response codes.  The base URL for the API is:  `https://api.subspace.com/`  # Naming Convention  * Version name currently in use is: *v1*   * Example: `https://api.subspace.com/v1`  # Authentication  ## API Tokens  Subspace authenticates your API requests using JWT Bearer tokens. To use any Subspace API, you must pass a Bearer token with each request. If you do not include your Bearer token when making an API request, or use one that is incorrect or disabled, Subspace returns an error.  Bearer tokens are granted by requesting one (as noted below) and presenting your publishable (client_id) and secret (client_secret) tokens.     Subspace provides two types of API tokens: publishable (client_id) and secret (client_secret).  These are available in the Subspace console.   * **Publishable** API tokens (client_id) are meant solely to identify your account with Subspace, they aren’t secret. They can be published in places like your website JavaScript code, or in an iPhone or Android app.   * **Secret** API tokens (client_secret) should be kept confidential and only stored on your own servers. Your account’s secret API token will allow you to acquire a valid JWT token authorized to perform any API request to Subspace.  ## Getting a JWT Bearer Token  Subspace uses auth0 for JWT token management.  You can acquire a JWT token by utilizing `https://id.subspace.com` and following the instructions in the curl example below.  ## Protecting Your API Tokens    * **JWT tokens have a expiration time of 24 hours.**  Once expired, you will have to use your Subspace private API and public token to request a new one.   * The Subspace private token can be rotated from within the Subspace console.   * **Keep your secret token safe.** Your secret token can make any API call on behalf of your account, including changes that may impact billing such as enabling pay-as-you-go charges. Do not store your secret token in your version control system. Do not use your secret token outside your web server, such as a browser, mobile app, or distributed file.   * **You may use the Subspace console to acquire an API token.**   * **You may use the Subspace console to disable pay-as-you-go.** This may prevent unexpected charges due to unauthorized or abnormal usage.   * **Do not embed API keys directly in code.** Instead of directly embedding API keys in your application’s code, put them in environment variables, or within include files that are stored separately from the bulk of your code—outside the source repository of your application. Then, if you share your code, the API keys will not be included in the shared files.   * **Do not store API tokens inside your application’s source control.** If you store API tokens in files, keep the files outside your application’s source control system. This is particularly important if you use a public source code management system such as GitHub.   * **Limit access with restricted tokens.** The Subspace console will allow you to specify the IP addresses or referrer URLs associated with each token, reducing the impact of a compromised API token.   * **Use independent API tokens for different apps.** This limits the scope of each token. If an API token is compromised, you can rotate the impacted token without impacting other API tokens.  # Error Codes  Subspace uses HTTP response codes to indicate the success or failure of an API request.   General HTML status codes:   * 2xx Success.    * 4xx Errors based on information provided in the request.   * 5xx Errors on Subspace servers.    # Security  We provide a valid, signed certificate for our API methods. Be sure your connection library supports HTTPS with the SNI extension.  # REST How-To  Making your first REST API call is easy and can be done from your browser.  You will need:   * Your **secret** token and public client token, both found in the Console.   * The URL for the type of data you would like to request.  First, acquire a JWT Bearer Token.  Command line example:          curl --request POST \\          --url \"https://id.subspace.com/oauth/token\" \\          --header 'content-type: application/json' \\          --data '{ \"client_id\": \"YOURCLIENTID\", \"client_secret\": \"YOURCLIENTSECRET\", \"audience\": \"https://api.subspace.com/\", \"grant_type\": \"client_credentials\" }'  REST calls are made up of:   * Base url: Example: `https://api.subspace.com`   * Version: Example: `v1`   * The API Endpoint and any parameters: `accelerator/acc_NDA3MUI5QzUtOTY4MC00Nz` where `acc_NDA3MUI5QzUtOTY4MC00Nz` is a valid accelerator ID   * Accelerator ids are always of the format `acc_NDA3MUI5QzUtOTY4MC00Nz`, with a \"acc_\" prefix followed by 22 characters.   * Token header: All REST requests require a valid JWT Bearer token which should be added as an “Authorization” header to the request:              `Authorization: Bearer YOUR_TOKEN_HERE`    ## Authorization header example  If your API token was “my_api_token”, you would add...      Authorization: Bearer my_api_token      ...to the header.  ## Command line examples  To list your current open packet_accelerators using the token “my_api_token”:      curl -H “Authorization: Bearer my_api_token” https://api.subspace.com/v1/accelerator      Alternately, to get the details of a specific accelerator whose id is 'abcd-ef01-2345':      curl -H “Authorization: Bearer my_api_token” https://api.subspace.com/v1/accelerator/abcd-ef01-2345  # API Versioning  Subspace will release new versions when we make backwards-incompatible changes to the API. We will give advance notice before releasing a new version or retiring an old version.  Backwards compatible changes:   * Adding new response attributes   * Adding new endpoints   * Adding new methods to an existing endpoint   * Adding new query string parameters   * Adding new path parameters   * Adding new webhook events   * Adding new streaming endpoints   * Changing the order of existing response attributes    Versions are added to the base url, for example:   * `https://api.subspace.com/v1`  Current Version is **v1:** `https://api.subspace.com/v1` 
 *
 * The version of the OpenAPI document: 1.0
 * Contact: sales@subspace.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import V1CreateSipTeleport from '../model/V1CreateSipTeleport';
import V1ListSipTeleportResponse from '../model/V1ListSipTeleportResponse';
import V1SipTeleportResponse from '../model/V1SipTeleportResponse';
import V1UpdateSipTeleport from '../model/V1UpdateSipTeleport';

/**
* SipTeleportService service.
* @module api/SipTeleportServiceApi
* @version 1.0
*/
export default class SipTeleportServiceApi {

    /**
    * Constructs a new SipTeleportServiceApi. 
    * @alias module:api/SipTeleportServiceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the sipTeleportServiceCreate operation.
     * @callback module:api/SipTeleportServiceApi~sipTeleportServiceCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1SipTeleportResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/V1CreateSipTeleport} v1CreateSipTeleport Required parameters to create a new SIPTeleport
     * @param {Object} opts Optional parameters
     * @param {String} opts.idempotencyKey Value is the returned etag of a get request.  If a retry sends an Idempotency-Key that has been seen before, the existing teleport is returned with the status code of 200
     * @param {module:api/SipTeleportServiceApi~sipTeleportServiceCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1SipTeleportResponse}
     */
    sipTeleportServiceCreate(v1CreateSipTeleport, opts, callback) {
      opts = opts || {};
      let postBody = v1CreateSipTeleport;
      // verify the required parameter 'v1CreateSipTeleport' is set
      if (v1CreateSipTeleport === undefined || v1CreateSipTeleport === null) {
        throw new Error("Missing the required parameter 'v1CreateSipTeleport' when calling sipTeleportServiceCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Idempotency-Key': opts['idempotencyKey']
      };
      let formParams = {
      };

      let authNames = ['accessCode'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1SipTeleportResponse;
      return this.apiClient.callApi(
        '/v1/sipteleport', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sipTeleportServiceDelete operation.
     * @callback module:api/SipTeleportServiceApi~sipTeleportServiceDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1SipTeleportResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:api/SipTeleportServiceApi~sipTeleportServiceDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1SipTeleportResponse}
     */
    sipTeleportServiceDelete(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling sipTeleportServiceDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['accessCode'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1SipTeleportResponse;
      return this.apiClient.callApi(
        '/v1/sipteleport/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sipTeleportServiceGet operation.
     * @callback module:api/SipTeleportServiceApi~sipTeleportServiceGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1SipTeleportResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:api/SipTeleportServiceApi~sipTeleportServiceGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1SipTeleportResponse}
     */
    sipTeleportServiceGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling sipTeleportServiceGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['accessCode'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1SipTeleportResponse;
      return this.apiClient.callApi(
        '/v1/sipteleport/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sipTeleportServiceList operation.
     * @callback module:api/SipTeleportServiceApi~sipTeleportServiceListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListSipTeleportResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.before 
     * @param {Number} opts.limit 
     * @param {module:api/SipTeleportServiceApi~sipTeleportServiceListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListSipTeleportResponse}
     */
    sipTeleportServiceList(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'before': opts['before'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['accessCode'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1ListSipTeleportResponse;
      return this.apiClient.callApi(
        '/v1/sipteleport', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sipTeleportServiceUpdate operation.
     * @callback module:api/SipTeleportServiceApi~sipTeleportServiceUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1SipTeleportResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:model/V1UpdateSipTeleport} v1UpdateSipTeleport Parameters to update an existing SIPTeleport, minimum requirement of one of them defined to update
     * @param {module:api/SipTeleportServiceApi~sipTeleportServiceUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1SipTeleportResponse}
     */
    sipTeleportServiceUpdate(id, v1UpdateSipTeleport, callback) {
      let postBody = v1UpdateSipTeleport;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling sipTeleportServiceUpdate");
      }
      // verify the required parameter 'v1UpdateSipTeleport' is set
      if (v1UpdateSipTeleport === undefined || v1UpdateSipTeleport === null) {
        throw new Error("Missing the required parameter 'v1UpdateSipTeleport' when calling sipTeleportServiceUpdate");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['accessCode'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1SipTeleportResponse;
      return this.apiClient.callApi(
        '/v1/sipteleport/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
