# subspace_product_api

SubspaceProductApi - JavaScript client for subspace_product_api
# Introduction

The Subspace API is based on REST, has resource-oriented URLs, returns JSON-encoded responses, and returns standard HTTP response codes.

The base URL for the API is:  `https://api.subspace.com/`

# Naming Convention

* Version name currently in use is: *v1*
  * Example: `https://api.subspace.com/v1`

# Authentication

## API Tokens

Subspace authenticates your API requests using JWT Bearer tokens. To use any Subspace API, you must pass a Bearer token with each request. If you do not include your Bearer token when making an API request, or use one that is incorrect or disabled, Subspace returns an error.

Bearer tokens are granted by requesting one (as noted below) and presenting your publishable (client_id) and secret (client_secret) tokens.   

Subspace provides two types of API tokens: publishable (client_id) and secret (client_secret).  These are available in the Subspace console.
  * **Publishable** API tokens (client_id) are meant solely to identify your account with Subspace, they aren’t secret. They can be published in places like your website JavaScript code, or in an iPhone or Android app.
  * **Secret** API tokens (client_secret) should be kept confidential and only stored on your own servers. Your account’s secret API token will allow you to acquire a valid JWT token authorized to perform any API request to Subspace.

## Getting a JWT Bearer Token

Subspace uses auth0 for JWT token management.  You can acquire a JWT token by utilizing `https://id.subspace.com` and following the instructions in the curl example below.

## Protecting Your API Tokens

  * **JWT tokens have a expiration time of 24 hours.**  Once expired, you will have to use your Subspace private API and public token to request a new one.
  * The Subspace private token can be rotated from within the Subspace console.  Rotation may take up to 10 minutes for all systems to update state to invalidate the older token and enable the new one.
  * **Keep your secret token safe.** Your secret token can make any API call on behalf of your account, including changes that may impact billing such as enabling pay-as-you-go charges. Do not store your secret token in your version control system. Do not use your secret token outside your web server, such as a browser, mobile app, or distributed file.
  * **You may use the Subspace console to acquire an API token.**
  * **You may use the Subspace console to disable pay-as-you-go.** This may prevent unexpected charges due to unauthorized or abnormal usage.
  * **Do not embed API keys directly in code.** Instead of directly embedding API keys in your application’s code, put them in environment variables, or within include files that are stored separately from the bulk of your code—outside the source repository of your application. Then, if you share your code, the API keys will not be included in the shared files.
  * **Do not store API tokens inside your application’s source control.** If you store API tokens in files, keep the files outside your application’s source control system. This is particularly important if you use a public source code management system such as GitHub.
  * **Limit access with restricted tokens.** The Subspace console will allow you to specify the IP addresses or referrer URLs associated with each token, reducing the impact of a compromised API token.
  * **Use independent API tokens for different apps.** This limits the scope of each token. If an API token is compromised, you can rotate the impacted token without impacting other API tokens.

# Error Codes

Subspace uses HTTP response codes to indicate the success or failure of an API request. 

General HTML status codes:
  * 2xx Success. 
  * 4xx Errors based on information provided in the request.
  * 5xx Errors on Subspace servers.
  
# Security

We provide a valid, signed certificate for our API methods. Be sure your connection library supports HTTPS with the SNI extension.

# REST How-To

Making your first REST API call is easy and can be done from your browser.  You will need:
  * Your **secret** token and public client token, both found in the Console.
  * The URL for the type of data you would like to request.

First, acquire a JWT Bearer Token.  Command line example:
    
    curl --request POST \\
         --url \"https://id.subspace.com/oauth/token\" \\
         --header 'content-type: application/json' \\
         --data '{ \"client_id\": \"YOURCLIENTID\", \"client_secret\": \"YOURCLIENTSECRET\", \"audience\": \"https://api.subspace.com/\", \"grant_type\": \"client_credentials\" }'

REST calls are made up of:
  * Base url: Example: `https://api.subspace.com`
  * Version: Example: `v1`
  * The API Endpoint and any parameters: `accelerator/acc_NDA3MUI5QzUtOTY4MC00Nz` where `acc_NDA3MUI5QzUtOTY4MC00Nz` is a valid accelerator ID
  * Accelerator ids are always of the format `acc_NDA3MUI5QzUtOTY4MC00Nz`, with a \"acc_\" prefix followed by 22 characters.
  * Project ids are always of the format `prj_00Iaqxjo71vNL1uLKKo5Kn`, with a \"prj_\" prefix followed by 22 characters.
  * Token header: All REST requests require a valid JWT Bearer token which should be added as an “Authorization” header to the request:
      
      `Authorization: Bearer YOUR_TOKEN_HERE`
  
## Authorization header example

If your API token was “my_api_token”, you would add...

    Authorization: Bearer my_api_token
    
...to the header.

## Command line examples

To list your current open packet_accelerators using the token “my_api_token”:

    curl -H “Authorization: Bearer my_api_token” https://api.subspace.com/v1/accelerator
    
Alternately, to get the details of a specific accelerator whose id is 'abcd-ef01-2345':

    curl -H “Authorization: Bearer my_api_token” https://api.subspace.com/v1/accelerator/abcd-ef01-2345

# API Versioning

Subspace will release new versions when we make backwards-incompatible changes to the API. We will give advance notice before releasing a new version or retiring an old version.

Backwards compatible changes:
  * Adding new response attributes
  * Adding new endpoints
  * Adding new methods to an existing endpoint
  * Adding new query string parameters
  * Adding new path parameters
  * Adding new webhook events
  * Adding new streaming endpoints
  * Changing the order of existing response attributes
  
Versions are added to the base url, for example:
  * `https://api.subspace.com/v1`

Current Version is **v1:** `https://api.subspace.com/v1`

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0
- Package version: 1.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://subspace.com](https://subspace.com)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install subspace_product_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your subspace_product_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/subspace-com/subspace_javascript_openapi_client
then install it via:

```shell
    npm install subspace-com/subspace_javascript_openapi_client --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SubspaceProductApi = require('subspace_product_api');

var defaultClient = SubspaceProductApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: accessCode
var accessCode = defaultClient.authentications['accessCode'];
accessCode.accessToken = "YOUR ACCESS TOKEN"

var api = new SubspaceProductApi.AcceleratorServiceApi()
var body = new SubspaceProductApi.Body(); // {Body} Required parameters to create a new PacketAccelerator.  NOTE- only subspace_port is optional
var opts = {
  'idempotencyKey': "idempotencyKey_example" // {String} Value is the returned etag of a get request.  If a retry sends an Idempotency-Key that has been seen before, the existing accelerator is returned with the status code of 200
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.acceleratorServiceCreate(body, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.subspace.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SubspaceProductApi.AcceleratorServiceApi* | [**acceleratorServiceCreate**](docs/AcceleratorServiceApi.md#acceleratorServiceCreate) | **POST** /v1/accelerator | 
*SubspaceProductApi.AcceleratorServiceApi* | [**acceleratorServiceDelete**](docs/AcceleratorServiceApi.md#acceleratorServiceDelete) | **DELETE** /v1/accelerator/{id} | 
*SubspaceProductApi.AcceleratorServiceApi* | [**acceleratorServiceGet**](docs/AcceleratorServiceApi.md#acceleratorServiceGet) | **GET** /v1/accelerator/{id} | 
*SubspaceProductApi.AcceleratorServiceApi* | [**acceleratorServiceList**](docs/AcceleratorServiceApi.md#acceleratorServiceList) | **GET** /v1/accelerator | 
*SubspaceProductApi.AcceleratorServiceApi* | [**acceleratorServiceUpdate**](docs/AcceleratorServiceApi.md#acceleratorServiceUpdate) | **PUT** /v1/accelerator/{id} | 
*SubspaceProductApi.GlobalTurnServiceApi* | [**globalTurnServiceGetGlobalTurn**](docs/GlobalTurnServiceApi.md#globalTurnServiceGetGlobalTurn) | **POST** /v1/globalturn | 
*SubspaceProductApi.ProjectServiceApi* | [**projectServiceCreate**](docs/ProjectServiceApi.md#projectServiceCreate) | **POST** /v1/project | 
*SubspaceProductApi.ProjectServiceApi* | [**projectServiceGet**](docs/ProjectServiceApi.md#projectServiceGet) | **GET** /v1/project/{id} | 
*SubspaceProductApi.ProjectServiceApi* | [**projectServiceList**](docs/ProjectServiceApi.md#projectServiceList) | **GET** /v1/project | 
*SubspaceProductApi.ProjectServiceApi* | [**projectServiceUpdate**](docs/ProjectServiceApi.md#projectServiceUpdate) | **PUT** /v1/project/{id} | 
*SubspaceProductApi.SessionServiceApi* | [**sessionServiceList**](docs/SessionServiceApi.md#sessionServiceList) | **GET** /v1/accelerator/{accelerator_id}/session | 
*SubspaceProductApi.SessionServiceApi* | [**sessionServiceList2**](docs/SessionServiceApi.md#sessionServiceList2) | **GET** /v1/accelerators/{accelerator_id}/sessions | 
*SubspaceProductApi.SipTeleportServiceApi* | [**sipTeleportServiceCreate**](docs/SipTeleportServiceApi.md#sipTeleportServiceCreate) | **POST** /v1/sipteleport | 
*SubspaceProductApi.SipTeleportServiceApi* | [**sipTeleportServiceDelete**](docs/SipTeleportServiceApi.md#sipTeleportServiceDelete) | **DELETE** /v1/sipteleport/{id} | 
*SubspaceProductApi.SipTeleportServiceApi* | [**sipTeleportServiceGet**](docs/SipTeleportServiceApi.md#sipTeleportServiceGet) | **GET** /v1/sipteleport/{id} | 
*SubspaceProductApi.SipTeleportServiceApi* | [**sipTeleportServiceList**](docs/SipTeleportServiceApi.md#sipTeleportServiceList) | **GET** /v1/sipteleport | 
*SubspaceProductApi.SipTeleportServiceApi* | [**sipTeleportServiceUpdate**](docs/SipTeleportServiceApi.md#sipTeleportServiceUpdate) | **PUT** /v1/sipteleport/{id} | 


## Documentation for Models

 - [SubspaceProductApi.Body](docs/Body.md)
 - [SubspaceProductApi.Body1](docs/Body1.md)
 - [SubspaceProductApi.ProtobufAny](docs/ProtobufAny.md)
 - [SubspaceProductApi.V1Accelerator](docs/V1Accelerator.md)
 - [SubspaceProductApi.V1CreateSipTeleport](docs/V1CreateSipTeleport.md)
 - [SubspaceProductApi.V1GlobalTurnResponse](docs/V1GlobalTurnResponse.md)
 - [SubspaceProductApi.V1GlobalTurnServer](docs/V1GlobalTurnServer.md)
 - [SubspaceProductApi.V1ListAcceleratorResponse](docs/V1ListAcceleratorResponse.md)
 - [SubspaceProductApi.V1ListProjectsResponse](docs/V1ListProjectsResponse.md)
 - [SubspaceProductApi.V1ListSessionsResponse](docs/V1ListSessionsResponse.md)
 - [SubspaceProductApi.V1ListSipTeleportResponse](docs/V1ListSipTeleportResponse.md)
 - [SubspaceProductApi.V1NextPage](docs/V1NextPage.md)
 - [SubspaceProductApi.V1Project](docs/V1Project.md)
 - [SubspaceProductApi.V1Session](docs/V1Session.md)
 - [SubspaceProductApi.V1SipTeleportResponse](docs/V1SipTeleportResponse.md)
 - [SubspaceProductApi.V1SipTeleportStatus](docs/V1SipTeleportStatus.md)
 - [SubspaceProductApi.V1TeleportAddresses](docs/V1TeleportAddresses.md)
 - [SubspaceProductApi.V1TransportType](docs/V1TransportType.md)
 - [SubspaceProductApi.V1UpdateSipTeleport](docs/V1UpdateSipTeleport.md)


## Documentation for Authorization



### accessCode


- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: 
  - accelerators:read: allows reading details about provisioned PacketAccelerators
  - accelerators:write: allows administration of PacketAccelerators
  - console:access: allows access to the console
  - sipteleport:read: allows reading details about provisioned SIPTeleport
  - sipteleport:write: allows administration of SIPTeleport
  - sessions:read: allows reading details about PacketAccelerator sessions
  - projects:read: allows reading details about projects
  - projects:write: allows administration of projects
  - globalturn:access: allows administration of GlobalTurn
  - rtpspeed:read: allows reading details about rtpspeed
  - rtpspeed:write: allows administration of rtpspeed

